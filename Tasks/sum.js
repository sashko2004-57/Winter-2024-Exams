// Sum all numbers from an array

'use strict';

const numberTypeName = 'number'

const sumNumbersFromArray = function (array) {
  let sumValue = 0;
  for (const element of array) {
    let typeOfElement = typeof element;
    if (typeOfElement === numberTypeName) {
      sumValue += element;
    }
  }
  return sumValue;
};

module.exports = sumNumbersFromArray;
