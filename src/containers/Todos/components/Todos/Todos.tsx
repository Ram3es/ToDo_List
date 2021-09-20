import { Todo } from "@containers/";
import React, { useEffect, useState } from "react";

export interface ITodo {
  id: number;
  text: string;
  createAt: Date;
  completed: boolean;
}

const Todos = (props: any) => {
  const [todos, setTodos] = useState<ITodo[] | undefined>();

  useEffect(() => {
    setTodos(props.data);
  }, [props]);
  return <>{todos ? todos?.map(({ text, id }) => <Todo key={id} />) : "Список задач пока пуст"}</>;
};

export default Todos;
