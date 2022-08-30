import React, { useState } from "react";
import { Header, Todods, Filters, Footer, ITodo, AddNewTodo } from "@containers/";
import styles from "./styles.module.scss";


interface IComponentProps {
  children?: React.ReactNode;
  todos: ITodo[];
}

const TodosContainer = () => {
 

 
  return (
    <div>
      <Header />
      <div className={styles.todosContainer}>
        <AddNewTodo />
        <Todods />
        <Filters />
      </div>
      <Footer />
    </div>
  );
};

export default TodosContainer;
