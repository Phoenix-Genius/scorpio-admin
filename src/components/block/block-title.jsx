import { Box, Typography } from "@mui/material";

export function BlockTitle({action, children}) {
    return (
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "black", px: 2, py: 1}}>
            <Typography variant="subtitle2">
                {children}
            </Typography>
            {action}
        </Box>
    )
}
