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
import { formatNumber } from "src/utils/format-number";
import { _statistic_user } from "src/_mock";

// ----------------------------------------------------------------------

const columns = [
  {
    field: 'id',
    width: 200,
    headerName: 'Users',
    align: 'center',
    headerAlign: 'center',
    renderCell: params => `#${params.row.id}`
  },
  {
    field: 'parent',
    width: 200,
    headerName: 'Parent',
    align: 'center',
    headerAlign: 'center',
    renderCell: params => (
      <Box>
        <Typography variant="subtitle2">{params.row.parent.name}</Typography>
        <Typography variant="subtitle2" color="textDisabled">{params.row.parent.loginId}</Typography>
      </Box>
    )
  },
  {
    field: 'betting',
    headerName: 'Betting',
    width: 200,
    align: 'center',
    headerAlign: 'center',
    renderCell: params => (
      <Box>
        <Typography variant="subtitle2">{formatNumber(params.row.betting.prev)} <i className="fa fa-try"></i></Typography>
        <Typography variant="subtitle2" color="yellow">{formatNumber(params.row.betting.curr)} <i className="fa fa-try"></i></Typography>
      </Box>
    )
  },
  {
    field: 'win',
    headerName: 'Win',
    width: 200,
    align: 'center',
    headerAlign: 'center',
    renderCell: params => (
      <Box>
        <Typography variant="subtitle2">{formatNumber(params.row.win.prev)} <i className="fa fa-try"></i></Typography>
        <Typography variant="subtitle2" color="yellow">{formatNumber(params.row.win.curr)} <i className="fa fa-try"></i></Typography>
      </Box>
    )
  },
  {
    field: 'profit',
    headerName: 'Profit',
    width: 200,
    align: 'center',
    headerAlign: 'center',
    renderCell: params => (
      <Box>
        <Typography variant="subtitle2">{formatNumber(params.row.profit.prev)} <i className="fa fa-try"></i></Typography>
        <Typography variant="subtitle2" color="yellow">{formatNumber(params.row.profit.curr)} <i className="fa fa-try"></i></Typography>
      </Box>
    )
  },

  {
    field: 'bonusCall',
    headerName: 'Bonus Call',
    width: 200,
    align: 'center',
    headerAlign: 'center',
    renderCell: params => (
      <Box>
        <Typography>{params.row.bonusCall}</Typography>
        {/* <EditIcon /> */}
      </Box>
    )
  },
];

const providers = ["@baalbet", "CQ9", "Habanero", "JiLi", "DreamGaming", "Asia Gaming"]


export function StatisticsPerUser() {
  const [provider, setProvider] = useState("@baalbet")
  const handleChangeProvider = useCallback((event) => {
    setProvider(event.target.value);
  }, []);
  const [startValue, setStartValue] = useState(dayjs(new Date()));
  const [endValue, setEndValue] = useState(dayjs(new Date()));

  return (
    <DashboardContent maxWidth="xl">
      <PageTitle>Stats Per User</PageTitle>
      <Block title="Search" footerAction={<Button fullWidth variant="contained" color="success">Search</Button>}>
        <Grid container sx={{ backgroundColor: "rgba(0,0,0,.3)" }}>
          <Grid size={4} sx={{ display: "flex", alignItems: "center", borderRight: "1px solid #333", borderBottom: "1px solid #333", p: 2 }}>
            <Typography variant="subtitle1">Parent Agent</Typography>
          </Grid>
          <Grid size={8} sx={{ p: 2, borderBottom: "1px solid #333" }}>
            <TextField fullWidth select value={provider} onChange={handleChangeProvider} size="small">
              <MenuItem key={-1} value="@baalbet">Baalbet</MenuItem>
              {providers.map((item, index) => <MenuItem key={index} value={item}>{item}</MenuItem>)}
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
            <Typography variant="subtitle1">User Name</Typography>
          </Grid>
          <Grid size={8} sx={{ p: 2, borderBottom: "1px solid #333" }}>
            <TextField fullWidth size="small" placeholder="User Name" />
          </Grid>
        </Grid>
      </Block>

      <Block title={`Stats Per User (Total:${_statistic_user.length})`}>
        <DataGrid
          rows={_statistic_user}
          columns={columns}
          initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
          pageSizeOptions={[5, 10, 20]}
        />
      </Block>
    </DashboardContent>
  )
}
