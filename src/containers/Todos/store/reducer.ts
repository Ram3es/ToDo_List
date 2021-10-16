import { Reducer as IReducer } from "redux";
import { ITodosState } from "./interfaces";
import { ITodo, todoConsts } from "@containers/";
import { ACTION_FAILURE_TYPES } from "@shared/";
import { StateObservable } from "redux-observable";

const initialState: ITodosState = {
  todos: [],
  error: null,
  loading: false,
  todo: null,
  filterSettings: {
    completed: null,
  },
};

export const todosReducer: IReducer = (state: ITodosState = initialState, action) => {
  switch (action.type) {
    case todoConsts.FETCH_TODOS.REQUEST:
    case todoConsts.FETCH_TODO.REQUEST:
    case todoConsts.ADD_TODO.REQUEST:
    case todoConsts.EDIT_TODO.REQUEST:
    case todoConsts.REMOVE_TODO.REQUEST:
      return { ...state, loading: true };

    case todoConsts.FETCH_TODOS.SUCCESS:
      return { ...state, loading: false, todos: action.payload };

    case todoConsts.FETCH_TODO.SUCCESS:
      return { ...state, loading: false, todo: action.payload };

    case todoConsts.ADD_TODO.SUCCESS:
      return { ...state, loading: false, todos: [...state.todos].concat(action.payload) };

    case todoConsts.EDIT_TODO.SUCCESS:
      return {
        ...state,
        loading: false,
        todos: [...state.todos].map((todo) => (todo.id === action.payload.id ? action.payload : todo)),
      };
    case todoConsts.REMOVE_TODO.SUCCESS:
      let newTodos: ITodo[] = [];
      if (Array.isArray(action.payload)) {
        newTodos = [...state.todos].filter((todo) => action.payload.includes(todo.id));
      } else {
        newTodos = [...state.todos].filter((todo) => todo.id !== action.payload);
      }
      return { ...state, loading: false, todos: newTodos };

    case ACTION_FAILURE_TYPES:
      return { ...state, loading: false, error: action.payload };
    case todoConsts.APPLY_TODOS_FILTER.REQUEST:
      console.log(action.payload);
      return { ...state, filterSettings: { ...state.filterSettings, ...action.payload } };
    default:
      return state;
  }
};
