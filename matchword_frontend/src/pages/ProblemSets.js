import React from "react";
import Container from '@mui/material/Container';
import ProblemCard from "../components/ProblemCard";
import Grid from '@mui/material/Unstable_Grid2';
function ProblemSets(props){
    
    return(
        <Container sx={{paddingY:"24px",flexGrow:1}}>
            <Grid container spacing={4} columns={4} >
                {
                    [...Array(2).keys()].map((num)=>(
                        <ProblemCard key={num} k={num}/>
                    ))
                }
            </Grid>
        </Container>
    )
}

export default ProblemSets;