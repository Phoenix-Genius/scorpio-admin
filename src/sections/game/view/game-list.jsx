"use client"

import { useCallback, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';

import { Label } from 'src/components/label';
import { Box, Button, Checkbox, FormControlLabel, MenuItem, Switch, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { DashboardContent } from 'src/layouts/dashboard/content';
import { PageTitle } from 'src/components/page-title/page-title';
import { Block } from 'src/components/block';

// ----------------------------------------------------------------------

const columns = [
  { field: 'id', headerName: '', align: 'center', headerAlign: 'center', },
  {
    field: 'logo',
    width: 120,
    headerName: 'LOGO',
    align: 'center',
    headerAlign: 'center',
    renderCell: params => <img style={{ width: "50px" }} src={`/assets/images/logos/logo-${params.row.logo}`} alt="logo" />
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
    field: 'use',
    align:'center',
    headerAlign: 'center',
    headerName: 'Use(ON/OFF)',
    width: 200,
    renderCell: params => <Switch checked={params.row.use} />
    
  },
  {
    field: 'state',
    headerName: 'State',
    width: 200,
    align: 'center',
    headerAlign: 'center',
    renderCell: params => 
      params.row.state=="Normal"? (
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
];

const Games=[
  {id:1,logo:"1.webp",provider:"pragmatic play",name:"Lusky's Wild Pub",symbol:"vs10bbdice",category:"Slots",use:"true",state:"Normal",createdAt:"2025-01-09T00:47:37"},
  {id:2,logo:"2.webp",provider:"CQ9",name:"Big Bass Dice",symbol:"vs25luckwikdpb",category:"Slots",use:"true",state:"Normal",createdAt:"2025-01-09T00:47:37"},
  {id:3,logo:"3.webp",provider:"Pocket Games Soft",name:"The Dog House",symbol:"vs10bbdice",category:"Slots",use:"true",state:"On Maintenance",createdAt:"2025-01-09T00:47:37"},
  {id:4,logo:"4.webp",provider:"Booongo",name:"Wild Wild Jocker",symbol:"vssefgergth",category:"Slots",use:"true",state:"On Maintenance",createdAt:"2025-01-09T00:47:37"},
  {id:5,logo:"5.webp",provider:"CQ9",name:"Lusky's Wild Pub",symbol:"vs1tkyjftjyj",category:"Slots",use:"true",state:"Normal",createdAt:"2025-01-09T00:47:37"},
  {id:6,logo:"6.webp",provider:"Play Soon",name:"Gready Fortune",symbol:"vs1wertgsegff",category:"Slots",use:"true",state:"On Maintenance",createdAt:"2025-01-09T00:47:37"},
  {id:7,logo:"7.webp",provider:"Asia Gaming",name:"The Dog House",symbol:"vsrthfdgshg",category:"Slots",use:"true",state:"On Maintenance",createdAt:"2025-01-09T00:47:37"},
  {id:8,logo:"8.webp",provider:"pragmatic play",name:"Lusky's Wild Pub",symbol:"vs10bbdice",category:"Slots",use:"true",state:"Normal",createdAt:"2025-01-09T00:47:37"},
  {id:9,logo:"9.webp",provider:"DreamingGaming",name:"Wild Wild Jocker",symbol:"vsdfhtfgsf",category:"Slots",use:"true",state:"Normal",createdAt:"2025-01-09T00:47:37"},
  {id:10,logo:"10.webp",provider:"Booongo",name:"The Dog House",symbol:"vsqwewagfsrg",category:"Slots",use:"true",state:"On Maintenance",createdAt:"2025-01-09T00:47:37"},
  {id:11,logo:"11.webp",provider:"jiLi",name:"Gready Fortune",symbol:"vs10bbdice",category:"Slots",use:"true",state:"On Maintenance",createdAt:"2025-01-09T00:47:37"},
  {id:12,logo:"12.webp",provider:"Pocket Games Soft",name:"Gates Of Olympus",symbol:"vsuoylhikgyuhk",category:"Slots",use:"true",state:"On Maintenance",createdAt:"2025-01-09T00:47:37"},
  {id:13,logo:"1.webp",provider:"pragmatic play",name:"Lusky's Wild Pub",symbol:"vswafsdfgsdg",category:"Slots",use:"true",state:"On Maintenance",createdAt:"2025-01-09T00:47:37"},
  {id:14,logo:"2.webp",provider:"DreamingGaming",name:"Wild Wild Jocker",symbol:"vssdfgser",category:"Slots",use:"true",state:"On Maintenance",createdAt:"2025-01-09T00:47:37"},
  {id:15,logo:"3.webp",provider:"pragmatic play",name:"The Dog House",symbol:"vshuklihihi",category:"Slots",use:"true",state:"On Maintenance",createdAt:"2025-01-09T00:47:37"},
  {id:16,logo:"4.webp",provider:"Pocket Games Soft",name:"Lusky's Wild Pub",symbol:"vs10bbdice",category:"Slots",use:"true",state:"On Maintenance",createdAt:"2025-01-09T00:47:37"},
  {id:17,logo:"5.webp",provider:"Asia Gaming",name:"Gates",symbol:"vs10bbdice",category:"Slots",use:"true",state:"On Maintenance",createdAt:"2025-01-09T00:47:37"},
  {id:18,logo:"6.webp",provider:"Booongo",name:"Lusky's Wild Pub",symbol:"vsuiluyhit",category:"Slots",use:"true",state:"Normal",createdAt:"2025-01-09T00:47:37"},
  {id:19,logo:"7.webp",provider:"pragmatic play",name:"Wild Wild Jocker",symbol:"vs10bbdice",category:"Slots",use:"true",state:"On Maintenance",createdAt:"2025-01-09T00:47:37"},
  {id:20,logo:"8.webp",provider:"Pocket Games Soft",name:"Gready Fortune",symbol:"vygft",category:"Slots",use:"true",state:"On Maintenance",createdAt:"2025-01-09T00:47:37"},
  {id:21,logo:"9.webp",provider:"CQ9",name:"Gready Fortune",symbol:"vs10bbdice",category:"Slots",use:"true",state:"Normal",createdAt:"2025-01-09T00:47:37"},
  {id:22,logo:"10.webp",provider:"pragmatic play",name:"Cuty Cat",symbol:"vs10bbdice",category:"Slots",use:"true",state:"Normal",createdAt:"2025-01-09T00:47:37"},
  {id:23,logo:"11.webp",provider:"Booongo",name:"Goat",symbol:"vsrhdthdth",category:"Slots",use:"true",state:"Normal",createdAt:"2025-01-09T00:47:37"},
  {id:24,logo:"12.webp",provider:"pragmatic play",name:"Lusky's Wild Pub",symbol:"vs10bbdice",category:"Slots",use:"true",state:"Normal",createdAt:"2025-01-09T00:47:37"},
  {id:25,logo:"1.webp",provider:"Pocket Games Soft",name:"The Dog House",symbol:"vs10bbdice",category:"Slots",use:"true",state:"Normal",createdAt:"2025-01-09T00:47:37"},
  {id:26,logo:"2.webp",provider:"jiLi",name:"WildWild Jocker",symbol:"vs10bbdice",category:"Slots",use:"true",state:"On Maintenance",createdAt:"2025-01-09T00:47:37"},
  {id:27,logo:"3.webp",provider:"DreamingGaming",name:"Grady Fourtune Pig",symbol:"vsvcbxcvb",category:"Slots",use:"true",state:"Normal",createdAt:"2025-01-09T00:47:37"},
  {id:28,logo:"4.webp",provider:"Play Soon",name:"Lusky's Wild Pub",symbol:"vstuyktyuk",category:"Slots",use:"true",state:"Normal",createdAt:"2025-01-09T00:47:37"},
  {id:29,logo:"5.webp",provider:"Asia Gaming",name:"Sweet vernanza",symbol:"vssdgfsf",category:"Slots",use:"true",state:"Normal",createdAt:"2025-01-09T00:47:37"}
  ]

const providers = ["Pragmatic Play", "CQ9", "Pocket Games Soft", "Booongo", "Playson", "Evolution", "Habanero", "JiLi", "DreamGaming", "Asia Gaming"]

export function GameList() {
  const [provider, setProvider] = useState("total")

  const handleChangeProvider = useCallback((event) => {
    setProvider(event.target.value);
  }, []);

  return(
    <DashboardContent maxWidth="xl">
      <PageTitle>Game List</PageTitle>
      <Block title="Search" footerAction={<Button fullWidth variant="contained" color="success">Search</Button>}>
        <Grid container sx={{ backgroundColor: "rgba(0,0,0,.3)" }}>
          <Grid size={4} sx={{ display: "flex", alignItems: "center", borderRight: "1px solid #333", borderBottom: "1px solid #333", p: 2 }}>
            <Typography variant="subtitle1">Provider</Typography>
          </Grid>
          <Grid size={8} sx={{ p: 2, borderBottom: "1px solid #333" }}>
            <TextField fullWidth select value={provider} onChange={handleChangeProvider} size="small">
              <MenuItem key={-1} value="total">Total</MenuItem>
              {providers.map((item, index)=><MenuItem key={index} value={item}>{item}</MenuItem>)}
            </TextField>
          </Grid>
          <Grid size={4} sx={{ display: "flex", alignItems: "center", borderRight: "1px solid #333", borderBottom: "1px solid #333", p: 2 }}>
            <Typography variant="subtitle1">Game Name/Symbol</Typography>
          </Grid>
          <Grid size={8} sx={{ p: 2, borderBottom: "1px solid #333" }}>
            <TextField fullWidth size="small" placeholder="Game Name/Symbol" />
          </Grid>
          <Grid size={4} sx={{ display: "flex", alignItems: "center", borderRight: "1px solid #333", borderBottom: "1px solid #333", p: 2 }}>
            <Typography variant="subtitle1">State</Typography>
          </Grid>
          <Grid size={8} sx={{ p: 2, borderBottom: "1px solid #333" }}>
            <FormControlLabel
              label="Normal"
              control={
                <Checkbox color="info" size="medium" defaultChecked />
              }
            />
            <FormControlLabel
              label="On Maintenance"
              control={
                <Checkbox color="info" size="medium" />
              }
            />
          </Grid>
        </Grid>
      </Block>
      
      <Block
        title={`Games List (Total:${Games.length}, ON:${Games.length}, OFF:0)`}
        headerAction={
          <Box sx={{ display: "flex", gap: "20px" }}>
            <Button variant="contained" color="info">Set All Games ON</Button>
            <Button variant="contained" color="error">Set All Games OFF</Button>
          </Box>
        }
      >
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

