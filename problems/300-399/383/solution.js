/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let map = {};
  for (let i = 0; i < magazine.length; i++) {
    map[magazine[i]] = (map[magazine[i]] || 0) + 1;
  }
  for (let j = 0; j < ransomNote.length; j++) {
    if (map[ransomNote[j]]) {
      map[ransomNote[j]]--;
    } else {
      return false;
    }
  }
  return true;
};