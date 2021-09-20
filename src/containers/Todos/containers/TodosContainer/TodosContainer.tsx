import React from "react";
import { Header, Todods, Filters, Footer, ITodo } from "@containers/";

const TodosContainer = (props: any) => {
  return (
    <div>
      <Header />
      <Todods {...props} />
      <Filters />
      <Footer />
    </div>
  );
};

export default TodosContainer;
