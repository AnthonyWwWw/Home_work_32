import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/material';
import { taskAsyncActions } from '../../../engine/core/tasks/saga/taskAsyncActions';
import ButtonDeleteTask from '../ToDoButton/ButtonDeleteTask';
import ButtonDoneTask from '../ToDoButton/ButtonDoneTask';
import ButtonEditTask from '../ToDoButton/ButtonEditTask';
import {
  StyledList,
  StyledListItem,
  StyledListItemText,
  StyledIndexBox,
  StyledTextField,
  StyledButtonGroup} from './components';

export default function TaskItem() {
  const tasks = useSelector((state) => state.tasks.data);
  const dispatch = useDispatch();

  const handleSave = useCallback((id, value) => {
    dispatch(taskAsyncActions.savingAfterEditingAsync({ id, value }));
  }, [dispatch]);

  return (
    <StyledList>
      {tasks.map((item, index) => (
        <StyledListItem key={item.id}>
          {!item.edit ? (
            <>
              <StyledListItemText
                primary={item.task}
              />
              <StyledIndexBox>
                {index + 1}
              </StyledIndexBox>
            </>
          ) : (
            <StyledTextField
              id={`task-${item.id}`}
              label={`Edit Task ${index + 1}`}
              variant="outlined"
              defaultValue={item.task}
              fullWidth
              onBlur={(e) => handleSave(item.id, e.target.value)}
            />
          )}
          <Box sx={{ ml: 2 }}>
            <StyledButtonGroup
              disableElevation
              variant="contained"
              aria-label="task actions"
            >
              <ButtonDoneTask id={item.id} />
              <ButtonDeleteTask id={item.id} />
              <ButtonEditTask id={item.id} edit={item.edit} />
            </StyledButtonGroup>
          </Box>
        </StyledListItem>
      ))}
    </StyledList>
  );
}
