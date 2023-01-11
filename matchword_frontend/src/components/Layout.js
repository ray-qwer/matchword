import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Box from "@mui/material/Box"

function Layout () {
    return(
        <Box sx={{height:"100vh",width:"100vw"}}>
            <Header/>
            <Outlet/>
        </Box>
    )
}

export default Layout;