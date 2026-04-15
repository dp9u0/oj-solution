/*
 * @lc app=leetcode id=1224 lang=javascript
 *
 * [1224] Maximum Equal Frequency
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxEqualFreq = function(nums) {
  const freq = {};
  const countFreq = {};
  let maxFreq = 0;
  let ans = 0;

  for (let i = 0; i < nums.length; i++) {
    const x = nums[i];
    if (freq[x]) {
      countFreq[freq[x]]--;
      if (countFreq[freq[x]] === 0) delete countFreq[freq[x]];
    }
    freq[x] = (freq[x] || 0) + 1;
    countFreq[freq[x]] = (countFreq[freq[x]] || 0) + 1;
    maxFreq = Math.max(maxFreq, freq[x]);

    const len = i + 1;
    const keys = Object.keys(countFreq).map(Number);

    if (keys.length === 1) {
      if (keys[0] === 1 || countFreq[keys[0]] === 1) ans = len;
    } else if (keys.length === 2) {
      keys.sort((a, b) => a - b);
      const [lo, hi] = keys;
      if ((hi === lo + 1 && countFreq[hi] === 1) || (lo === 1 && countFreq[1] === 1)) {
        ans = len;
      }
    }
  }
  return ans;
};
// @lc code=end

// TEST:
console.log(maxEqualFreq([2,2,1,1,5,3,3,5])); // 7
console.log(maxEqualFreq([1,1,1,2,2,2,3,3,3,4,4,4,5])); // 13
console.log(maxEqualFreq([1,1,1,1])); // 4
console.log(maxEqualFreq([10,2,8,9,3,8,1,6,8,4])); // 8
