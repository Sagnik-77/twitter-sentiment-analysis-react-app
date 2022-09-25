import * as React from 'react';
import Box, { BoxProps } from '@mui/material/Box';
import {Avatar} from '@material-ui/core';
import TwitterIcon from '@mui/icons-material/Twitter';

function Item(props: BoxProps) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
        color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
        border: '1px solid',
        borderColor: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
        borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
}

export default function statistics() {
  const avatarStyle = { backgroundColor: '#1d9bf0', alignItems: 'center', marginTop:'2rem'}
  return (
    <div style={{ width: '100%' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
          justifyContent: 'space-evenly',
          textAlign: 'center',
        }}
      >
        
            <Avatar style={avatarStyle}><TwitterIcon/></Avatar>
        
        <Item>
            Total Tweets 
            <h3 >10</h3>
        </Item>
        <Item style={{color:'#34c903'}}>
            Positive Tweets
            <h3 >4</h3>
        </Item>
        <Item style={{color:'#ff0707'}}>
            Negative Tweets
            <h3 >0</h3>
        </Item>
        <Item style={{color:'#2543b0'}}>
            Neutral Tweets
            <h3 >6</h3>
        </Item>
        <Item style={{color:'#c903bc'}}>
            Popular hashtags (#) suicide
            <h3 >0</h3>
        </Item>
      </Box>
    </div>
  );
}
