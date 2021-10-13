import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FORMS } from "@containers/";
import styles from "./styles.module.scss";
import * as Yup from "yup";
import { TextField } from "@material-ui/core";

const Login = () => {
  const handleSubmit: any = (values: string, props: any) => {
    console.log(values);

    props.setSubmitting(false);
  };

  return (
    <div className={styles.login}>
      <h1>LOGIN</h1>
      <Formik onSubmit={handleSubmit} initialValues={FORMS.SIGN_IN.INIT} validationSchema={FORMS.SIGN_IN.SHEME} onB>
        {(props) => {
          return (
            <Form>
              <label>Email</label>
              <br />
              <Field type="email" name="email" />
              <ErrorMessage name="email" /> <br />
              {/* <label>Password</label><br/>
           <Field type="password" name="password" />
           <ErrorMessage name="password"  /> */}
              <TextField
                id="outlined-password-input"
                label="Password"
                name="password"
                type="password"
                value={props.values.password}
                onChange={props.handleChange}
              />
              <button type="submit" disabled={props.isSubmitting}>
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Login;
