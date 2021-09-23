const TYPES = ["REQUEST", "SUCCESS", "FAILURE"];

export const constantsCreator = (aType: string[]) => {
  const result: any = {};

  aType.forEach((aT) => {
    result[aT] = {};
    TYPES.forEach((tY) => {
      result[aT][tY] = `${aT}_${tY}`;
    });
   
  });
  return result;
};
