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

const Games = [
  { id: 1, logo: "1.webp", provider: "pragmatic play", state: "Normal" },
  { id: 2, logo: "2.webp", provider: "CQ9", state: "Normal" },
  { id: 3, logo: "3.webp", provider: "Pocket Games Soft", state: "On Maintenance" },
  { id: 4, logo: "4.webp", provider: "Booongo", state: "On Maintenance" },
  { id: 5, logo: "5.webp", provider: "CQ9", state: "Normal" },
  { id: 6, logo: "6.webp", provider: "Play Soon", state: "On Maintenance" },
  { id: 7, logo: "7.webp", provider: "Asia Gaming", state: "On Maintenance" },
  { id: 8, logo: "8.webp", provider: "pragmatic play", state: "Normal" },
  { id: 9, logo: "9.webp", provider: "DreamingGaming", state: "Normal" },
  { id: 10, logo: "10.webp", provider: "Booongo", state: "On Maintenance" },
  { id: 11, logo: "11.webp", provider: "jiLi", state: "On Maintenance" },
  { id: 12, logo: "12.webp", provider: "Pocket Games Soft", state: "On Maintenance" },
  { id: 13, logo: "1.webp", provider: "pragmatic play", state: "On Maintenance" },
  { id: 14, logo: "2.webp", provider: "DreamingGaming", state: "On Maintenance" },
  { id: 15, logo: "3.webp", provider: "pragmatic play", state: "On Maintenance" },
  { id: 16, logo: "4.webp", provider: "Pocket Games Soft", state: "On Maintenance" },
  { id: 17, logo: "5.webp", provider: "Asia Gaming", state: "On Maintenance" },
  { id: 18, logo: "6.webp", provider: "Booongo", state: "Normal" },
  { id: 19, logo: "7.webp", provider: "pragmatic play", state: "On Maintenance" },
  { id: 20, logo: "8.webp", provider: "Pocket Games Soft", state: "On Maintenance" },
  { id: 21, logo: "9.webp", provider: "CQ9", state: "Normal" },
  { id: 22, logo: "10.webp", provider: "pragmatic play", state: "Normal" },
  { id: 23, logo: "11.webp", provider: "Booongo", state: "Normal" },
  { id: 24, logo: "12.webp", provider: "pragmatic play", state: "Normal" },
  { id: 25, logo: "1.webp", provider: "Pocket Games Soft", state: "Normal" },
  { id: 26, logo: "2.webp", provider: "jiLi", state: "On Maintenance" },
  { id: 27, logo: "3.webp", provider: "DreamingGaming", state: "Normal" },
  { id: 28, logo: "4.webp", provider: "Play Soon", state: "Normal" },
  { id: 29, logo: "5.webp", provider: "Asia Gaming", state: "Normal" }
]
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
        <Grid size={6} pr={2}>
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
        <Grid size={6} pr={2}>
          <Block
            title={`Providers List(Total:${Games.length})`}
          >
            <DataGrid
              checkboxSelection
              rows={Games}
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

