import React, { useEffect, useState } from "react";
import { ITodo } from "@containers/";
import styles from "./styles.module.scss";

interface IState {
  checked?: boolean;
  task: string;
}

const Todo = (props: Partial<ITodo>) => (
  <div className={styles.todo}>
    <p>{props.title}</p>
  </div>
);

export default Todo;
