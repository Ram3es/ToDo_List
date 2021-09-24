import { constantsCreator } from "@utils/";
export const CONSTANTS_TYPES = ["FETCH_TODOS", "FETCH_TODO", "ADD_TODO", "REMOVE_TODO", "EDIT_TODO"];

export const constants = constantsCreator(CONSTANTS_TYPES);
