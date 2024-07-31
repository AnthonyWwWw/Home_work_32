import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { taskAsyncActions } from '../../../engine/core/tasks/saga/taskAsyncActions';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@mui/material';
import { routes } from '../../../engine/config/routes/routes';
import { 
  Container, 
  Box, 
  Typography, 
  ListItem } from '@mui/material';
import { 
  StyledList, 
  ListItemTextStyled, 
  BoxMenu } from './components';

function Done() {
  const doneTasks = useSelector((state) => state.doneTasks.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(taskAsyncActions.loadDoneTasksAsync());
  }, [dispatch]);

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        ToDo List Done
      </Typography>
      <Box my={4}>
        <Box sx={{ mb: 2 }}>
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
        </Box>
        <StyledList>
          {doneTasks.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemTextStyled primary={item.task} />
            </ListItem>
          ))}
        </StyledList>
      </Box>
    </Container>
  );
}

export default Done;
