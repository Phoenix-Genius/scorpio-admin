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
    field: 'date',
    width: 150,
    headerName: 'Date',
    align: 'center',
    headerAlign: 'center'
  },
  {
    field: 'betting',
    headerName: 'Betting',
    width: 150,
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
    width: 150,
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
    width: 150,
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
    width: 100,
    align: 'center',
    headerAlign: 'center',
    renderCell: params => (
      <Box>
        <Typography>{formatNumber(params.row.bonusCall)}</Typography>
        {/* <EditIcon /> */}
      </Box>
    )
  },
  {
    field: 'subBetting',
    headerName: 'Betting(Sub)',
    width: 150,
    align: 'center',
    headerAlign: 'center',
    renderCell: params => (
      <Box>
        <Typography variant="subtitle2">{formatNumber(params.row.subBetting.prev)} <i className="fa fa-try"></i></Typography>
        <Typography variant="subtitle2" color="yellow">{formatNumber(params.row.subBetting.curr)} <i className="fa fa-try"></i></Typography>
      </Box>
    )
  },
  {
    field: 'subWin',
    headerName: 'Win(Sub)',
    width: 150,
    align: 'center',
    headerAlign: 'center',
    renderCell: params => (
      <Box>
        <Typography variant="subtitle2">{formatNumber(params.row.subWin.prev)} <i className="fa fa-try"></i></Typography>
        <Typography variant="subtitle2" color="yellow">{formatNumber(params.row.subWin.curr)} <i className="fa fa-try"></i></Typography>
      </Box>
    )
  },
  {
    field: 'subProfit',
    headerName: 'Profit(Sub)',
    width: 100,
    align: 'center',
    headerAlign: 'center',
    renderCell: params => (
      <Box>
        <Typography variant="subtitle2">{formatNumber(params.row.subProfit.prev)} <i className="fa fa-try"></i></Typography>
        <Typography variant="subtitle2" color="yellow">{formatNumber(params.row.subProfit.curr)} <i className="fa fa-try"></i></Typography>
      </Box>
    )
  },

  {
    field: 'subBonusCall',
    headerName: 'Bonus Call(Sub)',
    width: 100,
    align: 'center',
    headerAlign: 'center',
    renderCell: params => (
      <Box>
        <Typography>{formatNumber(params.row.subBonusCall)}</Typography>
        {/* <EditIcon /> */}
      </Box>
    )
  },
];

const statsPerDay = [
  { id: 1, date: "2025-03-12", betting: { prev: 475, curr: 454 }, win: { prev: 7875, curr: 41 }, profit: { prev: 1230, curr: 41 }, bonusCall: 0, subBetting: { prev: 0, curr: 41 }, subWin: { prev: 0, curr: 0 }, subProfit: { prev: 0, curr: 0 }, subBonusCall: 26 },
  { id: 2, date: "2025-03-15", betting: { prev: 1230, curr: 41 }, win: { prev: 1230, curr: 41 }, profit: { prev: 1230, curr: 41 }, bonusCall: 0, subBetting: { prev: 0, curr: 41 }, subWin: { prev: 0, curr: 0 }, subProfit: { prev: 0, curr: 0 }, subBonusCall: 26 },
  { id: 3, date: "2025-03-16", betting: { prev: 1230, curr: 41 }, win: { prev: 1230, curr: 41 }, profit: { prev: 1230, curr: 41 }, bonusCall: 0, subBetting: { prev: 0, curr: 41 }, subWin: { prev: 0, curr: 0 }, subProfit: { prev: 0, curr: 0 }, subBonusCall: 26 },
  { id: 4, date: "2025-03-17", betting: { prev: 1230, curr: 41 }, win: { prev: 1230, curr: 41 }, profit: { prev: 1230, curr: 41 }, bonusCall: 0, subBetting: { prev: 0, curr: 41 }, subWin: { prev: 0, curr: 0 }, subProfit: { prev: 0, curr: 0 }, subBonusCall: 26 },
  { id: 5, date: "2025-03-18", betting: { prev: 1230, curr: 41 }, win: { prev: 1230, curr: 41 }, profit: { prev: 1230, curr: 41 }, bonusCall: 0, subBetting: { prev: 0, curr: 41 }, subWin: { prev: 0, curr: 0 }, subProfit: { prev: 0, curr: 0 }, subBonusCall: 26 },
  { id: 6, date: "2025-03-19", betting: { prev: 1230, curr: 41 }, win: { prev: 1230, curr: 41 }, profit: { prev: 1230, curr: 41 }, bonusCall: 0, subBetting: { prev: 0, curr: 41 }, subWin: { prev: 0, curr: 0 }, subProfit: { prev: 0, curr: 0 }, subBonusCall: 26 },
  { id: 7, date: "2025-03-20", betting: { prev: 1230, curr: 41 }, win: { prev: 1230, curr: 41 }, profit: { prev: 1230, curr: 41 }, bonusCall: 0, subBetting: { prev: 0, curr: 41 }, subWin: { prev: 0, curr: 0 }, subProfit: { prev: 0, curr: 0 }, subBonusCall: 26 },
  { id: 8, date: "2025-03-21", betting: { prev: 1230, curr: 41 }, win: { prev: 1230, curr: 41 }, profit: { prev: 1230, curr: 41 }, bonusCall: 0, subBetting: { prev: 0, curr: 41 }, subWin: { prev: 0, curr: 0 }, subProfit: { prev: 0, curr: 0 }, subBonusCall: 26 },
  { id: 9, date: "2025-03-22", betting: { prev: 1230, curr: 41 }, win: { prev: 1230, curr: 41 }, profit: { prev: 1230, curr: 41 }, bonusCall: 0, subBetting: { prev: 0, curr: 41 }, subWin: { prev: 0, curr: 0 }, subProfit: { prev: 0, curr: 0 }, subBonusCall: 26 },
  { id: 10, date: "2025-03-23", betting: { prev: 1230, curr: 41 }, win: { prev: 1230, curr: 41 }, profit: { prev: 1230, curr: 41 }, bonusCall: 0, subBetting: { prev: 0, curr: 41 }, subWin: { prev: 0, curr: 0 }, subProfit: { prev: 0, curr: 0 }, subBonusCall: 26 },
  { id: 11, date: "2025-03-24", betting: { prev: 1230, curr: 41 }, win: { prev: 1230, curr: 41 }, profit: { prev: 1230, curr: 41 }, bonusCall: 0, subBetting: { prev: 0, curr: 41 }, subWin: { prev: 0, curr: 0 }, subProfit: { prev: 0, curr: 0 }, subBonusCall: 26 },
  { id: 12, date: "2025-03-25", betting: { prev: 1230, curr: 41 }, win: { prev: 1230, curr: 41 }, profit: { prev: 1230, curr: 41 }, bonusCall: 0, subBetting: { prev: 0, curr: 41 }, subWin: { prev: 0, curr: 0 }, subProfit: { prev: 0, curr: 0 }, subBonusCall: 26 },
  { id: 13, date: "2025-03-26", betting: { prev: 1230, curr: 41 }, win: { prev: 1230, curr: 41 }, profit: { prev: 1230, curr: 41 }, bonusCall: 0, subBetting: { prev: 0, curr: 41 }, subWin: { prev: 0, curr: 0 }, subProfit: { prev: 0, curr: 0 }, subBonusCall: 26 },
  { id: 14, date: "2025-03-27", betting: { prev: 1230, curr: 41 }, win: { prev: 1230, curr: 41 }, profit: { prev: 1230, curr: 41 }, bonusCall: 0, subBetting: { prev: 0, curr: 41 }, subWin: { prev: 0, curr: 0 }, subProfit: { prev: 0, curr: 0 }, subBonusCall: 26 },
  { id: 15, date: "2025-03-28", betting: { prev: 1230, curr: 41 }, win: { prev: 1230, curr: 41 }, profit: { prev: 1230, curr: 41 }, bonusCall: 0, subBetting: { prev: 0, curr: 41 }, subWin: { prev: 0, curr: 0 }, subProfit: { prev: 0, curr: 0 }, subBonusCall: 26 },
  { id: 16, date: "2025-03-29", betting: { prev: 1230, curr: 41 }, win: { prev: 1230, curr: 41 }, profit: { prev: 1230, curr: 41 }, bonusCall: 0, subBetting: { prev: 0, curr: 41 }, subWin: { prev: 0, curr: 0 }, subProfit: { prev: 0, curr: 0 }, subBonusCall: 26 },
  { id: 17, date: "2025-03-30", betting: { prev: 1230, curr: 41 }, win: { prev: 1230, curr: 41 }, profit: { prev: 1230, curr: 41 }, bonusCall: 0, subBetting: { prev: 0, curr: 41 }, subWin: { prev: 0, curr: 0 }, subProfit: { prev: 0, curr: 0 }, subBonusCall: 26 },
  { id: 18, date: "2025-03-32", betting: { prev: 1230, curr: 41 }, win: { prev: 1230, curr: 41 }, profit: { prev: 1230, curr: 41 }, bonusCall: 0, subBetting: { prev: 0, curr: 41 }, subWin: { prev: 0, curr: 0 }, subProfit: { prev: 0, curr: 0 }, subBonusCall: 26 },
  { id: 19, date: "2025-04-01", betting: { prev: 1230, curr: 41 }, win: { prev: 1230, curr: 41 }, profit: { prev: 1230, curr: 41 }, bonusCall: 0, subBetting: { prev: 0, curr: 41 }, subWin: { prev: 0, curr: 0 }, subProfit: { prev: 0, curr: 0 }, subBonusCall: 26 },
  { id: 20, date: "2025-04-02", betting: { prev: 1230, curr: 41 }, win: { prev: 1230, curr: 41 }, profit: { prev: 1230, curr: 41 }, bonusCall: 0, subBetting: { prev: 0, curr: 41 }, subWin: { prev: 0, curr: 0 }, subProfit: { prev: 0, curr: 0 }, subBonusCall: 26 },
  { id: 21, date: "2025-04-03", betting: { prev: 1230, curr: 41 }, win: { prev: 1230, curr: 41 }, profit: { prev: 1230, curr: 41 }, bonusCall: 0, subBetting: { prev: 0, curr: 41 }, subWin: { prev: 0, curr: 0 }, subProfit: { prev: 0, curr: 0 }, subBonusCall: 26 },
  { id: 22, date: "2025-04-04", betting: { prev: 1230, curr: 41 }, win: { prev: 1230, curr: 41 }, profit: { prev: 1230, curr: 41 }, bonusCall: 0, subBetting: { prev: 0, curr: 41 }, subWin: { prev: 0, curr: 0 }, subProfit: { prev: 0, curr: 0 }, subBonusCall: 26 },
  { id: 23, date: "2025-04-05", betting: { prev: 1230, curr: 41 }, win: { prev: 1230, curr: 41 }, profit: { prev: 1230, curr: 41 }, bonusCall: 0, subBetting: { prev: 0, curr: 41 }, subWin: { prev: 0, curr: 0 }, subProfit: { prev: 0, curr: 0 }, subBonusCall: 26 },
  { id: 24, date: "2025-04-06", betting: { prev: 1230, curr: 41 }, win: { prev: 1230, curr: 41 }, profit: { prev: 1230, curr: 41 }, bonusCall: 0, subBetting: { prev: 0, curr: 41 }, subWin: { prev: 0, curr: 0 }, subProfit: { prev: 0, curr: 0 }, subBonusCall: 26 },
  { id: 25, date: "2025-04-07", betting: { prev: 1230, curr: 41 }, win: { prev: 1230, curr: 41 }, profit: { prev: 1230, curr: 41 }, bonusCall: 0, subBetting: { prev: 0, curr: 41 }, subWin: { prev: 0, curr: 0 }, subProfit: { prev: 0, curr: 0 }, subBonusCall: 26 },
  { id: 26, date: "2025-04-08", betting: { prev: 1230, curr: 41 }, win: { prev: 1230, curr: 41 }, profit: { prev: 1230, curr: 41 }, bonusCall: 0, subBetting: { prev: 0, curr: 41 }, subWin: { prev: 0, curr: 0 }, subProfit: { prev: 0, curr: 0 }, subBonusCall: 26 },
  { id: 27, date: "2025-04-09", betting: { prev: 1230, curr: 41 }, win: { prev: 1230, curr: 41 }, profit: { prev: 1230, curr: 41 }, bonusCall: 0, subBetting: { prev: 0, curr: 41 }, subWin: { prev: 0, curr: 0 }, subProfit: { prev: 0, curr: 0 }, subBonusCall: 26 },
  { id: 28, date: "2025-04-10", betting: { prev: 1230, curr: 41 }, win: { prev: 1230, curr: 41 }, profit: { prev: 1230, curr: 41 }, bonusCall: 0, subBetting: { prev: 0, curr: 41 }, subWin: { prev: 0, curr: 0 }, subProfit: { prev: 0, curr: 0 }, subBonusCall: 26 },
  { id: 29, date: "2025-04-11", betting: { prev: 1230, curr: 41 }, win: { prev: 1230, curr: 41 }, profit: { prev: 1230, curr: 41 }, bonusCall: 0, subBetting: { prev: 0, curr: 41 }, subWin: { prev: 0, curr: 0 }, subProfit: { prev: 0, curr: 0 }, subBonusCall: 26 },
  { id: 30, date: "2025-04-12", betting: { prev: 1230, curr: 41 }, win: { prev: 1230, curr: 41 }, profit: { prev: 1230, curr: 41 }, bonusCall: 0, subBetting: { prev: 0, curr: 41 }, subWin: { prev: 0, curr: 0 }, subProfit: { prev: 0, curr: 0 }, subBonusCall: 26 },
  { id: 31, date: "2025-04-13", betting: { prev: 1230, curr: 41 }, win: { prev: 1230, curr: 41 }, profit: { prev: 1230, curr: 41 }, bonusCall: 0, subBetting: { prev: 0, curr: 41 }, subWin: { prev: 0, curr: 0 }, subProfit: { prev: 0, curr: 0 }, subBonusCall: 26 }
]

const providers = ["@baalbet", "CQ9", "Habanero", "JiLi", "DreamGaming", "Asia Gaming"];


export function StatisticsPerDay() {
  const [provider, setProvider] = useState("@baalbet")
  const handleChangeProvider = useCallback((event) => {
    setProvider(event.target.value);
  }, []);
  const [startValue, setStartValue] = useState(dayjs(new Date()));
  const [endValue, setEndValue] = useState(dayjs(new Date()));

  return (
    <DashboardContent maxWidth="xl">
      <PageTitle>Stats Per Day</PageTitle>
      <Block title="Search" footerAction={<Button fullWidth variant="contained" color="success">Search</Button>}>
        <Grid container sx={{ backgroundColor: "rgba(0,0,0,.3)" }}>
          <Grid size={4} sx={{ display: "flex", alignItems: "center", borderRight: "1px solid #333", borderBottom: "1px solid #333", p: 2 }}>
            <Typography variant="subtitle1">Corresponding Agent</Typography>
          </Grid>
          <Grid size={8} sx={{ p: 2, borderBottom: "1px solid #333" }}>
            <TextField fullWidth select value={provider} onChange={handleChangeProvider} size="small">
              <MenuItem key={-1} value="@baalbet">@tiger</MenuItem>
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
        </Grid>
      </Block>

      <Block title={`Stats Per Day (Total:${statsPerDay.length})`}>
        <DataGrid
          rows={statsPerDay}
          columns={columns}
          initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
          pageSizeOptions={[5, 10, 20]}
        />
      </Block>
    </DashboardContent>
  )
}
