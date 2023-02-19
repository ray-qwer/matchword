import React, { useState } from 'react';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box"
function CreateProb(props){

    return(
        <Container sx={{paddingY:"24px", display:"flex", flexDirection:"column",flexGrow:1, alignItems:"center"}}>
            <TextArea>
                <Typography>題目</Typography>
            </TextArea>
            <TextArea>
                <Typography>敘述</Typography>
            </TextArea>
        </Container>
    )
}

function TextArea(props){
    const child = props.children
    return(
        <Box sx={{display:"inherit", flexDirection:"row" ,justifyContent:"space-around",minWidth:"50%", marginY: "10px"}}>
            <Box sx={{display:"inherit",flexGrow:1, width:"33%", justifyContent:"center",alignItems:"center"}}>
                {child}
            </Box>
            <Box sx={{display:"inherit",flexGrow: 2, maxWidth:"66%"}}>
                <TextField sx={{width:"100%"}}></TextField>
            </Box>
        </Box>
    )
}
export default CreateProb;