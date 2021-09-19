import React from "react";
import { Header, Todods, Filters, Footer } from "@containers/";

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
