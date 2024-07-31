import { useDispatch } from 'react-redux';
import { taskAsyncActions } from '../../../../engine/core/tasks/saga/taskAsyncActions';
import { ButtonDoneTask as Button } from '../components';

export default function ButtonDoneTask({ id }) {
  const dispatch = useDispatch();

  const handleDoneTask = () => {
      dispatch(taskAsyncActions.doneTaskAsync(id));
  }

  return (
    <Button onClick={handleDoneTask}>done</Button>
  )
}
