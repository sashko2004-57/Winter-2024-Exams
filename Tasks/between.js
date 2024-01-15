// Extract substring between prefix and suffix

'use strict';

getSubstringBetween = (string, prefix, suffix) => {
  indexOfPrefix = string.indexOf(prefix);
  if (indexOfPrefix === -1) {
    return '';
  } else {
    indexOfSubstring = indexOfPrefix + prefix.length;
    string = string.substring(indexOfSubstring);
    if (suffix) {
      indexOfSuffix = str.indexOf(suffix);
      if (indexOfSuffix === -1) {
        return '';
      } else {
        string = string.substring(0, indexOfSuffix);
      }
    }
  }
  return string;
};

module.exports = getSubstringBetween;
