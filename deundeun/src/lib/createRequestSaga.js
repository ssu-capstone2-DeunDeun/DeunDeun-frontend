import { finishLoading, startLoading } from 'modules/loading';
import { call, put } from 'redux-saga/effects';

// 본 함수는 redux-saga를 이용한 비동기 처리 함수입니다. call -> await, put-> dispatch
export default function createRequestSaga(type, request) {
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;
    //type =>DUPKCATD, reqeuest : authapi.ispulciatednickname
    return function* (action) {
        yield put(startLoading(type));
        try {
            const response = yield call(request, action.payload);
            yield put({
                type: SUCCESS,
                payload: response.data,
            })
        }
        catch (e) {
            yield put({
                type: FAILURE,
                payload: e,
            })
        }
        yield put(finishLoading(type));
    }
} 
