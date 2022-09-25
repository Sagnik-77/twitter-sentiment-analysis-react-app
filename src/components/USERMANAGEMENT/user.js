import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';



function createData(username, firstname, lastname, regis, speciality, location, action) {
    return { username, firstname, lastname, regis, speciality, location, action};
    
  }

  const rows= [
    createData('RishikM70','Rishik','Mookherjee',202270,'Software Engineer','Kolkata',<Button variant="contained">Activate</Button>)
  ];

  function user() {


    return (
      <div>
    <TableContainer component={Paper} style={{marginLeft:'10rem', width:'80%', alignItems: 'center',justifyContent: 'center'}}>
        <Table sx={{ minWidth: 500 }} size="small" aria-label="a dense table">
            <TableHead>
            <TableRow>
                <TableCell align="left">Username</TableCell>
                <TableCell align="left">First Name</TableCell>
                <TableCell align="left">Last Name</TableCell>
                <TableCell align="left">Registration No.</TableCell>
                <TableCell align="left">Speciality</TableCell>
                <TableCell align="left">Location</TableCell>
                <TableCell align="left">Action</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell align="left">{row.username}</TableCell>
                <TableCell align="left">{row.lastname}</TableCell>
                <TableCell align="left">{row.firstname}</TableCell>
                <TableCell align="left">{row.regis}</TableCell>
                <TableCell align="left">{row.speciality}</TableCell>
                <TableCell align="left">{row.location}</TableCell>
                <TableCell align="left">{row.action}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        <p style={{marginLeft: '1rem'}}>showing 1 of 1 record</p>
        </TableContainer>
    </div>
  )
}

export default user