import './NavBar.css'
import React, { FC } from "react";
import { AppBar, Toolbar, Typography, Box, Stack, Button } from "@mui/material";
import KeremNetLogo from './KeremNetLogo.png'

const NavBar: FC = () => {
  return (
    <AppBar sx={{ bgcolor: '#800080', position: 'static' }}>
      <Toolbar className='toolBar'>
        <Box className='logo' component="img" alt="KeremNet Logo" src={KeremNetLogo} />
        <Typography variant="h6" component="div" flexGrow={1} >
          KeremNet
        </Typography>
        <Stack className='navStack' flexDirection={'row'}>
          <Button sx={{ color: '#FFFFFF' }} >Posts</Button>
          <Button sx={{ color: '#FFFFFF' }}>Posts</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
