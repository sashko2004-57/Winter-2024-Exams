// Return an array without duplicates

'use strict';

const duplicateValue = (value, numberOfDuplicates) => {
  let arrayWithDuplicates = [];
  for (let counter = 0; counter < numberOfDuplicates; counter++) {
    arrayWithDuplicates[counter] = value;
  }
  return arrayWithDuplicates;
};

module.exports = duplicateValue;
