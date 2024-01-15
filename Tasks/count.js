// Sum all number values in dict

'use strict';

const sumNumberValues = (dictionary) => {
  const numberTypeName = 'number'
  let sumOfValues = 0;
  const keysOfObject = Object.keys(dictionary);
  for(const key of keysOfObject) {
    const value = dictionary[key];
    if (typeof value === numberTypeName) {
      sumOfValues += value;
    }
  };
  return sumOfValues;
};

module.exports = sumNumberValues;
