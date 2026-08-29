/*
 * @lc app=leetcode id=3782 lang=javascript
 *
 * [3782] Last Remaining Integer
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var lastInteger = function(n) {
  let head = 1;
  let step = 1;
  let left = true;
  let count = n;
  while (count > 1) {
    if (!left && count % 2 === 0) head += step;
    step *= 2;
    count = Math.ceil(count / 2);
    left = !left;
  }
  return head;
};
// @lc code-end

// TEST:
console.log(lastInteger(8) === 3);
console.log(lastInteger(5) === 1);
console.log(lastInteger(1) === 1);
console.log(lastInteger(2) === 1);
console.log(lastInteger(6) === 1);
console.log(lastInteger(9) === 9);

// brute cross-check
function brute(n) {
  let arr = Array.from({ length: n }, (_, i) => i + 1);
  let left = true;
  while (arr.length > 1) {
    const next = [];
    if (left) {
      for (let i = 0; i < arr.length; i += 2) next.push(arr[i]);
    } else {
      for (let i = arr.length - 1; i >= 0; i -= 2) next.unshift(arr[i]);
    }
    arr = next;
    left = !left;
  }
  return arr[0];
}
let ok = true;
for (let n = 1; n <= 2000; n++) {
  if (lastInteger(n) !== brute(n)) { ok = false; console.log('MISMATCH at', n); break; }
}
console.log(ok);
