import { constantsCreator } from "@utils/";
export const CONSTANTS_TYPES = [
  "FETCH_TODOS",
  "FETCH_TODO",
  "ADD_TODO",
  "REMOVE_TODO",
  "EDIT_TODO",
  "APPLY_TODOS_FILTER",
];

export const todoConsts = constantsCreator(CONSTANTS_TYPES);
