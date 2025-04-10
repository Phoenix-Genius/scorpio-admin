"use client"

import { useCallback, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';

import { Label } from 'src/components/label';
import { Box, Button, Checkbox, FormControlLabel, MenuItem, Switch, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { DashboardContent } from 'src/layouts/dashboard/content';
import { PageTitle } from 'src/components/page-title/page-title';
import { Block } from 'src/components/block';
import { _games } from 'src/_mock';

// ----------------------------------------------------------------------

const columns = [
  { field: 'id', headerName: '', align: 'center', headerAlign: 'center', },
  {
    field: 'logo',
    width: 120,
    headerName: 'LOGO',
    align: 'center',
    headerAlign: 'center',
    renderCell: params => <img style={{ width: "50px" }} src={`/assets/images/logos/logo-${params.row.logo}`} alt="logo" />
  },
  {
    field: 'provider',
    headerName: 'Provider',
    width: 120,
    align: 'center',
    headerAlign: 'center',
  },
  {
    field: 'name',
    headerName: 'Game Name',
    width: 160,
    align: 'center',
    headerAlign: 'center',
  },
  {
    field: 'symbol',
    headerName: 'Symbol',
    width: 160,
    align: 'center',
    headerAlign: 'center',
  },
  {
    field: 'category',
    headerName: 'Category',
    width: 100,
    align: 'center',
    headerAlign: 'center',
    renderCell: params => (
      <Label color="secondary" variant="filled">
        {params.row.category}
      </Label>
    )
  },
  {
    field: 'use',
    align: 'center',
    headerAlign: 'center',
    headerName: 'Use(ON/OFF)',
    width: 200,
    renderCell: params => <Switch color="info" checked={params.row.use} />

  },
  {
    field: 'state',
    headerName: 'State',
    width: 200,
    align: 'center',
    headerAlign: 'center',
    renderCell: params =>
      params.row.state == "Normal" ? (
        <Label color="info" variant="filled">
          {params.row.state}
        </Label>
      ) : (
        <Label color="warning" variant="filled">
          {params.row.state}
        </Label>
      )
  },
  {
    field: 'createdAt',
    headerName: 'CreatedDate',
    width: 250,
    align: 'center',
    headerAlign: 'center',
    renderCell: params => `${params.row.createdAt.slice(0, 10)} ${params.row.createdAt.slice(11, 19)}`
  },
];

const providers = ["Pragmatic Play", "CQ9", "Pocket Games Soft", "Booongo", "Playson", "Evolution", "Habanero", "JiLi", "DreamGaming", "Asia Gaming"]

export function GameList() {
  const [provider, setProvider] = useState("total")

  const handleChangeProvider = useCallback((event) => {
    setProvider(event.target.value);
  }, []);

  return (
    <DashboardContent maxWidth="xl">
      <PageTitle>Game List</PageTitle>
      <Block title="Search" footerAction={<Button fullWidth variant="contained" color="success">Search</Button>}>
        <Grid container sx={{ backgroundColor: "rgba(0,0,0,.3)" }}>
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
          <Grid size={4} sx={{ display: "flex", alignItems: "center", borderRight: "1px solid #333", borderBottom: "1px solid #333", p: 2 }}>
            <Typography variant="subtitle1">State</Typography>
          </Grid>
          <Grid size={8} sx={{ p: 2, borderBottom: "1px solid #333" }}>
            <FormControlLabel
              label="Normal"
              control={
                <Checkbox color="info" size="medium" defaultChecked />
              }
            />
            <FormControlLabel
              label="On Maintenance"
              control={
                <Checkbox color="info" size="medium" />
              }
            />
          </Grid>
        </Grid>
      </Block>

      <Block
        title={`Games List (Total:${_games.length}, ON:${_games.length}, OFF:0)`}
        headerAction={
          <Box sx={{ display: "flex", gap: "20px" }}>
            <Button variant="contained" color="info">Set All Games ON</Button>
            <Button variant="contained" color="error">Set All Games OFF</Button>
          </Box>
        }
      >
        <DataGrid
          rows={_games}
          columns={columns}
          initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
          pageSizeOptions={[5, 10, 20]}
        />
      </Block>
    </DashboardContent>
  )
}

