import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';

export type NavBarInterface = {
}

const NavBar: React.FC<NavBarInterface>  = ({}) => {
	return (
	<AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Gentleman Programing React Test
          </Typography>
          
        </Toolbar>
      </AppBar>
	);
};

export default NavBar;
