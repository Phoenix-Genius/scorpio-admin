"use client"

import { useCallback, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { MobileDateTimePicker } from "@mui/x-date-pickers";

import { Button, MenuItem, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { DashboardContent } from 'src/layouts/dashboard/content';
import { PageTitle } from 'src/components/page-title/page-title';
import { Block } from 'src/components/block';
import dayjs from 'dayjs';
import { LocalizationProvider } from 'src/locales';

// ----------------------------------------------------------------------

const columns = [
  {
    field: 'id', headerName: '', width: 150, align: 'center', headerAlign: 'center',
    renderCell: params => `${params.row.id}`
  },
  {
    field: 'createdAt',
    headerName: 'Created Date',
    width: 250,
    align: 'center',
    headerAlign: 'center',
    renderCell: params => `${params.row.createdAt}`
  },
  {
    field: 'requestData',
    headerName: 'Request Data',
    width: 500,
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
];

const Games = [
  { id: 1, createdAt: "2025-3-11T13-27-30", requestData: { "command": "authenticate", "data": { "account": "tesveri" }, "timestamp": "1741667250", "check": "21" }, responsiveDate: {} },
  { id: 2, createdAt: "2025-3-11T13-27-31", requestData: { "command": "authenticate", "data": { "account": "tesveri" }, "timestamp": "1741667250", "check": "21" }, responsiveDate: {} },
  { id: 3, createdAt: "2025-3-11T13-27-32", requestData: { "command": "authenticate", "data": { "account": "tesveri" }, "timestamp": "1741667250", "check": "21" }, responsiveDate: {} },
  { id: 4, createdAt: "2025-3-11T13-27-33", requestData: { "command": "authenticate", "data": { "account": "tesveri" }, "timestamp": "1741667250", "check": "21" }, responsiveDate: {} },
  { id: 5, createdAt: "2025-3-11T13-27-34", requestData: { "command": "authenticate", "data": { "account": "tesveri" }, "timestamp": "1741667249", "check": "21" }, responsiveDate: {} },
  { id: 6, createdAt: "2025-3-11T13-27-35", requestData: { "command": "authenticate", "data": { "account": "tesveri" }, "timestamp": "1741667248", "check": "21" }, responsiveDate: {} },
  { id: 7, createdAt: "2025-3-11T13-27-37", requestData: { "command": "authenticate", "data": { "account": "tesveri" }, "timestamp": "1741667247", "check": "21" }, responsiveDate: {} },
  { id: 8, createdAt: "2025-3-11T13-27-38", requestData: { "command": "authenticate", "data": { "account": "tesveri" }, "timestamp": "1741667246", "check": "21" }, responsiveDate: {} },
  { id: 9, createdAt: "2025-3-11T13-27-39", requestData: { "command": "authenticate", "data": { "account": "tesveri" }, "timestamp": "1741667245", "check": "21" }, responsiveDate: {} },
  { id: 10, createdAt: "2025-3-11T13-27-40", requestData: { "command": "authenticate", "data": { "account": "tesveri" }, "timestamp": "1741667244", "check": "21" }, responsiveDate: {} },
  { id: 11, createdAt: "2025-3-11T13-27-41", requestData: { "command": "authenticate", "data": { "account": "tesveri" }, "timestamp": "1741667243", "check": "21" }, responsiveDate: {} },
  { id: 12, createdAt: "2025-3-11T13-27-42", requestData: { "command": "authenticate", "data": { "account": "tesveri" }, "timestamp": "1741667240", "check": "21" }, responsiveDate: {} },
  { id: 13, createdAt: "2025-3-11T13-27-43", requestData: { "command": "authenticate", "data": { "account": "tesveri" }, "timestamp": "1741667239", "check": "21" }, responsiveDate: {} },
  { id: 14, createdAt: "2025-3-11T13-27-44", requestData: { "command": "authenticate", "data": { "account": "tesveri" }, "timestamp": "1741667250", "check": "21" }, responsiveDate: {} },
  { id: 15, createdAt: "2025-3-11T13-27-45", requestData: { "command": "authenticate", "data": { "account": "tesveri" }, "timestamp": "1741667238", "check": "21" }, responsiveDate: {} },
  { id: 16, createdAt: "2025-3-11T13-27-46", requestData: { "command": "authenticate", "data": { "account": "tesveri" }, "timestamp": "1741667237", "check": "21" }, responsiveDate: {} },
  { id: 17, createdAt: "2025-3-11T13-27-47", requestData: { "command": "authenticate", "data": { "account": "tesveri" }, "timestamp": "1741667236", "check": "21" }, responsiveDate: {} },
  { id: 18, createdAt: "2025-3-11T13-27-48", requestData: { "command": "authenticate", "data": { "account": "tesveri" }, "timestamp": "1741667235", "check": "21" }, responsiveDate: {} },
  { id: 19, createdAt: "2025-3-11T13-27-49", requestData: { "command": "authenticate", "data": { "account": "tesveri" }, "timestamp": "1741667234", "check": "21" }, responsiveDate: {} },
  { id: 20, createdAt: "2025-3-11T13-27-50", requestData: { "command": "authenticate", "data": { "account": "tesveri" }, "timestamp": "1741667233", "check": "21" }, responsiveDate: {} },
  { id: 21, createdAt: "2025-3-11T13-27-51", requestData: { "command": "authenticate", "data": { "account": "tesveri" }, "timestamp": "1741667232", "check": "21" }, responsiveDate: {} },
  { id: 22, createdAt: "2025-3-11T13-27-52", requestData: { "command": "authenticate", "data": { "account": "tesveri" }, "timestamp": "1741667231", "check": "21" }, responsiveDate: {} },
  { id: 23, createdAt: "2025-3-11T13-27-53", requestData: { "command": "authenticate", "data": { "account": "tesveri" }, "timestamp": "1741667230", "check": "21" }, responsiveDate: {} },
  { id: 24, createdAt: "2025-3-11T13-27-54", requestData: { "command": "authenticate", "data": { "account": "tesveri" }, "timestamp": "1741667229", "check": "21" }, responsiveDate: {} },
  { id: 25, createdAt: "2025-3-11T13-27-55", requestData: { "command": "authenticate", "data": { "account": "tesveri" }, "timestamp": "1741667228", "check": "21" }, responsiveDate: {} },
  { id: 26, createdAt: "2025-3-11T13-27-57", requestData: { "command": "authenticate", "data": { "account": "tesveri" }, "timestamp": "1741667227", "check": "21" }, responsiveDate: {} },
  { id: 27, createdAt: "2025-3-11T13-27-58", requestData: { "command": "authenticate", "data": { "account": "tesveri" }, "timestamp": "1741667226", "check": "21" }, responsiveDate: {} },
  { id: 28, createdAt: "2025-3-11T13-28-11", requestData: { "command": "authenticate", "data": { "account": "tesveri" }, "timestamp": "1741667225", "check": "21" }, responsiveDate: {} },
  { id: 29, createdAt: "2025-3-11T13-28-12", requestData: { "command": "authenticate", "data": { "account": "tesveri" }, "timestamp": "1741667224", "check": "21" }, responsiveDate: {} },
  { id: 30, createdAt: "2025-3-11T13-28-57", requestData: { "command": "authenticate", "data": { "account": "tesveri" }, "timestamp": "1741667223", "check": "21" }, responsiveDate: {} },
]

const agents = ["@baalbet", "CQ9", "Habanero", "JiLi", "DreamGaming", "Asia Gaming"];

export function ApiTestingLog() {
  const [startValue, setStartValue] = useState(dayjs(new Date()));
  const [endValue, setEndValue] = useState(dayjs(new Date()));
  const [agent, setAgent] = useState("@baalbet")
  const handleChangeAgent = useCallback((event) => {
    setAgent(event.target.value);
  }, []);

  return (
    <DashboardContent maxWidth="xl">
      <PageTitle>Callback API Testing Logs</PageTitle>
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
        </Grid>
      </Block>

      <Block
        title={`Callback API Testing Logs (Total:${Games.length})`}
      >
        <DataGrid
          rows={Games}
          columns={columns}
          initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
          pageSizeOptions={[5, 10, 20]}
        />
      </Block>
    </DashboardContent>
  )
}
