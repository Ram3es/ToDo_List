import { connectRouter, RouterState } from "connected-react-router";
import { combineReducers, CombinedState, AnyAction } from "redux";
import { History } from "history";
import { todosReducer, ITodosState, userReducer, IUserState } from "@containers/";
import { IAppState } from "../interfaces";

type TReducer = CombinedState<IAppState>;

export default (history: History) => {
  const rootReducer = combineReducers({
    todosReducer,
    userReducer,
    
    router: connectRouter(history),
    // Other reducers
  });

  return (state: TReducer | undefined, action: AnyAction) => {
    return rootReducer(
      state as CombinedState<{ todosReducer: ITodosState; router: RouterState<unknown>; userReducer: IUserState }> | undefined,
      action,
    );
  };
};
