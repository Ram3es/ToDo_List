import { ETypes, TYPES } from "../shared/constants";
import { AnyAction, Dispatch } from "redux";

export type TAction = (payload?: Object, cb?: () => void, options?: Object) => AnyAction;
export type TThunkAction = (request: Function, payload?: Object, cb?: () => void, options?: Object) => AnyAction;
export interface TThunkActionType {
  [ETypes.REQUEST]: TThunkAction;
  [ETypes.SUCCESS]: TAction;
  [ETypes.FAILURE]: TAction;
}
export interface IThunkActions {
  [key: string]: TThunkActionType;
}

const getThunkActionRequest =
  (aT: string) => (request: Function, payload?: Object, cb?: () => void, options?: Object) => {
    return (dispatch: Dispatch) => {
      return request(payload)
        .then((res: Object) => dispatch({ type: `${aT}_${ETypes.SUCCESS}`, payload: res }))
        .catch((err: Error) => dispatch({ type: `${aT}_${ETypes.FAILURE}`, payload: err }))
        .finally(() => cb?.());
    };
  };

const getAction =
  (aT: string, t: ETypes.REQUEST | ETypes.SUCCESS | ETypes.FAILURE) =>
  (payload?: Object, cb?: () => void, options?: Object) => ({
    type: `${aT}_${t}`,
    payload,
    cb,
    options,
  });

export const createThunkActions = (aType: string[]): IThunkActions => {
  const response: IThunkActions = {};

  aType.forEach((aT) => {
    response[aT] = {} as TThunkActionType;
    TYPES.forEach((t) => {
      response[aT][t] = (t === ETypes.REQUEST ? getThunkActionRequest(aT) : getAction(aT, t)) as TThunkAction & TAction;
    });
  });

  return response;
};
