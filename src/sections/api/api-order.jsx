import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import { Iconify } from 'src/components/iconify/iconify';
import { List, ListItem, Stepper, Step, StepLabel, Divider, StepConnector, styled, stepConnectorClasses, Box, Alert, Button } from '@mui/material';
import Link from '@mui/material/Link';
import { RouterLink } from 'src/routes/components';
import { Block } from 'src/components/block';

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
                • When testing the callback API, you do not need <span className="text-yellow">points</span> because of testing with virtual data.
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

export function ApiOrder() {
    const [orderControlled, setOrderControlled] = useState(false);

    const handleChangeOrderControlled = (panel) => (event, isExpanded) => {
        setOrderControlled(isExpanded ? panel : false);
    };
    return (
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
    )
}