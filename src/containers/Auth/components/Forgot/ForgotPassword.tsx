import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FORMS, authAction } from "@containers/";
import styles from "./styles.module.scss";
const ForgotPassword = () => {
  const dispatch = useDispatch();
  const handlerSubmit = (value: any) => {
    console.log(value, "registrayion");

    dispatch(authAction.FORGOT_PASSWORD.REQUEST(value));
  };

  return (
    <Formik onSubmit={handlerSubmit} initialValues={FORMS.FORGOT.INIT} validationSchema={FORMS.FORGOT.SHEME}>
      {({ errors, touched }) => {
        return (
          <div className={styles.based}>
            <h1>Forgot Password</h1>
            <Form>
              <label>Email</label> <br />
              <Field type="email" name="email" />
              <ErrorMessage name="email" />
              <button type="submit"> Send</button>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default ForgotPassword;
