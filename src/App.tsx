import React, { useEffect } from "react";
import { Switch, Redirect } from "react-router";
import { routerAssessor, publicRouter, privateRouter, ROUTER_PATH } from "@router/";
import {
  TodoContainers,
  todosAction,
  UserContainer,
  userActions,
  authAction,
  testServiceThunk,
  getFlagAuth,
} from "@containers/";
import { useDispatch, useSelector } from "react-redux";
import { push } from "connected-react-router";
import { Main } from "@shared/";
import "./styles/index.scss";

const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(getFlagAuth());

  useEffect(() => {
    //dispatch(todosAction.FETCH_TODOS.REQUEST());

    if (isAuth) {
      dispatch(push(ROUTER_PATH.TODOS));
    } else {
      dispatch(push(ROUTER_PATH.LOGIN));
    }
  }, [isAuth]);

  return (
    <Switch>
      {publicRouter.map((route) => routerAssessor(null, route))}
      <Main>{privateRouter("ADMIN").map((route) => routerAssessor(null, route))}</Main>
      <Redirect to={ROUTER_PATH.LOGIN} />
    </Switch>

    // <>
    //   <TodoContainers />
    //   <UserContainer />
    // </>
  );
};

export default App;
