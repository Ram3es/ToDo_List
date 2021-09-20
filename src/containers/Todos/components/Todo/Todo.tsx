import React, { useState } from "react";

interface IState {
  checked: boolean;
  task: string;
}

const Todo = (props: any) => {
  const [state, setState] = useState<IState>({ checked: false, task: "" });
  return (
    <div>
      <form>
        <input type="checkbox" checked={state.checked} name="checked" />
        <input type="text" name="task" />
      </form>
    </div>
  );
};

export default Todo;
