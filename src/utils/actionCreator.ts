import { TYPES } from "./constTypeCreator";

interface IActionCreator {
  [key: string]: { [key: string]: (payload: Object, cb: () => void, options: Object) => Object };
}

export const actionCreator = (aTypes: string[]): IActionCreator => {
  console.log(aTypes)
  const result: IActionCreator = {};
  aTypes.forEach((aT) => {
    result[aT] = {};
    TYPES.forEach(
      (tY) =>
        (result[aT][tY] = (payload: Object, cb: () => void, options: Object) => ({
          type: `${aT}_${tY}`,
          payload,
          cb,
          options,
        })),
    );
  });
  return result;
};
