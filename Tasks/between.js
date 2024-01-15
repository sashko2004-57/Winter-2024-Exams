// Extract substring between prefix and suffix

'use strict';

const getSubstringBetween = (string, prefix, suffix) => {
  const indexOfPrefix = string.indexOf(prefix);
  const indexOfSuffix = string.indexOf(suffix);
  if (indexOfPrefix === -1 || indexOfSuffix === -1) {
    return '';
  } else {
    const indexOfSubstring = indexOfPrefix + prefix.length;
    string = string.substring(indexOfSubstring, indexOfSuffix);
  }
  return string;
};

module.exports = getSubstringBetween;
