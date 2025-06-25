import './NavBar.css'
import React, { FC } from "react";
import { AppBar, Toolbar,  Typography, Box, Stack, Button } from "@mui/material";
import KeremNetLogo from './KeremNetLogo.png'

const NavBar: FC = () => {
  return (
    <AppBar className='navBarPageHeader'>
      <Toolbar className='toolBar'>
        <Box className='logo' component="img" alt="KeremNet Logo" src={KeremNetLogo} />
        <Typography className='appTitle' variant="h6" component="div" >
          KeremNet
        </Typography>
        <Stack className='navStack'>
          <Button className='navButton'>Posts</Button>
          <Button className='navButton'>Posts</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
