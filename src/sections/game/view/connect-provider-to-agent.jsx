"use client"

import { useCallback, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { RichTreeView } from '@mui/x-tree-view/RichTreeView';

import { Label } from 'src/components/label';
import { Box, Button, Checkbox, FormControlLabel, MenuItem, Switch, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { DashboardContent } from 'src/layouts/dashboard/content';
import { PageTitle } from 'src/components/page-title/page-title';
import { Block } from 'src/components/block';
import { _game_providers } from 'src/_mock';

// ----------------------------------------------------------------------

const columns = [
  { field: 'id', headerName: 'ID', align: 'center', headerAlign: 'center', },
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
  }
];

const MUI_X_PRODUCTS = [
  {
    id: 'grid',
    label: '🅰Grid'
  },
  {
    id: 'pickers',
    label: `🅰fahjkf`,
  },
  {
    id: 'captebet',
    label: '🅰Captebet(@captebet)',
  },
  {
    id: 'danieUack',
    label: '🅰DanieUack(@danieUack)',
  },
  {
    id: 'davidTRY',
    label: '🅰DavidTRY(@davidTRY)',
    children: [
      { id: 'smartTry', label: '🅱SMARTTRY(@SMARTTRY)', children: [{ id: 'staging', label: 'STAGINGTRY(@STAGINGTRY)' }] }]
  },
  {
    id: 'demoAgent',
    label: '🅰DemoAgent(@demoAgent)',
  },
  {
    id: 'laxhan',
    label: '🅰laxhan(@laxhan)',
  },
  {
    id: 'leomarkets',
    label: 'Leomarkets(@leomarkets)',
  },
  {
    id: 'seftrySlot',
    label: '🅰SeftrySlot(@seftrySlot)',
  },
];

const providers = ["Pragmatic Play", "CQ9", "Pocket Games Soft", "Booongo", "Playson", "Evolution", "Habanero", "JiLi", "DreamGaming", "Asia Gaming"]

export function ConnectProviderToAgent() {
  const [provider, setProvider] = useState("total")

  const handleChangeProvider = useCallback((event) => {
    setProvider(event.target.value);
  }, []);

  return (
    <DashboardContent maxWidth="xl">
      <PageTitle>Connect Providers To Agents</PageTitle>
      <Grid container>
        <Grid size={{ xs: 12, md: 6 }} pr={{ xs: 0, md: 2 }}>
          <Block title="Select an Agent" footerAction={<Button fullWidth variant="contained" color="success">Search</Button>}>
            <Grid container sx={{ backgroundColor: "rgba(0,0,0,.3)" }}>
              <Grid size={4} sx={{ display: "flex", alignItems: "center", borderRight: "1px solid #333", borderBottom: "1px solid #333", p: 2 }}>
                <Typography variant="subtitle1">Parent Agent</Typography>
              </Grid>
              <Grid size={8} sx={{ p: 2, borderBottom: "1px solid #333" }}>
                <TextField fullWidth select value={provider} onChange={handleChangeProvider} size="small">
                  <MenuItem key={-1} value="total">henry_try(@henry_try)</MenuItem>
                  {providers.map((item, index) => <MenuItem key={index} value={item}>{item}</MenuItem>)}
                </TextField>
              </Grid>
              <Grid size={4} sx={{ display: "flex", alignItems: "center", borderRight: "1px solid #333", borderBottom: "1px solid #333", p: 2 }}>
                <Typography variant="subtitle1">Agent Name/ID</Typography>
              </Grid>
              <Grid size={8} sx={{ p: 2, borderBottom: "1px solid #333" }}>
                <TextField fullWidth size="small" placeholder="Agent Name/ID" />
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
          <Block title="Agent Tree View"
            headerAction={<Button variant="contained" color="info">Select All/Cancel All</Button>}
            footerAction={<Box><Button fullWidth variant="contained" color="info">Connect Providers To Agents</Button>
              <Button fullWidth variant="contained" color="error">Disonnect Providers To Agents</Button>
            </Box>}>
            <RichTreeView checkboxSelection items={MUI_X_PRODUCTS} sx={{ fontSize: 20 }} />
          </Block>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} pl={{ xs: 0, md: 2 }}>
          <Block
            title={`Providers List(Total:${_game_providers.length})`}
          >
            <DataGrid
              checkboxSelection
              rows={_game_providers}
              columns={columns}
              initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
              pageSizeOptions={[5, 10, 20]}
            />
          </Block>
        </Grid>
      </Grid>
    </DashboardContent>
  )
}

