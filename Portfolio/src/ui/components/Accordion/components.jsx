import { Box, styled } from '@mui/material';
import ListItem from '@mui/material/ListItem';


export const ConteinerAccordion = styled(Box)({
    margin: 20, 
    display: 'flex', 
    flexDirection: 'column', 
    height: 300, 
    overflow: 'hidden', 
    borderRadius: 10, 
    position: 'relative'
})

export const СontactsListItem = styled(ListItem)({
    '& .MuiListItemIcon-root': {minWidth: 30}
})
