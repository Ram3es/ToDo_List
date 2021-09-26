import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import { todosAction, todoConsts } from "@containers/";

function* fetchTodosSaga({ _, cb }: ReturnType<typeof todosAction.FETCH_TODOS.REQUEST>) {
  try {
    //const { todos }= yield call(axios.get('/todos?order=ASC&sortBy=CreatedAt'))

    const todos = [
      {
        id: 1,
        text: "Text 001",
        createAt: new Date(),
        completed: false,
      },
      {
        id: 2,
        text: "Text 002",
        createAt: new Date(),
        completed: false,
      },
    ];

    yield put(todosAction.FETCH_TODOS.SUCCESS(todos));
  } catch (e) {
    put(todosAction.FETCH_TODOS.FAILURE(e as Object));
  } finally {
    cb?.();
  }
}
function* fetchTodoSaga({ payload, cb }: ReturnType<typeof todosAction.FETCH_TODO.REQUEST>) {
  try {
    //http://localhost:300/api/todos
    //const data = yield call(axios.get(`/todos/${payload.id}`))

    const todo = {
      id: 3,
      text: "Text 003",
      createAt: new Date(),
      completed: false,
    };
    put(todosAction.FETCH_TODO.SUCCESS(todo));
  } catch (e) {
    put(todosAction.FETCH_TODO.FAILURE(e as Object));
  } finally {
    cb?.();
  }
}
function* addTodoSaga({ payload, cb }: ReturnType<typeof todosAction.ADD_TODO.REQUEST>) {
  try {
    // const data = yield call(axios.post(`/todos`, payload))
    const newTodo = {
      id: 4,
      text: "Text 004",
      createAt: new Date(),
      completed: false,
    };
    yield put(todosAction.ADD_TODO.SUCCESS(newTodo));
  } catch (err) {
    yield put(todosAction.ADD_TODO.FAILURE(err as Object));
  } finally {
    cb?.();
  }
}
function* editTodoSaga({ payload, cb }: ReturnType<typeof todosAction.EDIT_TODO.REQUEST>) {
  try {
    // const { id, ...rest } = payload
    // const data = yield call(axios.put(`/todos/${id}`, rest))
    const editedTodo = {
      id: 3,
      text: "Text 003",
      createAt: new Date(),
      completed: false,
    };
    yield put(todosAction.EDIT_TODO.SUCCESS(editedTodo));
  } catch (err) {
    yield put(todosAction.EDIT_TODO.FAILURE(err as Object));
  } finally {
    cb?.();
  }
}
function* removeTodoSaga({ payload, cb }: ReturnType<typeof todosAction.REMOVE_TODO.REQUEST>) {
  try {
    // const data = yield call(axios.delete(`/todos/${payload.id}`))
    const removeTodoId = 5;
    yield put(todosAction.REMOVE_TODO.SUCCESS(removeTodoId));
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
