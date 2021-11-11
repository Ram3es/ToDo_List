import React, { useEffect } from "react";
import { RequiredAuthHOC, ROUTER_PATH } from "@router/";
import { Redirect } from "react-router";
import { push } from "connected-react-router";
import { useDispatch, useSelector } from "react-redux";
import { getFlagAuth } from "@containers/";
import { verifyExpToken } from "../../../utils/verifyExpToken";
import { authAction, todosAction } from "@containers/";

interface IMainProps {
  children: any;
}
const Main = ({ children }: IMainProps) => {
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
  }, [isAuth]);

  return isAuth ? <React.Fragment>{children}</React.Fragment> : <Redirect to="/login" />;
};

export default Main;
// export default RequiredAuthHOC(Main);
