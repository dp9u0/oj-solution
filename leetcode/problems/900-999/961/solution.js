/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function (A) {
  let set = new Set();
  for (const el of A) {
    if (set.has(el)) {
      return el;
    }
    set.add(el);
  }
  // wont reach here
  return NaN;
};