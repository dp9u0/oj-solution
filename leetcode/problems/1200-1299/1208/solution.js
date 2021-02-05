/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function (s, t, maxCost) {
  const length = s.length;
  let costs = new Array(length).fill(0);
  let quickReturn = true;
  for (let i = 0; i < length; i++) {
    const cs = s.charCodeAt(i);
    const ct = t.charCodeAt(i);
    const cost = Math.abs(ct - cs);
    costs[i] = cost;
    quickReturn = cost <= maxCost ? false : quickReturn;
  }
  if (quickReturn) return 0;
  let result = 0, cost = 0, l = 0, r = 0;
  while (r < length) {
    cost += costs[r++];
    if (cost > maxCost) {
      cost -= costs[l++];
    }
    result = Math.max(result, r - l);
  }
  return result;
};


// TEST:
let s, t, maxCost, result;

s = "abcd", t = "bcdf", maxCost = 3
result = equalSubstring(s, t, maxCost);
console.log(result)

s = "abcd", t = "cdef", maxCost = 3
result = equalSubstring(s, t, maxCost);
console.log(result)

s = "abcd", t = "acde", maxCost = 0
result = equalSubstring(s, t, maxCost);
console.log(result)
