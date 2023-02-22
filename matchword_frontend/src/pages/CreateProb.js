import React, { useState } from 'react';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select"

function CreateProb(props){

    return(
        <Container sx={{display:"flex",flexGrow:1}}>
            <Container sx={{paddingY:"24px", display:"flex", flexDirection:"column",flexGrow:1, alignItems:"center"}}>
                <Paper elevation={3} sx={{display:"flex", width:"100%", flexDirection:"column", paddingX:"30px", paddingY:"20px"}}>
                    <TextArea>
                        <Typography>題目:</Typography>
                    </TextArea>
                    <TextArea>
                        <Typography>敘述:</Typography>
                    </TextArea>
                    <TextArea variant="select">
                        <Typography>大小:</Typography>
                    </TextArea>
                </Paper>
                {/* another paper here */}
            </Container>
        </Container>
    )
}

function TextArea(props){
    const child = props.children
    const variant = props.variant===undefined? "text": props.variant;
    return(
        <Box sx={{display:"inherit", flexDirection:"row" ,justifyContent:"space-around",minWidth:"50%", marginY: "10px"}}>
            <Box sx={{display:"inherit",flexGrow:1, justifyContent:"center",alignItems:"center"}}>
                {child}
            </Box>
            { variant === "text"? 
                (<Box sx={{display:"inherit",flexGrow: 2}}>
                    <TextField sx={{width:"100%"}}></TextField>
                </Box>) 
                : 
                (<Box sx={{display:"inherit",flexGrow: 2}}>
                    <Select
                        
                    >
                        
                    </Select>
                </Box>)
            }
        </Box>
    )
}
export default CreateProb;