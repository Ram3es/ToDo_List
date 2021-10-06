import { Todo } from "@containers/";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { getTodos } from "@containers/";
import styles from "./styles.module.scss";

const Todos = () => {
  const todos = useSelector(getTodos());
  const renderTodos = useMemo(() => {
    return todos?.map(({ title, id }) => <Todo key={id} title={title} />);
  }, [todos]);

  return <div className={styles.todos}>{renderTodos}</div>;
};

export default Todos;
