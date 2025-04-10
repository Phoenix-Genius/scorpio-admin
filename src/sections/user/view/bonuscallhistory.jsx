"use client"

import { DataGrid } from "@mui/x-data-grid";
import { Box, Button, MenuItem, Switch, TextField, Typography, FormControlLabel, Checkbox, IconButton } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Label } from 'src/components/label';
import { DashboardContent } from 'src/layouts/dashboard/content';
import { PageTitle } from 'src/components/page-title/page-title';
import { Block } from 'src/components/block';
import { useCallback, useState } from "react";
import { _user_bonus_calls } from "src/_mock";


// ----------------------------------------------------------------------

const columns = [
  {
    field: 'id',
    width: 100,
    headerName: 'ISSUE ID',
    align: 'center',
    color: "info",
    headerAlign: 'center',
    renderCell: params => `#${params.row.id}`
  },
  {
    field: 'game',
    width: 200,
    headerName: 'GAME NAME',
    align: 'center',
    headerAlign: 'center',
    renderCell: params => `${params.row.game}`
  },
  {
    field: 'user',
    headerName: 'User',
    width: 250,
    align: 'center',
    headerAlign: 'center',
    renderCell: params => (
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", height: 1 }}>
        <Typography variant="subtitle2">{params.row.user.name}</Typography>
        <Typography variant="subtitle2" color="textDisabled">{params.row.user.loginId}</Typography>
      </Box>
    )
  },
  {
    field: 'total',
    headerName: 'PLAYED/TOTAL',
    width: 200,
    align: 'center',
    headerAlign: 'center',
    renderCell: params => `${params.row.total}`
  },
  {
    field: 'date',
    headerName: 'EXPIRATION DATE',
    width: 250,
    align: 'center',
    headerAlign: 'center',
    renderCell: params => `${params.row.date}`
  },
  {
    field: 'winAmount',
    headerName: 'Win Amount',
    width: 100,
    align: 'center',
    headerAlign: 'center',
    renderCell: params => `${params.row.winAmount}`
  },
  {
    field: 'functions',
    headerName: 'ACTION',
    width: 150,
    align: 'center',
    headerAlign: 'center',
    renderCell: params => (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 2, height: 1 }}>
        <IconButton size="small"><i className="icmn-bin2"></i></IconButton>
        <IconButton size="small"><i className="icmn-eye"></i></IconButton>
        <IconButton size="small"><i className="fa fa-ellipsis-v"></i></IconButton>
      </Box>
    )
  },
];

const providers = ["@baalbet", "CQ9", "Habanero", "JiLi", "DreamGaming", "Asia Gaming"];
const gamenames = ["The Dog Hose Megaways", "Gates of Olympus", "Sugar Rush 1000", "Big Bass Splash"];
const expires = ["2 Days", "3 Days", "A week", "5 Days"]


export function BonusCallHistory() {

  const [provider, setProvider] = useState("@baalbet");
  const [game, setGame] = useState("The Dog Hose Megaways");
  const [expire, setExpire] = useState("2 Days");
  const handleChangeProvider = useCallback((event) => {
    setProvider(event.target.value);
  }, []);
  const handleChangeGame = useCallback((event) => {
    setGame(event.target.value);
  }, []);
  const handleChangeExpire = useCallback((event) => {
    setExpire(event.target.value);
  }, []);

  return (
    <DashboardContent maxWidth="xl">
      <PageTitle>Issue Free Spin Bonus</PageTitle>
      <Grid container >
        <Grid size={1} sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: 1 }}>
          <Typography variant="subtitle1" sx={{ font: "2rem" }}>Agent</Typography>
        </Grid>
        <Grid size={3} sx={{ p: 1 }}>
          <TextField fullWidth select value={provider} onChange={handleChangeProvider} size="small">
            <MenuItem key={-1} value="@baalbet"></MenuItem>
            {providers.map((item, index) => <MenuItem key={index} value={item}>{item}</MenuItem>)}
          </TextField>
        </Grid>
        <Grid size={1} sx={{ display: "flex", alignItems: "center", justifyContent: "center", p: 1 }}>
          <Typography variant="subtitle1">User ID</Typography>
        </Grid>
        <Grid size={3} sx={{ p: 1 }}>
          <TextField fullWidth size="small" placeholder="UserID" />
        </Grid>
        <Grid size={1} sx={{ display: "flex", alignItems: "center", justifyContent: "center", p: 1 }}>
          <Typography variant="subtitle1">Game Name</Typography>
        </Grid>
        <Grid size={3} sx={{ p: 1 }}>
          <TextField fullWidth select value={game} onChange={handleChangeGame} size="small">
            <MenuItem key={-1} value="The Dog Hose Megaways"></MenuItem>
            {gamenames.map((item, index) => <MenuItem key={index} value={item}>{item}</MenuItem>)}
          </TextField>
        </Grid>
        <Grid size={1} sx={{ display: "flex", alignItems: "center", justifyContent: "center", p: 1 }}>
          <Typography variant="subtitle1">Number of Free Spin</Typography>
        </Grid>
        <Grid size={3} sx={{ p: 1 }}>
          <TextField fullWidth size="small" placeholder="Number of Free Spin" />
        </Grid>
        <Grid size={1} sx={{ display: "flex", alignItems: "center", justifyContent: "center", p: 1 }}>
          <Typography variant="subtitle1">Bet level</Typography>
        </Grid>
        <Grid size={3} sx={{ p: 1 }}>
          <TextField fullWidth size="small" placeholder="Bet level" />
        </Grid>
        <Grid size={1} sx={{ display: "flex", alignItems: "center", justifyContent: "center", p: 1 }}>
          <Typography variant="subtitle1">Expires in</Typography>
        </Grid>
        <Grid size={3} sx={{ p: 1 }}>
          <TextField fullWidth select value={expire} onChange={handleChangeExpire} size="small">
            <MenuItem key={-1} value="The Dog Hose Megaways"></MenuItem>
            {expires.map((item, index) => <MenuItem key={index} value={item}>{item}</MenuItem>)}
          </TextField>
        </Grid>
      </Grid>
      <Button fullWidth variant="contained" color="success">Issue Free Spin Bonus</Button>

      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 4 }}>
        <PageTitle>Free Spin Bonus List</PageTitle>
        <Box>
          <FormControlLabel
            label="Completed"
            control={
              <Checkbox color="secondary" size="small" sx={{ py: 0, pr: 0.5 }} />
            }
          />
          <FormControlLabel
            label="In Progress"
            sx={{ height: 10 }}
            size="small"
            control={
              <Checkbox color="secondary" size="small" defaultChecked sx={{ py: 0, pr: 0.5 }} />
            }
          />
        </Box>
      </Box>

      <DataGrid
        rows={_user_bonus_calls}
        columns={columns}
        initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
        pageSizeOptions={[5, 10, 20]}
      />
    </DashboardContent>
  )
}
