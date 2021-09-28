import { createSelector } from "reselect";
import { IAppState } from "../../../shared/interfaces";
import { ITodo, ITodosState } from "@containers/";

const selectTodos = (state: IAppState) => state.todosReducer;

export const getTodos = () => createSelector(selectTodos, (state) => state.todos);
export const getTodo = createSelector(selectTodos, (state) => state.todo);
