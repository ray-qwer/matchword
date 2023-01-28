import React from "react";
import AppBar from '@mui/material/AppBar';
import ToolBar from '@mui/material/Toolbar';
import Box from '@mui/material/Box'
import ThemeProvider  from "@mui/material/styles/ThemeProvider";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { topBarTheme } from "../theme/theme";
import LogoutIcon from '@mui/icons-material/Logout';
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom"

const buttonStyle = {color:"white",borderRadius:5,":hover":{backgroundColor:"#5A5AAD"},height:"100%"};
function Header(props){
    const sx = props.sx;
    return(
        <Box sx={[sx,{display:"flex",minHeight:"64px"}]}>
            <ThemeProvider theme={topBarTheme}>
                <AppBar color="primary" sx={[sx]}>
                    <ToolBar>
                        <Box sx={{height:"100%",flexGrow:1,mr:0}}>
                            <Box sx={{marginX:"10px",height:"100%"}}>
                                <Button component={Link} to={'/'} variant="Contained" sx={buttonStyle} >Home Page</Button>
                                <Button component={Link} to={'/problems'} variant="Contained" sx={buttonStyle} >My Questions</Button>
                                <Button variant="Contained" sx={buttonStyle} >Question Set</Button>
                            </Box>
                        </Box>
                        <Box sx={{height:"100%",flexGrow:1,padding:"2px",flexDirection:"row",display:"flex",justifyContent:"right"}}>
                            <Box sx={{height:"100%",justifyContent:"center",alignItems:"center",display:"flex",paddingX:"5px"}}>
                                <Typography textAlign="center">Hi, UserName</Typography>
                            </Box>
                            <Box sx={{height:"100%",justifyContent:"center",alignItems:"center",display:"flex",paddingX:"5px"}}>
                                <Avatar sx={{ width: 32, height: 32 }}>UN</Avatar>
                            </Box>
                            <Button sx={buttonStyle}><LogoutIcon/></Button>
                        </Box>
                    </ToolBar>
                </AppBar>
            </ThemeProvider>
        </Box>
    )
}

export default Header ;