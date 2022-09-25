import React from 'react';
import Navbar from '../navbar';
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';
import User from './user';

function management() {
  const buttonStyle = { backgroundColor: '#1976d2', color:'white', margin:'2rem'}
  const singleButtonStyle = { backgroundColor: '#1976d2', color:'white', marginLeft:'10rem'}
  return (
    <div className="management">
        <Navbar/>
        <Link to="/admin" style={{ textDecoration: 'none' }}>
            <Button style={singleButtonStyle}>Hashtag Configuration</Button>
          </Link>
          <Link to="/admin/management" style={{ textDecoration: 'none' }}>
            <Button style={buttonStyle}>User Management</Button>
        </Link>
        <User/>
    </div>
  )
}

export default management