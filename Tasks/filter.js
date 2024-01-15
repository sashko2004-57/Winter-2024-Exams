// Filter array by type name

'use strict';

filterArrayByType = (initialArray, typeOfElements) => {
  indexesOfElementsToRemove = [];
  for (element of initialArray) {
    indexOfElement = initialArray.indexOf(element);
    if (typeof initialArray[indexOfElement] !== type) {
      indexesOfElementsToRemove.unshift(indexOfElement);
    }
  }
  for (indexOfElement of indexesOfElementsToRemove) initialArray.splice(indexOfElement, 1);
  return initialArray;
};

module.exports = filterArrayByType;
