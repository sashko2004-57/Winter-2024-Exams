// Get day number

'use strict';

const daysPrefixes = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

parseWeekdayName = (weekdayName) => {
  for (const weekdayPrefix of daysPrefixes) {
    if (weekdayName.startsWith(weekdayPrefix)) {
      return daysPrefixes.indexOf(weekdayPrefix) + 1;
    }
  }
  return -1;
};

module.exports = parseWeekdayName;
