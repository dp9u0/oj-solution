/*
 * @lc app=leetcode id=3020 lang=javascript
 *
 * [3020] Find the Maximum Number of Elements in Subset
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumLength = function(nums) {
  const freq = {};
  for (const x of nums) freq[x] = (freq[x] || 0) + 1;

  let ans = 1;
  // Special case: x = 1 (pattern length must be odd)
  if (freq[1]) ans = Math.max(ans, freq[1] % 2 === 0 ? freq[1] - 1 : freq[1]);

  for (const key of Object.keys(freq)) {
    let x = Number(key);
    if (x === 1) continue;
    if (freq[x] < 2) continue;
    let len = 2;
    let v = x;
    while (true) {
      if (v > 31623) { len--; break; }
      let next = v * v;
      if (freq[next] === undefined) { len--; break; }
      v = next;
      if (freq[v] >= 2) {
        len += 2;
      } else {
        len += 1;
        break;
      }
    }
    ans = Math.max(ans, len);
  }
  return ans;
};
// @lc code=end

// TEST:
console.log(maximumLength([5,4,1,2,2])); // 3
console.log(maximumLength([1,3,2,4])); // 1
console.log(maximumLength([1,1,1,1])); // 3
console.log(maximumLength([1,1])); // 1
console.log(maximumLength([2,4,16,4,2])); // 5
