import {call, put, takeEvery} from 'redux-saga/effects';

import {PostInterface} from '../types';

import {request} from '../utils/client';
import {getPostsStart, getPostsSuccess, getPostsFailed} from '../slices/posts';

const apiPostUrl = 'https://jsonplaceholder.typicode.com/posts';

function* handleGetPosts() {
  try {
    const posts: PostInterface[] = yield call(request, apiPostUrl);
    yield put(getPostsSuccess(posts));
  } catch (error) {
    yield put(getPostsFailed(error.toString()));
  }
}

export function* postsSaga() {
  yield takeEvery(getPostsStart.type, handleGetPosts);
}
