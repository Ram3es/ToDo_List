import { Todo } from "@containers/";
import React, { useContext, useEffect, useState } from "react";
import { TodosContext, ITodoContext } from "../../../../App";

const Todos = () => {
  const { todos } = useContext<ITodoContext>(TodosContext);

  return (
    <>
      {todos
        ? todos?.map(({ text, id }) => (
            <React.Fragment key={id}>
              <Todo id={id} text={text} />
            </React.Fragment>
          ))
        : "Список задач пока пуст"}
    </>
  );
};

export default Todos;
