import { styled } from '@mui/material/styles';
import { 
  Card, 
  CardMedia, 
  Button, 
  Typography } from '@mui/material';

export const StyledCard = styled(Card)({
  width: 355,
  maxHeight: 300,
  backgroundColor: 'black',
  '&:hover': {
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
  },
});

export const StyledCardMedia = styled(CardMedia)({
  width: '100%',
  height: 140,
});

export const StyledButton = styled(Button)({
  backgroundColor: '#ffff',
  color: 'black',
});

export const StyledTypography = styled(Typography)({
  color: '#ffff',
  textAlign: 'justify',
  marginTop: 1,
});
