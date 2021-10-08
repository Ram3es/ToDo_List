import { CONSTANTS_TYPES } from "./constatnts";
import { actionCreator, createThunkActions } from "@utils/";
import { Dispatch } from "redux";
import { testServiceThunk } from "./services";

export const todosAction = createThunkActions(CONSTANTS_TYPES);

// export const ATestThunkRequest = (payload?: any, cb?: () => void) => {
//   return (dispatch: Dispatch) => {
//     testServiceThunk()
//       .then((response: any) => {
//         dispatch(ATestThunkSuccess(response.data));
//       })
//       .catch((err) => {
//         dispatch(ATestThunkFailure(err));
//       })
//       .finally(() => cb?.());
//   };
// };

// const ATestThunkSuccess = (payload: any) => ({ type: "FETCH_TODOS_SUCCESS", payload });
// const ATestThunkFailure = (error: any) => {
//   console.log(error, " error");
//   return { type: "FETCH_TODOS_FAILURE", payload: error };
// };
