import { all, call } from 'redux-saga/effects'
import { taskWatcher } from '../core/tasks/saga/taskWatcher'
import { swapiWatcher } from '../core/swapi/saga/swapiWatcher'

export function* rootSaga(){
    yield all([
        call(taskWatcher),
        call(swapiWatcher),
    ])  
}