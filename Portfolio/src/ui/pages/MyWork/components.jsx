import { styled } from "@mui/system";
import Container from '@mui/material/Container';

export const ConteinerMyWork = styled(Container)({
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridColumnGap: 10,
    gridRowGap: '1em',
})