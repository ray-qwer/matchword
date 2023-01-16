import React from "react";
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography";
import  ThemeProvider  from "@mui/material/styles/ThemeProvider";
import { footerTheme } from "../theme/theme";

function Footer(props){
    const sx = props.sx;
    return(
        <ThemeProvider theme={footerTheme}>
            <Box sx={[sx]}  bgcolor="primary.main">
                {/* <Divider variant="middle" sx={{width:"80%"}} /> */}
                <Box sx={{ justifyContent:"center", alignItems:"center", display:"flex",width:"100%", height:"100%"}}>
                    <Typography color="white" variant="h4">Matching Words</Typography>
                </Box>
            </Box>
        </ThemeProvider>
    )
}

export default Footer;