import { styled } from "@mui/system";
import Button from '@mui/material/Button';
import { red } from '@mui/material/colors';

export const ButtonAddTask = styled(Button)({
    width: '100%',
    height: 45,
    backgroundColor: 'black',
    color: 'white',
    '&:hover': {
      backgroundColor: 'darkgrey', 
      boxShadow: 'none',          
    },
    '&:focus': {
      outline: 'none',            
    },
    '&:active': {
      boxShadow: 'none',
    }
})

export const ButtonClear = styled(Button)({
    width: '100%',
    height: 45,
    backgroundColor: 'black',
    marginTop: 1,
    color: 'white',
    '&:hover': {
      backgroundColor: 'darkgrey', 
      boxShadow: 'none',          
    },
    '&:focus': {
      outline: 'none',            
    },
    '&:active': {
      boxShadow: 'none',   
    }
})

export const ButtonDeleteTask = styled(Button)({
    backgroundColor: red[600], 
    '&:hover': { backgroundColor: red[900]}
})

export const ButtonDoneTask = styled(Button)({
    backgroundColor: '#000',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#333',
    }
})

export const ButtonEditTask = styled(Button)({
    backgroundColor: '#000',
    color: '#fff',
    '&:hover': {
    backgroundColor: '#333',
    }
})