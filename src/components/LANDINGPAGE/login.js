import React from 'react'
import { Grid,Paper,Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TwitterIcon from '@mui/icons-material/Twitter';
import {useNavigate} from 'react-router-dom';
const Login=({handleChange})=>{

    const navigate = useNavigate();

    const paperStyle={padding :20,height:'73vh',width:500, margin:"0 auto"}
    const avatarStyle = { backgroundColor: '#1d9bf0' }
    const marginTop = { marginTop: 10 }
    const marginTopSmall = { marginTop: 5 }
    return(
        <Grid>
            <Paper  style={paperStyle}>
                <Grid align='center'>
                <Avatar style={avatarStyle}><TwitterIcon/></Avatar>
                    <h2 style={{fontWeight: 'bold'}}>Sign In</h2>
                    <Typography variant='caption' gutterBottom>Welcome back! Please enter your details</Typography>
                </Grid>
                <TextField label='Username' placeholder='Enter username' fullWidth required/>
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                <Button type='submit' color='primary' variant="contained" style={avatarStyle} fullWidth 
                onClick={()=>navigate('dashboard')}>Sign in</Button>
                <Typography style={marginTop}>
                     <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
                <Typography style={marginTopSmall}> Do you have an account? 
                     <Link href="#" onClick={()=>handleChange("event",1)} >
                        Sign Up 
                </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login