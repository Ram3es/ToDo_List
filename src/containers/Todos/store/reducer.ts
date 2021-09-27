import { Reducer as IReducer } from "redux";
import { ITodosState } from "./interfaces";
import { todoConsts } from "./constatnts";

const initialState: ITodosState = {
  todos: [],
  error: null,
  loading: false,
  todo: null,
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
      return { ...state, loading: false, todos: [...state.todos].filter((todo) => todo.id !== action.payload.id) };

    case todoConsts.FETCH_TODOS.FAILURE:
    case todoConsts.FETCH_TODO.FAILURE:
    case todoConsts.ADD_TODO.FAILURE:
    case todoConsts.EDIT_TODO.FAILURE:
    case todoConsts.REMOVE_TODO.FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
