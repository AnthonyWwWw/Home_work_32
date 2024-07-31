import { 
  Box, 
  Link, 
  Menu, 
  ListItemIcon } from '@mui/material';
import { styled } from '@mui/material/styles';

export const HeaderBox = styled(Box)({
  width: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  backgroundColor: 'black',
  color: '#ffff',
  height: 100,
  display: 'flex',
});

export const NavBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',
  position: 'relative',
  right: '0px',
  marginLeft: 'auto',
  paddingRight: 10,
});

export const NavLink = styled(Link)({
  fontSize: 25,
  margin: 15,
  color: '#FFFF',
  marginRight: 3,
  '&:last-of-type': {
    marginRight: 0,
  },
});

export const StyledMenu = styled(Menu)(({ theme }) => ({
  overflow: 'visible',
  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
  marginTop: theme.spacing(1.5),
  '& .MuiAvatar-root': {
    width: 32,
    height: 32,
    marginLeft: -0.5,
    marginRight: 1,
  },
  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    top: 0,
    right: 14,
    width: 10,
    height: 10,
    backgroundColor: theme.palette.background.paper,
    transform: 'translateY(-50%) rotate(45deg)',
    zIndex: 0,
  },
}));

export const MenuIcon = styled(ListItemIcon)({
  minWidth: 30,
});
