export function toObjectOfEmptyStrings(arr) {
  return arr.reduce((total, value) => {
    total[value] = '';
    return total;
  }, {}) 
}

export const getName = value => value.name;