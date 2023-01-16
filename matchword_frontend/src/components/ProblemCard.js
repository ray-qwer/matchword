import React from "react";
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';

function ProblemCard(props){
    
    return (
        <Container>
            <Button onClick={()=>{console.log(props)}}> Props </Button>
        </Container>
    )
}

export default ProblemCard;

