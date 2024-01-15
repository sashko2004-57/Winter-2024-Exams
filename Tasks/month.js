// Get month number

'use strict';

monthNamePrefixes = [
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

getNumberOfMonth = (monthName) => {
  amountOfMonths = monthNamePrefixes.length;
  for (let indexOfMonth = 0; indexOfMonth < amountOfMonths; indexOfMonth++) {
    if (monthName.toLowerCase().startsWith(monthNamePrefixes[indexOfMonth])) {
      return indexOfMonth + 1;
    }
  }
  return -1;
};

module.exports = getNumberOfMonth;
