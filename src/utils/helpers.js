export function toObjectOfEmptyStrings(arr) {
  return arr.reduce((total, value) => {
    total[value] = '';
    return total;
  }, {}) 
}

export const getName = value => value.name;

export const hasSomeEmptyValues = data => Object.values(data).some(value => !value);

export const validateEmail = str =>  /(.+)@(.+){2,}\.(.+){2,}/.test(str);

export const takeOnly = numberOfItems => arr => arr.slice(0, numberOfItems);

export const parseHourForHuman = x => new Date(x).getHours() + ':00';

export const objectWithoutKey = (object, keyName) => {
  delete object[keyName]
  return object;
};