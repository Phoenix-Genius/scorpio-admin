"use client"

import { DataGrid } from "@mui/x-data-grid";
import { Box, Button, Typography } from '@mui/material';
import { Label } from 'src/components/label';
import { DashboardContent } from 'src/layouts/dashboard/content';
import { PageTitle } from 'src/components/page-title/page-title';
import { Block } from 'src/components/block';
import { formatNumber } from "src/utils/format-number";
import { _agent_requests } from "src/_mock";

// ----------------------------------------------------------------------

const columns = [
  {
    field: 'agent',
    width: 170,
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
    width: 170,
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
    width: 120,
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
    width: 120,
    align: 'center',
    headerAlign: 'center',
    renderCell: params => `${params.row.pointRate}%`
  },
  {
    field: 'winRate',
    headerName: 'Win Rate',
    width: 120,
    align: 'center',
    headerAlign: 'center',
    renderCell: params => `${params.row.winRate}%`
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
      </Box>
    )
  },
  {
    field: 'createdAt',
    headerName: 'CreatedDate',
    width: 280,
    align: 'center',
    headerAlign: 'center',
    renderCell: params => `${params.row.createdAt.slice(0, 10)} ${params.row.createdAt.slice(11, 19)}`
  },
  {
    field: 'functions',
    headerName: 'Functions',
    width: 250,
    align: 'center',
    headerAlign: 'center',
    renderCell: params => (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 2, height: 1 }}>
        <Button variant="contained" size="small" color="success">Approach</Button>
        <Button variant="contained" size="small" color="error">Delete</Button>
      </Box>
    )
  }
];

export function AgentRequests() {
  return (
    <DashboardContent maxWidth="xl">
      <PageTitle>Requests For Signup</PageTitle>

      <Block title={`Requests For Signup (Total ${_agent_requests.length})`}>
        <DataGrid
          rows={_agent_requests}
          columns={columns}
          initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
          pageSizeOptions={[5, 10, 20]}
        />
      </Block>
    </DashboardContent>
  )
}
