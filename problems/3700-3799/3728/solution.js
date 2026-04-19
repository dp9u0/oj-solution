/*
 * @lc app=leetcode id=3728 lang=javascript
 *
 * [3728] Stable Subarrays With Equal Boundary and Interior Sum
 */

// @lc code=start
/**
 * @param {number[]} capacity
 * @return {number}
 */
var countStableSubarrays = function(capacity) {
  const n = capacity.length;
  const prefix = new Array(n + 1);
  prefix[0] = 0;
  for (let i = 0; i < n; i++) prefix[i + 1] = prefix[i] + capacity[i];

  const map = new Map();
  let result = 0;

  const add = (p, c) => {
    const key = p + ',' + c;
    map.set(key, (map.get(key) || 0) + 1);
  };

  // Add j=1: represents l=0
  add(prefix[1], capacity[0]);

  for (let r = 2; r < n; r++) {
    const target = prefix[r] - capacity[r];
    const key = target + ',' + capacity[r];
    result += map.get(key) || 0;
    add(prefix[r], capacity[r - 1]);
  }

  return result;
};
// @lc code=end

// TEST:
console.log(countStableSubarrays([9, 3, 3, 3, 9])); // 2
console.log(countStableSubarrays([1, 2, 3, 4, 5])); // 0
console.log(countStableSubarrays([-4, 4, 0, 0, -8, -4])); // 1
console.log(countStableSubarrays([1, 1, 1])); // 1
console.log(countStableSubarrays([0, 0, 0, 0])); // 3
