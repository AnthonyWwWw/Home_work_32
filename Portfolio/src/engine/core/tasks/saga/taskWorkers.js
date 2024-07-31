import { put, select } from 'redux-saga/effects';
import { addDeleteListTask, loadTasksHistory } from '../redux/deletaTaskSlice';
import { addDoneTask, loadTasksDone } from '../redux/doneTaskSlice'
import { v4 as uuidv4 } from 'uuid';
import { 
    saveToLocalStorage, 
    deleteToLocalStorage, 
    saveDeletedTaskLocalStorage, 
    saveDoneTaskLocalStorage } from './localStorageSagas';
import { 
    addTask, 
    deleteTask, 
    loadTasks, 
    clear, 
    editTask } from '../redux/taskSlice';

export function* callAddTaskAsync(action) {
    const newTask = { id: uuidv4(), task: action.payload.task, edit: false };
    yield put(addTask(newTask));
    yield saveToLocalStorage();
}

export function* callDeleteTaskAsync(action) {
    const tasks = yield select((state) => state.tasks.data);
    const taskToDelete = tasks.find(task => task.id === action.payload);

    if (taskToDelete) {
        yield put(deleteTask(action.payload));
        yield deleteToLocalStorage(action.payload);
        yield put(addDeleteListTask(taskToDelete));
        yield saveDeletedTaskLocalStorage();
    }
}

export function* callLoadDoneTasksAsync() {
    const doneTasks = JSON.parse(localStorage.getItem('doneTask')) || [];

    if (doneTasks.length > 0) {
        yield put(loadTasksDone(doneTasks));
    }
}

export function* callLoadHistoryTasksAsync() {
    const tasks = JSON.parse(localStorage.getItem('tasksHistory')) || [];

    if (tasks.length > 0) {
        yield put(loadTasksHistory(tasks));
    }
}

export function* callLoadTasksAsync() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    if (tasks.length > 0) {
        yield put(loadTasks(tasks));
    }
}

export function* callClearTasksAsync() {
    const allTasks = yield select((state) => state.tasks.data);
    const existingTasksHistory = JSON.parse(localStorage.getItem('tasksHistory')) || [];
    const updatedTasksHistory = [...existingTasksHistory, ...allTasks];
    localStorage.setItem('tasksHistory', JSON.stringify(updatedTasksHistory));
    localStorage.removeItem('tasks');
    yield put(addDeleteListTask(allTasks));
    yield put(clear());
}

export function* callDoneTaskAsync(action) {
    const tasks = yield select((state) => state.tasks.data);
    const task = tasks.find(task => task.id === action.payload);

    if (task) {
        yield put(addDoneTask(task));
        yield put(deleteTask(action.payload));
        yield deleteToLocalStorage(action.payload);
        yield saveDoneTaskLocalStorage();
    }
}

export function* callEditTaskAsync(action) {
    const tasks = yield select((state) => state.tasks.data);
    const updatedTasks = tasks.map(task => {
      if (task.id === action.payload) {
        return { ...task, edit: !task.edit };
      }
      return task;
    });
    yield put(editTask(updatedTasks));
    yield saveToLocalStorage();
  }
  

export function* callSavingAfterEditingAsync(action){
    const tasks = yield select((state) => state.tasks.data);
    const updatedTasks = tasks.map(task => {
        if(task.id === action.payload.id){
            return {...task, task: action.payload.value};
        }
        return task;
    })
    yield put(editTask(updatedTasks));
    yield saveToLocalStorage();
}
