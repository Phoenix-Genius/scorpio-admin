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

// ----------------------------------------------------------------------

const columns = [
  {
    field: 'id',
    width: 50,
    headerName: '',
    align: 'center',
    headerAlign: 'center'
  },
  {
    field: 'user',
    width: 120,
    headerName: 'Users',
    align: 'center',
    headerAlign: 'center',
  },
  {
    field: 'parent',
    headerName: 'Parent',
    width: 120,
    align: 'center',
    headerAlign: 'center',
    renderCell: params => (
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", height: 1 }}>
        <Typography variant="subtitle2">{params.row.parent.name}</Typography>
        <Typography variant="subtitle2" color="textDisabled">@{params.row.parent.loginId}</Typography>
      </Box>
    )
  },
  {
    field: 'provider',
    headerName: 'Provider',
    width: 120,
    align: 'center',
    headerAlign: 'center',
  },
  {
    field: 'gameName',
    headerName: 'Game Name',
    width: 120,
    align: 'center',
    headerAlign: 'center',
  },
  {
    field: 'betting',
    headerName: 'Betting',
    width: 80,
    align: 'center',
    headerAlign: 'center',
    renderCell: params => (
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", height: 1 }}>
        <Typography>{formatNumber(params.row.betting)} <i className="fa fa-try"></i></Typography>
      </Box>
    )
  },
  {
    field: 'win',
    headerName: 'win',
    width: 80,
    align: 'center',
    headerAlign: 'center',
    renderCell: params => (
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", height: 1 }}>
        <Typography>{formatNumber(params.row.win)} <i className="fa fa-try"></i></Typography>
      </Box>
    )
  },
  {
    field: 'bonusCall',
    headerName: 'Bonus Call',
    width: 50,
    align: 'center',
    headerAlign: 'center',
    renderCell: params => (
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", height: 1 }}>
        <Typography>{formatNumber(params.row.bonusCall)} <i className="fa fa-try"></i></Typography>
      </Box>
    )
  },
  {
    field: 'startTime',
    headerName: 'Start Time',
    width: 150,
    align: 'center',
    headerAlign: 'center',
    renderCell: params => `${params.row.startTime.slice(0, 10)} ${params.row.startTime.slice(11, 19)}`
  },
  {
    field: 'endTime',
    headerName: 'End Time',
    width: 150,
    align: 'center',
    headerAlign: 'center',
    renderCell: params => `${params.row.startTime.slice(0, 10)} ${params.row.startTime.slice(11, 19)}`
  },
  {
    field: 'functions',
    headerName: 'Functions',
    width: 150,
    align: 'center',
    headerAlign: 'center',
    renderCell: params => (
      <Button variant="contained" size="small" color="info">Transaction</Button>
    )
  },
];

const agents = ["@baalbet", "CQ9", "Habanero", "JiLi", "DreamGaming", "Asia Gaming"];
const providers = ["Total", "CQ9", "Habanero", "JiLi", "DreamGaming", "Asia Gaming"];

const gameHistory = [
  { id: 1, user: "1277870", parent: { name: "sub_partner2", loginId: "subpartner2" }, provider: "pragmatic play", gameName: "Lusky's Wild Pub", betting: 0.25, win: 0.5, bonusCall: 0, startTime: "2025-01-09T00:47:37", endTime: "2025-01-09T00:47:37" },
  { id: 2, user: "1277870", parent: { name: "sub_partner2", loginId: "subpartner2" }, provider: "CQ9", gameName: "Big Bass Dice", betting: 0.25, win: 0.5, bonusCall: 0, startTime: "2025-01-09T00:47:37", endTime: "2025-01-09T00:47:37" },
  { id: 3, user: "1277870", parent: { name: "sub_partner2", loginId: "subpartner2" }, provider: "Pocket Games Soft", gameName: "The Dog House", betting: 0.25, win: 0.5, bonusCall: 0, startTime: "2025-01-09T00:47:37", endTime: "2025-01-09T00:47:37" },
  { id: 4, user: "1277870", parent: { name: "sub_partner2", loginId: "subpartner2" }, provider: "Booongo", gameName: "Wild Wild Jocker", betting: 0.25, win: 0.5, bonusCall: 0, startTime: "2025-01-09T00:47:37", endTime: "2025-01-09T00:47:37" },
  { id: 5, user: "1277870", parent: { name: "sub_partner2", loginId: "subpartner2" }, provider: "CQ9", gameName: "Lusky's Wild Pub", betting: 0.25, win: 0.5, bonusCall: 0, startTime: "2025-01-09T00:47:37", endTime: "2025-01-09T00:47:37" }
]

export function Games() {
  const [startValue, setStartValue] = useState(dayjs(new Date()));
  const [endValue, setEndValue] = useState(dayjs(new Date()));
  const [provider, setProvider] = useState("Total")
  const handleChangeProvider = useCallback((event) => {
    setProvider(event.target.value);
  }, []);
  const [agent, setAgent] = useState("@baalbet")
  const handleChangeAgent = useCallback((event) => {
    setAgent(event.target.value);
  }, []);
  return (
    <DashboardContent maxWidth="xl">
      <PageTitle>Game History</PageTitle>
      <Block title="Search" footerAction={<Button fullWidth variant="contained" color="success">Search</Button>}>
        <Grid container sx={{ backgroundColor: "rgba(0,0,0,.3)" }}>
          <Grid size={4} sx={{ display: "flex", alignItems: "center", borderRight: "1px solid #333", borderBottom: "1px solid #333", p: 1 }}>
            <Typography variant="subtitle1">Corresponding Agent</Typography>
          </Grid>
          <Grid size={8} sx={{ p: 1, borderBottom: "1px solid #333" }}>
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
          <Grid size={4} sx={{ display: "flex", alignItems: "center", borderRight: "1px solid #333", borderBottom: "1px solid #333", p: 1 }}>
            <Typography variant="subtitle1">Provider</Typography>
          </Grid>
          <Grid size={8} sx={{ p: 1, borderBottom: "1px solid #333" }}>
            <TextField fullWidth select value={provider} onChange={handleChangeProvider} size="small">
              <MenuItem key={-1} value="total">Total</MenuItem>
              {providers.map((item, index) => <MenuItem key={index} value={item}>{item}</MenuItem>)}
            </TextField>
          </Grid>
          <Grid size={4} sx={{ display: "flex", alignItems: "center", borderRight: "1px solid #333", borderBottom: "1px solid #333", p: 1 }}>
            <Typography variant="subtitle1">Period (start - end)</Typography>
          </Grid>
          <Grid size={8} sx={{ p: 1, gap: 5, borderBottom: "1px solid #333", display: "flex" }}>
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
          <Grid size={4} sx={{ display: "flex", alignItems: "center", borderRight: "1px solid #333", borderBottom: "1px solid #333", p: 1 }}>
            <Typography variant="subtitle1">User Name</Typography>
          </Grid>
          <Grid size={8} sx={{ p: 1, borderBottom: "1px solid #333" }}>
            <TextField fullWidth size="small" placeholder="User Name" />
          </Grid>
          <Grid size={4} sx={{ display: "flex", alignItems: "center", borderRight: "1px solid #333", borderBottom: "1px solid #333", p: 1 }}>
            <Typography variant="subtitle1">Game Name</Typography>
          </Grid>
          <Grid size={8} sx={{ p: 1, borderBottom: "1px solid #333" }}>
            <TextField fullWidth size="small" placeholder="Game Name" />
          </Grid>
        </Grid>
      </Block>

      <Block title={`Game History (Total ${gameHistory.length})`}>
        <DataGrid
          rows={gameHistory}
          columns={columns}
          initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
          pageSizeOptions={[5, 10, 20]}
        />
      </Block>
    </DashboardContent>
  )
}
