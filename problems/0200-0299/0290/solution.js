/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, str) {
  let map = {};
  let words = str.split(" ");
  let patterns = pattern.split("");
  let container = [];
  if (words.length !== patterns.length) return false;
  for (let i = 0; i < patterns.length; i++) {
    if (map.hasOwnProperty(patterns[i])) {
      if (map[patterns[i]] !== words[i]) {
        return false;
      } else {
        continue;
      }
    } else {
      if (!container.some(function (item) {
          return item === words[i];
        })) {
        map[patterns[i]] = words[i];
        container.push(words[i])
      } else {
        return false;
      }
    }
  }
  return true;
};