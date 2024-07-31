import { styled } from '@mui/system';
import {Box, Link } from '@mui/material';

export const BoxMenu = styled(Box)({
    display: 'flex',
    flexWrap: 'wrap',
    width: 200,
    justifyContent: 'space-between',
    typography: 'body1',
    '& > :not(style) ~ :not(style)': {
      ml: 2
    },
})

export const BoxMenuItem = styled(Link)({
    color: '#000'
})

