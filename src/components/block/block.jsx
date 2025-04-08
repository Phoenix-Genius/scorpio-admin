import { Box } from '@mui/material';
import { BlockTitle } from './block-title';


export function Block({title, headerAction, footerAction, children}) {
    return (
        <Box sx={{overflow: "hidden", borderRadius: "4px", pb: 4}}>
            <BlockTitle action={headerAction}>{title}</BlockTitle>
            {children}
            {footerAction}
        </Box>
    )
}
