"use client"

import { useCallback, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { MobileDateTimePicker } from "@mui/x-date-pickers";

import { Label } from 'src/components/label';
import { Button, Checkbox, FormControlLabel, MenuItem, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { DashboardContent } from 'src/layouts/dashboard/content';
import { PageTitle } from 'src/components/page-title/page-title';
import { Block } from 'src/components/block';
import dayjs from 'dayjs';
import { LocalizationProvider } from 'src/locales';

// ----------------------------------------------------------------------

const columns = [
  {
    field: 'id',
    headerName: '',
    align: 'center',
    headerAlign: 'center'
  },
  {
    field: 'type',
    headerName: 'Type',
    width: 100,
    align: 'center',
    headerAlign: 'center',
    renderCell: params =>
      params.row.type == "status" ? (
        <Label color="warning" variant="filled">
          {params.row.type}
        </Label>
      ) : (
        <Label color="error" variant="filled">
          {params.row.type}
        </Label>
      )
  },
  {
    field: 'responseCode',
    width: 100,
    headerName: 'Response Code',
    align: 'center',
    headerAlign: 'center'
  },
  {
    field: 'createdAt',
    headerName: 'Created Date',
    width: 150,
    align: 'center',
    headerAlign: 'center'
  },
  {
    field: 'requestData',
    headerName: 'Request Data',
    width: 300,
    align: 'center',
    headerAlign: 'center',
    renderCell: params => JSON.stringify(params.row.requestData)
  },
  {
    field: 'responseData',
    headerName: 'Response Data',
    width: 300,
    align: 'center',
    headerAlign: 'center',
    renderCell: params => JSON.stringify(params.row.responseData)
  },
  {
    field: 'error',
    headerName: 'Error',
    width: 100,
    align: 'center',
    headerAlign: 'center'
  },

];

const API_ERROR_LOGS = [
  { id: 1, type: "status", responseCode: -1, createdAt: "2025-03-18T08-06-09", requestData: { "command": "win", "data": { "account": "NPL202520720", "trans_id": 36476782 }, "timestamp": "1742252769", "check": "21,42" }, responseData: { "result": 21, "status": "ERROR", "data": { "trans_id": 0, "trans_status": null } }, error: "Required property 'trans_status' expects a value but got null.Path 'data',line 1,position 71." },
  { id: 2, type: "win", responseCode: 99, createdAt: "2025-03-18T08-06-09", requestData: { "command": "status", "data": { "account": "NPL202520720", "trans_id": 36476782, "call_id": 0, "round_id": "52590909339142", "provider_id": 1, "provider_name": "PragmaticPlay", "game_code": "vs20fruitsw", "game_name": "SweetBananza", "game_type": "Slots", "amount": 34.75, "type": 2 }, "timestamp": "1742252769", "check": "21,22,41" }, responseData: { "result": 99, "status": "ERROR", "data": { "balance": 220.64 } }, error: "Error" },
  { id: 3, type: "status", responseCode: -1, createdAt: "2025-03-18T08-06-08", requestData: { "command": "win", "data": { "account": "NPL202520720", "trans_id": 36476782 }, "timestamp": "1742252769", "check": "21,42" }, responseData: { "result": 21, "status": "ERROR", "data": { "trans_id": 0, "trans_status": null } }, error: "Required property 'trans_status' expects a value but got null.Path 'data',line 1,position 71." },
  { id: 4, type: "win", responseCode: 99, createdAt: "2025-03-18T08-06-08", requestData: { "command": "status", "data": { "account": "NPL202520720", "trans_id": 36476782, "call_id": 0, "round_id": "52590909339142", "provider_id": 1, "provider_name": "PragmaticPlay", "game_code": "vs20fruitsw", "game_name": "SweetBananza", "game_type": "Slots", "amount": 34.75, "type": 2 }, "timestamp": "1742252769", "check": "21,22,41" }, responseData: { "result": 99, "status": "ERROR", "data": { "balance": 220.64 } }, error: "Error" },
  { id: 5, type: "status", responseCode: -1, createdAt: "2025-03-18T08-06-07", requestData: { "command": "win", "data": { "account": "NPL202520720", "trans_id": 36476782 }, "timestamp": "1742252769", "check": "21,42" }, responseData: { "result": 21, "status": "ERROR", "data": { "trans_id": 0, "trans_status": null } }, error: "Required property 'trans_status' expects a value but got null.Path 'data',line 1,position 71." },
  { id: 6, type: "win", responseCode: 99, createdAt: "2025-03-18T08-06-07", requestData: { "command": "status", "data": { "account": "NPL202520720", "trans_id": 36476782, "call_id": 0, "round_id": "52590909339142", "provider_id": 1, "provider_name": "PragmaticPlay", "game_code": "vs20fruitsw", "game_name": "SweetBananza", "game_type": "Slots", "amount": 34.75, "type": 2 }, "timestamp": "1742252769", "check": "21,22,41" }, responseData: { "result": 99, "status": "ERROR", "data": { "balance": 220.64 } }, error: "Error" },
  { id: 7, type: "status", responseCode: -1, createdAt: "2025-03-18T08-06-06", requestData: { "command": "win", "data": { "account": "NPL202520720", "trans_id": 36476782 }, "timestamp": "1742252769", "check": "21,42" }, responseData: { "result": 21, "status": "ERROR", "data": { "trans_id": 0, "trans_status": null } }, error: "Required property 'trans_status' expects a value but got null.Path 'data',line 1,position 71." },
  { id: 8, type: "win", responseCode: 99, createdAt: "2025-03-18T08-06-06", requestData: { "command": "status", "data": { "account": "NPL202520720", "trans_id": 36476782, "call_id": 0, "round_id": "52590909339142", "provider_id": 1, "provider_name": "PragmaticPlay", "game_code": "vs20fruitsw", "game_name": "SweetBananza", "game_type": "Slots", "amount": 34.75, "type": 2 }, "timestamp": "1742252769", "check": "21,22,41" }, responseData: { "result": 99, "status": "ERROR", "data": { "balance": 220.64 } }, error: "Error" },
  { id: 9, type: "status", responseCode: -1, createdAt: "2025-03-18T08-06-05", requestData: { "command": "win", "data": { "account": "NPL202520720", "trans_id": 36476782 }, "timestamp": "1742252769", "check": "21,42" }, responseData: { "result": 21, "status": "ERROR", "data": { "trans_id": 0, "trans_status": null } }, error: "Required property 'trans_status' expects a value but got null.Path 'data',line 1,position 71." },
  { id: 10, type: "win", responseCode: 99, createdAt: "2025-03-18T08-06-05", requestData: { "command": "status", "data": { "account": "NPL202520720", "trans_id": 36476782, "call_id": 0, "round_id": "52590909339142", "provider_id": 1, "provider_name": "PragmaticPlay", "game_code": "vs20fruitsw", "game_name": "SweetBananza", "game_type": "Slots", "amount": 34.75, "type": 2 }, "timestamp": "1742252769", "check": "21,22,41" }, responseData: { "result": 99, "status": "ERROR", "data": { "balance": 220.64 } }, error: "Error" },
  { id: 11, type: "status", responseCode: -1, createdAt: "2025-03-18T08-06-04", requestData: { "command": "win", "data": { "account": "NPL202520720", "trans_id": 36476782 }, "timestamp": "1742252769", "check": "21,42" }, responseData: { "result": 21, "status": "ERROR", "data": { "trans_id": 0, "trans_status": null } }, error: "Required property 'trans_status' expects a value but got null.Path 'data',line 1,position 71." },
  { id: 12, type: "win", responseCode: 99, createdAt: "2025-03-18T08-06-04", requestData: { "command": "status", "data": { "account": "NPL202520720", "trans_id": 36476782, "call_id": 0, "round_id": "52590909339142", "provider_id": 1, "provider_name": "PragmaticPlay", "game_code": "vs20fruitsw", "game_name": "SweetBananza", "game_type": "Slots", "amount": 34.75, "type": 2 }, "timestamp": "1742252769", "check": "21,22,41" }, responseData: { "result": 99, "status": "ERROR", "data": { "balance": 220.64 } }, error: "Error" },
  { id: 13, type: "status", responseCode: -1, createdAt: "2025-03-18T08-06-03", requestData: { "command": "win", "data": { "account": "NPL202520720", "trans_id": 36476782 }, "timestamp": "1742252769", "check": "21,42" }, responseData: { "result": 21, "status": "ERROR", "data": { "trans_id": 0, "trans_status": null } }, error: "Required property 'trans_status' expects a value but got null.Path 'data',line 1,position 71." },
  { id: 14, type: "win", responseCode: 99, createdAt: "2025-03-18T08-06-03", requestData: { "command": "status", "data": { "account": "NPL202520720", "trans_id": 36476782, "call_id": 0, "round_id": "52590909339142", "provider_id": 1, "provider_name": "PragmaticPlay", "game_code": "vs20fruitsw", "game_name": "SweetBananza", "game_type": "Slots", "amount": 34.75, "type": 2 }, "timestamp": "1742252769", "check": "21,22,41" }, responseData: { "result": 99, "status": "ERROR", "data": { "balance": 220.64 } }, error: "Error" },
  { id: 15, type: "status", responseCode: -1, createdAt: "2025-03-18T08-06-02", requestData: { "command": "win", "data": { "account": "NPL202520720", "trans_id": 36476782 }, "timestamp": "1742252769", "check": "21,42" }, responseData: { "result": 21, "status": "ERROR", "data": { "trans_id": 0, "trans_status": null } }, error: "Required property 'trans_status' expects a value but got null.Path 'data',line 1,position 71." },
  { id: 16, type: "win", responseCode: 99, createdAt: "2025-03-18T08-06-02", requestData: { "command": "status", "data": { "account": "NPL202520720", "trans_id": 36476782, "call_id": 0, "round_id": "52590909339142", "provider_id": 1, "provider_name": "PragmaticPlay", "game_code": "vs20fruitsw", "game_name": "SweetBananza", "game_type": "Slots", "amount": 34.75, "type": 2 }, "timestamp": "1742252769", "check": "21,22,41" }, responseData: { "result": 99, "status": "ERROR", "data": { "balance": 220.64 } }, error: "Error" },
  { id: 17, type: "status", responseCode: -1, createdAt: "2025-03-18T08-06-01", requestData: { "command": "win", "data": { "account": "NPL202520720", "trans_id": 36476782 }, "timestamp": "1742252769", "check": "21,42" }, responseData: { "result": 21, "status": "ERROR", "data": { "trans_id": 0, "trans_status": null } }, error: "Required property 'trans_status' expects a value but got null.Path 'data',line 1,position 71." },
  { id: 18, type: "win", responseCode: 99, createdAt: "2025-03-18T08-06-01", requestData: { "command": "status", "data": { "account": "NPL202520720", "trans_id": 36476782, "call_id": 0, "round_id": "52590909339142", "provider_id": 1, "provider_name": "PragmaticPlay", "game_code": "vs20fruitsw", "game_name": "SweetBananza", "game_type": "Slots", "amount": 34.75, "type": 2 }, "timestamp": "1742252769", "check": "21,22,41" }, responseData: { "result": 99, "status": "ERROR", "data": { "balance": 220.64 } }, error: "Error" },
  { id: 19, type: "status", responseCode: -1, createdAt: "2025-03-18T08-05-59", requestData: { "command": "win", "data": { "account": "NPL202520720", "trans_id": 36476782 }, "timestamp": "1742252769", "check": "21,42" }, responseData: { "result": 21, "status": "ERROR", "data": { "trans_id": 0, "trans_status": null } }, error: "Required property 'trans_status' expects a value but got null.Path 'data',line 1,position 71." },
  { id: 20, type: "win", responseCode: 99, createdAt: "2025-03-18T08-05-59", requestData: { "command": "status", "data": { "account": "NPL202520720", "trans_id": 36476782, "call_id": 0, "round_id": "52590909339142", "provider_id": 1, "provider_name": "PragmaticPlay", "game_code": "vs20fruitsw", "game_name": "SweetBananza", "game_type": "Slots", "amount": 34.75, "type": 2 }, "timestamp": "1742252769", "check": "21,22,41" }, responseData: { "result": 99, "status": "ERROR", "data": { "balance": 220.64 } }, error: "Error" },
  { id: 21, type: "status", responseCode: -1, createdAt: "2025-03-18T08-05-58", requestData: { "command": "win", "data": { "account": "NPL202520720", "trans_id": 36476782 }, "timestamp": "1742252769", "check": "21,42" }, responseData: { "result": 21, "status": "ERROR", "data": { "trans_id": 0, "trans_status": null } }, error: "Required property 'trans_status' expects a value but got null.Path 'data',line 1,position 71." },
  { id: 22, type: "win", responseCode: 99, createdAt: "2025-03-18T08-05-58", requestData: { "command": "status", "data": { "account": "NPL202520720", "trans_id": 36476782, "call_id": 0, "round_id": "52590909339142", "provider_id": 1, "provider_name": "PragmaticPlay", "game_code": "vs20fruitsw", "game_name": "SweetBananza", "game_type": "Slots", "amount": 34.75, "type": 2 }, "timestamp": "1742252769", "check": "21,22,41" }, responseData: { "result": 99, "status": "ERROR", "data": { "balance": 220.64 } }, error: "Error" },
  { id: 23, type: "status", responseCode: -1, createdAt: "2025-03-18T08-05-57", requestData: { "command": "win", "data": { "account": "NPL202520720", "trans_id": 36476782 }, "timestamp": "1742252769", "check": "21,42" }, responseData: { "result": 21, "status": "ERROR", "data": { "trans_id": 0, "trans_status": null } }, error: "Required property 'trans_status' expects a value but got null.Path 'data',line 1,position 71." },
  { id: 24, type: "win", responseCode: 99, createdAt: "2025-03-18T08-05-57", requestData: { "command": "status", "data": { "account": "NPL202520720", "trans_id": 36476782, "call_id": 0, "round_id": "52590909339142", "provider_id": 1, "provider_name": "PragmaticPlay", "game_code": "vs20fruitsw", "game_name": "SweetBananza", "game_type": "Slots", "amount": 34.75, "type": 2 }, "timestamp": "1742252769", "check": "21,22,41" }, responseData: { "result": 99, "status": "ERROR", "data": { "balance": 220.64 } }, error: "Error" },
  { id: 25, type: "status", responseCode: -1, createdAt: "2025-03-18T08-05-56", requestData: { "command": "win", "data": { "account": "NPL202520720", "trans_id": 36476782 }, "timestamp": "1742252769", "check": "21,42" }, responseData: { "result": 21, "status": "ERROR", "data": { "trans_id": 0, "trans_status": null } }, error: "Required property 'trans_status' expects a value but got null.Path 'data',line 1,position 71." },
  { id: 26, type: "win", responseCode: 99, createdAt: "2025-03-18T08-05-56", requestData: { "command": "status", "data": { "account": "NPL202520720", "trans_id": 36476782, "call_id": 0, "round_id": "52590909339142", "provider_id": 1, "provider_name": "PragmaticPlay", "game_code": "vs20fruitsw", "game_name": "SweetBananza", "game_type": "Slots", "amount": 34.75, "type": 2 }, "timestamp": "1742252769", "check": "21,22,41" }, responseData: { "result": 99, "status": "ERROR", "data": { "balance": 220.64 } }, error: "Error" },
  { id: 27, type: "status", responseCode: -1, createdAt: "2025-03-18T08-05-55", requestData: { "command": "win", "data": { "account": "NPL202520720", "trans_id": 36476782 }, "timestamp": "1742252769", "check": "21,42" }, responseData: { "result": 21, "status": "ERROR", "data": { "trans_id": 0, "trans_status": null } }, error: "Required property 'trans_status' expects a value but got null.Path 'data',line 1,position 71." },
  { id: 28, type: "win", responseCode: 99, createdAt: "2025-03-18T08-05-55", requestData: { "command": "status", "data": { "account": "NPL202520720", "trans_id": 36476782, "call_id": 0, "round_id": "52590909339142", "provider_id": 1, "provider_name": "PragmaticPlay", "game_code": "vs20fruitsw", "game_name": "SweetBananza", "game_type": "Slots", "amount": 34.75, "type": 2 }, "timestamp": "1742252769", "check": "21,22,41" }, responseData: { "result": 99, "status": "ERROR", "data": { "balance": 220.64 } }, error: "Error" },
  { id: 29, type: "status", responseCode: -1, createdAt: "2025-03-18T08-05-54", requestData: { "command": "win", "data": { "account": "NPL202520720", "trans_id": 36476782 }, "timestamp": "1742252769", "check": "21,42" }, responseData: { "result": 21, "status": "ERROR", "data": { "trans_id": 0, "trans_status": null } }, error: "Required property 'trans_status' expects a value but got null.Path 'data',line 1,position 71." },
  { id: 30, type: "win", responseCode: 99, createdAt: "2025-03-18T08-05-54", requestData: { "command": "status", "data": { "account": "NPL202520720", "trans_id": 36476782, "call_id": 0, "round_id": "52590909339142", "provider_id": 1, "provider_name": "PragmaticPlay", "game_code": "vs20fruitsw", "game_name": "SweetBananza", "game_type": "Slots", "amount": 34.75, "type": 2 }, "timestamp": "1742252769", "check": "21,22,41" }, responseData: { "result": 99, "status": "ERROR", "data": { "balance": 220.64 } }, error: "Error" },
  { id: 31, type: "status", responseCode: -1, createdAt: "2025-03-18T08-05-53", requestData: { "command": "win", "data": { "account": "NPL202520720", "trans_id": 36476782 }, "timestamp": "1742252769", "check": "21,42" }, responseData: { "result": 21, "status": "ERROR", "data": { "trans_id": 0, "trans_status": null } }, error: "Required property 'trans_status' expects a value but got null.Path 'data',line 1,position 71." },
  { id: 32, type: "win", responseCode: 99, createdAt: "2025-03-18T08-05-53", requestData: { "command": "status", "data": { "account": "NPL202520720", "trans_id": 36476782, "call_id": 0, "round_id": "52590909339142", "provider_id": 1, "provider_name": "PragmaticPlay", "game_code": "vs20fruitsw", "game_name": "SweetBananza", "game_type": "Slots", "amount": 34.75, "type": 2 }, "timestamp": "1742252769", "check": "21,22,41" }, responseData: { "result": 99, "status": "ERROR", "data": { "balance": 220.64 } }, error: "Error" },
]

const agents = ["@baalbet", "CQ9", "Habanero", "JiLi", "DreamGaming", "Asia Gaming"];

export function ApiErrorLogs() {
  const [startValue, setStartValue] = useState(dayjs(new Date()));
  const [endValue, setEndValue] = useState(dayjs(new Date()));
  const [agent, setAgent] = useState("@baalbet")

  const handleChangeAgent = useCallback((event) => {
    setAgent(event.target.value);
  }, []);

  return (
    <DashboardContent maxWidth="xl">
      <PageTitle>API Error Logs</PageTitle>
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
          </Grid>
          <Grid size={4} sx={{ display: "flex", alignItems: "center", borderRight: "1px solid #333", borderBottom: "1px solid #333", p: 2 }}>
            <Typography variant="subtitle1">Created Date (start - end)</Typography>
          </Grid>
          <Grid size={8} sx={{ p: 2, gap: 5, borderBottom: "1px solid #333", display: "flex" }}>
            <LocalizationProvider>
              <Grid size={6}>
                <MobileDateTimePicker
                  orientation="portrait"
                  value={startValue}
                  onChange={(newValue) => setStartValue(newValue)}
                  slotProps={{ textField: { fullWidth: true } }}
                />
              </Grid>
              <Grid size={6}>
                <MobileDateTimePicker
                  orientation="portrait"
                  value={endValue}
                  onChange={(newValue) => setEndValue(newValue)}
                  slotProps={{ textField: { fullWidth: true } }}
                />
              </Grid>
            </LocalizationProvider>
          </Grid>
          <Grid size={4} sx={{ display: "flex", alignItems: "center", borderRight: "1px solid #333", borderBottom: "1px solid #333", p: 2 }}>
            <Typography variant="subtitle1">State</Typography>
          </Grid>
          <Grid size={8} sx={{ p: 2, borderBottom: "1px solid #333" }}>
            <FormControlLabel
              label="authenticate"
              control={
                <Checkbox color="info" size="medium" defaultChecked />
              }
            />
            <FormControlLabel
              label="balance"
              control={
                <Checkbox color="info" size="medium" />
              }
            />
            <FormControlLabel
              label="bet"
              control={
                <Checkbox color="info" size="medium" />
              }
            />
            <FormControlLabel
              label="win"
              control={
                <Checkbox color="info" size="medium" />
              }
            />
            <FormControlLabel
              label="cancel"
              control={
                <Checkbox color="info" size="medium" />
              }
            />
            <FormControlLabel
              label="status"
              control={
                <Checkbox color="info" size="medium" />
              }
            />
          </Grid>
        </Grid>
      </Block>

      <Block
        title={`API Error Logs (Total:${API_ERROR_LOGS.length})`}
      >
        <DataGrid
          rows={API_ERROR_LOGS}
          columns={columns}
          initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
          pageSizeOptions={[5, 10, 20]}
        />
      </Block>
    </DashboardContent>
  )
}
