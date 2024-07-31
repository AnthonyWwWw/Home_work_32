import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { 
  styledListItem as ListItem,
  styledBox as Box} from './components'

export default function Footer() {
  return (
    <Box>
      <Container maxWidth="lg" sx={{display: 'flex', alignItems: 'center'}}>
      <Typography variant="h6" align="center" gutterBottom sx={{flex: 1}}>
          LOGO
      </Typography>
        <Typography
          variant="body2"
          color="inherit"
          align="center"
          sx={{alignSelf: 'flex-end', flex: 1}}
        >
          {'© '}
          <Link color="inherit" href="#">
            Your Website
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>

        <List sx={{flex: 1}}>
          <ListItem disablePadding>
            <ListItemIcon>
              <CallOutlinedIcon/>
            </ListItemIcon>
            <ListItemText primary="+380 (099)-999-99-99" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <EmailOutlinedIcon/>
            </ListItemIcon>
              <ListItemText primary="gmail_mail@gmail.com" />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <HomeOutlinedIcon/>
              </ListItemIcon>
            <ListItemText primary="54 Simi Prakhovykh St., Kyiv, 01033" />
          </ListItem>
        </List>
      </Container>
    </Box>
  );
}

