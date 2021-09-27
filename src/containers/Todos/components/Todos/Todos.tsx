import { Todo } from "@containers/";
import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getTodos } from "@containers/";

const Todos = () => {
  const todos = useSelector(getTodos());

  return (
    <>
      {todos?.map(({ text, id }) => (
        <div key={id}>{text}</div>
      ))}
    </>
  );
};

export default Todos;
