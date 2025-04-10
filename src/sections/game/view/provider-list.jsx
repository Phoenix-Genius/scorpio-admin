"use client"

import { DataGrid } from '@mui/x-data-grid';

import { Label } from 'src/components/label';
import { Alert, Box, Button, Typography } from '@mui/material';
import { DashboardContent } from 'src/layouts/dashboard/content';
import { PageTitle } from 'src/components/page-title/page-title';
import { Block } from 'src/components/block';
import { _game_providers } from 'src/_mock';

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

export function ProviderList() {
  return (
    <DashboardContent maxWidth="xl">
      <PageTitle>Providers List</PageTitle>
      <Block
        title={`Providers List (Total:${_game_providers.length})`}
      >
        <Box sx={{ backgroundColor: "rgba(0,0,0,.3)" }}>
          <Alert sx={{ borderRadius: 0, backgroundColor: "#b3b3b3", color: "black" }} icon={<i className="icmn-checkmark" style={{ color: "black" }}></i>}>
            Provider information throught the Api can be inquired through the API Provider List Search Api
          </Alert>
        </Box>

        <DataGrid
          rows={_game_providers}
          columns={columns}
          initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
          pageSizeOptions={[5, 10, 20]}
        />
      </Block>
    </DashboardContent>
  )
}

