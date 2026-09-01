/**
 * @param {string[]} A
 * @return {number}
 */
var numSpecialEquivGroups = function (A) {
  let count = 0,
    set = new Set();
  for (let i = 0; i < A.length; i++) {
    let odd = [],
      even = [];
    for (let j = 0; j < A[i].length; j++) {
      j % 2 === 0 ? even.push(A[i][j]) : odd.push(A[i][j])
    }
    even.sort();
    odd.sort();
    let key = even.join("") + odd.join("");
    if (!set.has(key)) {
      set.add(key);
      count++;
    }
  }
  return count;
};