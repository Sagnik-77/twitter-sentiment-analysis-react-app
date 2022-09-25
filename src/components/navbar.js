import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import {Link} from 'react-router-dom'

export default function ButtonAppBar() {

  const buttonStyle = { backgroundColor: '#1976d2', color:'white', marginRight:'2rem'}
  
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2}}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Twitter Sentiment Analysis
          </Typography>
          <Link to="/dashboard" style={{ textDecoration: 'none' }}>
            <Button style={buttonStyle}>Dashboard</Button>
          </Link>
          <Link to="/admin" style={{ textDecoration: 'none' }}>
            <Button style={buttonStyle}>Admin Panel</Button>
          </Link>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button style={buttonStyle}>Login</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
