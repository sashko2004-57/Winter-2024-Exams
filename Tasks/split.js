// Split an array into two parts

'use strict';

const splitArray = (lengthOfFirstPart, initialArray) => {
  const firstPartOfArray = initialArray.slice(0, lengthOfFirstPart);
  const lastPastOfArray = initialArray.slice(lengthOfFirstPart);
  return [firstPartOfArray, lastPastOfArray];
};

module.exports = splitArray;
