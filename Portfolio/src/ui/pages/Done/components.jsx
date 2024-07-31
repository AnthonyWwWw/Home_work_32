import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';

export const StyledList = styled(List)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
});

export const ListItemTextStyled = styled(ListItemText)({
  width: 500,
  textAlign: 'center',
  background: '#000',
  margin: 1,
  color: '#FFFF',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderBottom: '1px solid red',
  },
});

export const BoxMenu = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  width: 200,
  justifyContent: 'space-between',
  typography: 'body1',
  '& > :not(style) ~ :not(style)': {
    marginLeft: 2,
  },
});
