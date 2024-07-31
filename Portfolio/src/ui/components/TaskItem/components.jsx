import { styled } from '@mui/material/styles';
import { 
  Box, 
  List, 
  ListItem, 
  ListItemText, 
  TextField,
  ButtonGroup } from '@mui/material';

export const StyledList = styled(List)({
  padding: 2,
});

export const StyledListItem = styled(ListItem)({
  display: 'flex',
  alignItems: 'center',
  marginBottom: 2,
});

export const StyledListItemText = styled(ListItemText)({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  borderRadius: 1,
  boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)',
  border: '1px solid #e0e0e0',
  padding: 10,
  position: 'relative',
});

export const StyledIndexBox = styled(Box)({
  position: 'absolute',
  left: 25,
  top: 3,
  padding: '0 4px',
  borderRadius: 1,
  fontSize: 12,
  fontWeight: 'bold',
  color: 'rgba(149, 157, 165, 0.8)',
});

export const StyledTextField = styled(TextField)({
  backgroundColor: '#f5f5f5',
  borderRadius: 1,
  boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)',
  border: '1px solid #e0e0e0',
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: 'none',
    },
  },
});

export const StyledButtonGroup = styled(ButtonGroup)({
  height: 40,
});
