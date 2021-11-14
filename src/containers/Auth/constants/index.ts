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
      first_name: "",
      last_name: "",
      password: "",
    },
    SCHEMA: Yup.object().shape({
      first_name: Yup.string().min(3).required("This field is required"),
      last_name: Yup.string().min(3).required("This field is required"),
      password: Yup.string().min(8).required("This field is required"),
    }),
  },
  FORGOT: {
    INIT: {
      email: "",
    },
    SHEME: Yup.object().shape({
      email: Yup.string().email("Invalid email").required("Field is requiered !"),
    }),
  },
  RESET: {
    INIT: {
      password: "",
      confirmPass: "",
    },
    SCHEMA: Yup.object().shape({
      password: Yup.string().min(4).required("Field is requiered !"),
      confirmPass: Yup.string()
        .min(4)
        .when("password", (password, schema) => {
          return schema.test({
            test: (confirmPass: string) => confirmPass === password,
            message: "Password don`t match",
          });
        })
        .required("Field is requiered !"),
    }),
  },
};
