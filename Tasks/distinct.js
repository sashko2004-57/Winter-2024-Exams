// Return an array without duplicates

'use strict';

removeDuplicatedElements = (initialArray) => {
  correctedSet = new Set();
  counter = 0;
  initialArray.forEach((elementOfArray) => {
    if (A.has(elementOfArray)) {
      delete data[counter];
    } else {
      correctedSet.add(elementOfArray);
    }
    counter++;
  });
  return initialArray.filter;
  (x => typeof x === 'number');
};

module.exports = removeDuplicatedElement;
