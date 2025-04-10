import { Box, Button, Modal } from '@mui/material';
import { Block } from 'src/components/block';

export function AgentModal({ open, title, onClose, children }) {
    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={{ width: "500px", backgroundColor: "#2b313c", m: "auto", mt: "120px", outline: "none" }}>
                <Block
                    title={title}
                    headerAction={<i className="fa fa-close" onClick={onClose}></i>}
                    footerAction={
                        <Box sx={{ display: "flex", justifyContent: "center", p: 2 }} gap={2}>
                            <Button
                                variant="contained"
                                sx={{ backgroundColor: "white", color: "grey" }}
                                onClick={onClose}
                            >
                                Cancel
                            </Button>
                            <Button variant="contained" color="info">Ok</Button>
                        </Box>
                    }
                >
                    {children}
                </Block>
            </Box>
        </Modal>
    )
}