import { Box, Button, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Block } from 'src/components/block';

export function BasicInfo() {
    return (
        <Block
            title="Basic Information"
            footerAction={
                <Box sx={{ p: 2 }}>
                    <Button variant="contained" color="success">ChangePassword</Button>
                </Box>
            }
        >
            <Grid container>
                <Grid size={6} sx={{ p: 1 }}>
                    <TextField
                        fullWidth
                        variant="filled"
                        size="small"
                        label="ID"
                        defaultValue="henry_try"
                        sx={{ [`& > div`]: { border: "1px solid #ffffff40" } }}
                    />
                </Grid>
                <Grid size={6} sx={{ p: 1 }}>
                    <TextField
                        fullWidth
                        variant="filled"
                        size="small"
                        label="Name"
                        defaultValue="henry_try"
                        sx={{ [`& > div`]: { border: "1px solid #ffffff40" } }}
                    />
                </Grid>
                <Grid size={6} sx={{ p: 1 }}>
                    <TextField
                        fullWidth
                        variant="filled"
                        size="small"
                        label="Agent Level"
                        defaultValue="Master"
                        sx={{ [`& > div`]: { border: "1px solid #ffffff40" } }}
                    />
                </Grid>
                <Grid size={6} sx={{ p: 1 }}>
                    <TextField
                        fullWidth
                        variant="filled"
                        size="small"
                        label="Point Rate"
                        defaultValue="0.5"
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
                                    <InputAdornment
                                        position="end"
                                        sx={{
                                            maxHeight: 1,
                                            backgroundColor: "#ffffff30",
                                            height: "48px",
                                            px: 2,
                                            borderLeft: "1px solid #ffffff30",
                                            color: "white"
                                        }}
                                    >
                                        <i className="fa fa-percent"></i>
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
                        label="Point"
                        defaultValue="99474990000"
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
                                    <InputAdornment
                                        position="end"
                                        sx={{
                                            maxHeight: 1,
                                            backgroundColor: "#ffffff30",
                                            height: "48px",
                                            px: 2,
                                            borderLeft: "1px solid #ffffff30",
                                            color: "white"
                                        }}
                                    >
                                        <Typography variant="subtitle2" textTransform="uppercase">Point</Typography>
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
                        label="State"
                        defaultValue="Approved"
                        sx={{ [`& > div`]: { border: "1px solid #ffffff40" } }}
                    />
                </Grid>
                <Grid size={6} sx={{ p: 1, borderBottom: '1px solid rgba(255,255,255,.3)' }}>
                    <TextField
                        fullWidth
                        variant="filled"
                        size="small"
                        label="Win Rate"
                        defaultValue="95"
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
                                    <InputAdornment
                                        position="end"
                                        sx={{ maxHeight: 1, backgroundColor: "#ffffff30", color: "white" }}
                                    >
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                borderLeft: "1px solid #ffffff30",
                                                px: 2,
                                                height: "48px"
                                            }}
                                        >
                                                <i className="fa fa-percent"></i>
                                        </Box>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                borderLeft: "1px solid #ffffff30",
                                                px: 2,
                                                height: "48px"
                                            }}
                                        >
                                            <IconButton size="small">
                                                <i className="fa fa-edit" style={{ color: "#f8d600" }}></i>
                                            </IconButton>
                                        </Box>
                                    </InputAdornment>
                                ),
                            },
                        }}
                    />
                </Grid>
                <Grid size={6} sx={{ p: 1, borderBottom: '1px solid rgba(255,255,255,.3)' }}></Grid>
            </Grid>
        </Block>
    )
}