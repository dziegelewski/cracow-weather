export function toObjectOfEmptyStrings(arr) {
  return arr.reduce((total, value) => {
    total[value] = '';
    return total;
  }, {}) 
}

export const getName = value => value.name;

export const hasSomeEmptyValues = data => Object.values(data).some(value => !value);

export const validateEmail = str =>  /(.+)@(.+){2,}\.(.+){2,}/.test(str);