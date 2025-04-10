"use client"

import { DataGrid } from "@mui/x-data-grid";
import { Alert, Box, Button, Checkbox, FormControlLabel, MenuItem, TextField, Typography } from '@mui/material';
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
import { _users } from "src/_mock";

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
    field: 'user',
    width: 200,
    headerName: 'Users',
    align: 'center',
    headerAlign: 'center',
    renderCell: params => (
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", height: 1 }}>
        <Typography variant="subtitle2">{params.row.user.name}</Typography>
        <Typography variant="subtitle2" color="textDisabled">@{params.row.user.loginId}</Typography>
      </Box>
    )
  },
  {
    field: 'parent',
    headerName: 'Parent',
    width: 250,
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
    field: 'balance',
    headerName: 'Balance',
    width: 200,
    align: 'center',
    headerAlign: 'center',
    renderCell: params => (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: 1 }}>
        <Typography>{formatNumber(params.row.balance)} <i className="fa fa-try"></i></Typography>
      </Box>
    )
  },
  {
    field: 'createdAt',
    headerName: 'Created Date',
    width: 300,
    align: 'center',
    headerAlign: 'center',
    renderCell: params => `${params.row.createdAt.slice(0, 10)} ${params.row.createdAt.slice(11, 19)}`
  },
  {
    field: 'category',
    headerName: 'Functions',
    width: 150,
    align: 'center',
    headerAlign: 'center',
    renderCell: params => (
      <Label color="info" variant="filled">
        Transaction
      </Label>
    )
  },
];

const providers = ["@baalbet", "CQ9", "Habanero", "JiLi", "DreamGaming", "Asia Gaming"]

export function UserList() {
  const [provider, setProvider] = useState("@baalbet")
  const handleChangeProvider = useCallback((event) => {
    setProvider(event.target.value);
  }, []);
  const [startValue, setStartValue] = useState(dayjs(new Date()));
  const [endValue, setEndValue] = useState(dayjs(new Date()));
  return (
    <DashboardContent maxWidth="xl">
      <PageTitle>User List</PageTitle>

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
            <Typography variant="subtitle1">Signup Period (start - end)</Typography>
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
            <Typography variant="subtitle1">Name</Typography>
          </Grid>
          <Grid size={8} sx={{ p: 2, borderBottom: "1px solid #333" }}>
            <TextField fullWidth size="small" placeholder="Name" />
          </Grid>
        </Grid>
      </Block>

      <Block title={`User List (Total ${_users.length})`}>
        <Box sx={{ backgroundColor: "rgba(0,0,0,.3)" }}>
          <Alert sx={{ borderRadius: 0, backgroundColor: "#b3b3b3", color: "black" }} icon={<i className="icmn-checkmark" style={{ color: "black" }}></i>}>
            In the case of a seamless wallet method, the balabce amount is not colleted separately when the user ends the game. It is maintained as the last balance, so please use it as a reference.
          </Alert>
        </Box>
        <DataGrid
          rows={_users}
          columns={columns}
          initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
          pageSizeOptions={[5, 10, 20]}
        />
      </Block>
    </DashboardContent>
  )
}
