import { constantsCreator } from "@utils/index";
const CONSTANTS_TYPES = ["FETCH_TODOS", "FETCH_TODO", "ADD_TODO", "REMOVE_TODO", "EDIT_TODO"];

const constants = constantsCreator(CONSTANTS_TYPES);

console.log(constants);
