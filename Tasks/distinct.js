// Return an array without duplicates

'use strict';

const removeDuplicatedElements = (initialArray) => {
  let correctedArray = initialArray;
  for(const elementOfArray of initialArray) {
    if (!correctedArray.includes(elementOfArray)) {
      correctedArray.add(elementOfArray);
    }
  };
  return correctedArray.filter;
};

module.exports = removeDuplicatedElements;
