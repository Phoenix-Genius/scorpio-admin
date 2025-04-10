import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import { Box, Alert, Button } from '@mui/material';
import { Block } from 'src/components/block';
import { Markdown } from 'src/components/markdown';

// ----------------------------------------------------------------------

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

export function ApiExample() {
    const [exampleControlled, setExampleControlled] = useState(false);
    const [currentTab, setCurrentTab] = useState("node");

    const _exampleAccordions = [
        {
            id: 0,
            value: 'panel1',
            heading: '📀 Request Formats Based On Callback API Type ❤',
            detail: (
                <Box sx={{ backgroundColor: "rgba(0,0,0,.3)" }}>
                    <Alert severity="error" sx={{ borderRadius: 0 }} icon={<i className="icmn-checkmark"></i>}>
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
                            <Button variant="text" color={currentTab === "node" ? "info" : "inherit"} sx={{ borderRadius: 0, p: 2, backgroundColor: currentTab === "node" ? "#0a0d10" : "transparent" }} onClick={() => setCurrentTab("node")}>NodeJS</Button>
                            <Button variant="text" color={currentTab === "php" ? "info" : "inherit"} sx={{ borderRadius: 0, p: 2, backgroundColor: currentTab === "php" ? "#0a0d10" : "transparent" }} onClick={() => setCurrentTab("php")}>PHP</Button>
                        </Box>
                        <Markdown children={sourceContent} />
                    </Box>
                </Box>
            )
        },
    ]

    const handleChangeExampleControlled = (panel) => (event, isExpanded) => {
        setExampleControlled(isExpanded ? panel : false);
    };

    return (
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
                    <AccordionDetails sx={{ p: 0 }}>
                        {item.detail}
                    </AccordionDetails>
                </Accordion>
            ))}
        </Block>
    )
}