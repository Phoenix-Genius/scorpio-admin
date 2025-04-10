"use client"

import { DataGrid } from "@mui/x-data-grid";
import { Box, Button, Checkbox, FormControlLabel, MenuItem, Switch, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Label } from 'src/components/label';
import { DashboardContent } from 'src/layouts/dashboard/content';
import { PageTitle } from 'src/components/page-title/page-title';
import { Block } from 'src/components/block';
import { useCallback, useState } from "react";
import { MobileDatePicker } from "@mui/x-date-pickers";
import dayjs from 'dayjs';
import { LocalizationProvider } from 'src/locales';
import { formatNumber } from "src/utils/format-number";

// ----------------------------------------------------------------------

const columns = [
  {
    field: 'id',
    width: 200,
    headerName: 'Users',
    align: 'center',
    headerAlign: 'center',
    renderCell: params => `#${params.row.id}`
  },
  {
    field: 'parent',
    width: 200,
    headerName: 'Parent',
    align: 'center',
    headerAlign: 'center',
    renderCell: params => (
      <Box>
        <Typography variant="subtitle2">{params.row.parent.name}</Typography>
        <Typography variant="subtitle2" color="textDisabled">{params.row.parent.loginId}</Typography>
      </Box>
    )
  },
  {
    field: 'betting',
    headerName: 'Betting',
    width: 200,
    align: 'center',
    headerAlign: 'center',
    renderCell: params => (
      <Box>
        <Typography variant="subtitle2">{formatNumber(params.row.betting.prev)} <i className="fa fa-try"></i></Typography>
        <Typography variant="subtitle2" color="yellow">{formatNumber(params.row.betting.curr)} <i className="fa fa-try"></i></Typography>
      </Box>
    )
  },
  {
    field: 'win',
    headerName: 'Win',
    width: 200,
    align: 'center',
    headerAlign: 'center',
    renderCell: params => (
      <Box>
        <Typography variant="subtitle2">{formatNumber(params.row.win.prev)} <i className="fa fa-try"></i></Typography>
        <Typography variant="subtitle2" color="yellow">{formatNumber(params.row.win.curr)} <i className="fa fa-try"></i></Typography>
      </Box>
    )
  },
  {
    field: 'profit',
    headerName: 'Profit',
    width: 200,
    align: 'center',
    headerAlign: 'center',
    renderCell: params => (
      <Box>
        <Typography variant="subtitle2">{formatNumber(params.row.profit.prev)} <i className="fa fa-try"></i></Typography>
        <Typography variant="subtitle2" color="yellow">{formatNumber(params.row.profit.curr)} <i className="fa fa-try"></i></Typography>
      </Box>
    )
  },

  {
    field: 'bonusCall',
    headerName: 'Bonus Call',
    width: 200,
    align: 'center',
    headerAlign: 'center',
    renderCell: params => (
      <Box>
        <Typography>{params.row.bonusCall}</Typography>
        {/* <EditIcon /> */}
      </Box>
    )
  },
];

const statsPerUser = [{ id: 56240, parent: { name: "baalbet", loginId: "@Baalbet" }, betting: { prev: 0, curr: 0 }, win: { prev: 0, curr: 0 }, profit: { prev: 0, curr: 0 }, bonusCall: 0 },
{ id: 56241, parent: { name: "baalbet", loginId: "@Baalbet" }, betting: { prev: 0, curr: 0 }, win: { prev: 0, curr: 0 }, profit: { prev: 0, curr: 0 }, bonusCall: 0 },
{ id: 56242, parent: { name: "baalbet", loginId: "@Baalbet" }, betting: { prev: 0, curr: 0 }, win: { prev: 0, curr: 0 }, profit: { prev: 0, curr: 0 }, bonusCall: 0 },
{ id: 56243, parent: { name: "baalbet", loginId: "@Baalbet" }, betting: { prev: 0, curr: 0 }, win: { prev: 0, curr: 0 }, profit: { prev: 0, curr: 0 }, bonusCall: 0 },
{ id: 56244, parent: { name: "baalbet", loginId: "@Baalbet" }, betting: { prev: 0, curr: 0 }, win: { prev: 0, curr: 0 }, profit: { prev: 0, curr: 0 }, bonusCall: 0 },
{ id: 56245, parent: { name: "baalbet", loginId: "@Baalbet" }, betting: { prev: 0, curr: 0 }, win: { prev: 0, curr: 0 }, profit: { prev: 0, curr: 0 }, bonusCall: 0 },
{ id: 56246, parent: { name: "baalbet", loginId: "@Baalbet" }, betting: { prev: 0, curr: 0 }, win: { prev: 0, curr: 0 }, profit: { prev: 0, curr: 0 }, bonusCall: 0 },
{ id: 56247, parent: { name: "baalbet", loginId: "@Baalbet" }, betting: { prev: 0, curr: 0 }, win: { prev: 0, curr: 0 }, profit: { prev: 0, curr: 0 }, bonusCall: 0 },
{ id: 56248, parent: { name: "baalbet", loginId: "@Baalbet" }, betting: { prev: 0, curr: 0 }, win: { prev: 0, curr: 0 }, profit: { prev: 0, curr: 0 }, bonusCall: 0 },
{ id: 56249, parent: { name: "baalbet", loginId: "@Baalbet" }, betting: { prev: 0, curr: 0 }, win: { prev: 0, curr: 0 }, profit: { prev: 0, curr: 0 }, bonusCall: 0 },
{ id: 56250, parent: { name: "baalbet", loginId: "@Baalbet" }, betting: { prev: 0, curr: 0 }, win: { prev: 0, curr: 0 }, profit: { prev: 0, curr: 0 }, bonusCall: 0 },
{ id: 56251, parent: { name: "baalbet", loginId: "@Baalbet" }, betting: { prev: 0, curr: 0 }, win: { prev: 0, curr: 0 }, profit: { prev: 0, curr: 0 }, bonusCall: 0 },
{ id: 56252, parent: { name: "baalbet", loginId: "@Baalbet" }, betting: { prev: 0, curr: 0 }, win: { prev: 0, curr: 0 }, profit: { prev: 0, curr: 0 }, bonusCall: 0 },
{ id: 56253, parent: { name: "baalbet", loginId: "@Baalbet" }, betting: { prev: 0, curr: 0 }, win: { prev: 0, curr: 0 }, profit: { prev: 0, curr: 0 }, bonusCall: 0 },
{ id: 56254, parent: { name: "baalbet", loginId: "@Baalbet" }, betting: { prev: 0, curr: 0 }, win: { prev: 0, curr: 0 }, profit: { prev: 0, curr: 0 }, bonusCall: 0 },
{ id: 56255, parent: { name: "baalbet", loginId: "@Baalbet" }, betting: { prev: 0, curr: 0 }, win: { prev: 0, curr: 0 }, profit: { prev: 0, curr: 0 }, bonusCall: 0 },
{ id: 56256, parent: { name: "baalbet", loginId: "@Baalbet" }, betting: { prev: 0, curr: 0 }, win: { prev: 0, curr: 0 }, profit: { prev: 0, curr: 0 }, bonusCall: 0 },
{ id: 56257, parent: { name: "baalbet", loginId: "@Baalbet" }, betting: { prev: 0, curr: 0 }, win: { prev: 0, curr: 0 }, profit: { prev: 0, curr: 0 }, bonusCall: 0 },
{ id: 56258, parent: { name: "baalbet", loginId: "@Baalbet" }, betting: { prev: 0, curr: 0 }, win: { prev: 0, curr: 0 }, profit: { prev: 0, curr: 0 }, bonusCall: 0 },
{ id: 56259, parent: { name: "baalbet", loginId: "@Baalbet" }, betting: { prev: 0, curr: 0 }, win: { prev: 0, curr: 0 }, profit: { prev: 0, curr: 0 }, bonusCall: 0 },
{ id: 56260, parent: { name: "baalbet", loginId: "@Baalbet" }, betting: { prev: 0, curr: 0 }, win: { prev: 0, curr: 0 }, profit: { prev: 0, curr: 0 }, bonusCall: 0 },
{ id: 56261, parent: { name: "baalbet", loginId: "@Baalbet" }, betting: { prev: 0, curr: 0 }, win: { prev: 0, curr: 0 }, profit: { prev: 0, curr: 0 }, bonusCall: 0 },
{ id: 56262, parent: { name: "baalbet", loginId: "@Baalbet" }, betting: { prev: 0, curr: 0 }, win: { prev: 0, curr: 0 }, profit: { prev: 0, curr: 0 }, bonusCall: 0 },
{ id: 56263, parent: { name: "baalbet", loginId: "@Baalbet" }, betting: { prev: 0, curr: 0 }, win: { prev: 0, curr: 0 }, profit: { prev: 0, curr: 0 }, bonusCall: 0 },
{ id: 56264, parent: { name: "baalbet", loginId: "@Baalbet" }, betting: { prev: 0, curr: 0 }, win: { prev: 0, curr: 0 }, profit: { prev: 0, curr: 0 }, bonusCall: 0 },
{ id: 56265, parent: { name: "baalbet", loginId: "@Baalbet" }, betting: { prev: 0, curr: 0 }, win: { prev: 0, curr: 0 }, profit: { prev: 0, curr: 0 }, bonusCall: 0 },
{ id: 56266, parent: { name: "baalbet", loginId: "@Baalbet" }, betting: { prev: 0, curr: 0 }, win: { prev: 0, curr: 0 }, profit: { prev: 0, curr: 0 }, bonusCall: 0 },
{ id: 56267, parent: { name: "baalbet", loginId: "@Baalbet" }, betting: { prev: 0, curr: 0 }, win: { prev: 0, curr: 0 }, profit: { prev: 0, curr: 0 }, bonusCall: 0 },
{ id: 56268, parent: { name: "baalbet", loginId: "@Baalbet" }, betting: { prev: 0, curr: 0 }, win: { prev: 0, curr: 0 }, profit: { prev: 0, curr: 0 }, bonusCall: 0 },
{ id: 56269, parent: { name: "baalbet", loginId: "@Baalbet" }, betting: { prev: 0, curr: 0 }, win: { prev: 0, curr: 0 }, profit: { prev: 0, curr: 0 }, bonusCall: 0 },
{ id: 56270, parent: { name: "baalbet", loginId: "@Baalbet" }, betting: { prev: 0, curr: 0 }, win: { prev: 0, curr: 0 }, profit: { prev: 0, curr: 0 }, bonusCall: 0 },
{ id: 56271, parent: { name: "baalbet", loginId: "@Baalbet" }, betting: { prev: 0, curr: 0 }, win: { prev: 0, curr: 0 }, profit: { prev: 0, curr: 0 }, bonusCall: 0 },
{ id: 56272, parent: { name: "baalbet", loginId: "@Baalbet" }, betting: { prev: 0, curr: 0 }, win: { prev: 0, curr: 0 }, profit: { prev: 0, curr: 0 }, bonusCall: 0 },
{ id: 56273, parent: { name: "baalbet", loginId: "@Baalbet" }, betting: { prev: 0, curr: 0 }, win: { prev: 0, curr: 0 }, profit: { prev: 0, curr: 0 }, bonusCall: 0 },
]

const providers = ["@baalbet", "CQ9", "Habanero", "JiLi", "DreamGaming", "Asia Gaming"]


export function StatisticsPerUser() {
  const [provider, setProvider] = useState("@baalbet")
  const handleChangeProvider = useCallback((event) => {
    setProvider(event.target.value);
  }, []);
  const [startValue, setStartValue] = useState(dayjs(new Date()));
  const [endValue, setEndValue] = useState(dayjs(new Date()));

  return (
    <DashboardContent maxWidth="xl">
      <PageTitle>Stats Per User</PageTitle>
      <Block title="Search" footerAction={<Button fullWidth variant="contained" color="success">Search</Button>}>
        <Grid container sx={{ backgroundColor: "rgba(0,0,0,.3)" }}>
          <Grid size={4} sx={{ display: "flex", alignItems: "center", borderRight: "1px solid #333", borderBottom: "1px solid #333", p: 2 }}>
            <Typography variant="subtitle1">Parent Agent</Typography>
          </Grid>
          <Grid size={8} sx={{ p: 2, borderBottom: "1px solid #333" }}>
            <TextField fullWidth select value={provider} onChange={handleChangeProvider} size="small">
              <MenuItem key={-1} value="@baalbet">Baalbet</MenuItem>
              {providers.map((item, index) => <MenuItem key={index} value={item}>{item}</MenuItem>)}
            </TextField>
            <FormControlLabel
              label="Whether or not sub-agent is included in search"
              control={
                <Checkbox color="info" size="medium" defaultChecked />
              }
            />
          </Grid>
          <Grid size={4} sx={{ display: "flex", alignItems: "center", borderRight: "1px solid #333", borderBottom: "1px solid #333", p: 2 }}>
            <Typography variant="subtitle1">Period (start - end)</Typography>
          </Grid>
          <Grid size={8} sx={{ p: 2, gap: 5, borderBottom: "1px solid #333", display: "flex" }}>
            <LocalizationProvider>
              <Grid size={6}>
                <MobileDatePicker
                  orientation="portrait"
                  value={startValue}
                  onChange={(newValue) => setStartValue(newValue)}
                  slotProps={{ textField: { fullWidth: true } }}
                />
              </Grid>
              <Grid size={6}>
                <MobileDatePicker
                  orientation="portrait"
                  value={endValue}
                  onChange={(newValue) => setEndValue(newValue)}
                  slotProps={{ textField: { fullWidth: true } }}
                />
              </Grid>
            </LocalizationProvider>
          </Grid>
          <Grid size={4} sx={{ display: "flex", alignItems: "center", borderRight: "1px solid #333", borderBottom: "1px solid #333", p: 2 }}>
            <Typography variant="subtitle1">User Name</Typography>
          </Grid>
          <Grid size={8} sx={{ p: 2, borderBottom: "1px solid #333" }}>
            <TextField fullWidth size="small" placeholder="User Name" />
          </Grid>
        </Grid>
      </Block>

      <Block title={`Stats Per User (Total:${statsPerUser.length})`}>
        <DataGrid
          rows={statsPerUser}
          columns={columns}
          initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
          pageSizeOptions={[5, 10, 20]}
        />
      </Block>
    </DashboardContent>
  )
}
