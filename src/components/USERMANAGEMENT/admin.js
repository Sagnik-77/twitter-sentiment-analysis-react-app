import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';
import Navbar from '../navbar'
import Hashtag from './hashtag'

function admin() {
  const buttonStyle = { backgroundColor: '#1976d2', color:'white', margin:'2rem'}
  const singleButtonStyle = { backgroundColor: '#1976d2', color:'white', marginLeft:'10rem'}
  return (
    <div className="admin">
        <Navbar/>
        <Link to="/admin" style={{ textDecoration: 'none' }}>
            <Button style={singleButtonStyle}>Hashtag Configuration</Button>
          </Link>
          <Link to="/admin/management" style={{ textDecoration: 'none' }}>
            <Button style={buttonStyle}>User Management</Button>
        </Link>
        <Hashtag/>
    </div>
  )
}

export default admin