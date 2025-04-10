'use client';

import { _mock } from 'src/_mock';

import { Box, Button, Alert, Link, TextField, MenuItem, Divider, ButtonGroup } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { RouterLink } from 'src/routes/components';
import { DashboardContent } from 'src/layouts/dashboard/content';
import { PageTitle } from 'src/components/page-title/page-title';
import { Block } from 'src/components/block';
import { Markdown } from 'src/components/markdown';

// ----------------------------------------------------------------------

export function ApiTesting() {
  return (
    <DashboardContent maxWidth="xl">
      <PageTitle>Callback API Testing</PageTitle>
      <Block title="1. Enter basic information">
        <Box sx={{ backgroundColor: "rgba(0,0,0,.3)" }}>
          <Alert severity="warning" sx={{ borderRadius: 0 }} icon={<i className="icmn-checkmark"></i>}>
            Request and response history during callback API test can be checked in <Link component={RouterLink} href={"/"} variant="subtitle2" color="#7ea6de" underline="always">Callback API Test Log</Link>.
          </Alert>

          <Grid container>
            <Grid size={6} sx={{ p: 1 }}>
              <TextField fullWidth select value="henry_try(@henry_try)" size="small">
                <MenuItem value="henry_try(@henry_try)">henry_try(@henry_try)</MenuItem>
              </TextField>
            </Grid>
            <Grid size={6} sx={{ p: 1 }}>
              <TextField fullWidth size="small" placeholder="User Name" />
            </Grid>
          </Grid>

          <Markdown children={`
<div style="padding:10px 20px 10px 40px">
<ul>
<li>When requesting agent approval, request approval from the administrator along with <span style="color:yellow">the agent name and user name</span>.</li>
<li>When testing the callback API, you do not need <span style="color:yellow">points</span> because of testing with virtual data.</li>
<li>If you need test points, please request it after receiving agent approval.</li>
</ul>
</div>
          `} />
        </Box>
      </Block>

      <Block title="2. User Authentication" footerAction={<Button variant="contained" color="success" sx={{ m: 2 }}>User authentication request</Button>}>
        <Markdown children={`
  <div style="padding:10px 20px 10px 40px">
  <ul>
  <li>[CHECK]</li>
  <ul>
  <li><span style="color:yellow">21</span>: Check user information</li>
  </ul>
  <li>[COMMAND]</li>
  <ul>
  <li><span style="color:yellow">authenticate</span>: User Authentication</li>
  </ul>
  <li>[Final response data sub-item]</li>
  <ul>
  <li><span style="color:yellow">account</span>: User ID</li>
  <li><span style="color:yellow">balance</span>: User Balance</li>
  </ul>
  </ul>
  </div>
        `} />
        <Divider />
      </Block>

      <Block title="3. User Balance Inquiry" footerAction={<Button variant="contained" color="success" sx={{ m: 2 }}>Check user balance inquiry</Button>}>
        <Markdown children={`
<div style="padding:10px 20px 10px 40px">
<ul>
<li>[CHECK]</li>
<ul>
<li><span style="color:yellow">21</span>: Check user information</li>
<li><span style="color:yellow">22</span>: Check if the user status is normal</li>
</ul>
<li>[COMMAND]</li>
<ul>
<li><span style="color:yellow">authenticate</span>: User Authentication</li>
<li><span style="color:yellow">balance</span>: Check user balance</li>
</ul>
<li>[Final response data sub-item]</li>
<ul>
<li><span style="color:yellow">balance</span>: User Balance</li>
</ul>
</ul>
</div>
        `} />
        <Divider />
      </Block>

      <Block title="4. Test betting" footerAction={<ButtonGroup variant="contained" sx={{ m: 2 }}><Button color="success">Bet less than your balance (Success)</Button><Button color="success">Bet less than your balance (Failed)</Button></ButtonGroup>}>
        <Markdown children={`
<div style="padding:10px 20px 10px 40px">
<ul>
<li>[CHECK]</li>
<ul>
<li><span style="color:yellow">21</span>: Check user information</li>
<li><span style="color:yellow">22</span>: Check if the user status is normal</li>
<li><span style="color:yellow">41</span>: Check if it has already been processed</li>
<li><span style="color:yellow">31</span>: Check user balance</li>
</ul>
<li>[COMMAND - Bet less than your balance (Success)]</li>
<ul>
<li><span style="color:yellow">authenticate</span>: User Authentication</li>
<li><span style="color:yellow">balance</span>: Check user balance</li>
<li><span style="color:yellow">bet</span>: Betting Request</li>
<li><span style="color:yellow">bet</span>: 2nd Duplicate Betting Request</li>
<li><span style="color:yellow">win</span>: Handling Betting Results (Hits/Misses)</li>
<li><span style="color:yellow">status</span>: Betting Processing Status</li>
</ul>
<li>[Final response data sub-item - Bet less than your balance (Success)]</li>
<ul>
<li><span style="color:yellow">account</span>: User ID</li>
<li><span style="color:yellow">trans_id</span>: ID</li>
<li><span style="color:yellow">trans_status</span>: Status of transaction history</li>
</ul>
<li>[COMMAND - Bet less than your balance (Failed)]</li>
<ul>
<li><span style="color:yellow">authenticate</span>: User Authentication</li>
<li><span style="color:yellow">balance</span>: Check user balance</li>
<li><span style="color:yellow">bet</span>: Betting Request</li>
</ul>
<li>[Final response data sub-item - Bet less than your balance (Failed)]</li>
<ul>
<li><span style="color:yellow">balance</span>: User Balance</li>
</ul>
</ul>
</div>
        `} />
        <Divider />
      </Block>

      <Block title="5. Hit test after bet" footerAction={<Button variant="contained" color="success" sx={{ m: 2 }}>Check bet hit</Button>}>
        <Markdown children={`
<div style="padding:10px 20px 10px 40px">
<ul>
<li>[CHECK]</li>
<ul>
<li><span style="color:yellow">21</span>: Check user information</li>
<li><span style="color:yellow">22</span>: Check if the user status is normal</li>
<li><span style="color:yellow">41</span>: Check if it has already been processed</li>
</ul>
<li>[COMMAND]</li>
<ul>
<li><span style="color:yellow">authenticate</span>: User Authentication</li>
<li><span style="color:yellow">balance</span>: Check user balance</li>
<li><span style="color:yellow">bet</span>: Betting Request</li>
<li><span style="color:yellow">win</span>: Handling Betting Results (Hits/Misses)</li>
<li><span style="color:yellow">win</span>: Handling Second Duplicate Btting Results (Hits/Misses)</li>
<li><span style="color:yellow">status</span>: Betting Processing Status</li>
</ul>
<li>[Final response data sub-item]</li>
<ul>
<li><span style="color:yellow">account</span>: User ID</li>
<li><span style="color:yellow">trans_id</span>: ID</li>
<li><span style="color:yellow">trans_status</span>: Status of transaction history</li>
</ul>
</ul>
</div>
        `} />
        <Divider />
      </Block>

      <Block title="6. Individual cancellation test after bet/hit (CANCEL)" footerAction={<Button variant="contained" color="success" sx={{ m: 2 }}>Confirm cancellation after bet/hit</Button>}>
        <Markdown children={`
<div style="padding:10px 20px 10px 40px">
<ul>
<li>[CHECK]</li>
<ul>
<li><span style="color:yellow">21</span>: Check user information</li>
<li><span style="color:yellow">22</span>: Check if the user status is normal</li>
<li><span style="color:yellow">42</span>: Check if transaction history ID exists</li>
</ul>
<li>[COMMAND]</li>
<ul>
<li><span style="color:yellow">authenticate</span>: User Authentication</li>
<li><span style="color:yellow">balance</span>: Check user balance</li>
<li><span style="color:yellow">bet</span>: Betting Request</li>
<li><span style="color:yellow">win</span>: Handling Betting Results (Hits/Misses)</li>
<li><span style="color:yellow">cancel</span>: Individual betting cancellation</li>
<li><span style="color:yellow">cancel</span>: Individual cancellation of the 2nd duplicate betting</li>
<li><span style="color:yellow">status</span>: Betting Processing Status</li>
<li><span style="color:yellow">cancel</span>: Individual cancellation of result</li>
<li><span style="color:yellow">cancel</span>: Individual cancellation of the 2nd duplicate result</li>
<li><span style="color:yellow">status</span>: Result Processing Status</li>
<li><span style="color:yellow">bet</span>: Betting Request</li>
<li><span style="color:yellow">balance</span>: Check user balance</li>
</ul>
<li>[Final response data sub-item]</li>
<ul>
<li><span style="color:yellow">balance</span>: User Balance</li>
</ul>
</ul>
</div>
        `} />
        <Divider />
      </Block>
    </DashboardContent>
  );
}
