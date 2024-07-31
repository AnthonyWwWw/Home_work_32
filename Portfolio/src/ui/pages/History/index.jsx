import React, { useEffect } from 'react';
import List from '@mui/material/List';
import { useSelector, useDispatch } from 'react-redux';
import { taskAsyncActions } from '../../../engine/core/tasks/saga/taskAsyncActions';
import { ListItemTextStyled as ListItemText, BoxMenu } from './components';
import { Link as RouterLink } from 'react-router-dom';
import { Link, Typography, Container } from '@mui/material';
import { routes } from '../../../engine/config/routes/routes';
import ListItem from '@mui/material/ListItem';

function History() {
  const deletedTasks = useSelector((state) => state.deleteTask.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(taskAsyncActions.loadHistoryTasksAsync());
  }, [dispatch]);

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        ToDo List History
      </Typography>
      <BoxMenu>
        <Link href="#" underline="hover" component={RouterLink} to={routes.toDo.path}>
          {'To Do'}
        </Link>
        <Link href="#" underline="hover" component={RouterLink} to={routes.done.path}>
          {'Done'}
        </Link>
        <Link href="#" underline="hover" component={RouterLink} to={routes.history.path}>
          {'History'}
        </Link>
      </BoxMenu>
      <List>
        {deletedTasks.length > 0 ? (
          deletedTasks.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemText primary={item.task} />
            </ListItem>
          ))
        ) : (
          <ListItem sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <Typography variant="h4">No tasks found.</Typography>
          </ListItem>
        )}
      </List>
    </Container>
  );
}

export default History;
