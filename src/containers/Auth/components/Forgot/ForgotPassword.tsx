import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Input, Grid, Header, Image, Message, Segment } from "semantic-ui-react";
import { FORMS, authAction } from "@containers/";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import { ROUTER_PATH } from "../../../../router/constants";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);

  const handlerSubmit = (data: { email: string }) => {
    dispatch(authAction.FORGOT_PASSWORD.REQUEST(data));
  };

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ minWidth: 400 }}>
        <Header as="h2" color="teal" textAlign="center">
          <Image src="/logo192.png" /> Forgot Password
        </Header>
        <Formik
          enableReinitialize={true}
          initialValues={FORMS.FORGOT.INIT}
          validationSchema={FORMS.FORGOT.SHEME}
          onSubmit={handlerSubmit}
        >
          {({ touched, errors, values: { email }, setFieldValue, setFieldTouched, resetForm }) => (
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
                <Button color="teal" fluid size="large" type="submit" onClick={() => setToggle(true)}>
                  Send Email
                </Button>
              </Segment>
            </Form>
          )}
        </Formik>
        <Message>
          <Link to={ROUTER_PATH.LOGIN}>Go to Login?</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default ForgotPassword;
