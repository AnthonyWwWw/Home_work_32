import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { 
  Avatar, 
  IconButton, 
  Tooltip, 
  Divider, 
  MenuItem } from '@mui/material';
import { 
  HeaderBox,
  NavBox, 
  NavLink, 
  StyledMenu, 
  MenuIcon } from './components';

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <HeaderBox>
        <NavBox>
          <NavLink component={RouterLink} to="/">
            About me
          </NavLink>
          <NavLink component={RouterLink} to="/my-work">
            My works
          </NavLink>
          <NavLink component={RouterLink} to="/skills">
            Skills
          </NavLink>
          <NavLink component={RouterLink} to="/contact">
            Contact
          </NavLink>
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <Avatar sx={{ width: 64, height: 64 }}>M</Avatar>
            </IconButton>
          </Tooltip>
        </NavBox>
        <StyledMenu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem onClick={handleClose}>
            <Avatar /> Profile
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Avatar /> My account
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>
            <MenuIcon>
              <PersonAdd fontSize="small" />
            </MenuIcon>
            Add another account
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <MenuIcon>
              <Settings fontSize="small" />
            </MenuIcon>
            Settings
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <MenuIcon>
              <Logout fontSize="small" />
            </MenuIcon>
            Logout
          </MenuItem>
        </StyledMenu>
      </HeaderBox>
    </React.Fragment>
  );
}
