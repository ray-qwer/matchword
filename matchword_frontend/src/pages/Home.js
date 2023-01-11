import React from 'react';
import logo from "../logo.svg";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function Home(){
    return(
        <Container sx={{bgcolor:"gray",padding:"100px"}}>
            <Typography>Hello</Typography>
        </Container>
    )
}

export default Home;