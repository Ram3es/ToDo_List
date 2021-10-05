import React, { useEffect } from "react";
import { Switch, Redirect } from "react-router";
import { routerAssessor, publicRouter, privateRouter, ROUTER_PATH } from "@router/";
import { TodoContainers, todosAction, UserContainer, userActions, authAction } from "@containers/";
import { useDispatch } from "react-redux";
import { Main } from "@shared/"

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authAction.SIGN_IN.REQUEST());
  }, []);

  return (
    <Switch>
      {publicRouter.map((route) => routerAssessor(null, route))}
      <Main>
        {privateRouter("ADMIN").map((route) => routerAssessor(null, route))}
      </Main>
      <Redirect to={ROUTER_PATH.LOGIN} />
    </Switch>

    // <>
    //   <TodoContainers />
    //   <UserContainer />
    // </>
  );
};

export default App;
