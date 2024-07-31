import { configureStore } from '@reduxjs/toolkit'
import taskReducer from '../core/tasks/redux/taskSlice'
import { rootSaga } from './rootSaga'
import createSagaMiddleware from 'redux-saga'
import doneTasksReducer from '../core/tasks/redux/doneTaskSlice'
import deleteTaskReducer from '../core/tasks/redux/deletaTaskSlice'
import swapiReducer from '../core/swapi/redux/swapiSlice'

export const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        tasks: taskReducer,
        doneTasks: doneTasksReducer,
        deleteTask: deleteTaskReducer,
        swapi: swapiReducer,
    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), sagaMiddleware]
});

sagaMiddleware.run(rootSaga)



