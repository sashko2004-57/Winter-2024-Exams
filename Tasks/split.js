// Split an array into two parts

'use strict';

const splitArray = (lengthOfFirstPart, initialArray) => {
  const firstPartOfArray = initialArray.slice(0, lengthOfFirstPart);
  const lastPartOfArray = initialArray.slice(lengthOfFirstPart);
  return [firstPartOfArray, lastPartOfArray];
};

module.exports = splitArray;
