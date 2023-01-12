import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Box from "@mui/material/Box"

function Layout () {
    return(
        <Box sx={{height:"100vh",width:"100vw",flexDirection:"column",display:"flex"}}>
            <Header sx={{height:"64px",width:"100vw"}}/>
            <Outlet />
            <Footer sx={{height:"80px",width:"100vw"}}/>
        </Box>
    )
}

export default Layout;