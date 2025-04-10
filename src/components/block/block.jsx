import { Box } from '@mui/material';
import { BlockTitle } from './block-title';

export function Block({title, headerAction, footerAction, children}) {
    return (
        <Box sx={{overflow: "hidden", backgroundColor: "rgba(0,0,0,.3)", borderRadius: "4px", mb: 4}}>
            <BlockTitle action={headerAction}>{title}</BlockTitle>
            {children}
            {footerAction}
        </Box>
    )
}
