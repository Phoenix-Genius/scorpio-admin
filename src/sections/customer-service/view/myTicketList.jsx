"use client"

import { DataGrid } from "@mui/x-data-grid";
import { Box, Button, TextField, Typography, Checkbox } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Label } from 'src/components/label';
import { DashboardContent } from 'src/layouts/dashboard/content';
import { PageTitle } from 'src/components/page-title/page-title';
import { Block } from 'src/components/block';
import { _service_tickets } from "src/_mock";

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
    field: 'sender',
    width: 200,
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
    type: "Boolean",
    headerName: 'Type',
    width: 150,
    align: 'center',
    headerAlign: 'center',
    renderCell: params => (
      <Label color="info" variant="filled">
        Technical Support
      </Label>
    )
  },
  {
    field: 'title',
    headerName: 'Title',
    width: 350,
    align: 'center',
    headerAlign: 'center'
  },
  {
    field: 'state',
    headerName: 'State',
    width: 200,
    align: 'center',
    headerAlign: 'center',
    renderCell: params =>
      params.row.state == "warning" ? (
        <Label color="warning" variant="filled">
          {params.row.state}
        </Label>
      ) : (
        <Label color="info" variant="filled">
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
    width: 200,
    align: 'center',
    headerAlign: 'center',
    renderCell: params => (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 2, height: 1 }}>
        <Button variant="contained" size="small" color="info">Detail</Button>
        <Button variant="contained" size="small" color="success">Close</Button>
      </Box>
    )
  },
];

export function MyTicketList() {

  return (
    <DashboardContent maxWidth="xl">
      <PageTitle>My Ticket List</PageTitle>
      <Block title="Search" footerAction={<Button fullWidth variant="contained" color="success">Search</Button>}>
        <Grid container sx={{ backgroundColor: "rgba(0,0,0,.3)" }}>
          <Grid size={{ xs: 4 }} sx={{ display: "flex", alignItems: "center", borderRight: "1px solid #333", borderBottom: "1px solid #333", p: 2 }}>
            <Typography variant="subtitle1">Title</Typography>
          </Grid>
          <Grid size={{ xs: 8 }} sx={{ p: 2, borderBottom: "1px solid #333" }}>
            <TextField fullWidth size="small" placeholder="Title" />
          </Grid>
          <Grid size={{ xs: 4 }} sx={{ display: "flex", alignItems: "center", borderRight: "1px solid #333", borderBottom: "1px solid #333", p: 2 }}>
            <Typography variant="subtitle1">State</Typography>
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
            <Typography variant="subtitle1">Opened</Typography>
            <Checkbox
              size="medium"
              disabled
              inputProps={{
                id: 'disabled-checked-checkbox',
                'aria-label': 'Disabled checked checkbox',
              }}
            />
            <Typography variant="subtitle1">Closed</Typography>
          </Grid>
          <Grid size={{ xs: 4 }} sx={{ display: "flex", alignItems: "center", borderRight: "1px solid #333", borderBottom: "1px solid #333", p: 2 }}>
            <Typography variant="subtitle1">Answer</Typography>
          </Grid>
          <Grid size={{ xs: 8 }} sx={{ p: 2, borderBottom: "1px solid #333", display: "flex", alignItems: "center" }}>
            <Checkbox
              color="primary"
              size="medium"
              defaultChecked
              inputProps={{
                id: 'checked-checkbox',
                'aria-label': 'Checked checkbox',
              }}
            />
            <Typography variant="subtitle1">No Answer</Typography>
            <Checkbox
              color="primary"
              size="medium"
              defaultChecked
              inputProps={{
                id: 'checked-checkbox',
                'aria-label': 'Checked checkbox',
              }}
            />
            <Typography variant="subtitle1">Answer
            </Typography>
          </Grid>
        </Grid>
      </Block>

      <Block title={`My Ticket List(Total ${_service_tickets.length})`}>
        <DataGrid
          rows={_service_tickets}
          columns={columns}
          initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
          pageSizeOptions={[5, 10, 20]}
        />
      </Block>
    </DashboardContent>
  )
}
