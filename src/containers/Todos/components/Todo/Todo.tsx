import React, { useEffect, useState } from "react";
import { ITodo, todosAction, AddNewTodo } from "@containers/";
import { useDispatch } from "react-redux";
import styles from "./styles.module.scss";

const Todo = (props: ITodo) => {
  const dispatch = useDispatch();
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const { id, title, completed } = props;

  const removeButtonHandler = () => {
    dispatch(todosAction.REMOVE_TODO.REQUEST(id));
  };
  const onChangeHandler = ({ target: { checked } }: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(todosAction.EDIT_TODO.REQUEST({ ...props, completed: checked }));
  };
  const doubleClickHandler = (e: any) => setIsEditMode((state) => !state);

  return isEditMode ? (
    <AddNewTodo onClose={() => setIsEditMode(false)} {...props} />
  ) : (
    <div className={styles.todo}>
      <input type="checkbox" id={id?.toString()} checked={completed} onChange={onChangeHandler} />
      <label onDoubleClick={doubleClickHandler}>{title}</label> {/*htmlFor={id?.toString()}*/}
      <button onClick={removeButtonHandler}> Remove</button>
    </div>
  );
};

export default Todo;
