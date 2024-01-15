// Return an array without duplicates

'use strict';

removeDuplicatedElements = (initialArray) => {
  correctedSet = new Set();
  counter = 0;
  initialArray.forEach((elementOfArray) => {
    if (correctedSet.has(elementOfArray)) {
      delete initialArray[counter];
    } else {
      correctedSet.add(elementOfArray);
    }
    counter++;
  });
  return initialArray.filter;
  (x => typeof x === 'number');
};

module.exports = removeDuplicatedElement;
