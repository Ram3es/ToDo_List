import { takeLatest, call, put } from "redux-saga/effects";
import { todosAction, todoConsts, ITodo } from "@containers/";
import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

function* fetchTodosSaga({ _, cb }: ReturnType<typeof todosAction.FETCH_TODOS.REQUEST>) {
  try {
    const { data }: { data: ITodo[] } = yield call(() => api.get("/posts"));

    yield put(todosAction.FETCH_TODOS.SUCCESS(data));
  } catch (e) {
    yield put(todosAction.FETCH_TODOS.FAILURE(e as Object));
  } finally {
    cb?.();
  }
}
function* fetchTodoSaga({ payload, cb }: ReturnType<typeof todosAction.FETCH_TODO.REQUEST>) {
  try {
    const { data }: { data: ITodo } = yield call(() => api.get(`/posts/${payload.id}`));

    yield put(todosAction.FETCH_TODO.SUCCESS(data));
  } catch (e) {
    yield put(todosAction.FETCH_TODO.FAILURE(e as Object));
  } finally {
    cb?.();
  }
}
function* addTodoSaga({ payload, cb }: ReturnType<typeof todosAction.ADD_TODO.REQUEST>) {
  try {
    const { data }: { data: ITodo } = yield call(() => api.post(`/posts`, payload));

    yield put(todosAction.ADD_TODO.SUCCESS(data));
  } catch (err) {
    yield put(todosAction.ADD_TODO.FAILURE(err as Object));
  } finally {
    cb?.();
  }
}
function* editTodoSaga({ payload, cb }: ReturnType<typeof todosAction.EDIT_TODO.REQUEST>) {
  try {
    const { id, ...rest } = payload;

    const { data }: { data: ITodo } = yield call(() => api.put(`/todos/${id}`, rest));

    yield put(todosAction.EDIT_TODO.SUCCESS(data));
  } catch (err) {
    yield put(todosAction.EDIT_TODO.FAILURE(err as Object));
  } finally {
    cb?.();
  }
}
function* removeTodoSaga({ payload, cb }: ReturnType<typeof todosAction.REMOVE_TODO.REQUEST>) {
  try {
    const id: {} = yield call(() => api.delete(`/todos/${payload.id}`));

    yield put(todosAction.REMOVE_TODO.SUCCESS(id));
  } catch (err) {
    yield put(todosAction.REMOVE_TODO.FAILURE(err as Object));
  } finally {
    cb?.();
  }
}

export const todosSagaWatcher = function* () {
  yield takeLatest(todoConsts.FETCH_TODOS.REQUEST, fetchTodosSaga);
  yield takeLatest(todoConsts.FETCH_TODO.REQUEST, fetchTodoSaga);
  yield takeLatest(todoConsts.ADD_TODO.REQUEST, addTodoSaga);
  yield takeLatest(todoConsts.EDIT_TODO.REQUEST, editTodoSaga);
  yield takeLatest(todoConsts.REMOVE_TODO.REQUEST, removeTodoSaga);
};
