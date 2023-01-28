import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Box from "@mui/material/Box"

function Layout () {
    return(
        <Box sx={{height:"100vh",width:"auto",flexDirection:"column",display:"flex"}}>
            <Header sx={{height:"64px",width:"100%"}}/>
            <Outlet />
            <Footer sx={{height:"80px",width:"100%"}}/>
        </Box>
    )
}

export default Layout;