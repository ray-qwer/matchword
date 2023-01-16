import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function Home(props){
    const sx = props.sx;
    return(
        <Container sx={{flex:1}}>
            <Typography>Hello</Typography>
        </Container>
    )
}

export default Home;