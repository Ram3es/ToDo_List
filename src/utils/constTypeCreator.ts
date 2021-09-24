export const TYPES:string[]= ["REQUEST", "SUCCESS", "FAILURE"];

interface IconstCreator {
  [key: string] :{[key: string]: string}
}

export const constantsCreator = (aType: string[]): IconstCreator=> {
  const result: IconstCreator = {};

  aType.forEach((aT) => {
    result[aT] = {};
    TYPES.forEach((tY) => {
      result[aT][tY] = `${aT}_${tY}`;
    });
   
  });
  return result;
};
