import React, { FC } from "react";
import { AppBar, Toolbar, IconButton, Typography, Box, Stack, Button } from "@mui/material";
import { CatchingPokemon } from "@mui/icons-material";
import KeremNetLogo from './KeremNetLogo.png'
import './NavBar.css'

const NavBar: FC = () => {
  return (
    <AppBar className='appBar'>
      <Toolbar className='toolBar'>
        <Box className='logo' component="img" alt="KeremNet Logo" src={KeremNetLogo} />
        <Typography className='appTitle' variant="h6" component="div" >
          KeremNet
        </Typography>
        <Stack
          className='navStack'>
          <Button className='navButton'>Posts</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;