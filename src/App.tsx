import React, { useEffect, useMemo, useState } from "react";
import { TodoContainers, ITodo } from "@containers/";

const App = () => {
  const [todoList, setTodoList] = useState<ITodo[] | undefined>([]);
  const memoData = useMemo<ITodo[]>(
    () => [
      {
        id: 1,
        text: " Todo something important",
        createAt: new Date(),
        completed: false,
      },
    ],
    [],
  );

  useEffect(() => {
    setTimeout(() => setTodoList((state) => state?.concat(memoData)), 2000);
  }, [memoData]);

  return <TodoContainers data={todoList} />;
};

export default App;
