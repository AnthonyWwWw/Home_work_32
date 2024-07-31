import Card from '../../components/Card/index';
import UseForm from '../../components/UseForm/index';
import { useDispatch } from 'react-redux';
import { swapiAsyncActions } from '../../../engine/core/swapi/saga/swapiAsyncActions';
import { 
    ContainerContent as Container, 
    StyledButton as Button } from './components';

export default function Swapi() {
    const dispatch = useDispatch();

    const clearData = () => {
        dispatch(swapiAsyncActions.clearSwapiDataAsync());
    };

    return (
        <Container sx={{display: 'flex', alignItems: 'center'}}>
            <UseForm />
            <Card/>
            <Button variant="contained" onClick={clearData}>Clear</Button>
        </Container>
    );
}
