"use client"

import { DataGrid } from "@mui/x-data-grid";
import { Box, Button, Typography } from '@mui/material';
import { Label } from 'src/components/label';
import { DashboardContent } from 'src/layouts/dashboard/content';
import { PageTitle } from 'src/components/page-title/page-title';
import { Block } from 'src/components/block';

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
    renderCell: params => (
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", height: 1 }}>
        <Typography>{params.row.pointRate}%</Typography>
        {/* <EditIcon /> */}
      </Box>
    )
  },
  {
    field: 'winRate',
    headerName: 'Win Rate',
    width: 120,
    align: 'center',
    headerAlign: 'center',
    renderCell: params => (
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", height: 1 }}>
        <Typography>{params.row.winRate}%</Typography>
        {/* <EditIcon /> */}
      </Box>
    )
  },
  {
    field: 'balance',
    headerName: 'Balance',
    width: 120,
    align: 'center',
    headerAlign: 'center',
    renderCell: params => (
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", height: 1 }}>
        <Typography>{params.row.balance}$</Typography>
        {/* <EditIcon /> */}
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
    renderCell: params =>(
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 2, height: 1 }}>
        <Button variant="contained" color="success">Approach</Button>
        <Button variant="contained" color="error">Delete</Button>
      </Box>
    ) 
  }
];

const agents=[ {id:"",agent:{name:"beinbet",loginId:"beinbet1"},parent:{name:"asgame",loginId:"asgame"},level:"Operator",pointRate:"2",winRate:"80",balance:"10000000",createdAt:"2025-03-04T19:07:29"},
{id:"",agent:{name:"Demoa",loginId:"demoa"},parent:{name:"heny_trya",loginId:"heny_trya"},level:"Operator",pointRate:5,winRate:90,balance:102933.23,createdAt:"2025-01-03T22:07:45"},
{id:"",agent:{name:"Demo",loginId:"demo"},parent:{name:"heny_try",loginId:"heny_try"},level:"Operator",pointRate:0.5,winRate:80,balance:0,createdAt:"2025-03-03T10:07:22"},
{id:"",agent:{name:"beinbeta",loginId:"beinbeta"},parent:{name:"Betproa",loginId:"betproa"},level:"Operator",pointRate:3,winRate:90,balance:11724234.123,createdAt:"2025-01-31T21:35:28"},
{id:"",agent:{name:"bettobet",loginId:"bettobet"},parent:{name:"Betpro",loginId:"betpro"},level:"Operator",pointRate:4,winRate:94,balance:999990,createdAt:"2025-02-06T22:41:59"},
{id:"",agent:{name:"leogrand",loginId:"leogrand"},parent:{name:"Laxhan",loginId:"laxhan"},level:"Operator",pointRate:5,winRate:80,balance:100000,state:"Waiting",createdAt:"2025-02-06T22:09:53"},
{id:"",agent:{name:"beinbet",loginId:"beinbet"},parent:{name:"Betpro",loginId:"betpro"},level:"Operator",pointRate:4,winRate:95,balance:11703436.15,createdAt:"2025-02-06T16:35:28"},
{id:"",agent:{name:"bigstarbet",loginId:"bigstarbet"},parent:{name:"Betpro",loginId:"betpro"},level:"Operator",pointRate:4,winRate:94,balance:2998580.8,createdAt:"2025-01-31T21:51:27"},
{id:"",agent:{name:"bluesoft",loginId:"bluesoft"},parent:{name:"heny_try",loginId:"heny_try"},level:"Operator",pointRate:4,winRate:90,balance:9725943.35,createdAt:"2025-01-31T00:55:18"},
{id:"",agent:{name:"thevenetian",loginId:"bluesoft"},parent:{name:"Betpro",loginId:"betpro"},level:"Operator",pointRate:4,winRate:94,balance:4997233,createdAt:"2025-01-27T22:58:41"},
{id:"",agent:{name:"baalbet",loginId:"Baalbet"},parent:{name:"Betpro",loginId:"betpro"},level:"Operator",pointRate:4,winRate:92,balance:3401671674,createdAt:"2025-01-27T06:19:31"},
{id:"",agent:{name:"Xboss",loginId:"xboss"},parent:{name:"Laxhan",loginId:"laxhan"},level:"Operator",pointRate:4,winRate:80,balance:5000000,createdAt:"2025-01-25T00:12:54"},
{id:"",agent:{name:"Xbossa",loginId:"xbossa"},parent:{name:"Laxhana",loginId:"laxhana"},level:"Operator",pointRate:4,winRate:90,balance:50834234,createdAt:"2025-01-26T00:12:54"},
{id:"",agent:{name:"Xbossb",loginId:"xbossb"},parent:{name:"Laxhanb",loginId:"laxhanb"},level:"Operator",pointRate:2,winRate:97,balance:2426345.34,createdAt:"2025-01-28T10:12:54"},
{id:"",agent:{name:"Xbossc",loginId:"xbossc"},parent:{name:"Laxhanc",loginId:"laxhanc"},level:"Operator",pointRate:2,winRate:92,balance:50832342.234,createdAt:"2025-02-26T23:12:03"},
{id:"",agent:{name:"baalbeta",loginId:"Baalbeta"},parent:{name:"Betproa",loginId:"betproa"},level:"Operator",pointRate:4,winRate:92,balance:33452442.23,createdAt:"2025-03-22T16:19:31"},
{id:"",agent:{name:"baalbetb",loginId:"Baalbetb"},parent:{name:"Betprob",loginId:"betprob"},level:"Operator",pointRate:3,winRate:90,balance:2342245,createdAt:"2025-02-27T22:05:31"},
{id:"",agent:{name:"baalbetc",loginId:"Baalbetc"},parent:{name:"Betproc",loginId:"betproc"},level:"Operator",pointRate:3,winRate:92,balance:32221,createdAt:"2025-01-03T06:19:31"},
{id:"",agent:{name:"thevenetiana",loginId:"bluesofta"},parent:{name:"Betproa",loginId:"betproa"},level:"Operator",pointRate:4,winRate:94,balance:231314,createdAt:"2025-01-03T22:00:41"},
{id:"",agent:{name:"thevenetianb",loginId:"bluesoftb"},parent:{name:"Betprob",loginId:"betprob"},level:"Operator",pointRate:3,winRate:90,balance:12315,createdAt:"2025-01-07T12:04:41"},
{id:"",agent:{name:"thevenetianc",loginId:"bluesoftc"},parent:{name:"Betproc",loginId:"betproc"},level:"Operator",pointRate:2,winRate:90,balance:123141,createdAt:"2025-02-02T12:33:21"},
{id:"",agent:{name:"bigstarbeta",loginId:"bigstarbeta"},parent:{name:"Betproa",loginId:"betproa"},level:"Operator",pointRate:3,winRate:96,balance:2424.234,createdAt:"2025-01-19T16:51:27"},
{id:"",agent:{name:"bigstarbetb",loginId:"bigstarbetb"},parent:{name:"Betprob",loginId:"betprob"},level:"Operator",pointRate:3,winRate:96,balance:2301,createdAt:"2025-01-30T11:51:27"},
{id:"",agent:{name:"bigstarbetc",loginId:"bigstarbetc"},parent:{name:"Betproc",loginId:"betproc"},level:"Operator",pointRate:3,winRate:90,balance:1232124.98,createdAt:"2025-02-11T06:51:27"},
{id:"",agent:{name:"leogranda",loginId:"leogranda"},parent:{name:"Laxhana",loginId:"laxhana"},level:"Operator",pointRate:3,winRate:91,balance:2003231,state:"Waiting",createdAt:"2025-03-06T22:09:53"},
{id:"",agent:{name:"leograndb",loginId:"leograndb"},parent:{name:"Laxhanb",loginId:"laxhanb"},level:"Operator",pointRate:5,winRate:70,balance:23400,createdAt:"2025-02-08T23:59:53"},
{id:"",agent:{name:"leograndc",loginId:"leograndc"},parent:{name:"Laxhanc",loginId:"laxhanc"},level:"Operator",pointRate:3,winRate:90,balance:193000,state:"Waiting",createdAt:"2025-03-01T22:09:01"},
{id:"",agent:{name:"Demoa",loginId:"demoa"},parent:{name:"heny_trya",loginId:"heny_trya"},level:"Operator",pointRate:5,winRate:70,balance:213410,createdAt:"2025-03-03T12:07:22"},
{id:"",agent:{name:"Demob",loginId:"demob"},parent:{name:"heny_tryb",loginId:"heny_tryb"},level:"Operator",pointRate:2,winRate:90,balance:92342,createdAt:"2025-03-01T03:23:22"},
{id:"",agent:{name:"Democ",loginId:"democ"},parent:{name:"heny_tryc",loginId:"heny_tryc"},level:"Operator",pointRate:4,winRate:91,balance:23414345.34,createdAt:"2025-02-03T03:09:22"}]

export function AgentRequests() {
  return (
    <DashboardContent maxWidth="xl">
      <PageTitle>Requests For Signup</PageTitle>
      
      <Block title={`Requests For Signup (Total ${agents.length})`}>
        <DataGrid
          rows={agents}
          columns={columns}
          initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
          pageSizeOptions={[5, 10, 20]}
        />
      </Block>
    </DashboardContent>
  )
}
