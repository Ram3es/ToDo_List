import { AnyAction } from "redux";
import { TYPES } from "../shared/constants";

interface IActionCreator {
  [key: string]: { [key: string]: (payload?: Object, cb?: () => void, options?: Object) => AnyAction };
}

export const actionCreator = (aTypes: string[]): IActionCreator => {
  const result: IActionCreator = {};
  aTypes.forEach((aT) => {
    result[aT] = {};
    TYPES.forEach(
      (tY) =>
        (result[aT][tY] = (payload?: Object, cb?: () => void, options?: Object) => ({
          type: `${aT}_${tY}`,
          payload,
          cb,
          options,
        })),
    );
  });
  return result;
};
