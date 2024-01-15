// Extract substring between prefix and suffix

'use strict';

const getSubstringBetween = (string, prefix, suffix) => {
  const indexOfPrefix = string.indexOf(prefix);
  if (indexOfPrefix === -1) {
    return '';
  } else {
    const indexOfSubstring = indexOfPrefix + prefix.length;
    string = string.substring(indexOfSubstring);
    if (suffix) {
      const indexOfSuffix = string.indexOf(suffix);
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
