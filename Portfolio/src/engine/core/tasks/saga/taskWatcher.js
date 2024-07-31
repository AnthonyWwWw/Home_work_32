import { takeEvery } from 'redux-saga/effects'
import { taskAsyncActions } from './taskAsyncActions'
import { 
    callAddTaskAsync, 
    callDeleteTaskAsync, 
    callLoadTasksAsync, 
    callClearTasksAsync, 
    callLoadHistoryTasksAsync, 
    callDoneTaskAsync, 
    callLoadDoneTasksAsync, 
    callEditTaskAsync,
    callSavingAfterEditingAsync} from './taskWorkers'

export function* taskWatcher() {
    yield takeEvery(taskAsyncActions.addTaskAsync.type, callAddTaskAsync);
    yield takeEvery(taskAsyncActions.deleteTaskAsync.type, callDeleteTaskAsync);
    yield takeEvery(taskAsyncActions.loadTasksAsync.type, callLoadTasksAsync);
    yield takeEvery(taskAsyncActions.clearTasksAsync.type, callClearTasksAsync);
    yield takeEvery(taskAsyncActions.loadHistoryTasksAsync.type, callLoadHistoryTasksAsync);
    yield takeEvery(taskAsyncActions.doneTaskAsync.type, callDoneTaskAsync);
    yield takeEvery(taskAsyncActions.loadDoneTasksAsync.type, callLoadDoneTasksAsync);
    yield takeEvery(taskAsyncActions.editTaskAsync.type, callEditTaskAsync);
    yield takeEvery(taskAsyncActions.savingAfterEditingAsync.type, callSavingAfterEditingAsync);
}