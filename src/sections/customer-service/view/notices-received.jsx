"use client"

import { DataGrid } from "@mui/x-data-grid";
import { Box, Button, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Label } from 'src/components/label';
import { DashboardContent } from 'src/layouts/dashboard/content';
import { PageTitle } from 'src/components/page-title/page-title';
import { Block } from 'src/components/block';
import { _service_received_notices } from "src/_mock";

// ----------------------------------------------------------------------

const columns = [
  {
    field: 'id',
    width: 150,
    headerName: '',
    align: 'center',
    headerAlign: 'center',
    renderCell: params => `${params.row.id}`
  },
  {
    field: 'sender',
    width: 250,
    headerName: 'Sender',
    align: 'center',
    headerAlign: 'center',
    renderCell: params => (
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", height: 1 }}>
        <Typography variant="subtitle2">{params.row.sender.name}</Typography>
        <Typography variant="subtitle2" color="textDisabled">@{params.row.sender.loginId}</Typography>
      </Box>
    )
  },
  {
    field: 'type',
    type: 'String',
    headerName: 'Type',
    width: 150,
    align: 'center',
    headerAlign: 'center',
    renderCell: params => (
      <Label color="info" variant="filled">
        {params.row.type}
      </Label>
    )
  },
  {
    field: 'title',
    headerName: 'Title',
    width: 350,
    align: 'center',
    headerAlign: 'center',
    renderCell: params => (
      `${params.row.title}`
    )
  },
  {
    field: 'state',
    headerName: 'State',
    width: 200,
    align: 'center',
    headerAlign: 'center',
    renderCell: params =>
      params.row.state == "Confirmed" ? (
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
    field: 'deliveryDate',
    headerName: 'Delivery Date',
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
    renderCell: params => <Button variant="contained" size="small" color="info">view</Button>
  },
];

export function NoticesReceived() {
  return (
    <DashboardContent maxWidth="xl">
      <PageTitle>Notices Received</PageTitle>
      <Block title="Search" footerAction={<Button fullWidth variant="contained" color="success">Search</Button>}>
        <Grid container sx={{ backgroundColor: "rgba(0,0,0,.3)" }}>
          <Grid size={{ xs: 4 }} sx={{ display: "flex", alignItems: "center", borderRight: "1px solid #333", borderBottom: "1px solid #333", p: 2 }}>
            <Typography variant="subtitle1">Title</Typography>
          </Grid>
          <Grid size={{ xs: 8 }} sx={{ p: 2, borderBottom: "1px solid #333" }}>
            <TextField fullWidth size="small" placeholder="Title" />
          </Grid>
        </Grid>
      </Block>

      <Block title={`Notices Received (Total ${_service_received_notices.length})`}>
        <DataGrid
          rows={_service_received_notices}
          columns={columns}
          initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
          pageSizeOptions={[5, 10, 20]}
        />
      </Block>
    </DashboardContent>
  )
}
