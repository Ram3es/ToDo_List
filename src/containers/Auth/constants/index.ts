import * as Yup from "yup";
export const FORMS = {
  SIGN_IN: {
    INIT: {
      email: "",
      password: "",
    },
    SHEME: Yup.object().shape({
      email: Yup.string().email("Invalid email").required("Field is requiered !"),
      password: Yup.string().min(4).required("Field is requiered !"),
    }),
  },
  SIGN_UP: {
    INIT: {
      email: "",
    },
    SHEME: Yup.object().shape({
      email: Yup.string().email("Invalid email").required("Field is requiered !"),
    }),
  },
  ACTIVATION: {
    INIT: {
      firstName: "",
      lastName: "",
      password: "",
    },
    SCHEMA: Yup.object().shape({
      firstName: Yup.string().min(3).required("This field is required"),
      lastName: Yup.string().min(3).required("This field is required"),
      password: Yup.string().min(8).required("This field is required"),
    }),
  },
};
