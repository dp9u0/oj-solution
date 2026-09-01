/*
 * @lc app=leetcode id=457 lang=javascript
 *
 * [457] Circular Array Loop
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var circularArrayLoop = function(nums) {
  const n = nums.length;
  const next = (i) => ((i + nums[i]) % n + n) % n;
  const color = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    if (color[i] !== 0) continue;

    let j = i;
    while (color[j] === 0) {
      color[j] = 1;
      j = next(j);
    }

    if (color[j] === 1) {
      const dir = nums[j] > 0;
      let valid = true;
      let len = 0;
      let k = j;
      do {
        if ((nums[k] > 0) !== dir) { valid = false; break; }
        len++;
        k = next(k);
      } while (k !== j);

      if (valid && len > 1) return true;
    }

    j = i;
    while (color[j] === 1) {
      color[j] = 2;
      j = next(j);
    }
  }

  return false;
};
// @lc code=end

// TEST:
console.log(circularArrayLoop([2,-1,1,2,2])); // true
console.log(circularArrayLoop([-1,-2,-3,-4,-5,6])); // false
console.log(circularArrayLoop([1,-1,5,1,4])); // true
console.log(circularArrayLoop([1,1])); // true
