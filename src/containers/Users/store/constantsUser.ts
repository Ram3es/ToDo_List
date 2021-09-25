import { constantsCreator } from "@utils/";
export const USER_CONST: string[] = [
  "FETCH_USERS",
  "FETCH_USER",
  "ADD_USER",
  "EDIT_USER",
  "REMOVE_USER",
  "FILTERS_USERS",
];

export const userConstType = constantsCreator(USER_CONST);
