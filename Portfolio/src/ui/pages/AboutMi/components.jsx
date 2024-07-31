import { 
  Box, 
  Link, 
  Menu, 
  Chip, 
  Stack, 
  Typography, 
  Container } from '@mui/material';
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
  minWidth: 100,
  fontSize: 25,
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
}));

export const AboutBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-around',
  '& .MuiContainer-root': { padding: 0 },
});

export const AboutContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginRight: 5,
});

export const MainBox = styled(Box)({
  width: 570,
  height: 580,
  marginBottom: 20,
  backgroundColor: 'black',
  borderRadius: 20,
});

export const TypographyH2 = styled(Typography)({
  paddingLeft: 25,
  color: '#ffff',
  letterSpacing: 1,
  fontWeight: 400,
});

export const TypographyH3 = styled(Typography)({
  height: 150,
  width: 540,
  paddingLeft: 25,
  color: '#ffff',
  letterSpacing: 1,
  textAlign: 'justify',
});

export const InfoBox = styled(Box)({
  width: 570,
  height: 500,
  borderRadius: 20,
  marginTop: 2,
  border: '1px solid black',
});

export const StackContainer = styled(Stack)({
  padding: 15,
});

export const ChipJS = styled(Chip)({
  backgroundColor: '#F7C815',
});

export const ChipReact = styled(Chip)({
  backgroundColor: '#0BA5BE',
});

export const ChipRedux = styled(Chip)({
  backgroundColor: '#6D8C00',
});

export const ChipHTML = styled(Chip)({
  backgroundColor: '#EC9704',
});

export const ChipCSS = styled(Chip)({
  backgroundColor: '#EE51B1',
});

export const ListContainer = styled(Box)({
  width: '100%',
  maxWidth: 500,
  marginLeft: 2,
});

export const ImageContainer = styled(Container)({
  maxWidth: 400,
  minWidth: 400,
  height: 1100,
  marginLeft: 10,
  backgroundColor: 'black',
  borderRadius: 20,
  overflow: 'hidden',
});

export const Image = styled('img')({
  width: '100%',
  height: 'auto',
  borderRadius: 1,
});

export const TypographyDescription = styled(Typography)({
  color: '#ffff',
  letterSpacing: 1,
  fontSize: 20,
  padding: 10,
  textAlign: 'justify',
  marginTop: 5,
});
