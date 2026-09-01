/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  let map = {};
  for (let i = 0; i < t.length; i++) {
    map[t[i]] = (map[t[i]] || 0) + 1;
  }
  for (let j = 0; j < s.length; j++) {
    map[s[j]]--;
  }
  for (const key in map) {
    if (map[key]) {
      return key;
    }
  }
};