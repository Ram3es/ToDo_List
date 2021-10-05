import React, { useEffect } from "react";
import { Switch } from "react-router";
import { routerAssessor, publicRouter, privateRouter } from "@router/";
import { TodoContainers, todosAction, UserContainer, userActions, authAction } from "@containers/";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authAction.SIGN_IN.REQUEST());
  }, []);

  return (
     <Switch>
       {publicRouter.map((route) => routerAssessor(null, route))}
       {privateRouter("ADMIN").map((route) => routerAssessor(null, route))}
       </Switch>

    // <>
    //   <TodoContainers />
    //   <UserContainer />
    // </>
  );
};

export default App;
