"use client"

import { DataGrid } from "@mui/x-data-grid";
import { Box, Button, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Label } from 'src/components/label';
import { DashboardContent } from 'src/layouts/dashboard/content';
import { PageTitle } from 'src/components/page-title/page-title';
import { Block } from 'src/components/block';

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
    renderCell: params => <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: 1 }}><Typography>{params.row.roundBet}$</Typography></Box>
  },
  {
    field: 'totalBet',
    headerName: 'Total Bet',
    width: 100,
    align: 'center',
    headerAlign: 'center',
    renderCell: params => <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: 1 }}><Typography>{params.row.totalBet}$</Typography></Box>
  },
  {
    field: 'totalWin',
    headerName: 'Total Win',
    width: 100,
    align: 'center',
    headerAlign: 'center',
    renderCell: params => <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: 1 }}><Typography>{params.row.totalWin}$</Typography></Box>
  },
  {
    field: 'profit',
    headerName: 'Profit',
    width: 100,
    align: 'center',
    headerAlign: 'center',
    renderCell: params => <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: 1 }}><Typography>{params.row.profit}$</Typography></Box>
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
    renderCell: params => <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: 1 }}><Typography>{params.row.callAmount}$</Typography></Box>
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
        <Button variant="contained" color="success">Bonus Call</Button>
        <Button variant="contained" color="info">Transaction</Button>
      </Box>
    )
  },
];

const gameConnections=[
  {id:1,user:{name:"1277870", loginId:"400634252"},parent:{name:"sub_partner2", loginId:"subpartner2"},provider:"pragmatic play",name:"Lusky's Wild Pub",symbol:"vs10bbdice",category:"Slots",roundBet:0.25,totalBet:0.5,totalWin:0,profit:"-0.5",startTime:"2025-01-09T00:47:37",callAmount:0,callState:""},
  {id:2,user:{name:"1277870", loginId:"400634252"},parent:{name:"sub_partner2", loginId:"subpartner2"},provider:"CQ9",name:"Big Bass Dice",symbol:"vs25luckwikdpb",category:"Slots",roundBet:0.25,totalBet:0.5,totalWin:0,profit:"-0.5",startTime:"2025-01-09T00:47:37",callAmount:0,callState:""},
  {id:3,user:{name:"1277870", loginId:"400634252"},parent:{name:"sub_partner2", loginId:"subpartner2"},provider:"Pocket Games Soft",name:"The Dog House",symbol:"vs10bbdice",category:"Slots",roundBet:0.25,totalBet:0.5,totalWin:0,profit:"-0.5",startTime:"2025-01-09T00:47:37",callAmount:0,callState:""},
  {id:4,user:{name:"1277870", loginId:"400634252"},parent:{name:"sub_partner2", loginId:"subpartner2"},provider:"Booongo",name:"Wild Wild Jocker",symbol:"vssefgergth",category:"Slots",roundBet:0.25,totalBet:0.5,totalWin:0,profit:"-0.5",startTime:"2025-01-09T00:47:37",callAmount:0,callState:""},
  {id:5,user:{name:"1277870", loginId:"400634252"},parent:{name:"sub_partner2", loginId:"subpartner2"},provider:"CQ9",name:"Lusky's Wild Pub",symbol:"vs1tkyjftjyj",category:"Slots",roundBet:0.25,totalBet:0.5,totalWin:0,profit:"-0.5",startTime:"2025-01-09T00:47:37",callAmount:0,callState:""}
  ]

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
        
        <Block title={`Game Connections (${gameConnections.length} / ${gameConnections.length})`}>
          <Box sx={{ backgroundColor: "#ccc", p: 2 }}>
            <Typography variant="subtitle2" color="black">Data is automatically updated every 10 seconds.</Typography>
          </Box>
          <DataGrid
            rows={gameConnections}
            columns={columns}
            initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
            pageSizeOptions={[5, 10, 20]}
          />
        </Block>
      </DashboardContent>
    ) 
}
