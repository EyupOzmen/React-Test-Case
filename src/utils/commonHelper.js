export const isSelected = (list, ID, OCG, OC) => {
  let index = list?.findIndex((item) => item.ID === ID && item.OCG === OCG && item.OC === OC);

  if (index !== -1) {
    return [true, index];
  }

  return [false, -1];
};
