// Sum all numbers from an array

'use strict';

const sum = function (s) {
  sum = [0];
  for (i of s) {
    let t = typeof i;
    if (t === 'number') {
      const new_Sum = sum[sum.length - 1] + i;
      sum.push(new_Sum);
    }
  }
  return sum[sum.length - 1];
};

module.exports = sum;
