import { Reducer as IReducer } from "redux";
import { userActions } from "./actionsUers";
import { IUserState, IFilterSettings, EOrder } from "./interfacesUser";
const initialState: IUserState = {
  loading: false,
  users: [],
  user: null,
  filterSettings: {
    sortBy: "createdAT",
    order: EOrder.ASC,
    search: "",
  },
};

export const userReducer: IReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActions.FETCH_USERS.REQUEST:
    case userActions.FETCH_USER.REQUEST:
    case userActions.ADD_USER.REQUEST:
    case userActions.EDIT_USER.REQUEST:
    case userActions.REMOVE_USER.REQUEST:
    case userActions.FILTERS_USER.REQUEST:
      return { ...state, loading: true };
    case userActions.FETCH_USERS.SUCCESS:
      return { ...state, loading: false, users: action.payload };
    case userActions.FETCH_USER.SUCCESS:
      return { ...state, loading: false, user: action.payload };
    case userActions.ADD_USER.SUCCESS:
      return { ...state, loading: false, users: [...state.users].concat(action.payload) };
    case userActions.EDIT_USER.SUCCESS:
      return {
        ...state,
        loading: false,
        users: [...state.users].map((user) => (user.id === action.payload.id ? action.payload : user)),
      };
    case userActions.REMOVE_USER.SUCCESS:
      return { ...state, loading: false, users: [...state.users].filter((user) => user.id !== action.payload.id) };
    case userActions.FILTERS_USER.SUCCESS:
      return { ...state, loading: false, filterSettings: action.payload };
    case userActions.FETCH_USERS.FAILURE: {
      return { ...state, loading: false, error: action.payload };
    }
    default:
      return state;
  }
};
