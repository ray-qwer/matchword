import React from "react";
import AppBar from '@mui/material/AppBar';
import ToolBar from '@mui/material/Toolbar';
import Box from '@mui/material/Box'
import ThemeProvider  from "@mui/material/styles/ThemeProvider";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { topBarTheme } from "../theme/theme";

function Header(props){
    const sx = props.sx;
    return(
        <Box sx={sx}>
            <ThemeProvider theme={topBarTheme}>
                <AppBar color="primary" sx={sx}>
                    <ToolBar>
                        <Typography>Hello</Typography>
                        <ButtonGroup>
                            <Button></Button>
                            <Button></Button>
                            <Button></Button>
                        </ButtonGroup>
                    </ToolBar>
                </AppBar>
            </ThemeProvider>
        </Box>
    )
}

export default Header ;