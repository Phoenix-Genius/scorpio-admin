"use client"

import { DataGrid } from "@mui/x-data-grid";
import { Box, Button, MenuItem, Switch, TextField, Typography, FormControlLabel, Checkbox } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Label } from 'src/components/label';
import { DashboardContent } from 'src/layouts/dashboard/content';
import { PageTitle } from 'src/components/page-title/page-title';
import { Block } from 'src/components/block';
import { useCallback, useState } from "react";


// ----------------------------------------------------------------------

const columns = [
  {
    field: 'id',
    width: 100,
    headerName: '#',
    align: 'center',
    color: "info",
    headerAlign: 'center',
    renderCell: params => `#${params.row.id}`
  },
  {
    field: 'game',
    headerName: 'TOTAL',
    width: 200,
    align: 'center',
    headerAlign: 'center',
    renderCell: params => `${params.row.icon}`
  },
  {
    field: 'user',
    headerName: 'CLIENT',
    width: 300,
    align: 'center',
    headerAlign: 'center',
    renderCell: params => (
      <Box sx={{ display: "flex", flexDirection: "row", height: 1 }}>
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", height: 1 }}>
          <img style={{ width: "50px", borderRadius: 30 }} src={`/assets/images/mock/avatar/avatar-${params.row.logo}`} alt="logo" />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", height: 1, ml: 1 }}>
          <Typography variant="subtitle2" sx={{ display: "flex", justifyContent: "flex-start" }}>{params.row.user.name}</Typography>
          <Typography variant="subtitle2" color="textDisabled" sx={{ display: "flex", justifyContent: "flex-start" }}>{params.row.user.loginId}</Typography>
        </Box>
      </Box>
    )
  },
  {
    field: 'total',
    headerName: 'TOTAL',
    width: 200,
    align: 'center',
    headerAlign: 'center',
    renderCell: params => `${params.row.total}`
  },
  {
    field: 'date',
    headerName: 'ISSUED DATE',
    width: 250,
    align: 'center',
    headerAlign: 'center',
    renderCell: params => `${params.row.date}`
  },
  {
    field: 'winAmount',
    headerName: 'BALANCE',
    width: 100,
    align: 'center',
    headerAlign: 'center',
    renderCell: params =>
      params.row.winAmount == "" ? (
        <Label color="success" variant="filled">
          Paid
        </Label>
      ) : (
        `${params.row.winAmount}`
      )
  },
  {
    field: 'functions',
    headerName: 'ACTION',
    width: 150,
    align: 'center',
    headerAlign: 'center',
    renderCell: params => (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 2, height: 1 }}>
        🎁 👁‍🗨
      </Box>
    )
  },
];

const histroys = [
  { id: 4910, icon: "icon", logo: "25.webp", user: { name: "NFL39842", loginId: "NFL39842@gmail.com" }, total: "&3428", date: "22 Oct 2019", winAmount: "$885" }, { id: 4909, icon: "icon", logo: "2.webp", user: { name: "Richard Payne", loginId: "Richard Payne@gmail.com" }, total: "&2873", date: "08 Mar 2022", winAmount: "$889" }, { id: 4908, icon: "icon", logo: "3.webp", user: { name: "Jennifer Summers", loginId: "Jennifer Summers@gmail.com" }, total: "&2391", date: "21 Oct 2020", winAmount: "$870" }, { id: 4907, icon: "icon", logo: "4.webp", user: { name: "Mr.Justin Richardson", loginId: "Mr.Justin Richardson@gmail.com" }, total: "&3912", date: "23 Mar 2021", winAmount: "" }, { id: 4906, icon: "icon", logo: "25.webp", user: { name: "NFL39842", loginId: "NFL39842@gmail.com" }, total: "&1092", date: "26 Aug 2019", winAmount: "" }, { id: 4905, icon: "icon", logo: "25.webp", user: { name: "NFL39842", loginId: "NFL39842@gmail.com" }, total: "&2060", date: "24 Oct 2022", winAmount: "-$231" }, { id: 4904, icon: "icon", logo: "25.webp", user: { name: "NFL39842", loginId: "NFL39842@gmail.com" }, total: "&5081", date: "21 Oct 2025", winAmount: "" }, { id: 4903, icon: "icon", logo: "25.webp", user: { name: "NFL39842", loginId: "NFL39842@gmail.com" }, total: "&3428", date: "26 Aug 2020", winAmount: "$880" }, { id: 4902, icon: "icon", logo: "25.webp", user: { name: "NFL39842", loginId: "NFL39842@gmail.com" }, total: "&5601", date: "23 Jan 2025", winAmount: "$883" }, { id: 4901, icon: "icon", logo: "25.webp", user: { name: "NFL39842", loginId: "NFL39842@gmail.com" }, total: "&3428", date: "24 Jan 2022", winAmount: "" }, { id: 4900, icon: "icon", logo: "25.webp", user: { name: "NFL39842", loginId: "NFL39842@gmail.com" }, total: "&3428", date: "26 Oct 2019", winAmount: "" }
]

const providers = ["@baalbet", "CQ9", "Habanero", "JiLi", "DreamGaming", "Asia Gaming"];
const gamenames = ["The Dog Hose Megaways", "Gates of Olympus", "Sugar Rush 1000", "Big Bass Splash"];
const expires = ["2 Days", "3 Days", "A week", "5 Days"]


export function One() {

  const [provider, setProvider] = useState("@baalbet");
  const handleChangeProvider = useCallback((event) => {
    setProvider(event.target.value);
  }, []);

  return (
    <DashboardContent maxWidth="xl">
      <Box sx={{ backgroundColor: "#100f0f" }}>
        <Grid container >
          <Grid size={1} sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: 1 }}>
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", height: 1 }}>
              <Typography variant="subtitle1">24</Typography>
              <Typography variant="subtitle2" color="textDisabled">Clients</Typography>
            </Box>
          </Grid>
          <Grid size={2} sx={{ p: 1 }}>
            <Typography variant="subtitle1" sx={{ borderRight: "1px solid #333", display: "flex", justifyContent: "center", ml: 15 }}><i className="fa fa-user"></i></Typography>
          </Grid>
          <Grid size={1} sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: 1 }}>
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", height: 1 }}>
              <Typography variant="subtitle1">165</Typography>
              <Typography variant="subtitle2" color="textDisabled">Invoices</Typography>
            </Box>
          </Grid>
          <Grid size={2} sx={{ p: 1 }}>
            <Typography variant="subtitle1" sx={{ borderRight: "1px solid #333", display: "flex", justifyContent: "center", ml: 15 }}><i className="fa fa-wpforms"></i></Typography>
          </Grid>
          <Grid size={1} sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: 1 }}>
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", height: 1 }}>
              <Typography variant="subtitle1">$2.46k</Typography>
              <Typography variant="subtitle2" color="textDisabled">Paid</Typography>
            </Box>
          </Grid>
          <Grid size={2} sx={{ p: 1 }}>
            <Typography variant="subtitle1" sx={{ borderRight: "1px solid #333", display: "flex", justifyContent: "center", ml: 15 }}><i className="fa fa-credit-card-alt"></i></Typography>
          </Grid>
          <Grid size={1} sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: 1 }}>
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", height: 1 }}>
              <Typography variant="subtitle1">$876</Typography>
              <Typography variant="subtitle2" color="textDisabled">Unpaid</Typography>
            </Box>
          </Grid>
          <Grid size={2} sx={{ p: 1 }}>
            <Typography variant="subtitle1" sx={{ borderRight: "1px solid #333", display: "flex", justifyContent: "center", ml: 15 }}><i className="icmn-coin-dollar"></i></Typography>
          </Grid>

        </Grid>
      </Box>

      <Box >
        <Grid container>
          <Grid size={6} sx={{ p: 1, display: "flex", justifyContent: "flex-start" }}>
            <Button variant="contained" color="info">+ Create Invoice</Button>
          </Grid>
          <Grid size={3} sx={{ p: 1 }}>
            <TextField fullWidth size="small" placeholder="Search Invoice" />
          </Grid>
          <Grid size={3} sx={{ p: 1 }}>
            <TextField fullWidth select value={provider} onChange={handleChangeProvider} size="small" sx={{ ml: 0 }}>
              <MenuItem key={-1} value="The Dog Hose Megaways"></MenuItem>
              {providers.map((item, index) => <MenuItem key={index} value={item}>{item}</MenuItem>)}
            </TextField>
          </Grid>
        </Grid>


      </Box>
      <DataGrid
        rows={histroys}
        columns={columns}
        initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
        pageSizeOptions={[5, 10, 20]}
      />

    </DashboardContent>
  )
}
