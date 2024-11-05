import React from 'react';
import { Paper, Box, Typography } from '@mui/material';

const DataCard = ({ title, value, icon, children }) => {
  return (
    <Paper sx={{ padding: 2, backgroundColor: 'white', boxShadow: 1 }}>
      <Box display="flex" alignItems="center">
        {icon}
        <Typography sx={{ marginLeft: 1, fontSize:'13px' }}>
          {title}
        </Typography>
      </Box>
      <Typography variant="h6" sx={{ marginTop: 1 }}>
        {value}
      </Typography>
      {children}
    </Paper>
  );
};

export default DataCard;
