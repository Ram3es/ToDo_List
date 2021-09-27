import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import rootSagas from "./rootSaga";
import { routerMiddleware } from "connected-react-router";
import { composeWithDevTools } from "redux-devtools-extension";
import { History, createBrowserHistory } from "history";
import createSagaMiddleware from "redux-saga";
//import { errorHandlerMiddleware } from "@shared/";

const sagaMiddleware = createSagaMiddleware();
const composer = composeWithDevTools({ trace: true, traceLimit: 25 });
export const history = createBrowserHistory();

export const configureStore = (history: History) => {
  const store = createStore(
    rootReducer(history),
    undefined,
    //@ts-ignore
    composer(applyMiddleware(sagaMiddleware, routerMiddleware(history))),
  );

  sagaMiddleware.run(rootSagas);

  return { store };
};