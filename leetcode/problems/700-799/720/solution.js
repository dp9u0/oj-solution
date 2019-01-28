/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function (words) {
  words.sort()
  let map = new Set(words), result = ''
  for (const word of words) {
    let isValid = true,
      key = '';
    for (let i = 0; i < word.length - 1; i++) {
      key += word[i];
      if (!map.has(key)) {
        isValid = false;
        break;
      }
    }
    if (isValid && word.length > result.length) {
      result = word;
    }
  }
  return result;
};