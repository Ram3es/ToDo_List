import React, { useState } from "react";
import { Button, Input, Grid, Header, Image, Message, Segment } from "semantic-ui-react";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import { FORMS, authAction } from "@containers/";
import { ROUTER_PATH } from "../../../../router/constants";
import { useDispatch } from "react-redux";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);

  const handleSubmit = (values: any) => {
    dispatch(authAction.SIGN_IN.REQUEST(values));
  };

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ minWidth: 400 }}>
        <Header as="h2" color="teal" textAlign="center">
          <Image src="/logo192.png" style={{ margin: "0" }} /> Reset Password
        </Header>
        <Formik
          enableReinitialize={true}
          initialValues={FORMS.RESET.INIT}
          validationSchema={FORMS.RESET.SCHEMA}
          onSubmit={handleSubmit}
        >
          {({ touched, errors, values: { confirmPass, password }, setFieldValue, setFieldTouched, resetForm }) => (
            <Form>
              <Segment stacked>
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
                <Input
                  style={{ margin: "0 0 10px 0" }}
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Confirm Password"
                  name="confirmPass"
                  type="password"
                  onChange={(e) => {
                    setFieldValue("confirmPass", e.target.value);
                    setFieldTouched("confirmPass", true, false);
                  }}
                  value={confirmPass}
                />
                {toggle && touched.confirmPass && Boolean(errors.confirmPass) && errors.confirmPass}

                <Button color="teal" fluid size="large" type="submit" onClick={() => setToggle(true)}>
                  Change Password
                </Button>
              </Segment>
            </Form>
          )}
        </Formik>
        <Message>
          <Link to={ROUTER_PATH.LOGIN}>Go to Login ?</Link>&nbsp;
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default ResetPassword;
