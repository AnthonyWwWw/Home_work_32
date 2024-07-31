import { styled, Box } from '@mui/system';
import ListItem from '@mui/material/ListItem';

export const styledBox = styled(Box)({
    width: '100%',
    bottom: 0,
    backgroundColor: 'black',
    color: 'white',
    marginTop: 25,
    py: 3,
})

export const styledListItem = styled(ListItem)({
    '& .MuiListItemIcon-root': {minWidth: 30, 
                                color: '#ffff'},
})
