import { connectRouter, RouterState } from "connected-react-router";
import { combineReducers, CombinedState, AnyAction } from "redux";
import { History } from "history";
import { todosReducer, ITodosState, userReducer, IUserState, authReducer, IAuthState } from "@containers/";
import { IAppState } from "../interfaces";

type TReducer = CombinedState<IAppState>;
type TRootReducer =
  | CombinedState<{
      todosReducer: ITodosState;
      userReducer: IUserState;
      authReducer: IAuthState;
      router: RouterState<unknown>;
    }>
  | undefined;

export default (history: History) => {
  const rootReducer = combineReducers({
    todosReducer,
    userReducer,
    authReducer,

    router: connectRouter(history),
    // Other reducers
  });

  return (state: TReducer | undefined, action: AnyAction) => {
    return rootReducer(state as TRootReducer, action);
  };
};
