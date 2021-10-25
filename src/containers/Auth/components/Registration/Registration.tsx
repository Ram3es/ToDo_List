import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, FieldArray, Field, ErrorMessage } from "formik";
import { FORMS, authAction, ISubmitValues } from "@containers/";
import styles from "./styles.module.scss";

const Registration = () => {
  const dispatch = useDispatch();

  const handlerSubmit = (value: ISubmitValues) => {
    dispatch(authAction.SIGN_UP.REQUEST(value));
  };
  return (
    <Formik onSubmit={handlerSubmit} initialValues={FORMS.SIGN_UP.INIT} validationSchema={FORMS.SIGN_UP.SHEME}>
      {({ errors, touched }) => {
        return (
          <div className={styles.based}>
            <h1>Registration</h1>
            <Form>
              <label>Email</label> <br />
              <Field type="email" name="email" />
              {touched.email && Boolean(errors.email) && errors.email} <br />
              <button type="submit"> Send</button>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};
export default Registration;
