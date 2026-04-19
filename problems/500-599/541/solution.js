/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  let sl = s.length;
  let i = 0;
  while (i < sl) {
    if (i + k <= sl) {
      s = s.substring(0, i) + s.substring(i, i + k).split("").reverse().join("") + s.substring(i + k, sl);
    } else if (i + k > sl) {
      s = s.substring(0, i) + s.substring(i, sl).split("").reverse().join("");
    }
    i += 2 * k;
  }
  return s;
};