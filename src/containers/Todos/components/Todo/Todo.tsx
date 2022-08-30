import React, { useEffect, useState } from "react";
import { ITodo, todosAction, AddNewTodo } from "@containers/";
import { useDispatch } from "react-redux";
import styles from "./styles.module.scss";
import { Button } from "semantic-ui-react"

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
      <div>
      <input className={styles.checkbox} type="checkbox" id={id?.toString()} checked={completed} onChange={onChangeHandler} />
      <label  className={styles.label} onDoubleClick={doubleClickHandler}>{title}</label> {/*={id?.toString()}*/}
      </div>
      <Button style={{margin:"0 10px 0 0"}} content='Remove' primary onClick={removeButtonHandler} />
    </div>
  );
};

export default Todo;
