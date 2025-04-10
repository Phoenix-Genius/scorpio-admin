import { Button, InputAdornment, List, ListItem, Typography, TextField, Link } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Block } from 'src/components/block';
import { RouterLink } from 'src/routes/components/router-link';

export function CallbackInfo() {
    return (
        <Block title="Callback Information" >
            <Grid container sx={{ backgroundColor: "rgba(0,0,0,.3)", diplay: "flex" }}>
                <Grid size={6} container sx={{ p: 1 }}>
                    <TextField
                        fullWidth
                        variant="filled"
                        size="small"
                        label="Callback_TOKEN"
                        defaultValue="8dce4329-991d-4fce-a3c4-01a0cb314202"
                        sx={{
                            [`& > div`]: {
                                overflow: "hidden",
                                pr: 0,
                                order: "1px solid #ffffff40"
                            }
                        }}
                        slotProps={{
                            input: {
                                endAdornment: (
                                    <InputAdornment position="end" sx={{ maxHeight: 1, height: "48px" }}>
                                        <Button
                                            fullWidth
                                            variant="contained"
                                            size="large"
                                            color="info"
                                            sx={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
                                        >
                                            Reissue
                                        </Button>
                                    </InputAdornment>
                                ),
                            },
                        }}
                    />
                </Grid>
                <Grid size={6} container sx={{ p: 1 }}>
                    <TextField
                        variant="filled"
                        fullWidth
                        size="small"
                        label="Callback URL"
                        sx={{
                            [`& > div`]: {
                                overflow: "hidden",
                                pr: 0,
                                border: "1px solid #ffffff40"
                            }
                        }}
                        slotProps={{
                            input: {
                                endAdornment: (
                                    <InputAdornment position="end" sx={{ maxHeight: 1, height: "48px" }}>
                                        <Button
                                            fullWidth
                                            variant="contained"
                                            size="large"
                                            color="info"
                                            sx={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
                                        >
                                            Change
                                        </Button>
                                    </InputAdornment>
                                ),
                            },
                        }}
                    />
                </Grid>
                <Grid size={6} sx={{ pl: 3 }}>
                    <List>
                        <ListItem sx={{ p: 0 }}>
                            <Typography variant="caption">
                                • Callback TOKEN should be checked in the headers received as below when developing callback API.
                            </Typography>
                        </ListItem>
                        <ListItem sx={{ p: 0 }}>
                            <Typography variant="caption">
                                •&nbsp;<Typography variant="caption" color="yellow">Call-Token</Typography>:CALLBACK_TOKEN
                            </Typography>
                        </ListItem>
                        <ListItem sx={{ p: 0 }}>
                            <Typography variant="caption">
                                • When requesting the callback, the Callback-Token value of the header is sent as the callback token, so please check it.
                            </Typography>
                        </ListItem>
                        <ListItem sx={{ p: 0 }}>
                            <Typography variant="caption">
                                • If Callback-Token value in headers is different from the Callback TOKEN value of the current page, please return ERROR.
                            </Typography>
                        </ListItem>
                        <ListItem sx={{ p: 0 }}>
                            <Typography variant="caption">
                                • For more information, please refer to <Link component={RouterLink} href="#" variant="caption" color="#7ea6de" underline="always">Callback API Example Source</Link>
                            </Typography>
                        </ListItem>
                    </List>
                </Grid>
                <Grid size={6} sx={{ pl: 3 }}>
                    <List>
                        <ListItem sx={{ p: 0 }}>
                            <Typography variant="caption">
                                • The Callback URL must start with either http:// or https://.
                            </Typography>
                        </ListItem>
                        <ListItem sx={{ p: 0 }}>
                            <Typography variant="caption">
                                • ex) http://test.com/callback
                            </Typography>
                        </ListItem>
                        <ListItem sx={{ p: 0 }}>
                            <Typography variant="caption" color="yellow">
                                • It may take up to 10 minutes to apply the real server after setting the callback URL.
                            </Typography>
                        </ListItem>
                        <ListItem sx={{ p: 0 }}>
                            <Typography variant="caption" color="yellow">
                                • When using the transfer wallet method,please leave the Callback URL empty.
                            </Typography>
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        </Block>
    )
}
