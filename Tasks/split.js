// Split an array into two parts

'use strict';

splitArray = (lengthOfFirstPart, initialArray) => {
  begin = initialArray.slice(0, lengthOfFirstPart);
  const lengthOfArray = initialArray.length;
  initialArray = initialArray.slice(lengthOfFirstPart, lenthOfArray);
  return [begin, initialArray];
};

module.exports = splitArray;
