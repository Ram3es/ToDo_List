import React, { useEffect } from "react";
import { push } from "connected-react-router";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FORMS, authAction } from "@containers/";
import { ROUTER_PATH } from "../../../../router/constants";

import styles from "./styles.module.scss";

export interface ISubmitValues {
  [key: string]: string;
}
export const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values: ISubmitValues, { setSubmitting }: any) => {
    dispatch(authAction.SIGN_IN.REQUEST(values));
    setSubmitting(false);
  };
  const clickHandler = (e: any) =>{
    e.preventDefault()
    e.stopPropagation()
    console.log(ROUTER_PATH);
    
    dispatch(push(ROUTER_PATH.REGISTRATION))

  }

  return (
    <div className={styles.login}>
      <h1>LOGIN</h1>
      <Formik onSubmit={handleSubmit} initialValues={FORMS.SIGN_IN.INIT} validationSchema={FORMS.SIGN_IN.SHEME}>
        {(props) => {
          return (
            <Form>
              <label>Email</label>
              <br />
              <Field type="email" name="email" />
              <ErrorMessage name="email" /> <br />
              <label>Password</label>
              <br />
              <Field type="password" name="password" />
              <ErrorMessage name="password" />
              <button type="submit" disabled={props.isSubmitting}>
                Submit
              </button>
              <br />
              <button type="button" onClick={clickHandler}>Go to Registration</button>
            </Form>
          );
        }}
      </Formik>
       
    </div>
  );
};

{
  /* <div className={styles.action}>
                <Link to={ROUTER_PATH.REGISTRATION }>
                Registration
              </Link>
              </div> */
}
