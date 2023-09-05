export const convertArray = (sourceArray: { [key: string]: number }[]) => {
  const sourceObject = sourceArray[0];
  const resultArray = [];
  for (const key in sourceObject) {
    resultArray.push(sourceObject[key]);
  }
  return resultArray;
};

export const makeLabels = (sourceArray: { [key: string]: number }[]) => {
  const sourceObject = sourceArray[0];
  const resultArray = [];
  for (const key in sourceObject) {
    resultArray.push(key);
  }
  return resultArray;
};
