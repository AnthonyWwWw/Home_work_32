import React from 'react';
import { CardContent } from '@mui/material';
import { createURL } from '../../../helpers/createURL';
import { Link as RouterLink } from 'react-router-dom';
import { 
  StyledCard, 
  StyledCardMedia, 
  StyledButton, 
  StyledTypography 
} from './components';

export default function CardMyWork({ description, image, to }) {
  return (
    <StyledCard>
      <StyledCardMedia
        component="img"
        image={createURL(image)}
        alt="work image"
      />
      <CardContent>
        <StyledButton
          variant="contained"
          component={RouterLink}
          to={to}
        >
          review
        </StyledButton>
        <StyledTypography variant="body2" color="text.secondary">
          {description}
        </StyledTypography>
      </CardContent>
    </StyledCard>
  );
}
