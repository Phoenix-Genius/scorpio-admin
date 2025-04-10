"use client"

import { DataGrid } from "@mui/x-data-grid";
import { Alert, Box, Button, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Label } from 'src/components/label';
import { DashboardContent } from 'src/layouts/dashboard/content';
import { PageTitle } from 'src/components/page-title/page-title';
import { Block } from 'src/components/block';
import { formatNumber } from "src/utils/format-number";
import { _user_game_connections } from "src/_mock";

// ----------------------------------------------------------------------

const columns = [
  {
    field: 'id',
    width: 50,
    headerName: '',
    align: 'center',
    headerAlign: 'center'
  },
  {
    field: 'user',
    width: 120,
    headerName: 'Users',
    align: 'center',
    headerAlign: 'center',
    renderCell: params => (
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", height: 1 }}>
        <Typography variant="subtitle2">{params.row.user.name}</Typography>
        <Typography variant="subtitle2" color="textDisabled">@{params.row.user.loginId}</Typography>
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
    field: 'roundBet',
    headerName: 'Round Bet',
    width: 100,
    align: 'center',
    headerAlign: 'center',
    renderCell: params => (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: 1 }}>
        <Typography>{formatNumber(params.row.roundBet)} <i className="fa fa-try"></i></Typography>
      </Box>
    )
  },
  {
    field: 'totalBet',
    headerName: 'Total Bet',
    width: 100,
    align: 'center',
    headerAlign: 'center',
    renderCell: params => (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: 1 }}>
        <Typography>{formatNumber(params.row.totalBet)} <i className="fa fa-try"></i></Typography>
      </Box>
    )
  },
  {
    field: 'totalWin',
    headerName: 'Total Win',
    width: 100,
    align: 'center',
    headerAlign: 'center',
    renderCell: params => (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: 1 }}>
        <Typography>{formatNumber(params.row.totalWin)} <i className="fa fa-try"></i></Typography>
      </Box>
    )
  },
  {
    field: 'profit',
    headerName: 'Profit',
    width: 100,
    align: 'center',
    headerAlign: 'center',
    renderCell: params => (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: 1 }}>
        <Typography>{formatNumber(params.row.profit)} <i className="fa fa-try"></i></Typography>
      </Box>
    )
  },
  {
    field: 'startTime',
    headerName: 'Start Time',
    width: 200,
    align: 'center',
    headerAlign: 'center',
    renderCell: params => `${params.row.startTime.slice(0, 10)} ${params.row.startTime.slice(11, 19)}`
  },
  {
    field: 'callAmount',
    headerName: 'Call Amount',
    width: 100,
    align: 'center',
    headerAlign: 'center',
    renderCell: params => (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: 1 }}>
        <Typography>{formatNumber(params.row.callAmount)} <i className="fa fa-try"></i></Typography>
      </Box>
    )
  },
  {
    field: 'callState',
    headerName: 'Call State',
    width: 100,
    align: 'center',
    headerAlign: 'center'
  },
  {
    field: 'functions',
    headerName: 'Functions',
    width: 250,
    align: 'center',
    headerAlign: 'center',
    renderCell: params => (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", height: 1 }}>
        <Button variant="contained" size="small" color="success">Bonus Call</Button>
        <Button variant="contained" size="small" color="info">Transaction</Button>
      </Box>
    )
  },
];

export function GameConnections() {

  return (
    <DashboardContent maxWidth="xl">
      <PageTitle>Game Connections</PageTitle>
      <Block title="Filter">
        <Grid container sx={{ backgroundColor: "rgba(0,0,0,.3)" }}>
          <Grid size={6} container sx={{ p: 2, borderRight: "1px solid #333", borderBottom: "1px solid #333" }}>
            <Grid size={4} sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="subtitle1">Users</Typography>
            </Grid>
            <Grid size={8} sx={{ borderLeft: "1px solid #333", pl: 2 }}>
              <TextField fullWidth size="small" placeholder="Users" />
            </Grid>
          </Grid>
          <Grid size={6} container sx={{ p: 2, borderBottom: "1px solid #333" }}>
            <Grid size={4} sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="subtitle1">Parent</Typography>
            </Grid>
            <Grid size={8} sx={{ borderLeft: "1px solid #333", pl: 2 }}>
              <TextField fullWidth size="small" placeholder="Parent" />
            </Grid>
          </Grid>
        </Grid>
        <Grid container sx={{ backgroundColor: "rgba(0,0,0,.3)" }}>
          <Grid size={6} container sx={{ p: 2, borderRight: "1px solid #333", borderBottom: "1px solid #333" }}>
            <Grid size={4} sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="subtitle1">Provider</Typography>
            </Grid>
            <Grid size={8} sx={{ borderLeft: "1px solid #333", pl: 2 }}>
              <TextField fullWidth size="small" placeholder="Provider" />
            </Grid>
          </Grid>
          <Grid size={6} container sx={{ p: 2, borderBottom: "1px solid #333" }}>
            <Grid size={4} sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="subtitle1">Game Name</Typography>
            </Grid>
            <Grid size={8} sx={{ borderLeft: "1px solid #333", pl: 2 }}>
              <TextField fullWidth size="small" placeholder="Game Name" />
            </Grid>
          </Grid>
        </Grid>
        <Grid container sx={{ backgroundColor: "rgba(0,0,0,.3)" }}>
          <Grid size={6} container sx={{ p: 2, borderRight: "1px solid #333", borderBottom: "1px solid #333" }}>
            <Grid size={4} sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="subtitle1">Symbol</Typography>
            </Grid>
            <Grid size={8} sx={{ borderLeft: "1px solid #333", pl: 2 }}>
              <TextField fullWidth size="small" placeholder="Symbol" />
            </Grid>
          </Grid>
          <Grid size={6} container sx={{ p: 2, borderBottom: "1px solid #333" }}></Grid>
        </Grid>
      </Block>

      <Block title={`Game Connections (${_user_game_connections.length} / ${_user_game_connections.length})`}>
        <Box sx={{ backgroundColor: "rgba(0,0,0,.3)" }}>
          <Alert sx={{ borderRadius: 0, backgroundColor: "#b3b3b3", color: "black" }} icon={<i className="icmn-checkmark" style={{ color: "black" }}></i>}>
            Data is automatically updated every 10 seconds.
          </Alert>
        </Box>
        <DataGrid
          rows={_user_game_connections}
          columns={columns}
          initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
          pageSizeOptions={[5, 10, 20]}
        />
      </Block>
    </DashboardContent>
  )
}
