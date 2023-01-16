import React from "react";
import Container from '@mui/material/Container';
import ProblemCard from "../components/ProblemCard";
function ProblemSets(props){
    
    return(
        <Container sx={{flex:1}}>
            <ProblemCard a="hi">Hello</ProblemCard>
        </Container>
    )
}

export default ProblemSets;