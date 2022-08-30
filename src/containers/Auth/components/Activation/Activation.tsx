import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FORMS, authAction, ISubmitValues } from "@containers/";
import { Link } from "react-router-dom";
import { Button, Input, Grid, Header, Image, Message, Segment } from "semantic-ui-react";
import { ROUTER_PATH } from "@router/";
import styles from "./styles.module.scss";
import { useLocation } from "react-router";

const Activation = () => {
  const { search } = useLocation();
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);

  const handleSubmit = (value: ISubmitValues) => {
    dispatch(authAction.ACCOUNT_ACTIVATION.REQUEST({ ...value, token: search }));
  };

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ minWidth: 400 }}>
        <Header as="h2" color="teal" textAlign="center">
          <Image src="/logo192.png" style={{ margin: "0" }} /> Account Activation
        </Header>
        <Formik
          enableReinitialize={true}
          initialValues={FORMS.ACTIVATION.INIT}
          validationSchema={FORMS.ACTIVATION.SCHEMA}
          onSubmit={handleSubmit}
        >
          {({
            touched,
            errors,
            values: { first_name, last_name, password },
            setFieldValue,
            setFieldTouched,
            resetForm,
          }) => (
            <Form>
              <Segment stacked>
                <Input
                  style={{ margin: "0 0 10px 0" }}
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="First Name"
                  name="first_name"
                  onChange={(e) => {
                    setFieldValue("first_name", e.target.value);
                    setFieldTouched("first_name", true, false);
                  }}
                  value={first_name}
                />
                {toggle && touched.first_name && Boolean(errors.first_name) && errors.first_name}

                <Input
                  style={{ margin: "0 0 10px 0" }}
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Last Name"
                  name="last_name"
                  onChange={(e) => {
                    setFieldValue("last_name", e.target.value);
                    setFieldTouched("last_name", true, false);
                  }}
                  value={last_name}
                />
                {toggle && touched.last_name && Boolean(errors.last_name) && errors.last_name}

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
                  Activate
                </Button>
              </Segment>
            </Form>
          )}
        </Formik>
        <Message color="yellow">After activation check your Email</Message>
      </Grid.Column>
    </Grid>
  );
};
export default Activation;
