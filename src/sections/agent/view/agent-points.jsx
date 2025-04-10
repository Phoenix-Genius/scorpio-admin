"use client"

import { DataGrid } from "@mui/x-data-grid";
import { Box, Button, Checkbox, FormControlLabel, MenuItem, TextField, Typography } from '@mui/material';
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
import { _agent_points } from "src/_mock";

// ----------------------------------------------------------------------

const columns = [
  {
    field: 'id',
    width: 100,
    headerName: '',
    align: 'center',
    headerAlign: 'center'
  },
  {
    field: 'positionId',
    width: 100,
    headerName: 'ID',
    align: 'center',
    headerAlign: 'center'
  },
  {
    field: 'type',
    headerName: 'Type',
    width: 180,
    align: 'center',
    headerAlign: 'center',
    renderCell: params =>
      params.row.type == "UserWin" ? (
        <Label color="error" variant="filled">
          {params.row.type}
        </Label>
      ) : (
        <Label color="warning" variant="filled">
          {params.row.type}
        </Label>
      )
  },
  {
    field: 'amount',
    headerName: 'Amount',
    width: 100,
    align: 'center',
    headerAlign: 'center',
    renderCell: params => (
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", height: 1 }}>
        <Typography>{formatNumber(params.row.amount)} <i className="fa fa-try"></i></Typography>
      </Box>
    )
  },
  {
    field: 'prevBalance',
    headerName: 'Prev.Balance',
    width: 150,
    align: 'center',
    headerAlign: 'center',
    renderCell: params => (
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", height: 1 }}>
        <Typography>{formatNumber(params.row.prevBalance)} <i className="fa fa-try"></i></Typography>
      </Box>
    )
  },
  {
    field: 'currBalance',
    headerName: 'Current Balance',
    width: 150,
    align: 'center',
    headerAlign: 'center',
    renderCell: params => (
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", height: 1 }}>
        <Typography>{formatNumber(params.row.currBalance)} <i className="fa fa-try"></i></Typography>
      </Box>
    )
  },
  {
    field: 'target',
    width: 200,
    headerName: 'Target',
    align: 'center',
    headerAlign: 'center',
    renderCell: params => (
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", height: 1 }}>
        <Typography variant="subtitle2">User:{params.row.target.name}</Typography>
        <Typography variant="subtitle2" color="textDisabled">(@{params.row.target.loginId})</Typography>
      </Box>
    )
  },
  {
    field: 'remarks',
    width: 120,
    headerName: 'Remarks',
    align: 'center',
    headerAlign: 'center'
  },
  {
    field: 'procDate',
    headerName: 'ProcDate',
    width: 250,
    align: 'center',
    headerAlign: 'center',
    renderCell: params => `${params.row.procDate.slice(0, 10)} ${params.row.procDate.slice(11, 19)}`
  }
];

const providers = ["@baalbet", "CQ9", "Habanero", "JiLi", "DreamGaming", "Asia Gaming"]

export function AgentPoints() {
  const [provider, setProvider] = useState("@baalbet")
  const handleChangeProvider = useCallback((event) => {
    setProvider(event.target.value);
  }, []);
  const [startValue, setStartValue] = useState(dayjs(new Date()));
  const [endValue, setEndValue] = useState(dayjs(new Date()));

  return (
    <DashboardContent maxWidth="xl">
      <PageTitle>Point Transactions</PageTitle>
      <Block title="Search" footerAction={<Button fullWidth variant="contained" color="success">Search</Button>}>
        <Grid container sx={{ backgroundColor: "rgba(0,0,0,.3)" }}>
          <Grid size={4} sx={{ display: "flex", alignItems: "center", borderRight: "1px solid #333", borderBottom: "1px solid #333", p: 2 }}>
            <Typography variant="subtitle1">Corresponding Agent</Typography>
          </Grid>
          <Grid size={8} sx={{ p: 2, borderBottom: "1px solid #333" }}>
            <TextField fullWidth select value={provider} onChange={handleChangeProvider} size="small">
              <MenuItem key={-1} value="@baalbet">Baalbet</MenuItem>
              {providers.map((item, index) => <MenuItem key={index} value={item}>{item}</MenuItem>)}
            </TextField>
          </Grid>
          <Grid size={4} sx={{ display: "flex", alignItems: "center", borderRight: "1px solid #333", borderBottom: "1px solid #333", p: 2 }}>
            <Typography variant="subtitle1">Period (start - end)</Typography>
          </Grid>
          <Grid size={8} sx={{ p: 2, gap: 3, borderBottom: "1px solid #333", display: "flex" }}>
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
            <Typography variant="subtitle1">Type</Typography>
          </Grid>
          <Grid size={8} sx={{ p: 2, borderBottom: "1px solid #333" }}>
            <FormControlLabel
              label="Deposit To Agent"
              control={
                <Checkbox color="info" size="small" defaultChecked sx={{ py: 0, pr: 0.5 }} />
              }
            />
            <FormControlLabel
              label="Withdraw From Agent"
              sx={{ height: 10 }}
              size="small"
              control={
                <Checkbox color="info" size="small" defaultChecked sx={{ py: 0, pr: 0.5 }} />
              }
            />
            <FormControlLabel
              label="Deposit By Parent"
              control={
                <Checkbox color="info" size="small" defaultChecked sx={{ py: 0, pr: 0.5 }} />
              }
            />
            <FormControlLabel
              label="Wirthdraw By Parent"
              control={
                <Checkbox color="info" size="small" defaultChecked sx={{ py: 0, pr: 0.5 }} />
              }
            />
            <FormControlLabel
              label="Deposit To User"
              control={
                <Checkbox color="info" size="small" defaultChecked sx={{ py: 0, pr: 0.5 }} />
              }
            />
            <FormControlLabel
              label="Wirthdraw From User"
              control={
                <Checkbox color="info" size="small" defaultChecked sx={{ py: 0, pr: 0.5 }} />
              }
            />
            <FormControlLabel
              label="UserBet"
              control={
                <Checkbox color="info" size="small" defaultChecked sx={{ py: 0, pr: 0.5 }} />
              }
            />
            <FormControlLabel
              label="UserWin"
              control={
                <Checkbox color="info" size="small" defaultChecked sx={{ py: 0, pr: 0.5 }} />
              }
            />
            <FormControlLabel
              label="User Bet Cancel"
              control={
                <Checkbox color="info" size="small" defaultChecked sx={{ py: 0, pr: 0.5 }} />
              }
            />
            <FormControlLabel
              label="Bouns To User"
              control={
                <Checkbox color="info" size="small" defaultChecked sx={{ py: 0, pr: 0.5 }} />
              }
            />
            <FormControlLabel
              label="Return Bonus From User"
              control={
                <Checkbox color="info" size="small" defaultChecked sx={{ py: 0, pr: 0.5 }} />
              }
            />
          </Grid>
        </Grid>
      </Block>

      <Block title={`Point Transactions (Total ${_agent_points.length})`}>
        <DataGrid
          rows={_agent_points}
          columns={columns}
          initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
          pageSizeOptions={[5, 10, 20]}
        />
      </Block>
    </DashboardContent>
  )
}
