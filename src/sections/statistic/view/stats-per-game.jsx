"use client"

import { DataGrid } from "@mui/x-data-grid";
import { Box, Button, Checkbox, FormControlLabel, MenuItem, Switch, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Label } from 'src/components/label';
import { DashboardContent } from 'src/layouts/dashboard/content';
import { PageTitle } from 'src/components/page-title/page-title';
import { Block } from 'src/components/block';
import { useCallback, useState } from "react";
import { MobileDatePicker } from "@mui/x-date-pickers";
import dayjs from 'dayjs';
import { LocalizationProvider } from 'src/locales';
import { _statistic_game } from "src/_mock";

// ----------------------------------------------------------------------

const columns = [
  {
    field: 'provider',
    width: 150,
    headerName: 'Provider',
    align: 'center',
    headerAlign: 'center'
  },
  {
    field: 'gameName',
    width: 150,
    headerName: 'Game Name',
    align: 'center',
    headerAlign: 'center'
  },
  {
    field: 'symbol',
    width: 150,
    headerName: 'Symbol',
    align: 'center',
    headerAlign: 'center'
  },
  {
    field: 'betting',
    headerName: 'Betting',
    width: 150,
    align: 'center',
    headerAlign: 'center'
  },
  {
    field: 'win',
    headerName: 'Win',
    width: 150,
    align: 'center',
    headerAlign: 'center'
  },
  {
    field: 'profit',
    headerName: 'Profit',
    width: 150,
    align: 'center',
    headerAlign: 'center'
  },

  {
    field: 'bonusCall',
    headerName: 'Bonus Call',
    width: 100,
    align: 'center',
    headerAlign: 'center'
  },
];

const agents = ["@baalbet", "CQ9", "Habanero", "JiLi", "DreamGaming", "Asia Gaming"];
const providers = ["Total", "CQ9", "Habanero", "JiLi", "DreamGaming", "Asia Gaming"];


export function StatisticsPerGame() {
  const [provider, setProvider] = useState("Total")
  const handleChangeProvider = useCallback((event) => {
    setProvider(event.target.value);
  }, []);
  const [agent, setAgent] = useState("@baalbet")
  const handleChangeAgent = useCallback((event) => {
    setAgent(event.target.value);
  }, []);
  const [startValue, setStartValue] = useState(dayjs(new Date()));
  const [endValue, setEndValue] = useState(dayjs(new Date()));

  return (
    <DashboardContent maxWidth="xl">
      <PageTitle>Stats Per Game</PageTitle>
      <Block title="Search" footerAction={<Button fullWidth variant="contained" color="success">Search</Button>}>
        <Grid container sx={{ backgroundColor: "rgba(0,0,0,.3)" }}>
          <Grid size={4} sx={{ display: "flex", alignItems: "center", borderRight: "1px solid #333", borderBottom: "1px solid #333", p: 2 }}>
            <Typography variant="subtitle1">Corresponding Agent</Typography>
          </Grid>
          <Grid size={8} sx={{ p: 2, borderBottom: "1px solid #333" }}>
            <TextField fullWidth select value={agent} onChange={handleChangeAgent} size="small">
              <MenuItem key={-1} value="@baalbet">@tiger</MenuItem>
              {agents.map((item, index) => <MenuItem key={index} value={item}>{item}</MenuItem>)}
            </TextField>
            <FormControlLabel
              label="Whether or not sub-agent is included in search"
              control={
                <Checkbox color="info" size="medium" defaultChecked />
              }
            />
          </Grid>
          <Grid size={4} sx={{ display: "flex", alignItems: "center", borderRight: "1px solid #333", borderBottom: "1px solid #333", p: 2 }}>
            <Typography variant="subtitle1">Period (start - end)</Typography>
          </Grid>
          <Grid size={8} sx={{ p: 2, gap: 5, borderBottom: "1px solid #333", display: "flex" }}>
            <LocalizationProvider>
              <Grid size={6}>
                <MobileDatePicker
                  orientation="portrait"
                  value={startValue}
                  onChange={(newValue) => setStartValue(newValue)}
                  slotProps={{ textField: { fullWidth: true } }}
                />
              </Grid>
              <Grid size={6}>
                <MobileDatePicker
                  orientation="portrait"
                  value={endValue}
                  onChange={(newValue) => setEndValue(newValue)}
                  slotProps={{ textField: { fullWidth: true } }}
                />
              </Grid>
            </LocalizationProvider>
          </Grid>
          <Grid size={4} sx={{ display: "flex", alignItems: "center", borderRight: "1px solid #333", borderBottom: "1px solid #333", p: 2 }}>
            <Typography variant="subtitle1">Provider</Typography>
          </Grid>
          <Grid size={8} sx={{ p: 2, borderBottom: "1px solid #333" }}>
            <TextField fullWidth select value={provider} onChange={handleChangeProvider} size="small">
              <MenuItem key={-1} value="total">Total</MenuItem>
              {providers.map((item, index) => <MenuItem key={index} value={item}>{item}</MenuItem>)}
            </TextField>
          </Grid>
          <Grid size={4} sx={{ display: "flex", alignItems: "center", borderRight: "1px solid #333", borderBottom: "1px solid #333", p: 2 }}>
            <Typography variant="subtitle1">Game Name/Symbol</Typography>
          </Grid>
          <Grid size={8} sx={{ p: 2, borderBottom: "1px solid #333" }}>
            <TextField fullWidth size="small" placeholder="Game Name/Symbol" />
          </Grid>
        </Grid>
      </Block>

      <Block title={`Stats Per Game (Total:${_statistic_game.length})`}>
        <DataGrid
          rows={_statistic_game}
          columns={columns}
          initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
          pageSizeOptions={[5, 10, 20]}
        />
      </Block>
    </DashboardContent>
  )
}
