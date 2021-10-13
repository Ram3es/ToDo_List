import React, { useEffect } from "react";
import { Switch, Redirect } from "react-router";
import { routerAssessor, publicRouter, privateRouter, ROUTER_PATH } from "@router/";
import { TodoContainers, todosAction, UserContainer, userActions, authAction, testServiceThunk } from "@containers/";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import { Main } from "@shared/";
import "./styles/index.scss";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    //dispatch(todosAction.FETCH_TODOS.REQUEST());
    //dispatch(push(ROUTER_PATH.LOGIN));
  }, []);

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
