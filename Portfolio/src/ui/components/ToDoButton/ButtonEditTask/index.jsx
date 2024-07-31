import { useDispatch } from 'react-redux';
import { taskAsyncActions } from '../../../../engine/core/tasks/saga/taskAsyncActions';
import { ButtonEditTask as Button } from '../components'

export default function ButtonEditTask({ id , edit }){
    const dispatch = useDispatch();

    const editTask = () => {
        dispatch(taskAsyncActions.editTaskAsync(id));
    }

    return(
        <Button onClick={editTask}>{edit ? 'Save' : 'Edit'}</Button>
    )
}