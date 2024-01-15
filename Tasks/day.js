// Get day number

'use strict';

let daysPrefixes = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

parseWeekdayName = (weekdayName) => {
  let indexOfWeekday;
  for (indexOfWeekday = 0; indexOfWeekday < daysPrefixes.length; indexOfWeekday++) {
    if (weekdayName.startsWith(daysPrefixes[indexOfWeekday])) {
      return indexOfWeekday + 1;
    }
  }
  return -1;
};

module.exports = parseWeekdayName;
