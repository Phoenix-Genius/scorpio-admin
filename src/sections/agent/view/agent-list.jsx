"use client"

import { DataGrid } from "@mui/x-data-grid";
import { Box, Button, Switch, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Label } from 'src/components/label';
import { DashboardContent } from 'src/layouts/dashboard/content';
import { PageTitle } from 'src/components/page-title/page-title';
import { Block } from 'src/components/block';
import { formatNumber } from "src/utils/format-number";
import { _agents } from "src/_mock";

// ----------------------------------------------------------------------

const columns = [
  {
    field: 'id',
    width: 150,
    headerName: '',
    align: 'center',
    headerAlign: 'center',
    renderCell: params => `#${params.row.id}`
  },
  {
    field: 'agent',
    width: 120,
    headerName: 'Agent',
    align: 'center',
    headerAlign: 'center',
    renderCell: params => (
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", height: 1 }}>
        <Typography variant="subtitle2">{params.row.agent.name}</Typography>
        <Typography variant="subtitle2" color="textDisabled">@{params.row.agent.loginId}</Typography>
      </Box>
    )
  },
  {
    field: 'parent',
    headerName: 'Parent',
    width: 120,
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
    field: 'level',
    headerName: 'Level',
    width: 100,
    align: 'center',
    headerAlign: 'center',
    renderCell: params => (
      <Label color="success" variant="filled">
        {params.row.level}
      </Label>
    )
  },
  {
    field: 'pointRate',
    headerName: 'Point Rate',
    width: 100,
    align: 'center',
    headerAlign: 'center',
    renderCell: params => (
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", height: 1 }}>
        <Typography>{params.row.pointRate}%</Typography>
        <i className="fa fa-edit" style={{ color: "#1c75ee" }}></i>
      </Box>
    )
  },
  {
    field: 'winRate',
    headerName: 'Win Rate',
    width: 100,
    align: 'center',
    headerAlign: 'center',
    renderCell: params => (
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", height: 1 }}>
        <Typography>{params.row.winRate}%</Typography>
        <i className="fa fa-edit" style={{ color: "yellow" }}></i>
      </Box>
    )
  },
  {
    field: 'balance',
    headerName: 'Balance',
    width: 150,
    align: 'center',
    headerAlign: 'center',
    renderCell: params => (
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", height: 1 }}>
        <Typography>{formatNumber(params.row.balance)} <i className="fa fa-try"></i></Typography>
        <i className="fa fa-edit" style={{ color: "#04c142" }}></i>
      </Box>
    )
  },
  {
    field: 'bonusCallable',
    headerName: 'Bonus Callable',
    align: 'center',
    headerAlign: 'center',
    width: 110,
    renderCell: params => <Switch checked={params.row.bonusCallable} />
  },
  {
    field: 'state',
    headerName: 'State',
    width: 100,
    align: 'center',
    headerAlign: 'center',
    renderCell: params =>
      params.row.state == "Approved" ? (
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
  {
    field: 'functions',
    headerName: 'Functions',
    width: 100,
    align: 'center',
    headerAlign: 'center',
    renderCell: params => <Button variant="contained" size="small" color="error">Delete</Button>
  },
];

export function AgentList() {
  return (
    <DashboardContent maxWidth="xl">
      <PageTitle>Agents List</PageTitle>
      <Block title="Search" footerAction={<Button fullWidth variant="contained" color="success">Search</Button>}>
        <Grid container sx={{ backgroundColor: "rgba(0,0,0,.3)" }}>
          <Grid size={4} sx={{ display: "flex", alignItems: "center", borderRight: "1px solid #333", borderBottom: "1px solid #333", p: 2 }}>
            <Typography variant="subtitle1">Name</Typography>
          </Grid>
          <Grid size={8} sx={{ p: 2, borderBottom: "1px solid #333" }}>
            <TextField fullWidth size="small" placeholder="Name" />
          </Grid>
          <Grid size={4} sx={{ display: "flex", alignItems: "center", borderRight: "1px solid #333", borderBottom: "1px solid #333", p: 2 }}>
            <Typography variant="subtitle1">Login id</Typography>
          </Grid>
          <Grid size={8} sx={{ p: 2, borderBottom: "1px solid #333" }}>
            <TextField fullWidth size="small" placeholder="Login id" />
          </Grid>
        </Grid>
      </Block>

      <Block title={`Agents List (Total ${_agents.length})`}>
        <DataGrid
          rows={_agents}
          columns={columns}
          initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
          pageSizeOptions={[5, 10, 20]}
        />
      </Block>
    </DashboardContent>
  )
}
