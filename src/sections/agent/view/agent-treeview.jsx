"use client"
import { useState } from "react";
import { Box, Button, ButtonGroup, List, ListItemText, Switch, TextField, Typography, MenuItem, FormControlLabel, Checkbox } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Label } from 'src/components/label';
import { DashboardContent } from 'src/layouts/dashboard/content';
import { PageTitle } from 'src/components/page-title/page-title';
import { Block } from 'src/components/block';
import { RichTreeView } from '@mui/x-tree-view/RichTreeView';
import { AgentModal } from "src/components/agent-modal/agent-modal";
import { _agent_tree } from "src/_mock";

// ----------------------------------------------------------------------

export function AgentTreeView() {

  const [createOpen, setCreateOpen] = useState(false);
  const [passwordOpen, setPasswordOpen] = useState(false);
  const [pointOpen, setPointOpen] = useState(false);

  return (
    <DashboardContent maxWidth="xl">
      <PageTitle>Agents Treeview </PageTitle>

      <Grid container>
        <Grid size={{ xs: 12, md: 6 }} pr={{ xs: 0, md: 1 }}>
          <Block title="Agents Treeview">
            <RichTreeView items={_agent_tree} sx={{ overflowX: 'hidden', minHeight: 240, width: 1 }} />
          </Block >
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} pl={{ xs: 0, md: 1 }}>
          <Block
            title="Agents Details(#50000000021)"
            footerAction={
              <ButtonGroup fullWidth variant="contained">
                <Button onClick={() => setCreateOpen(true)} color="info" sx={{ width: '20%' }}><i className="fa fa-user"></i> Create Sub</Button>
                <Button onClick={() => setPasswordOpen(true)} color="secondary" sx={{ width: '25%' }}><i className="icmn-cog"></i>Change Password</Button>
                <Button onClick={() => setPointOpen(true)} color="success" sx={{ width: '40%' }}>P Points Deposit & Withdraw</Button>
                <Button color="error" sx={{ width: '15%' }}><i className="icmn-bin2"></i> Delete</Button>
              </ButtonGroup>
            }
          >
            <Grid container sx={{ backgroundColor: "rgba(0,0,0,.3)" }}>
              <Grid size={{ xs: 3 }} sx={{ display: "flex", alignItems: "center", borderRight: "1px solid #333", borderBottom: "1px solid #333", p: 1 }}>
                <Typography variant="subtitle2">ID</Typography>
              </Grid>
              <Grid size={{ xs: 3 }} sx={{ p: 1, display: "flex", justifyContent: "flex-end", borderBottom: "1px solid #333", borderRight: "1px solid #333" }}>
                <Typography variant="subtitle2">bluesoft</Typography>
              </Grid>
              <Grid size={{ xs: 3 }} sx={{ display: "flex", alignItems: "center", borderRight: "1px solid #333", borderBottom: "1px solid #333", p: 1 }}>
                <Typography variant="subtitle2">Name</Typography>
              </Grid>
              <Grid size={{ xs: 3 }} sx={{ p: 1, borderBottom: "1px solid #333", display: "flex", justifyContent: "flex-end" }}>
                <Typography variant="subtitle2">bluesoft</Typography>
              </Grid>
            </Grid>
            <Grid container sx={{ backgroundColor: "rgba(0,0,0,.3)" }}>
              <Grid size={{ xs: 3 }} sx={{ display: "flex", alignItems: "center", borderRight: "1px solid #333", borderBottom: "1px solid #333", p: 1 }}>
                <Typography variant="subtitle2">Level</Typography>
              </Grid>
              <Grid size={{ xs: 3 }} sx={{ p: 1, borderBottom: "1px solid #333", borderRight: "1px solid #333", display: "flex", justifyContent: "flex-end" }}>
                <Label color="success" variant="filled">
                  Oper
                </Label>
              </Grid>
              <Grid size={{ xs: 3 }} sx={{ display: "flex", alignItems: "center", borderRight: "1px solid #333", borderBottom: "1px solid #333", p: 1 }}>
                <Typography variant="subtitle2">State</Typography>
              </Grid>
              <Grid size={{ xs: 3 }} sx={{ p: 1, borderBottom: "1px solid #333", display: "flex", justifyContent: "flex-end" }}>
                <Label color="info" variant="filled">
                  Approved
                </Label>
              </Grid>
            </Grid>
            <Grid container sx={{ backgroundColor: "rgba(0,0,0,.3)" }}>
              <Grid size={{ xs: 3 }} sx={{ display: "flex", alignItems: "center", borderRight: "1px solid #333", borderBottom: "1px solid #333", p: 1 }}>
                <Typography variant="subtitle2">PointRate</Typography>
              </Grid>
              <Grid size={{ xs: 3 }} sx={{ p: 1, borderBottom: "1px solid #333", borderRight: "1px solid #333", display: "flex", justifyContent: "flex-end" }}>
                <Typography variant="subtitle2">4% <i className="fa fa-edit" style={{ color: "#1c75ee" }}></i></Typography>
              </Grid>
              <Grid size={{ xs: 3 }} sx={{ display: "flex", alignItems: "center", borderRight: "1px solid #333", borderBottom: "1px solid #333", p: 1 }}>
                <Typography variant="subtitle2">Win Rate</Typography>
              </Grid>
              <Grid size={{ xs: 3 }} sx={{ p: 1, borderBottom: "1px solid #333", display: "flex", justifyContent: "flex-end" }}>
                <Typography variant="subtitle2">90% <i className="fa fa-edit" style={{ color: "yellow" }}></i></Typography>
              </Grid>
            </Grid>
            <Grid container sx={{ backgroundColor: "rgba(0,0,0,.3)" }}>
              <Grid size={{ xs: 3 }} sx={{ display: "flex", alignItems: "center", borderRight: "1px solid #333", borderBottom: "1px solid #333", p: 1 }}>
                <Typography variant="subtitle2" sx={{ display: "flex", flexDirection: "column", justifyContent: "center", height: 1 }}>Balance</Typography>
              </Grid>
              <Grid size={{ xs: 3 }} sx={{ p: 1, borderBottom: "1px solid #333", borderRight: "1px solid #333", display: "flex", justifyContent: "flex-end" }}>
                <Typography variant="subtitle2">9725992.85<i className="fa fa-try"></i></Typography>
              </Grid>
              <Grid size={{ xs: 3 }} sx={{ display: "flex", alignItems: "center", borderRight: "1px solid #333", borderBottom: "1px solid #333", p: 1 }}>
                <Typography variant="subtitle2">Created Date</Typography>
              </Grid>
              <Grid size={{ xs: 3 }} sx={{ p: 1, borderBottom: "1px solid #333", display: "flex", justifyContent: "flex-end" }}>
                <Typography variant="subtitle2">2025-01-31 00:55:18</Typography>
              </Grid>
            </Grid>
            <Grid container sx={{ backgroundColor: "rgba(0,0,0,.3)" }}>
              <Grid size={{ xs: 3 }} sx={{ display: "flex", alignItems: "center", borderRight: "1px solid #333", borderBottom: "1px solid #333", p: 1 }}>
                <Typography variant="subtitle2">Bonus Callable</Typography>
              </Grid>
              <Grid size={{ xs: 3 }} sx={{ p: 1, borderBottom: "1px solid #333", borderRight: "1px solid #333", display: "flex", justifyContent: "flex-end" }}>
                <Switch checked={false} />
              </Grid>
              <Grid size={{ xs: 3 }} sx={{ display: "flex", alignItems: "center", borderBottom: "1px solid #333", p: 1 }}>
                <Typography variant="subtitle2"></Typography>
              </Grid>
              <Grid size={{ xs: 3 }} sx={{ p: 1, borderBottom: "1px solid #333" }}>
                <Typography variant="subtitle2"></Typography>
              </Grid>
            </Grid>
          </Block>
        </Grid>
      </Grid>

      <AgentModal open={createOpen} title="New Sub" onClose={() => { setCreateOpen(false) }}>
        <Box p={3}>
          <Box mb={2}>
            <Typography variant="subtitle2" mb={1}><Typography color="#de4546" display="inline">*</Typography> ID(4~20 length and only english or number, underscore)</Typography>
            <TextField size="small" variant="outlined" required fullWidth></TextField>
          </Box>
          <Box mb={2}>
            <Typography variant="subtitle2" mb={1}><Typography color="#de4546" display="inline">*</Typography> Password(4~20 length and only english or english or number, underscore)</Typography>
            <TextField size="small" variant="outlined" required fullWidth></TextField>
          </Box>
          <Box mb={2}>
            <Typography variant="subtitle2" mb={1}><Typography color="#de4546" display="inline">*</Typography> Name(1~50 length)</Typography>
            <TextField size="small" variant="outlined" required fullWidth></TextField>
          </Box>
          <Box mb={2}>
            <Typography variant="subtitle2" mb={1}><Typography color="#de4546" display="inline">*</Typography> Currency</Typography>
            <FormControlLabel
              label={<Typography>TRY(<i className='fa fa-try'></i>)</Typography>}
              control={<Checkbox size="small" defaultChecked />}
            />
            <FormControlLabel
              label="USD($)"
              control={<Checkbox size="small" />}
            />
            <FormControlLabel
              label="EUR(€)"
              control={<Checkbox size="small" />}
            />
            <FormControlLabel
              label="GBP(£)"
              control={<Checkbox size="small" />}
            />
            <FormControlLabel
              label="BRL(R$)"
              control={<Checkbox size="small" />}
            />
          </Box>
          <Box mb={2}>
            <Typography variant="subtitle2" mb={1}><Typography color="#de4546" display="inline">*</Typography> Point Rate</Typography>
            <TextField size="small" variant="outlined" required fullWidth></TextField>
          </Box>
          <Box mb={2}>
            <Typography variant="subtitle2" mb={1}><Typography color="#de4546" display="inline">*</Typography> Level</Typography>
            <TextField size="small" select fullWidth defaultValue="Oper">
              <MenuItem value="Oper">Oper</MenuItem>
              <MenuItem value="Agent">Agent</MenuItem>
            </TextField>
          </Box>
        </Box>
      </AgentModal>

      <AgentModal open={passwordOpen} title="Change Password" onClose={() => { setPasswordOpen(false) }}>
        <Box p={3}>
          <Box mb={2}>
            <Typography variant="subtitle2" mb={1}><Typography color="#de4546" display="inline">*</Typography> New Password</Typography>
            <TextField size="small" variant="outlined" required fullWidth></TextField>
          </Box>
          <Box mb={2}>
            <Typography variant="subtitle2" mb={1}><Typography color="#de4546" display="inline">*</Typography> New Password Retry</Typography>
            <TextField size="small" variant="outlined" required fullWidth></TextField>
          </Box>
        </Box>
      </AgentModal>

      <AgentModal open={pointOpen} title="Points Deposit & Withdraw" onClose={() => { setPointOpen(false) }}>
        <Box p={3}>
          <Box mb={2}>
            <Typography variant="subtitle2" mb={1}><Typography color="#de4546" display="inline">*</Typography> Request Amount</Typography>
            <TextField size="small" variant="outlined" required fullWidth></TextField>
          </Box>
          <Box mb={2}>
            <Typography variant="subtitle2" mb={1}>Remarks</Typography>
            <TextField size="small" variant="outlined" required fullWidth></TextField>
          </Box>
          <Box>
            <List>
              <ListItemText>• If you enter negative (-), the balance amount will be withdrawed.</ListItemText>
              <ListItemText>• You cannot withdraw an amount larger than your balance amount.</ListItemText>
              <ListItemText>• You cannot withdraw an amount greater than the targets balance amount.</ListItemText>
            </List>
          </Box>
          <Box>
            <ButtonGroup fullWidth>
              <Button variant="outlined" color="info">100000<i className="fa fa-try"></i></Button>
              <Button variant="outlined" color="info">500000<i className="fa fa-try"></i></Button>
              <Button variant="outlined" color="info">1000000<i className="fa fa-try"></i></Button>
              <Button variant="outlined" color="info">3000000<i className="fa fa-try"></i></Button>
            </ButtonGroup>
            <ButtonGroup fullWidth>
              <Button variant="outlined" color="info">5000000<i className="fa fa-try"></i></Button>
              <Button variant="outlined" color="info">10000000<i className="fa fa-try"></i></Button>
              <Button variant="outlined" color="info">+ / -</Button>
              <Button variant="outlined" color="info">Clear</Button>
            </ButtonGroup>
          </Box>
        </Box>
      </AgentModal>

    </DashboardContent>
  )
}
