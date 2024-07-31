import React, { useEffect } from 'react';
import ButtonAddTask from '../../components/ToDoButton/ButtonAddTask/index';
import ButtonClear from '../../components/ToDoButton/ButtonClear/index';
import TaskItem from '../../components/TaskItem/index';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { BoxMenu, BoxMenuItem } from './components';
import { Link as RouterLink } from 'react-router-dom';
import { routes } from '../../../engine/config/routes/routes';
import { taskAsyncActions } from '../../../engine/core/tasks/saga/taskAsyncActions';
import { 
    TextField, 
    Container, 
    Box, 
    Typography } from '@mui/material';

export default function ToDo() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(taskAsyncActions.loadTasksAsync());
    }, [dispatch]);

    const handleAddTask = (values, { resetForm }) => {
        dispatch(taskAsyncActions.addTaskAsync(values));
        resetForm();
    };

    return (
        <Container maxWidth="sm">
            <Box my={4}>
                <Typography variant="h4" gutterBottom>
                    ToDo List
                </Typography>
                <BoxMenu>
                    <BoxMenuItem href="#" underline="hover" component={RouterLink} to={routes.toDo.path}>
                        {'To Do'}
                    </BoxMenuItem>
                    <BoxMenuItem href="#" underline="hover" component={RouterLink} to={routes.done.path}>
                        {'Done'}
                    </BoxMenuItem>
                    <BoxMenuItem href="#" underline="hover" component={RouterLink} to={routes.history.path}>
                        {'History'}
                    </BoxMenuItem>
                </BoxMenu>
                <Formik
                    initialValues={{ task: '' }}
                    onSubmit={handleAddTask}
                >
                    {({ handleSubmit }) => (
                        <Form onSubmit={handleSubmit}>
                            <Field
                                name="task"
                                as={TextField}
                                label="New ToDo"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                            />
                            <ButtonAddTask />
                            <ButtonClear />
                        </Form>
                    )}
                </Formik>
                <TaskItem></TaskItem>
            </Box>
        </Container>
    );
}
