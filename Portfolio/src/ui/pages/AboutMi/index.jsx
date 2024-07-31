import { ThemeProvider, createTheme } from '@mui/material/styles';
import Accordion from '../../components/Accordion/index';
import { createURL } from '../../../helpers/createURL';
import { 
    AboutBox, 
    AboutContainer, 
    MainBox, 
    TypographyH2, 
    TypographyH3, 
    InfoBox, 
    StackContainer, 
    ChipJS, 
    ChipReact, 
    ChipRedux, 
    ChipHTML, 
    ChipCSS, 
    ListContainer, 
    ImageContainer, 
    Image, 
    TypographyDescription 
} from './components';
import { List, ListItem, ListItemText } from '@mui/material';

const theme = createTheme({
    typography: {
        body2: {
            fontSize: '31px',
        },
    },
});

export default function AboutMi() {
    const handleClick = () => {
        console.info('You clicked the Chip.');
    };

    return (
        <ThemeProvider theme={theme}>
            <AboutBox>
                <AboutContainer>
                    <MainBox>
                        <TypographyH2 variant="h2">
                            Hello!
                        </TypographyH2>
                        <TypographyH3 variant="h3">
                            I am a web developer. My name Toni. I have been developing for 1 year.
                        </TypographyH3>
                        <Accordion />
                    </MainBox>
                    <InfoBox>
                        <StackContainer direction="row" spacing={1}>
                            <ChipJS label="JS" onClick={handleClick} />
                            <ChipReact label="React" onClick={handleClick} />
                            <ChipRedux label="Redux" onClick={handleClick} />
                            <ChipHTML label="HTML" onClick={handleClick} />
                            <ChipCSS label="CSS/SCSS" onClick={handleClick} />
                        </StackContainer>
                        <ListContainer>
                            <List>
                                <ListItem>
                                    <ListItemText primary="Programming languages:" secondary="JavaScript" />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Frontend technologies:" secondary="React, Redux, Material-UI, SCSS" />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Backend technologies:" secondary="Node.js, Express" />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Tools and platforms:" secondary="Git, Webpack, Docker" />
                                </ListItem>
                            </List>
                        </ListContainer>
                    </InfoBox>
                </AboutContainer>
                <ImageContainer>
                    <Image
                        src={createURL('../ui/img/taitl.png')}
                        alt="Опис зображення"
                    />
                    <TypographyDescription>
                        I am a web developer specializing in building dynamic and scalable web applications using React and Redux. 
                        With a strong foundation in JavaScript, I excel in developing and optimizing frontend solutions. 
                        My approach to development involves organizing code into modular components and leveraging custom hooks 
                        for improved logic reuse. I prefer to separate styling into distinct files for easier maintenance and 
                        scalability of projects.
                    </TypographyDescription>
                </ImageContainer>
            </AboutBox>
        </ThemeProvider>
    );
}
