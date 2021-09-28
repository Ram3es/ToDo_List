import React, { useEffect } from "react";
import { TodoContainers, todosAction, UserContainer, userActions } from "@containers/";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      userActions.FETCH_USERS.REQUEST(),
    );
  }, []);

  return (
    <>
      <TodoContainers />
      <UserContainer />
    </>
  );
};

export default App;
