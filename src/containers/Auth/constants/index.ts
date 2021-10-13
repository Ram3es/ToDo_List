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
};
