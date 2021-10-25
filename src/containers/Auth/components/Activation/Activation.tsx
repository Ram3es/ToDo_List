import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FORMS, authAction, ISubmitValues } from "@containers/";
import { ROUTER_PATH } from "@router/";
import styles from "./styles.module.scss";

const Activation = () => {
  const dispatch = useDispatch();

  const handleSubmitActivation = (value: ISubmitValues) => {
    dispatch(authAction.ACCOUNT_ACTIVATION.REQUEST(value));
  };

  return (
    <div className={styles.activation}>
      <h1>ACTIVATION</h1>
      <Formik
        onSubmit={handleSubmitActivation}
        initialValues={FORMS.ACTIVATION.INIT}
        validationSchema={FORMS.ACTIVATION.SCHEMA}
      >
        {(props) => (
          <Form>
            <label>First Name</label>
            <br />
            <Field type="text" name="firstName" />
            <ErrorMessage name="firstName" /> <br />
            <label>Last Name</label>
            <br />
            <Field type="text" name="lastName" />
            <ErrorMessage name="lastName" />
            <br />
            <label>Password</label>
            <br />
            <Field type="password" name="password" />
            <ErrorMessage name="password" />
            <br />
            <button type="submit"> Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default Activation;
