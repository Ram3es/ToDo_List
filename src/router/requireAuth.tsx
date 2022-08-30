import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router";
import { push } from "connected-react-router";
import { getFlagAuth } from "@containers/";
import { verifyExpToken } from "../utils/verifyExpToken";
import { authAction, todosAction } from "@containers/";
import { ROUTER_PATH } from "./constants"

 export default (ComposedComponent: any) => {
  return (props: any) => {
  const dispatch = useDispatch();
  const isAuth = useSelector(getFlagAuth());
  
  

  useEffect(() => {
    if (!isAuth) {
      const token = localStorage.getItem("token");
      if (token) {
        const user = verifyExpToken(token as string);
        if (user) {
          dispatch(authAction.SIGN_IN.SUCCESS({ token, user }));
          dispatch(todosAction.FETCH_TODOS.REQUEST());
          dispatch(push(ROUTER_PATH.TODOS));
        } else {
          localStorage.removeItem("token");
          dispatch(push(ROUTER_PATH.LOGIN));
        }
      } else {
        dispatch(push(ROUTER_PATH.LOGIN));
      }
    } else {
      dispatch(todosAction.FETCH_TODOS.REQUEST());
      dispatch(push(ROUTER_PATH.TODOS));
    }
  }, [isAuth, dispatch]);
   
    return isAuth ? <ComposedComponent {...props} /> : <Redirect to="/login" />;
  };
};

  

 