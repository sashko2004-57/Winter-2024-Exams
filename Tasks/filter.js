// Filter array by type name

'use strict';

const filterArrayByType = (initialArray, typeOfElements) => {
  let indexesOfElementsToRemove = [];
  for (const element of initialArray) {
    let indexOfElement = initialArray.indexOf(element);
    if (typeof initialArray[indexOfElement] !== type) {
      indexesOfElementsToRemove.unshift(indexOfElement);
    }
  }
  for (const indexOfElement of indexesOfElementsToRemove) {
    initialArray.splice(indexOfElement, 1);
  }
  return initialArray;
};

module.exports = filterArrayByType;
