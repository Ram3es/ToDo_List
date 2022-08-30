import { CONSTANTS_TYPES } from "./constatnts";
import { actionCreator, createThunkActions } from "@utils/";
import { Dispatch } from "redux";
import { testServiceThunk } from "./services";

export const todosAction = actionCreator(CONSTANTS_TYPES);
