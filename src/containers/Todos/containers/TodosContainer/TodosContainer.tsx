import React from "react";
import { Header, Todods, Filters, Footer } from "@containers/";
import { ITodo } from "../../../../App";

interface IComponentProps {
  children?: React.ReactNode;
  todos: ITodo[];
}

const TodosContainer = () => {
  return (
    <div>
      <Header />
      <Todods />
      <Filters />
      <Footer />
    </div>
  );
};

export default TodosContainer;
