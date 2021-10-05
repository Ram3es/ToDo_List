import { Reducer as IReducer } from "redux";
import { userConstType } from "@containers/";
import { IUserState, EOrder } from "./interfacesUser";
const initialState: IUserState = {
  loading: false,
  users: [],
  user: null,
  filterSettings: {
    sortBy: "createdAt",
    order: EOrder.ASC,
    search: "",
    limit: 20,
    skip: 0,
  },
};

export const userReducer: IReducer = (state = initialState, action) => {
  switch (action.type) {
    case userConstType.FETCH_USERS.REQUEST:
    case userConstType.FETCH_USER.REQUEST:
    case userConstType.ADD_USER.REQUEST:
    case userConstType.EDIT_USER.REQUEST:
    case userConstType.REMOVE_USER.REQUEST:
      return { ...state, loading: true };

    case userConstType.FETCH_USERS.SUCCESS:
      return { ...state, loading: false, users: action.payload };
    case userConstType.FETCH_USER.SUCCESS:
      return { ...state, loading: false, user: action.payload };

    case userConstType.ADD_USER.SUCCESS:
      return { ...state, loading: false, users: [...state.users].concat(action.payload) };
    case userConstType.EDIT_USER.SUCCESS:
      return {
        ...state,
        loading: false,
        users: [...state.users].map((user) => (user.id === action.payload.id ? action.payload : user)),
      };
    case userConstType.REMOVE_USER.SUCCESS:
      return { ...state, loading: false, users: [...state.users].filter((user) => user.id !== action.payload.id) };
    case userConstType.USER_FILTERS.REQUEST:
      return { ...state, loading: false, filterSettings: action.payload };
    case userConstType.FETCH_USERS.FAILURE: {
      return { ...state, loading: false, error: action.payload };
    }
    default:
      return state;
  }
};
