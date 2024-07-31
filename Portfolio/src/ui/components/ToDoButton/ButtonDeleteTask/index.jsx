import { useDispatch } from 'react-redux';
import { taskAsyncActions } from '../../../../engine/core/tasks/saga/taskAsyncActions'
import { ButtonDeleteTask as Button } from '../components'

export default function ButtonDeleteTask({ id }) {
    const dispatch = useDispatch();

    const handleDeleteTask = () => {
            dispatch(taskAsyncActions.deleteTaskAsync(id));
    }

    return (
        <Button onClick={handleDeleteTask}>delete</Button>
    )
}
