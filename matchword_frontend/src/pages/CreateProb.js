import React, { useState } from 'react';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { style, textAlign } from '@mui/system';

const styleSheet = {
    Paper:          {display:"flex", width:"100%", flexDirection:"column", paddingX:"30px", paddingY:"20px", margin:"20px"},
    Container:      {paddingY:"24px", display:"flex", flexDirection:"column",flexGrow:1, alignItems:"center"},
    GridContainer:  {display:"inherit", flexDirection:"row" ,justifyContent:"space-around",minWidth:"50%", marginY: "10px"},
    GridText:       {display:"inherit",flexGrow:1, justifyContent:"center",alignItems:"center"},
    GridInput:      {display:"inherit",flexGrow: 2},
    Selector:       {width:"100%", justifyContent:"center",textAlign:"center"},
    TextField:      {width:"100%"},
    OptionText:     {justifyContent:"center"}
    
}
function CreateProb(props){
    const [size, setSize] = useState(4);
    const [topic, setTopic] = useState("");
    const handleChange = (event) => {
        setSize(event.target.value);
    }

    return(
        <Container sx={{display:"flex",flexGrow:1}}>
            <Container sx={styleSheet.Container}>
                <Paper elevation={3} sx={styleSheet.Paper}>
                    <TextArea value="abc" onChange={setTopic}>
                        <Typography>題目:</Typography>
                    </TextArea>
                    <TextArea>
                        <Typography>敘述:</Typography>
                    </TextArea>
                    <Grid container sx={styleSheet.GridContainer}>
                        <Grid item xs={2} sx={styleSheet.GridText}>
                            <Typography>大小:</Typography>
                        </Grid>
                        <Grid item xs={8} sx={styleSheet.GridInput}>
                            <Select
                                sx={styleSheet.Selector}
                                value={size}
                                onChange={handleChange}
                            >
                                <MenuItem sx={styleSheet.OptionText} value={3}>3*3</MenuItem>
                                <MenuItem sx={styleSheet.OptionText} value={4}>4*4</MenuItem>
                                <MenuItem sx={styleSheet.OptionText} value={5}>5*5</MenuItem>
                            </Select>
                        </Grid>
                    </Grid>
                </Paper>
                {/* another paper here */}
                <Paper elevation={3} sx={styleSheet.Paper}>
                    <Button>Press</Button>
                </Paper>
            </Container>
        </Container>
    )
}

function TextArea(props){
    const child = props.children
    return(
        <Grid container sx={styleSheet.GridContainer}>
            <Grid item xs={2} sx={styleSheet.GridText}>
                {child}
            </Grid>
            <Grid item xs={8} sx={styleSheet.GridInput}>
                    <TextField sx={styleSheet.TextField} value={props.value} onChange={(e)=>{props.onChange(e.getValue);console.log(e)}}></TextField>
            </Grid>
        </Grid>
    )
}


export default CreateProb;