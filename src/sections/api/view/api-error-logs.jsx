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
import { _api_error_logs } from 'src/_mock';

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
        title={`API Error Logs (Total:${_api_error_logs.length})`}
      >
        <DataGrid
          rows={_api_error_logs}
          columns={columns}
          initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
          pageSizeOptions={[5, 10, 20]}
        />
      </Block>
    </DashboardContent>
  )
}
