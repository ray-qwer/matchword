import React from "react";
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function ProblemCard(props){
    // props.children

    return (
        <Card variant="outlined" sx={{width:"300px", height:"200px", borderRadius:5,display:"flex",flexDirection:"column"}}>
            <CardContent sx={{display:"flex",flexDirection:"column",justifyContent:"space-around",flexGrow:2}}>
                <Typography textAlign="center" variant="h3" sx={{overflow:"hidden",textOverflow: "ellipsis"}}>
                    TopicTTTTOO
                </Typography>
                <Typography textAlign="center" sx={{overflow:"hidden",textOverflow: "ellipsis"}}>
                    Owner
                </Typography>
            </CardContent>
                {/* <Button onClick={()=>{console.log(props)}}> Props </Button> */}
        </Card>
    )
}

export default ProblemCard;

