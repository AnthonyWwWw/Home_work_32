import { useDispatch } from 'react-redux';
import { taskAsyncActions } from '../../../../engine/core/tasks/saga/taskAsyncActions';
import { ButtonClear as Button } from '../components';

export default function ButtonClear() {
    const dispatch = useDispatch();

    const handleClearTasksList = () => {
        dispatch(taskAsyncActions.clearTasksAsync());
    };

    return (
        <Button variant='contained' type='button' onClick={handleClearTasksList}>Clear</Button>
    );
}
