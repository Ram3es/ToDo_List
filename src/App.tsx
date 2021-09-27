import React, { useEffect, useMemo, useState } from "react";
import { TodoContainers, todosAction } from "@containers/";
import { useDispatch } from "react-redux";

export interface ITodo {
  id: number;
  text: string;
  createAt: Date;
  completed: boolean;
}
export interface ITodoContext {
  todos?: ITodo[];
}

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(todosAction.FETCH_TODOS.REQUEST());
  }, []);

  return <TodoContainers />;
};

export default App;
