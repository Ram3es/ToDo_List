import { constantsCreator } from "@utils/";
import { createActionTypes} from "react-redux-jedi"
export const CONSTANTS_TYPES_AUTH = [
  "SIGN_IN",
  "SIGN_UP",
  "RESET_PASSWORD",
  "FORGOT_PASSWORD",
  "ACCOUNT_ACTIVATION",
  "SIGN_OUT",
];

export const authConstants = createActionTypes(CONSTANTS_TYPES_AUTH);
