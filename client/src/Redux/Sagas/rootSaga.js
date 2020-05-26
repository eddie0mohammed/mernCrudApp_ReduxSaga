
import {all, fork} from 'redux-saga/effects';

import {watchAddPostSaga, watchEditPostSaga, watchDeletePostSaga, watchGetPostSaga} from './postSaga';



function* rootSaga(){

    yield all([
        fork(watchAddPostSaga),
        fork(watchEditPostSaga),
        fork(watchDeletePostSaga),
        fork(watchGetPostSaga)
    ])
}

export default rootSaga;