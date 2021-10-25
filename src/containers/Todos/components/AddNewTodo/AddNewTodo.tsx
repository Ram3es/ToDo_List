import React, { KeyboardEventHandler, ReactEventHandler, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { useDispatch } from "react-redux";
import { todosAction, ITodo } from "@containers/";

interface IAddNewTodo extends ITodo {
  onClose: Function;
}

const AddNewTodo = (props: any) => {
  const [value, setValue] = useState<string>("");
  const dispatch = useDispatch();

  console.log(props, "+++++++++++++++++");
  

  useEffect(() => {
    if (props.id) {
      setValue(props.title);
    }
  }, [props.id]);

  const onChangeHandler = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    setValue(value);
  };
  const onKeyPressHandler = ({ which, key }: any) => {
    if (which === 13 && key === "Enter" && value !== "") {
      if (props.id) {
        dispatch(
          todosAction.EDIT_TODO.REQUEST(
            {
              ...props,
              title: value,
            },
            props.onClose(),
          ),
        );
      } else {
        dispatch(
          todosAction.ADD_TODO.REQUEST({
            created_by: "Admin",
            title: value,
            completed: false,
          }),
        );
        setValue("");
      }
    }
  };
  return (
    <div className={styles.addNewTodo}>
      <input
        onKeyPress={onKeyPressHandler}
        onChange={onChangeHandler}
        type="text"
        placeholder="What needs to be done?"
        value={value}
      />
    </div>
  );
};

export default AddNewTodo;
