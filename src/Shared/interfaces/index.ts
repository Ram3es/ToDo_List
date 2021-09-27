import { ITodosState, IUserState } from "@containers/";

export interface IAppState {
  todosReducer: ITodosState;
  // userReducer: IUserState;
}
