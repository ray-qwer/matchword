import React from "react";
import AppBar from '@mui/material/AppBar';
import ToolBar from '@mui/material/Toolbar';
import Box from '@mui/material/Box'
import ThemeProvider  from "@mui/material/styles/ThemeProvider";
import { topBarTheme } from "../theme/theme";

function Header(){
    return(
        <Box sx={{width:"100vw",height:"10vh"}}>
            <ThemeProvider theme={topBarTheme}>
                <AppBar color="primary">
                    <ToolBar>
                        <div>Hello</div>
                    </ToolBar>
                </AppBar>
            </ThemeProvider>
        </Box>
    )
}

export default Header ;