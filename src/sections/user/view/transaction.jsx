"use client"
import { useCallback, useState } from 'react';
import { MobileDateTimePicker } from "@mui/x-date-pickers";
import dayjs from 'dayjs';
import { LocalizationProvider } from 'src/locales';

import { DataGrid } from "@mui/x-data-grid";
import { Box, Button, TextField, Typography, Checkbox, MenuItem } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Label } from 'src/components/label';
import { DashboardContent } from 'src/layouts/dashboard/content';
import { PageTitle } from 'src/components/page-title/page-title';
import { Block } from 'src/components/block';
import { formatNumber } from 'src/utils/format-number';
import { _user_transactions } from 'src/_mock';

// ----------------------------------------------------------------------

const columns = [
  {
    field: 'id',
    width: 100,
    headerName: '',
    align: 'center',
    headerAlign: 'center',
    renderCell: params => `${params.row.id}`
  },
  {
    field: 'username',
    width: 200,
    headerName: 'UserName',
    align: 'center',
    headerAlign: 'center',
    renderCell: params => (
      <Box>
        <Typography variant="subtitle2">{params.row.username.name}</Typography>
        <Typography variant="subtitle2" color="textDisabled">@{params.row.username.loginId}</Typography>
      </Box>
    )
  },
  {
    field: 'round',
    width: 150,
    headerName: 'Round',
    align: 'center',
    headerAlign: 'center',
    renderCell: params => `${params.row.round}`
  },
  {
    field: 'provider',
    width: 100,
    headerName: 'Provider',
    align: 'center',
    headerAlign: 'center',
    renderCell: params => `${params.row.provider}`
  },
  {
    field: 'gameName',
    width: 150,
    headerName: 'GameName',
    align: 'center',
    headerAlign: 'center',
    renderCell: params => `${params.row.gameName}`
  },
  {
    field: 'type',
    width: 100,
    headerName: 'Round Type',
    align: 'center',
    headerAlign: 'center',
    renderCell: params => params.row.type ? (<Label color="warning" variant="filled">Win</Label>) : (<Label color="secondary" variant="filled">Betting</Label>)
  },
  {
    field: 'amount',
    width: 100,
    headerName: 'Amount',
    align: 'center',
    headerAlign: 'center',
    renderCell: params => (
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", height: 1 }}>
        <Typography>{formatNumber(params.row.amount)} <i className="fa fa-try"></i></Typography>
      </Box>
    )
  },
  {
    field: 'prebalance',
    width: 100,
    headerName: 'Prev.Balance',
    align: 'center',
    headerAlign: 'center',
    renderCell: params => (
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", height: 1 }}>
        <Typography>{formatNumber(params.row.prebalance)} <i className="fa fa-try"></i></Typography>
      </Box>
    )
  },
  {
    field: 'currentbalance',
    width: 100,
    headerName: 'Current Balance',
    align: 'center',
    headerAlign: 'center',
    renderCell: params => (
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", height: 1 }}>
        <Typography>{formatNumber(params.row.currentbalance)} <i className="fa fa-try"></i></Typography>
      </Box>
    )
  },

  {
    field: 'deliveryDate',
    headerName: 'Proc.Date',
    width: 200,
    align: 'center',
    headerAlign: 'center',
    renderCell: params => `${params.row.deliveryDate.slice(0, 10)} ${params.row.deliveryDate.slice(11, 19)}`
  },
  {
    field: 'functions',
    headerName: 'Functions',
    width: 100,
    align: 'center',
    headerAlign: 'center',
    renderCell: params => <Button variant="contained" size="small" color="success">Detail</Button>
  },
];

export function UserTransaction() {
  const [provider, setProvider] = useState("henry_try(@henry_try)")

  const handleChangeProvider = useCallback((event) => {
    setProvider(event.target.value);
  }, []);

  const [startValue, setStartValue] = useState(dayjs(new Date()));
  const [endValue, setEndValue] = useState(dayjs(new Date()));
  return (
    <DashboardContent maxWidth="xl">
      <PageTitle>Transaction HIstory</PageTitle>
      <Block title="Search" footerAction={<Button fullWidth variant="contained" color="success">Search</Button>}>
        <Grid container sx={{ backgroundColor: "rgba(0,0,0,.3)" }}>
          <Grid size={{ xs: 4 }} sx={{ display: "flex", alignItems: "center", borderRight: "1px solid #333", borderBottom: "1px solid #333", p: 2 }}>
            <Typography variant="subtitle1">Parent Agent</Typography>
          </Grid>
          <Grid size={{ xs: 8 }} sx={{ p: 2, borderBottom: "1px solid #333" }}>
            <TextField fullWidth select value={provider} size="small">
              <MenuItem key={-1} value="henry_try(@henry_try)">henry_try(@henry_try)</MenuItem>
              {/* {_user_transactions.map((item, index)=><MenuItem key={index} value={item.username.name}>{item.username.name}</MenuItem>)} */}
            </TextField>
          </Grid>
        </Grid>
        <Grid container sx={{ backgroundColor: "rgba(0,0,0,.3)" }}>
          <Grid size={{ xs: 4 }} sx={{ display: "flex", alignItems: "center", borderRight: "1px solid #333", borderBottom: "1px solid #333", p: 2 }}>
            <Typography variant="subtitle1">Period (start ~ end)</Typography>
          </Grid>
          <Grid size={{ xs: 8 }} sx={{ p: 2, borderBottom: "1px solid #333" }}>
            <LocalizationProvider>
              <Grid container>
                <Grid size={6} pr={2}>
                  <MobileDateTimePicker
                    orientation="portrait"
                    value={startValue}
                    // onChange={(newValue) => setStartValue(newValue)}
                    slotProps={{ textField: { fullWidth: true } }}
                  />
                </Grid>
                <Grid size={6} pl={2}>
                  <MobileDateTimePicker
                    orientation="portrait"
                    value={endValue}
                    // onChange={(newValue) => setEndValue(newValue)}
                    slotProps={{ textField: { fullWidth: true } }}
                  />
                </Grid>
              </Grid>
            </LocalizationProvider>

          </Grid>
        </Grid>
        <Grid container sx={{ backgroundColor: "rgba(0,0,0,.3)" }}>
          <Grid size={{ xs: 4 }} sx={{ display: "flex", flexDirection: "column", borderRight: "1px solid #333", borderBottom: "1px solid #333", p: 2 }}>

            <Typography variant="subtitle1">UserName</Typography>
            <Typography variant="h6">[Round ID] input box should be included here</Typography>
          </Grid>
          <Grid size={{ xs: 8 }} sx={{ p: 2, borderBottom: "1px solid #333" }}>
            <TextField fullWidth size="small" placeholder="UserName" />
          </Grid>
        </Grid>
        <Grid container sx={{ backgroundColor: "rgba(0,0,0,.3)" }}>
          <Grid size={{ xs: 4 }} sx={{ display: "flex", alignItems: "center", borderRight: "1px solid #333", borderBottom: "1px solid #333", p: 2 }}>
            <Typography variant="subtitle1">Type</Typography>
          </Grid>
          <Grid size={{ xs: 8 }} sx={{ p: 2, borderBottom: "1px solid #333", display: "flex", alignItems: "center" }}>
            <Checkbox
              size="medium"
              defaultChecked
              inputProps={{
                id: 'checked-checkbox',
                'aria-label': 'Checked checkbox',
              }}
            />
            <Typography variant="subtitle1">Betting</Typography>
            <Checkbox
              size="medium"
              defaultChecked
              inputProps={{
                id: 'checked-checkbox',
                'aria-label': 'Checked checkbox',
              }}
            />
            <Typography variant="subtitle1">Win</Typography>
            <Checkbox
              size="medium"
              defaultChecked
              inputProps={{
                id: 'checked-checkbox',
                'aria-label': 'Checked checkbox',
              }}
            />
            <Typography variant="subtitle1">Deposit</Typography>
            <Checkbox
              size="medium"
              defaultChecked
              inputProps={{
                id: 'checked-checkbox',
                'aria-label': 'Checked checkbox',
              }}
            />
            <Typography variant="subtitle1">WidthDraw</Typography>
            <Checkbox
              size="medium"
              inputProps={{
                id: 'checked-checkbox',
                'aria-label': 'Checked checkbox',
              }}
            />
            <Typography variant="subtitle1">BetCancel</Typography>
            <Checkbox
              size="medium"
              inputProps={{
                id: 'checked-checkbox',
                'aria-label': 'Checked checkbox',
              }}
            />
            <Typography variant="subtitle1">Bonus Cell</Typography>
          </Grid>
        </Grid>
      </Block>

      <Block title={`Transaction HIstory (Total ${_user_transactions.length})`}>
        <DataGrid
          rows={_user_transactions}
          columns={columns}
          initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
          pageSizeOptions={[5, 10, 20]}
        />
      </Block>
    </DashboardContent>
  )
}
