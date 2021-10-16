import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { push } from "connected-react-router";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FORMS, authAction } from "@containers/";
import { ROUTER_PATH } from "@router/";
import styles from "./styles.module.scss";
import * as Yup from "yup";
interface ISubmitValues {
  [key: string]: string;
}
const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values: ISubmitValues, { setSubmitting }: any) => {
    dispatch(authAction.SIGN_IN.REQUEST(values));
    setSubmitting(false);
  };

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
              <button type="submit"> Submit</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Login;
