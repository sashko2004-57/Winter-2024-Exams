// Shuffle an array

'use strict';

const shuffle = (...initialArray) => {
  const [shuffledArray] = initialArray;
  shuffledArray.sort(() => Math.random() - 0.5);
  {
    return shuffledArray;
  }
};

module.exports = shuffle;
