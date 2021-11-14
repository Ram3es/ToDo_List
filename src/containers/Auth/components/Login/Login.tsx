import React, { useState, useEffect } from "react";
import { push } from "connected-react-router";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input, Grid, Header, Image, Message, Segment } from "semantic-ui-react";
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
  const [toggle, setToggle] = useState(false);

  const handleSubmit = (values: ISubmitValues, { setSubmitting }: any) => {
    dispatch(authAction.SIGN_IN.REQUEST(values));
    setSubmitting(false);
  };
  const clickHandler = (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch(push(ROUTER_PATH.REGISTRATION));
  };

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ minWidth: 400 }}>
        <Header as="h2" color="teal" textAlign="center">
          <Image src="/logo192.png" style={{ margin: "0" }} /> Login Account
        </Header>
        <Formik
          enableReinitialize={true}
          initialValues={FORMS.SIGN_IN.INIT}
          validationSchema={FORMS.SIGN_IN.SHEME}
          onSubmit={handleSubmit}
        >
          {({ touched, errors, values: { email, password }, setFieldValue, setFieldTouched, resetForm }) => (
            <Form>
              <Segment stacked>
                <Input
                  style={{ margin: "0 0 10px 0" }}
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Enter your mail address"
                  name="email"
                  onChange={(e) => {
                    setFieldValue("email", e.target.value);
                    setFieldTouched("email", true, false);
                  }}
                  value={email}
                />
                {toggle && touched.email && Boolean(errors.email) && errors.email}

                <Input
                  style={{ margin: "0 0 10px 0" }}
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  name="password"
                  type="password"
                  onChange={(e) => {
                    setFieldValue("password", e.target.value);
                    setFieldTouched("password", true, false);
                  }}
                  value={password}
                />
                {toggle && touched.password && Boolean(errors.password) && errors.password}

                <Button color="teal" fluid size="large" type="submit" onClick={() => setToggle(true)}>
                  Login
                </Button>
              </Segment>
            </Form>
          )}
        </Formik>
        <Message>
          <Link to={ROUTER_PATH.REGISTRATION}>Registration </Link>&nbsp; &nbsp; OR &nbsp; &nbsp;
          <Link to={ROUTER_PATH.FORGOT}> Forgot Password </Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};
