// Return an array without duplicates

'use strict';

const removeDuplicatedElements = (initialArray) => {
  let correctedSet = new Set();
  let counter = 0;
  initialArray.forEach((elementOfArray) => {
    if (correctedSet.has(elementOfArray)) {
      delete initialArray[counter];
    } else {
      correctedSet.add(elementOfArray);
    }
    counter++;
  });
  return initialArray.filter;
};

module.exports = removeDuplicatedElement;
