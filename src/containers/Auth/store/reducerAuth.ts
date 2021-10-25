import { Reducer } from "redux";
import { IAuthState, authConstants } from "@containers/";

const initialState: IAuthState = {
  error: null,
  loading: false,
  isAuthintification: false,
  token: null,
  authUser: null,
};

export const authReducer: Reducer<IAuthState> = (state: IAuthState = initialState, action) => {
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
    case authConstants.SIGN_IN.SUCCESS:
    case authConstants.ACCOUNT_ACTIVATION.SUCCESS:
    case authConstants.RESET_PASSWORD.SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthintification: true,
        token: action.payload.token,
        authUser: action.payload.user,
      };
    case authConstants.FORGOT_PASSWORD.SUCCESS:
    case authConstants.SIGN_UP.SUCCESS:
      return { ...state, loader: false };

    case authConstants.SIGN_OUT.SUCCESS: {
      return initialState;
    }

    case authConstants.SIGN_UP.SUCCESS:
    case authConstants.RESET_PASSWORD.SUCCESS:
    case authConstants.FORGOT_PASSWORD.SUCCESS:
    case authConstants.ACCOUNT_ACTIVATION.SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case authConstants.SIGN_IN.FAILURE:
    case authConstants.SIGN_UP.FAILURE:
    case authConstants.RESET_PASSWORD.FAILURE:
    case authConstants.FORGOT_PASSWORD.FAILURE:
    case authConstants.ACCOUNT_ACTIVATION.FAILURE:
    case authConstants.SIGN_OUT.FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default: {
      return state;
    }
  }
};
