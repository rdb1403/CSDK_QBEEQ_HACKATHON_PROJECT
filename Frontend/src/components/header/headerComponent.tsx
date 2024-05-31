import React from 'react';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();

  const getButtonStyle = (path: string) => {
    return location.pathname === path ? { backgroundColor: 'rgba(0, 0, 0, 0.2)' } : {};
  };

  return (

    <div className='sub-header-container'>
      <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Dashboard Builder
        </Typography>
        <Button color="inherit" component={Link} to="/setup" style={getButtonStyle('/setup')}>
          Setup
        </Button>
        <Button color="inherit" component={Link} to="/visualization" style={getButtonStyle('/visualization')}>
          Visualization
        </Button>
      </Toolbar>
    </AppBar>

    </div>
    
  );
};

export default Header;
