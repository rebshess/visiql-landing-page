import { Button } from '@mui/material';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from './assets/VisiQLLogo.png';

const Navbar = (props) => {
  return (
    <div id='navbar'>
      <img id='logo' src={logo} width='275px' height='92px' />
      <nav id='nav-menu'></nav>
    </div>
  );
};

export default Navbar;
