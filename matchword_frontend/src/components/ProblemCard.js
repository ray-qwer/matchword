import React, { useState } from "react";
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import CardActionArea from "@mui/material/CardActionArea";
import ShareIcon from '@mui/icons-material/Share';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Tooltip from '@mui/material/Tooltip';


function ProblemCard(props){
    // props.children
    // const options = ["delete","edit","share"];
    // const [anchorEl, setAnchorEl] = useState(null);
    // const [chosen, setChosen] = useState('');
    // const handleClick = (event) =>{
    //     setAnchorEl(event.currentTarget);
    // };
    // const handleClose = () =>{
    //     setAnchorEl(null);
    // };
    // const optionHandleClose = (option) =>{
    //     handleClose();
    //     setChosen(option);
    // }
    // const open = Boolean(anchorEl);

    return (
        <Card variant="outlined" sx={{minWidth:"250px", height:"160px", borderRadius:5,display:"flex",flexDirection:"column",justifyContent:"space-between",marginX:"20px",marginY:"20px"}}>
            <CardActionArea sx={{height:"100%"}} onClick={()=>{}}>
                <CardContent sx={{display:"flex",flexDirection:"column",justifyContent:"flex-end",alignItems:"center",flexGrow:2}}>
                    <Box sx={{width:"80%"}}>
                        <Typography textAlign="center" variant="h3" sx={{overflow:"hidden",textOverflow: "ellipsis"}}>
                            Topic
                        </Typography>
                    </Box>
                    <Box sx={{width:"80%"}}>
                        <Typography textAlign="center" sx={{overflow:"hidden",textOverflow: "ellipsis"}}>
                            Owner
                        </Typography>
                    </Box>

                </CardContent>
            </CardActionArea>
            <CardActions>
                <Box sx={{display:"flex",flexDirection:"row",justifyContent:"space-around",width:"100%",minHeight:"40px"}}>
                    <Tooltip title="EDIT" placement="top">
                        <IconButton>
                                    <EditIcon/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="DELETE" placement="top">
                        <IconButton>
                                    <DeleteIcon/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="SHARE" placement="top">
                        <IconButton>
                                    <ShareIcon/>
                        </IconButton>
                    </Tooltip>
                </Box>
                
            </CardActions>
            
        </Card>
    )
}

export default ProblemCard;

