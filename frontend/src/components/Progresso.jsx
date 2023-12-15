import * as React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: 'relative', display: 'flex' }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary" fontSize={50}>
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function CircularWithValueLabel() {
  
  const progress = 75

  return (
    <div>
      <h1>Você completou</h1>
      <br/> 
      <br/> 
      <CircularProgressWithLabel 
    
            value={progress}
            size={350}
            
          />
      <br/> 
      <br/> 
      <h1>de suas tarefas</h1>    
    </div>    
    )
}