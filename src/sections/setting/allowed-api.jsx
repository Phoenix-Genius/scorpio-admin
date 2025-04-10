import { Box, Button, List, ListItem, Typography, TextField } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Block } from 'src/components/block';

export function AllowedIP() {
    return (
        <Block
            title="Allowed IP for API calls"
            footerAction={
                <Box sx={{ p: 2 }}>
                    <Button variant="contained" color="success">Change Allowed IP for API calls</Button>
                </Box>
            }
        >
            <Grid container>
                <Grid size={6} sx={{ p: 1, borderBottom: "1px solid rgba(255,255,255,.3)" }}>
                    <TextField fullWidth multiline minRows={5} size="small" placeholder="Allowed IP" />
                </Grid>
                <Grid size={6} sx={{ p: 1, borderBottom: "1px solid rgba(255,255,255,.3)" }}>
                    <List>
                        <ListItem sx={{ p: 0 }}>
                            <Typography variant="caption">
                                • The API can be called only from the server of the entered IP.
                            </Typography>
                        </ListItem>
                        <ListItem sx={{ p: 0 }}>
                            <Typography variant="caption" color="yellow">
                                • It should be seperated by Space or Enter. ex:1.1.1.1.2.2.2.2
                            </Typography>
                        </ListItem>
                        <ListItem sx={{ p: 0 }}>
                            <Typography variant="caption">
                                • If there is no IP restriction, leave [Allowed IP] blank
                                d</Typography>
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        </Block>
    )
}
