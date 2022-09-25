import React from 'react'
import { Grid, Paper,Avatar, Typography, TextField, Button } from '@material-ui/core'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import AppRegistrationRoundedIcon from '@mui/icons-material/AppRegistrationRounded';

const Signup = () => {
    const paperStyle = { padding :20,width:500, margin:"0 auto"}
    const avatarStyle = { backgroundColor: '#1d9bf0' , color:'#ffff'}
    const marginTop = { marginTop: 5 }
    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                <Avatar style={avatarStyle}><AppRegistrationRoundedIcon/></Avatar>
                    <h2 style={{fontWeight: 'bold'}}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                    <br></br>
                    <Typography variant='caption' gutterBottom>All the fields are mandatory</Typography>
                </Grid>
                <form>

                    
                        <TextField fullWidth label='First Name' placeholder="Enter your first name" />
                        <TextField fullWidth label='Last Name' placeholder="Enter your last name" />
                        <TextField fullWidth label='User Name' placeholder="Enter your username" />
                        <TextField fullWidth label='Email' placeholder="Enter your email" />
                        <TextField fullWidth label='Phone No.' placeholder="Enter your phone number" />
                        <TextField fullWidth label='Registration No.' placeholder="Enter your registration number" />
                        <TextField fullWidth label='Speciality' placeholder="Enter your treatment speciality" />
                        <TextField fullWidth label='Location' placeholder="Enter your location" />
                    
                    
                    <FormControl component="fieldset" style={marginTop}>
                        <FormLabel component="legend">Gender</FormLabel >
                        <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
                            <FormControlLabel value="female" control={<Radio color="primary"/>}  label="Female" />
                            <FormControlLabel value="male" control={<Radio color="primary"/>} label= "Male" />
                        </RadioGroup>
                    </FormControl>

                    <TextField fullWidth label='Password' placeholder="Enter your password"/>
                    <TextField fullWidth label='Confirm Password' placeholder="Confirm your password"/>
                    <FormControlLabel
                        control={<Checkbox name="checkedA" color="primary"/>}
                        label="I accept the terms and conditions."
                    />
                    <Button type='submit' variant='contained' style={avatarStyle} fullWidth>Sign up</Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default Signup;