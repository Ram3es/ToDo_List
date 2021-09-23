import React, { useEffect, useState } from "react";
import { ITodo } from "../../../../App";

interface IState {
  checked?: boolean;
  task: string;
}

const Todo = ({ id, text }: Partial<ITodo>) => {
  //   const [state, setState] = useState<IState>({ task: "" });

  //  const handleChange = (e: any)=>{
  //    console.log(e.target.value)
  //    setState(state=>state.task=e.target.value)

  return (
    <div>
      <form>
        <input name="task" value={text} />
      </form>
    </div>
  );
};

export default Todo;
