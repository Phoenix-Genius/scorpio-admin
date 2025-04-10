"use client"

import { DataGrid } from "@mui/x-data-grid";
import { Box, Button, TextField, Typography, Checkbox } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Label } from 'src/components/label';
import { DashboardContent } from 'src/layouts/dashboard/content';
import { PageTitle } from 'src/components/page-title/page-title';
import { Block } from 'src/components/block';

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

const ticket = [{ id: 1, sender: { name: "henry_try", loginId: "henry_try1" }, type: true, title: "The inspection was terminated early", state: "warning", deliveryDate: "2025-03-04T19:07:29", functions: "asdf" },
{ id: 2, sender: { name: "henry_try", loginId: "henry_try1" }, type: false, title: "Server transfer operation completed", state: "warning", deliveryDate: "2025-03-04T19:07:29", functions: "asdf" },
{ id: 3, sender: { name: "henry_try", loginId: "henry_try1" }, type: true, title: "Server transfering", state: "Unwarning", deliveryDate: "2025-03-04T19:07:29", functions: "asdf" },
{ id: 4, sender: { name: "henry_try", loginId: "henry_try1" }, type: true, title: "The inspection was terminated early", state: "Unwarning", deliveryDate: "2025-03-04T19:07:29", functions: "asdf" },
{ id: 5, sender: { name: "henry_try", loginId: "henry_try1" }, type: true, title: "Server transfering", state: "Unwarning", deliveryDate: "2025-03-04T19:07:29", functions: "asdf" },
{ id: 6, sender: { name: "henry_try", loginId: "henry_try1" }, type: false, title: "The inspection was terminated early", state: "Unwarning", deliveryDate: "2025-03-04T19:07:29", functions: "asdf" },
{ id: 7, sender: { name: "henry_try", loginId: "henry_try1" }, type: true, title: "Server transfer operation completed", state: "Unwarning", deliveryDate: "2025-03-04T19:07:29", functions: "asdf" },
{ id: 8, sender: { name: "henry_try", loginId: "henry_try1" }, type: true, title: "The inspection was terminated early", state: "warning", deliveryDate: "2025-03-04T19:07:29", functions: "asdf" },
{ id: 9, sender: { name: "henry_try", loginId: "henry_try1" }, type: true, title: "The inspection was terminated early", state: "Unwarning", deliveryDate: "2025-03-04T19:07:29", functions: "asdf" },
{ id: 10, sender: { name: "henry_try", loginId: "henry_try1" }, type: false, title: "The inspection was terminated early", state: "Unwarning", deliveryDate: "2025-03-04T19:07:29", functions: "asdf" },
{ id: 11, sender: { name: "henry_try", loginId: "henry_try1" }, type: true, title: "Server transfer operation completed", state: "Unwarning", deliveryDate: "2025-03-04T19:07:29", functions: "asdf" },
{ id: 12, sender: { name: "henry_try", loginId: "henry_try1" }, type: true, title: "The inspection was terminated early", state: "warning", deliveryDate: "2025-03-04T19:07:29", functions: "asdf" },
{ id: 13, sender: { name: "henry_try", loginId: "henry_try1" }, type: true, title: "Server transfer operation completed", state: "Unwarning", deliveryDate: "2025-03-04T19:07:29", functions: "asdf" },
{ id: 14, sender: { name: "henry_try", loginId: "henry_try1" }, type: true, title: "Server transfering", state: "Unwarning", deliveryDate: "2025-03-04T19:07:29", functions: "asdf" },
{ id: 15, sender: { name: "henry_try", loginId: "henry_try1" }, type: true, title: "The inspection was terminated early", state: "Unwarning", deliveryDate: "2025-03-04T19:07:29", functions: "asdf" },
{ id: 16, sender: { name: "henry_try", loginId: "henry_try1" }, type: false, title: "The inspection was terminated early", state: "warning", deliveryDate: "2025-03-04T19:07:29", functions: "asdf" },
{ id: 17, sender: { name: "henry_try", loginId: "henry_try1" }, type: true, title: "Server transfering", state: "Unwarning", deliveryDate: "2025-03-04T19:07:29", functions: "asdf" },
{ id: 18, sender: { name: "henry_try", loginId: "henry_try1" }, type: false, title: "The inspection was terminated early", state: "Unwarning", deliveryDate: "2025-03-04T19:07:29", functions: "asdf" },
{ id: 19, sender: { name: "henry_try", loginId: "henry_try1" }, type: true, title: "Server transfer operation completed", state: "Unwarning", deliveryDate: "2025-03-04T19:07:29", functions: "asdf" },
{ id: 20, sender: { name: "henry_try", loginId: "henry_try1" }, type: true, title: "The inspection was terminated early", state: "warning", deliveryDate: "2025-03-04T19:07:29", functions: "asdf" },
{ id: 21, sender: { name: "henry_try", loginId: "henry_try1" }, type: true, title: "Server transfering", state: "Unwarning", deliveryDate: "2025-03-04T19:07:29", functions: "asdf" },
{ id: 22, sender: { name: "henry_try", loginId: "henry_try1" }, type: false, title: "Server transfering", state: "Unwarning", deliveryDate: "2025-03-04T19:07:29", functions: "asdf" },
{ id: 23, sender: { name: "henry_try", loginId: "henry_try1" }, type: true, title: "The inspection was terminated early", state: "Unwarning", deliveryDate: "2025-03-04T19:07:29", functions: "asdf" },
{ id: 24, sender: { name: "henry_try", loginId: "henry_try1" }, type: true, title: "The inspection was terminated early", state: "Unwarning", deliveryDate: "2025-03-04T19:07:29", functions: "asdf" },
{ id: 25, sender: { name: "henry_try", loginId: "henry_try1" }, type: false, title: "Server transfer operation completed", state: "warning", deliveryDate: "2025-03-04T19:07:29", functions: "asdf" },
{ id: 26, sender: { name: "henry_try", loginId: "henry_try1" }, type: true, title: "The inspection was terminated early", state: "warning", deliveryDate: "2025-03-04T19:07:29", functions: "asdf" },
{ id: 27, sender: { name: "henry_try", loginId: "henry_try1" }, type: false, title: "The inspection was terminated early", state: "Unwarning", deliveryDate: "2025-03-04T19:07:29", functions: "asdf" },
{ id: 28, sender: { name: "henry_try", loginId: "henry_try1" }, type: true, title: "The inspection was terminated early", state: "warning", deliveryDate: "2025-03-04T19:07:29", functions: "asdf" },
{ id: 29, sender: { name: "henry_try", loginId: "henry_try1" }, type: false, title: "The inspection was terminated early", state: "Unwarning", deliveryDate: "2025-03-04T19:07:29", functions: "asdf" }
]
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

      <Block title={`My Ticket List(Total ${ticket.length})`}>
        <DataGrid
          rows={ticket}
          columns={columns}
          initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
          pageSizeOptions={[5, 10, 20]}
        />
      </Block>
    </DashboardContent>
  )
}
