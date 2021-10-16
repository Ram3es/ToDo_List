import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.scss";
import { todosAction, getNotCompletedTodos, ITodo } from "@containers/";

const Filters = () => {
  const dispatch = useDispatch();
  const CompletedTodos: ITodo[] = useSelector(getNotCompletedTodos());

  const handleClick = (value: null | boolean) => {
    dispatch(todosAction.APPLY_TODOS_FILTER.REQUEST({ completed: value }));
  };
  const removeComletedHandler = () => {
    console.log(CompletedTodos);
    dispatch(todosAction.REMOVE_TODO.SUCCESS(CompletedTodos.map((t) => t.id)));
  };
  return (
    <div className={styles.filters}>
      <div className={styles.selectedItems}>
        {`${CompletedTodos.length} ${CompletedTodos.length > 1 ? "items" : " item"} left `}
      </div>
      <div className={styles.filter}>
        <div onClick={() => handleClick(null)}>All</div>
        <div onClick={() => handleClick(false)}>Active</div>
        <div onClick={() => handleClick(true)}>Completed</div>
        <div onClick={removeComletedHandler}>Clear Completed</div>
      </div>
    </div>
  );
};

export default Filters;
