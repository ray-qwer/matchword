import createTheme  from "@mui/material/styles/createTheme";
import React from 'react';

const topBarTheme = createTheme({
    palette:{
        primary:{
            main:"#8080C0"
        }
    }
})

const footerTheme = createTheme({
    palette:{
        primary:{
            main:"#8080C0",
        }
    }
})

const buttonTheme = createTheme({
    palette:{
        primary:{
            main:"#FFFFFF",
        }
    }
})
export {topBarTheme, footerTheme, buttonTheme};