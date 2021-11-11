import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FORMS, authAction, ISubmitValues } from "@containers/";
import { ROUTER_PATH } from "@router/";
import styles from "./styles.module.scss";
import { useLocation } from "react-router";

const Activation = () => {
  const { search } = useLocation();
  const dispatch = useDispatch();

  const handleSubmitActivation = (value: ISubmitValues) => {
    console.log(search, "location serach");

    dispatch(authAction.ACCOUNT_ACTIVATION.REQUEST({ ...value, token: search }));
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
            <Field type="text" name="first_name" />
            <ErrorMessage name="first_name" /> <br />
            <label>Last Name</label>
            <br />
            <Field type="text" name="last_name" />
            <ErrorMessage name="last_name" />
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
