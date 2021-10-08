import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import rootSagas from "./rootSaga";
import { routerMiddleware } from "connected-react-router";
import { composeWithDevTools } from "redux-devtools-extension";
import { History, createBrowserHistory } from "history";
import createSagaMiddleware from "redux-saga";
import { errorMiddlewearHandler } from "@shared/";
import thunk from "redux-thunk";

// const sagaMiddleware = createSagaMiddleware();
const composer = composeWithDevTools({ trace: true, traceLimit: 25 });
export const history = createBrowserHistory();

export const configureStore = (history: History) => {
  const store = createStore(
    rootReducer(history),
    undefined,

    composer(
      applyMiddleware(
        // sagaMiddleware,
        thunk,
        errorMiddlewearHandler,
        routerMiddleware(history),
      ),
    ),
  );

  // sagaMiddleware.run(rootSagas);

  return { store };
};
