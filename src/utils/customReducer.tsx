import React, { Reducer, useEffect, useState } from "react";
import { AnyAction } from "redux";

const SomeComponent = () => {
  const [state, dispatch] = useREDucer(testReducer, []);

  useEffect(() => {
    console.log(state);
  }, [state]);

  const handleButton = () => {
    dispatch({ type: "push", payload: "hello" });
  };
  return <button onClick={handleButton}> click</button>;
};

const useREDucer: any = (reducer: Function, initialState: []) => {
  const [state, setState] = useState(initialState);

  const dispatch = (action: any) => {
    const newState = reducer(state, action);
    setState(newState);
  };
  return [state, dispatch];
};

const testReducer = (state: [] = [], action: AnyAction) => {
  switch (action.type) {
    case "push":
      return [...state, { message: action.payload }];
    default:
      return state;
  }
};
