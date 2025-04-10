import { Button, InputAdornment, TextField } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Block } from 'src/components/block';

export function ApiInfo() {
    return (
        <Block title="API Information">
            <Grid container>
                <Grid size={6} container sx={{ p: 1 }}>
                    <TextField
                        fullWidth
                        variant="filled"
                        size="small"
                        label="API_TOKEN"
                        defaultValue="8dce4329-991d-4fce-a3c4-01a0cb314202"
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
                <Grid size={6} sx={{ p: 1 }}>
                    <TextField
                        fullWidth
                        variant="filled"
                        size="small"
                        label="API_URL"
                        defaultValue="http://sc4-api-tr1.dreamgates.net"
                        sx={{ [`& > div`]: { border: "1px solid #ffffff40" } }}
                    />
                </Grid>
            </Grid>
        </Block>
    )
}
