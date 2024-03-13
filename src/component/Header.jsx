
import React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
// import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <AppBar position='sticky'>
        <Toolbar>
          <Box>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li style={{ display: 'inline', marginRight: '1rem' }}>
                <Link to="/mounting" style={{ color: 'white', textDecoration: 'none' }}>
                  Mounting
                </Link>
              </li>
              <li style={{ display: 'inline', marginRight: '1rem' }}>
                <Link to="/updating" style={{ color: 'white', textDecoration: 'none' }}>
                  Updating
                </Link>
              </li>
              <li style={{ display: 'inline' }}>
                <Link to="/unmounting" style={{ color: 'white', textDecoration: 'none' }}>
                  Unmounting
                </Link>
              </li>
            </ul>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
