// Return an array without duplicates

'use strict';

const removeDuplicatedElements = (initialArray) => {
  let correctedArray = [];
  for(const elementOfArray of initialArray) {
    if (!correctedArray.includes(elementOfArray)) {
      correctedArray.add(elementOfArray);
    }
  };
  return correctedArray.filter;
};

module.exports = removeDuplicatedElements;
