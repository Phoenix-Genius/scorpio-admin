"use client"

import { DataGrid } from '@mui/x-data-grid';

import { Label } from 'src/components/label';
import { Alert, Box, Button, Typography } from '@mui/material';
import { DashboardContent } from 'src/layouts/dashboard/content';
import { PageTitle } from 'src/components/page-title/page-title';
import { Block } from 'src/components/block';

// ----------------------------------------------------------------------

const columns = [
  { field: 'id', headerName: '', align: 'center', headerAlign: 'center', },
  {
    field: 'logo',
    width: 300,
    headerName: 'LOGO',
    align: 'center',
    headerAlign: 'center',
    renderCell: params => <img style={{ width: "50px" }} src={`/assets/images/logos/logo-${params.row.logo}`} alt="logo" />
  },
  {
    field: 'provider',
    headerName: 'Provider',
    width: 400,
    align: 'center',
    headerAlign: 'center',
  },
  {
    field: 'state',
    headerName: 'State',
    width: 300,
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
    field: 'functions',
    headerName: 'Functions',
    width: 300,
    align: 'center',
    headerAlign: 'center',
    renderCell: params => params.row.functions ? (<Button variant="contained" size="small" color="success" disabled >Provider Settings</Button>) : (<Button variant="contained" size="small" color="success">Provider Settings</Button>)
  },
];

const Games = [
  { id: 1, logo: "1.webp", provider: "pragmatic play", state: "Normal", functions: true },
  { id: 2, logo: "2.webp", provider: "CQ9", state: "Normal", functions: true },
  { id: 3, logo: "3.webp", provider: "Pocket Games Soft", state: "On Maintenance", functions: false },
  { id: 4, logo: "4.webp", provider: "Booongo", state: "On Maintenance", functions: false },
  { id: 5, logo: "5.webp", provider: "CQ9", state: "Normal", functions: true },
  { id: 6, logo: "6.webp", provider: "Play Soon", state: "On Maintenance", functions: false },
  { id: 7, logo: "7.webp", provider: "Asia Gaming", state: "On Maintenance", functions: true },
  { id: 8, logo: "8.webp", provider: "pragmatic play", state: "Normal", functions: true },
  { id: 9, logo: "9.webp", provider: "DreamingGaming", state: "Normal", functions: false },
  { id: 10, logo: "10.webp", provider: "Booongo", state: "On Maintenance", functions: true },
  { id: 11, logo: "11.webp", provider: "jiLi", state: "On Maintenance", functions: true },
  { id: 12, logo: "12.webp", provider: "Pocket Games Soft", state: "On Maintenance", functions: true },
  { id: 13, logo: "1.webp", provider: "pragmatic play", state: "On Maintenance", functions: true },
  { id: 14, logo: "2.webp", provider: "DreamingGaming", state: "On Maintenance", functions: false },
  { id: 15, logo: "3.webp", provider: "pragmatic play", state: "On Maintenance", functions: true },
  { id: 16, logo: "4.webp", provider: "Pocket Games Soft", state: "On Maintenance", functions: true },
  { id: 17, logo: "5.webp", provider: "Asia Gaming", state: "On Maintenance", functions: true },
  { id: 18, logo: "6.webp", provider: "Booongo", state: "Normal", functions: false },
  { id: 19, logo: "7.webp", provider: "pragmatic play", state: "On Maintenance", functions: false },
  { id: 20, logo: "8.webp", provider: "Pocket Games Soft", state: "On Maintenance", functions: true },
  { id: 21, logo: "9.webp", provider: "CQ9", state: "Normal", functions: true },
  { id: 22, logo: "10.webp", provider: "pragmatic play", state: "Normal", functions: true },
  { id: 23, logo: "11.webp", provider: "Booongo", state: "Normal", functions: true },
  { id: 24, logo: "12.webp", provider: "pragmatic play", state: "Normal", functions: true },
  { id: 25, logo: "1.webp", provider: "Pocket Games Soft", state: "Normal", functions: false },
  { id: 26, logo: "2.webp", provider: "jiLi", state: "On Maintenance", functions: true },
  { id: 27, logo: "3.webp", provider: "DreamingGaming", state: "Normal", functions: false },
  { id: 28, logo: "4.webp", provider: "Play Soon", state: "Normal", functions: true },
  { id: 29, logo: "5.webp", provider: "Asia Gaming", state: "Normal", functions: false }
]

export function ProviderList() {
  return (
    <DashboardContent maxWidth="xl">
      <PageTitle>Providers List</PageTitle>
      <Block
        title={`Providers List (Total:${Games.length})`}
      >
        <Box sx={{ backgroundColor: "rgba(0,0,0,.3)" }}>
          <Alert sx={{ borderRadius: 0, backgroundColor: "#b3b3b3", color: "black" }} icon={<i className="icmn-checkmark" style={{ color: "black" }}></i>}>
            Provider information throught the Api can be inquired through the API Provider List Search Api
          </Alert>
        </Box>

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

