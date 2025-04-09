'use client';

import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import { _mock } from 'src/_mock';

import { Iconify } from 'src/components/iconify/iconify';
import { List, ListItem, Stepper, Step, StepLabel, Divider, StepConnector, styled, stepConnectorClasses, Box, Alert, Button, Tab } from '@mui/material';
import Link from '@mui/material/Link';
import { RouterLink } from 'src/routes/components';
import { DashboardContent } from 'src/layouts/dashboard/content';
import { PageTitle } from 'src/components/page-title/page-title';
import { Block } from 'src/components/block';
import { Markdown } from 'src/components/markdown';

// ----------------------------------------------------------------------

const steps = ['Callback URL Setting', 'Check API Examples', 'Callback API Development', 'Callback API Testing', 'Game Testing'];

const _orderAccordions = [
  {
    id: 0,
    value: `panel1`,
    heading: 1,
    subHeading: "Callback URL Setting",
    detail: <List>
      <ListItem>
        • You can set the callback URL in&nbsp;<Link component={RouterLink} href={"/"} variant="subtitle2" color="#7ea6de" underline="always">[Settings]</Link>
      </ListItem>
    </List>
  },
  {
    id: 1,
    value: `panel2`,
    heading: 2,
    subHeading: "Check API Examples",
    detail: <List>
      <ListItem>
        • After referring to the&nbsp;<Link component={RouterLink} href={"/"} variant="subtitle2" color="#7ea6de" underline="always">corresponding example source,</Link>&nbsp;you must implement all functions
      </ListItem>
      <ListItem>
        • You are reponsible for any non-implmentation
      </ListItem>
    </List>
  },
  {
    id: 2,
    value: `panel3`,
    heading: 3,
    subHeading: "Callback API Development",
    detail: <List>
      <ListItem>
      • When developing a callback URL, you must set the allowable METHOD to&nbsp;<Typography color="yellow">POST</Typography>
      </ListItem>
      <ListItem>• All callback data is sent as JSON.</ListItem>
      <ListItem sx={{ display: "block" }}>
        • <Typography color="yellow" display="inline">HTTP Header in callback request</Typography>
        <List>
          <ListItem>• Callback-Token:&nbsp;<Link component={RouterLink} href={"/"} variant="subtitle2" color="#7ea6de" underline="always">CALLBACK TOKEN</Link></ListItem>
          <ListItem>• Accept: application/json</ListItem>
          <ListItem>• Content-Type: application/json</ListItem>
        </List>
      </ListItem>
      <ListItem>• Timezone</ListItem>
      <ListItem sx={{ display: "block" }}>
        • <Typography color="yellow" display="inline">[Important] Timeout</Typography>
        <List>
          <ListItem>• In case of COMMAND "bet", "balance", the response must be delivered&nbsp;<Typography color="yellow">within 2 seconds</Typography></ListItem>
          <ListItem>• For the other COMMANDsm, the response must be delivered&nbsp;<Typography color="yellow">within 4 seconds</Typography></ListItem>
        </List>
      </ListItem>
      <ListItem sx={{ display: "block" }}>
        • <Typography color="yellow" display="inline">COMMAND "cancel" Delivery Condition</Typography>
        <List>
          <ListItem>• Timeout</ListItem>
          <ListItem>• 500 ERROR Returns</ListItem>
        </List>
      </ListItem>
      <ListItem sx={{ display: "block" }}>
        • <Typography color="yellow" display="inline">Retry Request</Typography>
        <List>
          <ListItem sx={{ display: "block" }}>
            • In case of balance deposit (win, cancel)
            <List>
              <ListItem>First 1 time + 3 retries request every 2-4 seconds</ListItem>
            </List>
          </ListItem>
          <ListItem sx={{ display: "block" }}>
            • In case of balance confirmation (balance)
            <List>
              <ListItem>First 1 time + 3 retries request every 2-4 seconds</ListItem>
            </List>
          </ListItem>
          <ListItem sx={{ display: "block" }}>
            • In case of balance withdraw (bet)
            <List>
              <ListItem>First 1 time + forward cancellation request</ListItem>
            </List>
          </ListItem>
        </List>
      </ListItem>
      <ListItem>• When developing a callback API, please refer to&nbsp;<Link component={RouterLink} href={"/"} variant="subtitle2" color="#7ea6de" underline="always">the API error log</Link>.</ListItem>
      <ListItem sx={{ display: "block" }}>
        • <Typography color="yellow" display="inline">Type cautions during development</Typography>
        <List>
          <ListItem>• Please refer to the example source and develop it according to [string] and [int] variable types.</ListItem>
          <ListItem>• In the case of string, it is marked with single quotation marks, such as test, and in the case of balance, it must be matched with [int] type, such as 1000.</ListItem>
        </List>
      </ListItem>
    </List>
  },
  {
    id: 3,
    value: `panel4`,
    heading: 4,
    subHeading: "Callback API Testing",
    detail: <List>
      <ListItem>
        • Please make testing step by step using&nbsp;<Link component={RouterLink} href={"/"} variant="subtitle2" color="#7ea6de" underline="always">the corresponding page</Link>.
      </ListItem>
      <ListItem>
        • When testing the callback API, you do not need <span class="text-yellow">points</span> because of testing with virtual data.
      </ListItem>
      <ListItem>
        • If you need test points, please request it after receiving agent approval.
      </ListItem>
      <ListItem>
        • Please operate after passing all test. You are responsible for any non-implementation.
      </ListItem>
    </List>
  },
  {
    id: 4,
    value: `panel5`,
    heading: 5,
    subHeading: "Game Testing",
    detail: <List>
      <ListItem>
        • Lastly, please access API in the&nbsp;<Link component={RouterLink} href={"/"} variant="subtitle2" color="#7ea6de" underline="always">main API</Link>&nbsp;to test the actual game.
      </ListItem>
    </List>
  }
];

// ----------------------------------------------------------------------

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: { top: 18 },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: "#1c75ee"
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: "#1c75ee"
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    borderRadius: 1,
    backgroundColor: theme.vars.palette.divider,
  },
}));

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  zIndex: 1,
  width: 40,
  height: 40,
  display: 'flex',
  borderRadius: '50%',
  border: "2px solid #1c75ee",
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 0 0 4px #1c75ee60',
  ...(ownerState.active && {
    color: "#1c75ee",
    background: "transparent"
  }),
  ...(ownerState.completed && {
    color: "#1c75ee",
    background: "transparent"
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className, icon } = props;

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icon}
    </ColorlibStepIconRoot>
  );
}

const requestContent = `
<div style="padding:10px 20px 10px 40px">
<ul>
<li><span style="color:#7453bb">HTTP Header</span></li>
</ul>
<div style="margin:10px 0 30px 16px;background:rgba(0,0,0,.3);padding-bottom:20px">
<div><span style="color:#7fc0ea">Callback-Token</span>: CALLBACK_TOKEN</div>
<div><span style="color:#7fc0ea">Accept</span>: application/json</div>
<div><span style="color:#7fc0ea">Content-Type</span>: application/json</div>
</div>
<ul>
<li><span style="color:#7453bb">User Authentication</span></li>
</ul>
<div style="margin:10px 0 30px 16px;background:rgba(0,0,0,.3)">
{
  <span style="color:#7fc0ea">"command"</span>:<span style="color:#d1937a">"authenticate"</span>,
  <span style="color:#7fc0ea">"data"</span>:{
    <span style="color:#7fc0ea">"account"</span>:<span style="color:#d1937a">"test1234"</span>
  },
  <span style="color:#7fc0ea">"timestamp"</span>:<span style="color:#d1937a">"1676116606"</span>,
  <span style="color:#7fc0ea">"check"</span>:<span style="color:#d1937a">"21"</span>
}
</div>
<ul>
<li><span style="color:#7453bb">Confirmation Of Balance Amount</span></li>
</ul>
<div style="margin:10px 0 30px 16px;background:rgba(0,0,0,.3)">
{
  <span style="color:#7fc0ea">"command"</span>:<span style="color:#d1937a">"balance"</span>,
  <span style="color:#7fc0ea">"data"</span>:{
    <span style="color:#7fc0ea">"account"</span>:<span style="color:#d1937a">"test1234"</span>
  },
  <span style="color:#7fc0ea">"timestamp"</span>:<span style="color:#d1937a">"1600000001"</span>,
  <span style="color:#7fc0ea">"check"</span>:<span style="color:#d1937a">"21,22"</span>
}
</div>
<ul>
<li><span style="color:#7453bb">Betting Request</span></li>
</ul>
<div style="margin:10px 0 30px 16px;background:rgba(0,0,0,.3);overflow:auto;width:calc(100% - 20px);white-space:nowrap">
{
  <span style="color:#7fc0ea">"command"</span>:<span style="color:#d1937a">"bet"</span>,
  <span style="color:#7fc0ea">"data"</span>:{
    <span style="color:#7fc0ea">"account"</span>:<span style="color:#d1937a">"test1234"</span>
    <span style="color:#7fc0ea">"trans_id"</span>:<span style="color:#d1937a">"1676358190"</span>
    <span style="color:#7fc0ea">"call_id"</span>:<span style="color:#d1937a">0</span>
    <span style="color:#7fc0ea">"round_id"</span>:<span style="color:#d1937a">"818395446"</span>
    <span style="color:#7fc0ea">"provider_id"</span>:<span style="color:#d1937a">1</span>
    <span style="color:#7fc0ea">"provider_name"</span>:<span style="color:#d1937a">Pragmatic Play</span>
    <span style="color:#7fc0ea">"game_code"</span>:<span style="color:#d1937a">"vswaysdogs"</span>
    <span style="color:#7fc0ea">"game_name"</span>:<span style="color:#d1937a">"The Dog House Megaways"</span>
    <span style="color:#7fc0ea">"game_type"</span>:<span style="color:#d1937a">"Slots"</span>
    <span style="color:#7fc0ea">"amount"</span>:<span style="color:#98c483">1000</span>
    <span style="color:#7fc0ea">"type"</span>:<span style="color:#d1937a">1</span>
  },
  <span style="color:#7fc0ea">"timestamp"</span>:<span style="color:#d1937a">"1600000001"</span>,
  <span style="color:#7fc0ea">"check"</span>:<span style="color:#d1937a">"21,22"</span>
}
</div>
<ul>
<li><span style="color:#7453bb">Handling Betting Results (Hits, Misses)</span></li>
</ul>
<div style="margin:10px 0 30px 16px;background:rgba(0,0,0,.3);overflow:auto;width:calc(100% - 20px);white-space:nowrap">
{
  <span style="color:#7fc0ea">"command"</span>:<span style="color:#d1937a">"win"</span>,
  <span style="color:#7fc0ea">"data"</span>:{
    <span style="color:#7fc0ea">"account"</span>:<span style="color:#d1937a">"test1234"</span>
    <span style="color:#7fc0ea">"trans_id"</span>:<span style="color:#d1937a">"1676358191"</span>
    <span style="color:#7fc0ea">"call_id"</span>:<span style="color:#d1937a">0</span>
    <span style="color:#7fc0ea">"round_id"</span>:<span style="color:#d1937a">"818395446"</span>
    <span style="color:#7fc0ea">"provider_id"</span>:<span style="color:#d1937a">1</span>
    <span style="color:#7fc0ea">"provider_name"</span>:<span style="color:#d1937a">Pragmatic Play</span>
    <span style="color:#7fc0ea">"game_code"</span>:<span style="color:#d1937a">"vswaysdogs"</span>
    <span style="color:#7fc0ea">"game_name"</span>:<span style="color:#d1937a">"The Dog House Megaways"</span>
    <span style="color:#7fc0ea">"game_type"</span>:<span style="color:#d1937a">"Slots"</span>
    <span style="color:#7fc0ea">"amount"</span>:<span style="color:#98c483">1000</span>
    <span style="color:#7fc0ea">"type"</span>:<span style="color:#d1937a">2</span>
  },
  <span style="color:#7fc0ea">"timestamp"</span>:<span style="color:#d1937a">"1600000001"</span>,
  <span style="color:#7fc0ea">"check"</span>:<span style="color:#d1937a">"21,22"</span>
}
</div>
<ul>
<li><span style="color:#7453bb">Individual Cancellation of Betting/Result</span></li>
</ul>
<div style="margin:10px 0 30px 16px;background:rgba(0,0,0,.3);overflow:auto;width:calc(100% - 20px);white-space:nowrap">
{
  <span style="color:#7fc0ea">"command"</span>:<span style="color:#d1937a">"cancel"</span>,
  <span style="color:#7fc0ea">"data"</span>:{
    <span style="color:#7fc0ea">"account"</span>:<span style="color:#d1937a">"test1234"</span>
    <span style="color:#7fc0ea">"trans_id"</span>:<span style="color:#d1937a">"1676358190"</span>
    <span style="color:#7fc0ea">"round_id"</span>:<span style="color:#d1937a">"818395446"</span>
    <span style="color:#7fc0ea">"provider_id"</span>:<span style="color:#d1937a">1</span>
    <span style="color:#7fc0ea">"provider_name"</span>:<span style="color:#d1937a">Pragmatic Play</span>
    <span style="color:#7fc0ea">"game_code"</span>:<span style="color:#d1937a">"vswaysdogs"</span>
    <span style="color:#7fc0ea">"game_name"</span>:<span style="color:#d1937a">"The Dog House Megaways"</span>
    <span style="color:#7fc0ea">"game_type"</span>:<span style="color:#d1937a">"Slots"</span>
  },
  <span style="color:#7fc0ea">"timestamp"</span>:<span style="color:#d1937a">"1600000001"</span>,
  <span style="color:#7fc0ea">"check"</span>:<span style="color:#d1937a">"21,22,42"</span>
}
</div>
<ul>
<li><span style="color:#7453bb">Processing Status</span></li>
</ul>
<div style="margin:10px 0 30px 16px;background:rgba(0,0,0,.3);overflow:auto;width:calc(100% - 20px);white-space:nowrap">
{
  <span style="color:#7fc0ea">"command"</span>:<span style="color:#d1937a">"status"</span>,
  <span style="color:#7fc0ea">"data"</span>:{
    <span style="color:#7fc0ea">"account"</span>:<span style="color:#d1937a">"test1234"</span>
    <span style="color:#7fc0ea">"trans_id"</span>:<span style="color:#d1937a">"1676358190"</span>
  },
  <span style="color:#7fc0ea">"timestamp"</span>:<span style="color:#d1937a">"1600000001"</span>,
  <span style="color:#7fc0ea">"check"</span>:<span style="color:#d1937a">"21,42"</span>
}
</div>
`;

const sourceContent = `
<div style="padding:16px">
<div style="color:#46953a">
<div>/******</div>
<br>
<div>VERSION: v200</div>
<div>Callback Handling</div>
<div>v200</div>
<div>Creating Basic Sample Source Written with Node.js (Express + MySQL)</div>
<div>!!! PLEASE DO NOT USE THIS EXAMPLE CODE FOR YOUR PRODUCTION, THIS IS JUST ONLY FOR YOUR REFERENCE. !!!</div>
<br>
<div>/***</div>
<br>
<div>Example Tables</div>
<div>/</div>
<div>/*</div>
<br>
<div>CREATE TABLE bet_casino (</div>
<div>trans_id VARCHAR(64) NOT NULL,</div>
<div>user_id VARCHAR(20) NOT NULL,</div>
<div>game_id VARCHAR(100) NOT NULL DEFAULT '',</div>
<div>round_id VARCHAR(64) NOT NULL DEFAULT '0',</div>
<div>sort ENUM('BET','WIN','CANCEL') NOT NULL,</div>
<div>money INT(11) NOT NULL,</div>
<div>request_datetime INT(11) NOT NULL DEFAULT '0'</div>
<div>PRIMARY KEY (trans_id),</div>
<div>INDEX game_id (game_id, round_id)</div>
<div>);</div>
<br>
<div>CREATE TABLE user_casino (</div>
<div>user_id VARCHAR(20) NOT NULL,</div>
<div>user_name VARCHAR(20) NOT NULL,</div>
<div>user_nickname VARCHAR(20) NOT NULL,</div>
<div>money INT(11) NOT NULL DEFAULT '0'</div>
<div>token VARCHAR(50) NOT NULL DEFAULT ''</div>
<div>status ENUM('Active', 'Drop') NOT NULL DEFAULT 'Active'</div>
<div>PRIMARY KEY (user_id)</div>
<div>INDEX token (token)</div>
<div>);</div>
<br>
<div>*/</div>
</div>
<div>
<div><span style="color:#357db6">const</span> express = <span style="color:#4abea5">require</span>(<span style="color:#d1937a">"express"</span>);</div>
<div><span style="color:#357db6">const</span> mysql = <span style="color:#4abea5">require</span>(<span style="color:#d1937a">"mysql2/promise"</span>); <span style="color:#46953a">// Using mysql2 with promises</span></div>
<br>
<div style="color:#46953a">// Initialize the app</div>
<div><span style="color:#357db6">const</span> app = express();</div>
<div>app.use(express.json()); <span style="color:#46953a">// Any other middleware initialization can be here,</span></div>
</div>
`

export function ApiSeamless() {
  const [orderControlled, setOrderControlled] = useState(false);
  const [exampleControlled, setExampleControlled] = useState(false);
  const [currentTab, setCurrentTab] = useState("node");

  const _exampleAccordions = [
    {
      id: 0,
      value: 'panel1',
      heading: '📀 Request Formats Based On Callback API Type ❤',
      detail: (
        <Box sx={{ backgroundColor: "rgba(0,0,0,.3)" }}>
          <Alert severity="error" sx={{ borderRadius: 0 }}>
            All callback requests is sent as JSON data in POST method.
          </Alert>
          
          <Markdown children={requestContent} />
        </Box>
      )
    },
    {
      id: 1,
      value: 'panel2',
      heading: '📀 Callback API Example Source ❤',
      detail: (
        <Box sx={{ backgroundColor: "rgba(0,0,0,.3)", p: 2 }}>
          <Button variant="contained" color="success">Copy Source To Clipboard</Button>
          
          <Box sx={{ backgroundColor: "rgba(0,0,0,.3)", mt: 2 }}>
            <Box sx={{ backgroundColor: "black" }}>
              <Button variant="text" color={currentTab==="node" ? "info" : "inherit"} sx={{ borderRadius: 0, p: 2, backgroundColor: currentTab==="node" ? "#0a0d10" : "transparent" }} onClick={()=>setCurrentTab("node")}>NodeJS</Button>
              <Button variant="text" color={currentTab==="php" ? "info" : "inherit"} sx={{ borderRadius: 0, p: 2, backgroundColor: currentTab==="php" ? "#0a0d10" : "transparent" }} onClick={()=>setCurrentTab("php")}>PHP</Button>
            </Box>
            <Markdown children={sourceContent} />
          </Box>
        </Box>
      )
    },
  ]

  const handleChangeOrderControlled = (panel) => (event, isExpanded) => {
    setOrderControlled(isExpanded ? panel : false);
  };

  const handleChangeExampleControlled = (panel) => (event, isExpanded) => {
    setExampleControlled(isExpanded ? panel : false);
  };

  return (
    <DashboardContent maxWidth="xl">
      <PageTitle>Agents List</PageTitle>
      <Block title="Callback API Development Order">
        <Box sx={{ backgroundColor: "rgba(0,0,0,.3)" }}>
          <Stepper alternativeLabel activeStep={5} connector={<ColorlibConnector />} sx={{ pt: 1 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel slots={{ stepIcon: ColorlibStepIcon }}><Typography color="#1c75ee" fontWeight="bold">{label}</Typography></StepLabel>
              </Step>
            ))}
          </Stepper>

          <Divider sx={{ my: 2 }} />

          {_orderAccordions.map(item => (
            <Accordion
              key={item.value}
              expanded={orderControlled === item.value}
              onChange={handleChangeOrderControlled(item.value)}
              sx={{ width: 1 }}
            >
              <AccordionSummary sx={{ backgroundColor: "#bbd6fa" }} expandIcon={<Iconify icon="eva:arrow-ios-downward-fill" />}>
                <Typography variant="h3" color='#0c2c52' fontWeight="bold" pr={2}>
                  {item.heading}
                </Typography>
                <Typography variant="h4" color='#0c2c52' fontWeight="bold">{item.subHeading}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {item.detail}
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Block>

      <Block title="Callback API Example">
        {_exampleAccordions.map(item => (
          <Accordion
            key={item.value}
            expanded={exampleControlled === item.value}
            onChange={handleChangeExampleControlled(item.value)}
            sx={{ width: 1 }}
          >
            <AccordionSummary sx={{ backgroundColor: "black" }}>
              <Typography variant="subtitle2">
                {item.heading}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{p:0}}>
              {item.detail}
            </AccordionDetails>
          </Accordion>
        ))}
      </Block>
    </DashboardContent>
  );
}
