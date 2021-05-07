import { fork, all} from "redux-saga/effects";
import * as userSaga from "./userSaga";

function* RootSaga() {
    yield all ([
        fork(userSaga.watchGetUserList),
    ]);
    yield all([
        fork(userSaga.watchGetSignIn),
    ]);
    
}

export default RootSaga;

