// Filter array by type name

'use strict';

const filterArrayByType = (initialArray, typeOfElements) => {
  let filteredArray = [];
  for (const element of initialArray) {
    if (typeof element === type) {
      filteredArray.concat(element);
    }
  }
  return filteredArray;
};

module.exports = filterArrayByType;
