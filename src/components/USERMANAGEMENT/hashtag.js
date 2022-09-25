import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './hashtag.css'

function createData(id,hashtag,activate,deactivate) {
    return { id,hashtag,activate,deactivate };
    
  }
  
  const rows = [
    createData(1, 'suicide',<Button variant="contained">Activate</Button>,<Button variant="outlined">Deactivate</Button>),
    createData(2, 'anxiety',<Button variant="contained" >Activate</Button>,<Button variant="outlined">Deactivate</Button>),
    createData(3, 'depression',<Button variant="contained" >Activate</Button>,<Button variant="outlined">Deactivate</Button>),
    createData(4, 'frustation',<Button variant="contained" >Activate</Button>,<Button variant="outlined">Deactivate</Button>),
    createData(5, 'stress',<Button variant="contained">Activate</Button>,<Button variant="outlined">Deactivate</Button>),
  ];

function hashtag() {


  return (
    <>
    <TableContainer component={Paper} style={{marginLeft:'10rem', width:'80%', alignItems: 'center', justifyContent: 'center'}}>
      <Table sx={{ minWidth: 500 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Hashtags (#)</TableCell>
            <TableCell align="right">Activate</TableCell>
            <TableCell align="right">Deactivate</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.id}</TableCell>
              <TableCell align="right">{row.hashtag}</TableCell>
              <TableCell align="right">{row.activate}</TableCell>
              <TableCell align="right">{row.deactivate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <p style={{marginLeft: '1rem'}}>showing 1 of 1 record</p>
    </TableContainer>

    <div className="add">
        <Box
        component="form"
        sx={{
            '& > :not(style)': { m: 1, width: '30rem', height: '3rem'},
        }}
        noValidate
        autoComplete="off"
        
        >
        <TextField id="outlined-basic" label="Enter a new hashtag" variant="outlined" />
        <Button variant="contained" style={{height: '3rem'}}>Add</Button>
        </Box>
    </div>
    </>
  )
}

export default hashtag