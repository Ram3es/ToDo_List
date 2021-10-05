import { Reducer } from "redux";
import { IAuthState, authConstants } from "@containers/";

const initialState: IAuthState = {
  error: null,
  loading: false,
  isAuthintification: false,
  token: null,
  authUser: null,
};

export const authReducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case authConstants.SIGN_IN.REQUEST:
    case authConstants.SIGN_UP.REQUEST:
    case authConstants.RESET_PASSWORD.REQUEST:
    case authConstants.FORGOT_PASSWORD.REQUEST:
    case authConstants.ACCOUNT_ACTIVATION.REQUEST:
    case authConstants.SIGN_OUT.REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    default: {
      return state;
    }
  }
};
