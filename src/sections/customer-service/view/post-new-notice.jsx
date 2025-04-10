"use client"

import { useCallback, useState } from 'react';

import { Box, Button, Checkbox, FormControlLabel, MenuItem, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { DashboardContent } from 'src/layouts/dashboard/content';
import { PageTitle } from 'src/components/page-title/page-title';
import { Block } from 'src/components/block';
import { varAlpha } from 'minimal-shared/utils';

import { styled } from '@mui/material/styles';
import { RichTreeView } from '@mui/x-tree-view/RichTreeView';
import { treeItemClasses, TreeItem as MuiTreeItem } from '@mui/x-tree-view/TreeItem';

// ----------------------------------------------------------------------
const MUI_X_PRODUCTS = [
  { id: '1', label: '🅰BlueSoft(@bluesoft)' },
  { id: '2', label: '🅰Ceptebet(@ceptebet)' },
  {
    id: '3',
    label: '🅰DavidTRY(@davidtry)',
    children: [
      {
        id: '4',
        label: '🅱SMARTTRY(@SMARTTRY)',
        children: [
          { id: '7', label: 'STARGIN_TRY(@STAGING)' },
        ],
      },
    ],
  },
  { id: '9', label: '🅰DemoAgent(@demoagent)' },
  {
    id: '11',
    label: '🅰Laxhan(@laxhan_try)',
    children: [
      {
        id: '12',
        label: '🅱SNIPPER(@snipper)',
        children: [
          { id: '15', label: 'ALWAYS(@ALWAYS)' },
        ],
      },
    ]
  },
  { id: '17', label: '🅰LeoMarkets(@leomarget)' },
  { id: '18', label: '🅰Sehrislot(@sehrislot)' },
];

const TreeItem = styled(MuiTreeItem)(({ theme }) => ({
  color: theme.vars.palette.grey[100],
  ...theme.applyStyles('light', {
    color: theme.vars.palette.light,
  }),
  [`& .${treeItemClasses.content}`]: {
    borderRadius: theme.spacing(0.5),
    padding: theme.spacing(0.5, 1),
    margin: theme.spacing(0.2, 0),
    [`& .${treeItemClasses.label}`]: { fontSize: '1rem', fontWeight: 500 },
  },
  [`& .${treeItemClasses.iconContainer}`]: {
    borderRadius: '50%',
    backgroundColor: varAlpha(theme.vars.palette.primary.mainChannel, 0.25),
    ...theme.applyStyles('dark', {
      color: theme.vars.palette.primary.contrastText,
      backgroundColor: theme.vars.palette.primary.light,
    }),
  },
  [`& .${treeItemClasses.groupTransition}`]: {
    marginLeft: 15,
    paddingLeft: 18,
    borderLeft: `1px dashed ${varAlpha(theme.vars.palette.text.primaryChannel, 0.4)}`,
  },
}));

const providers = ["Pragmatic Play", "CQ9", "Pocket Games Soft", "Booongo", "Playson", "Evolution", "Habanero", "JiLi", "DreamGaming", "Asia Gaming"]

export function PostNewNotice() {
  const [provider, setProvider] = useState("total")

  const handleChangeProvider = useCallback((event) => {
    setProvider(event.target.value);
  }, []);

  return (
    <DashboardContent maxWidth="xl">
      <PageTitle>Post New Notice</PageTitle>

      <Grid container >
        <Grid size={{ xs: 12, md: 5 }} pr={{ xs: 0, md: 2 }}>
          <Block title="Select an agent" footerAction={<Button fullWidth variant="contained" color="success">Search</ Button>}>
            <Grid container sx={{ backgroundColor: "rgba(0,0,0,.3)" }}>
              <Grid size={4} sx={{ display: "flex", alignItems: "center", borderRight: "1px solid #333", borderBottom: "1px solid #333", p: 2 }}>
                <Typography variant="subtitle1">Parent Agent</Typography>
              </Grid>
              <Grid size={8} sx={{ p: 2, borderBottom: "1px solid #333" }}>
                <TextField fullWidth select value={provider} onChange={handleChangeProvider} size="small">
                  <MenuItem key={-1} value="total">henry_try(@henry_try)</MenuItem>
                  {providers.map((item, index) => <MenuItem key={index} value={item}>{item}</MenuItem>)}
                </TextField>
              </Grid>
              <Grid size={4} sx={{ display: "flex", alignItems: "center", borderRight: "1px solid #333", borderBottom: "1px solid #333", p: 2 }}>
                <Typography variant="subtitle1">Agent Name/ID</Typography>
              </Grid>
              <Grid size={8} sx={{ p: 2, borderBottom: "1px solid #333" }}>
                <TextField fullWidth size="small" placeholder="Game Name/Symbol" />
              </Grid>
            </Grid>
          </Block>
          <Block
            title="Agents Treeview"
            headerAction={
              <Box sx={{ display: "flex", gap: "20px" }}>
                <Button variant="contained" size="small" color="info">Select All / Cancel All</Button>
              </Box>
            }
          >
            <RichTreeView
              checkboxSelection
              aria-checked
              aria-label="customized"
              defaultExpandedItems={['1']}
              sx={{ overflowX: 'hidden', minHeight: 240, width: 1 }}
              slots={{ item: TreeItem }}
              items={MUI_X_PRODUCTS}
            />
          </Block>
        </Grid>
        <Grid size={{ xs: 12, md: 7 }} pl={{ xs: 0, md: 2 }}>
          <Block
            title="Post new Notice"
            headerAction={
              <FormControlLabel
                label="Urgent"
                control={<Checkbox color="info" size="small" sx={{ py: 0, pr: 0.5 }} />}
              />
            }
            footerAction={<Button fullWidth variant="contained" color="info">Post</Button>}>
            <TextField fullWidth size="small" multiline minRows={10} placeholder="Content" />
          </Block>
        </Grid>
      </Grid>
    </DashboardContent>
  )
}
