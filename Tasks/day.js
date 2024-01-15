// Get day number

'use strict';

let daysPrefixes = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

parseWeekdayName = (weekdayName) => {
  let indexOfWeekday;
  for (indexOfWeekday = 0; indexOfWeekday < daysPrefixes.length; indexOfWeekday++) {
    if (weekdayName.startsWith(daysPrefixes[indexOfWeekday].toLowerCase())) {
      return indexOfWeekday + 1;
    }
  }
  return -1;
};

module.exports = parseWeekdayName;
