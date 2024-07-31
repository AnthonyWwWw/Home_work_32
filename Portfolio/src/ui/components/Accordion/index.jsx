import React, {useState} from 'react';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { 
  ConteinerAccordion as Box, 
  СontactsListItem as ListItem} from './components'

export default function Accordions() {
  const [expanded, setExpanded] = useState('panel1');

  const handleChange = (panel) => (isExpanded) => {
      setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Сontacts
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
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
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Lorem
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{height: 90}} >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum dolores, rem voluptates iure fuga fugit quasi sed quibusdam error quam laboriosam culpa animi nemo nesciunt itaque necessitatibus facilis incidunt quae?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={{position: 'absolute', bottom: 0}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Lorem
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{height: 110, textAlign: 'justify'}}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa consectetur sint numquam eum quae id beatae quam nostrum nemo sed?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum dolores, rem voluptates iure fuga fugit quasi sed quibusdam error quam laboriosam culpa animi nemo nesciunt itaque necessitatibus facilis incidunt quae?
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Box>
  );
}

