/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const map = {};
  arr.forEach(n => {
    map[n] = (map[n] || 0) + 1;
  });
  const set = new Set();
  for (const v of Object.values(map)) {
    if (set.has(v)) return false
    set.add(v);
  }
  return true;
};
