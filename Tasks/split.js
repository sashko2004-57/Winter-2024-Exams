// Split an array into two parts

'use strict';

const splitArray = (lengthOfFirstPart, initialArray) => {
  const firstPartOfArray = initialArray.slice(0, lengthOfFirstPart);
  initialArray = initialArray.slice(lengthOfFirstPart);
  return [firstPartOfArray, initialArray];
};

module.exports = splitArray;
