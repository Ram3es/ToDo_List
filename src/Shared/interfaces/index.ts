import { ITodosState, IUserState, IAuthState } from "@containers/";

export interface IAppState {
  todosReducer: ITodosState;
  userReducer: IUserState;
  authReducer: IAuthState;
}
