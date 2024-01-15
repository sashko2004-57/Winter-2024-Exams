// Sum all number values in dict

'use strict';

const sumNumberValues = (dictionary) => {
  let sumOfValues = 0;
  const keysOfObject = Object.keys(dictionary);
  keysOfObject.forEach((key) => {
    const value = dictionary[key];
    if (typeof value === 'number') sumOfValues += value;
  });
  return sumOfValues;
};

module.exports = sumNumberValues;
