import { constantsCreator } from "@utils/";
export const CONSTANTS_TYPES_AUTH = [
  "SIGN_IN",
  "SIGN_UP",
  "RESET_PASSWORD",
  "FORGOT_PASSWORD",
  "ACCOUNT_ACTIVATION",
  "SIGN_OUT",
];

export const authConstants = constantsCreator(CONSTANTS_TYPES_AUTH);
