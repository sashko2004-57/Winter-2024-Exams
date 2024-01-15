// Get month number

'use strict';

const monthNamePrefixes = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec',
];
const amountOfMonths = monthNamePrefixes.length;

const getNumberOfMonth = (monthName) => {
  for (const monthNameCheckingPrefix of monthNamePrefixes) {
    if (monthName.toLowerCase().startsWith(monthNameCheckingPrefix)) {
      return monthNamePrefixes.indexOf(monthNameCheckingPrefix) + 1;
    }
  }
  return -1;
};

module.exports = getNumberOfMonth;
