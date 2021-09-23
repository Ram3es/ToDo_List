import React, { useEffect, useMemo, useState } from "react";
import { TodoContainers } from "@containers/";

export interface ITodo {
  id: number;
  text: string;
  createAt: Date;
  completed: boolean;
}
export interface ITodoContext {
  todos?: ITodo[];
}

export const TodosContext = React.createContext<ITodoContext>({});

const App = () => {
  const [todos, setTodoList] = useState<ITodo[]>([
    {
      id: 1,
      text: "Todo something important",
      createAt: new Date(),
      completed: false,
    },
  ]);

  return (
    <TodosContext.Provider value={{ todos } as ITodoContext}>
      <TodoContainers />
    </TodosContext.Provider>
  );
};

export default App;
