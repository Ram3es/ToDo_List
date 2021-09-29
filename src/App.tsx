import React, { useEffect } from "react";
import { TodoContainers, todosAction, UserContainer, userActions } from "@containers/";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(todosAction.FETCH_TODOS.FAILURE({error:"the giggest error"}));
  }, []);

  return (
    <>
      <TodoContainers />
      <UserContainer />
    </>
  );
};

export default App;
