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

const agents = [{ id: 1, positionId: 36533973, type: "UserWin", amount: 0, prevBalance: 50822500.72, currBalance: 50822500.72, target: { name: "GTR2025197280", loginId: 400201577 }, remarks: "", procDate: "2025-03-19T00:07:21" },
{ id: 2, positionId: 36533972, type: "UserBet", amount: 1, prevBalance: 50822501.72, currBalance: 50822500.72, target: { name: "GTR2025197280", loginId: 400201577 }, remarks: "", procDate: "2025-03-19T00:07:21" },
{ id: 3, positionId: 36533971, type: "UserWin", amount: 0, prevBalance: 50822501.72, currBalance: 50822501.72, target: { name: "VGS2025255643", loginId: 400202638 }, remarks: "", procDate: "2025-03-19T00:07:21" },
{ id: 4, positionId: 36533970, type: "UserWin", amount: 0, prevBalance: 50822501.72, currBalance: 50822501.72, target: { name: "NPL202522502", loginId: 400202630 }, remarks: "", procDate: "2025-03-19T00:07:21" },
{ id: 5, positionId: 36533969, type: "UserBet", amount: 5, prevBalance: 50822506.72, currBalance: 50822501.72, target: { name: "VGS2025255643", loginId: 400202638 }, remarks: "", procDate: "2025-03-19T00:07:21" },
{ id: 6, positionId: 36533968, type: "UserBet", amount: 2, prevBalance: 50822508.72, currBalance: 50822506.72, target: { name: "NPL202522502", loginId: 400202630 }, remarks: "", procDate: "2025-03-19T00:07:21" },
{ id: 7, positionId: 36533967, type: "UserWin", amount: 0, prevBalance: 50822508.72, currBalance: 50822508.72, target: { name: "GTR2025197280", loginId: 400201577 }, remarks: "", procDate: "2025-03-19T00:07:20" },
{ id: 8, positionId: 36533966, type: "UserBet", amount: 1, prevBalance: 50822509.72, currBalance: 50822508.72, target: { name: "GTR2025197280", loginId: 400201577 }, remarks: "", procDate: "2025-03-19T00:07:20" },
{ id: 9, positionId: 36533965, type: "UserWin", amount: 0, prevBalance: 50822509.72, currBalance: 50822509.72, target: { name: "GTR2025197280", loginId: 400201577 }, remarks: "", procDate: "2025-03-19T00:07:19" },
{ id: 10, positionId: 36533964, type: "UserWin", amount: 0, prevBalance: 50822509.72, currBalance: 50822509.72, target: { name: "VGS2025255643", loginId: 400202638 }, remarks: "", procDate: "2025-03-19T00:07:19" },
{ id: 11, positionId: 36533963, type: "DepositToAgent", amount: 0, prevBalance: 50822509.72, currBalance: 50822509.72, target: { name: "VGS2025255643", loginId: 400202638 }, remarks: "", procDate: "2025-03-19T00:07:19" },
{ id: 12, positionId: 36533962, type: "BonusToUser", amount: 1, prevBalance: 50822510.72, currBalance: 50822509.72, target: { name: "NPL202522502", loginId: 400202630 }, remarks: "", procDate: "2025-03-19T00:07:19" },
{ id: 13, positionId: 36533961, type: "BonusToUser", amount: 0, prevBalance: 50822510.72, currBalance: 50822510.72, target: { name: "VGS2025255643", loginId: 400202638 }, remarks: "", procDate: "2025-03-19T00:07:18" },
{ id: 14, positionId: 36533960, type: "BonusToUser", amount: 0, prevBalance: 50822510.72, currBalance: 50822510.72, target: { name: "VGS2025255643", loginId: 400202638 }, remarks: "", procDate: "2025-03-19T00:07:18" },
{ id: 15, positionId: 36533959, type: "UserBetCancel", amount: 3, prevBalance: 50822513.72, currBalance: 50822510.72, target: { name: "GTR2025197280", loginId: 400201577 }, remarks: "", procDate: "2025-03-19T00:07:18" },
{ id: 16, positionId: 36533958, type: "UserBetCancel", amount: 0, prevBalance: 50822513.72, currBalance: 50822513.72, target: { name: "GTR2025197280", loginId: 400201577 }, remarks: "", procDate: "2025-03-19T00:07:17" },
{ id: 17, positionId: 36533957, type: "UserBetCancel", amount: 0, prevBalance: 50822513.72, currBalance: 50822513.72, target: { name: "NPL202522502", loginId: 400202630 }, remarks: "", procDate: "2025-03-19T00:07:17" },
{ id: 18, positionId: 36533956, type: "ReturnBonusFromUser", amount: 1, prevBalance: 50822514.72, currBalance: 50822513.72, target: { name: "NPL202522502", loginId: 400202630 }, remarks: "", procDate: "2025-03-19T00:07:16" },
{ id: 19, positionId: 36533955, type: "ReturnBonusFromUser", amount: 0, prevBalance: 50822514.72, currBalance: 50822514.72, target: { name: "GTR2025197280", loginId: 400201577 }, remarks: "", procDate: "2025-03-19T00:07:16" },
{ id: 20, positionId: 36533954, type: "DepositByParent", amount: 1, prevBalance: 50822515.72, currBalance: 50822514.72, target: { name: "VGS2025255643", loginId: 400202638 }, remarks: "", procDate: "2025-03-19T00:07:16" },
{ id: 21, positionId: 36533953, type: "DepositByParent", amount: 0, prevBalance: 50822515.72, currBalance: 50822515.72, target: { name: "GTR2025197280", loginId: 400201577 }, remarks: "", procDate: "2025-03-19T00:07:16" },
{ id: 22, positionId: 36533952, type: "DepositToUser", amount: 1, prevBalance: 50822516.72, currBalance: 50822515.72, target: { name: "NPL202522502", loginId: 400202630 }, remarks: "", procDate: "2025-03-19T00:07:15" },
{ id: 23, positionId: 36533951, type: "DepositByParent", amount: 0, prevBalance: 50822516.72, currBalance: 50822516.72, target: { name: "GTR2025197280", loginId: 400201577 }, remarks: "", procDate: "2025-03-19T00:07:15" },
{ id: 24, positionId: 36533950, type: "DepositByParent", amount: 0, prevBalance: 50822516.72, currBalance: 50822516.72, target: { name: "GTR2025197280", loginId: 400201577 }, remarks: "", procDate: "2025-03-19T00:07:15" },
{ id: 25, positionId: 36533949, type: "DepositByParent", amount: 0, prevBalance: 50822516.72, currBalance: 50822516.72, target: { name: "VGS2025255643", loginId: 400202638 }, remarks: "", procDate: "2025-03-19T00:07:15" },
{ id: 26, positionId: 36533948, type: "DepositByParent", amount: 0, prevBalance: 50822516.72, currBalance: 50822516.72, target: { name: "NPL202522502", loginId: 400202630 }, remarks: "", procDate: "2025-03-19T00:07:15" },
{ id: 27, positionId: 36533947, type: "DepositByParent", amount: 0, prevBalance: 50822516.72, currBalance: 50822516.72, target: { name: "VGS2025255643", loginId: 400202638 }, remarks: "", procDate: "2025-03-19T00:07:14" },
{ id: 28, positionId: 36533946, type: "DepositByParent", amount: 0, prevBalance: 50822516.72, currBalance: 50822516.72, target: { name: "NPL202522502", loginId: 400202630 }, remarks: "", procDate: "2025-03-19T00:07:14" },
{ id: 29, positionId: 36533945, type: "WirthdrawFromUser", amount: 0, prevBalance: 50822516.72, currBalance: 50822516.72, target: { name: "VGS2025255643", loginId: 400202638 }, remarks: "", procDate: "2025-03-19T00:07:14" },
{ id: 30, positionId: 36533944, type: "WirthdrawFromUser", amount: 1, prevBalance: 50822517.72, currBalance: 50822516.72, target: { name: "NPL202522502", loginId: 400202630 }, remarks: "", procDate: "2025-03-19T00:07:14" }]

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

      <Block title={`Point Transactions (Total ${agents.length})`}>
        <DataGrid
          rows={agents}
          columns={columns}
          initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
          pageSizeOptions={[5, 10, 20]}
        />
      </Block>
    </DashboardContent>
  )
}
