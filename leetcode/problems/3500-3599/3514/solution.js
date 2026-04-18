/*
 * @lc app=leetcode id=3514 lang=javascript
 *
 * [3514] Number of Unique XOR Triplets II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var uniqueXorTriplets = function(nums) {
  const n = nums.length;
  const MAX = 2048;
  const dp1 = new Uint8Array(MAX);
  const dp2 = new Uint8Array(MAX);
  const dp3 = new Uint8Array(MAX);
  for (let k = 0; k < n; k++) {
    const v = nums[k];
    dp1[v] = 1;
    for (let y = 0; y < MAX; y++) {
      if (dp2[y]) dp3[y ^ v] = 1;
    }
    for (let i = 0; i < k; i++) {
      dp2[nums[i] ^ v] = 1;
    }
  }
  let ans = 0;
  for (let x = 0; x < MAX; x++) {
    if (dp1[x] || dp3[x]) ans++;
  }
  return ans;
};
// @lc code=end

// TEST:
console.log(uniqueXorTriplets([1, 3])); // 2
console.log(uniqueXorTriplets([6, 7, 8, 9])); // 4
console.log(uniqueXorTriplets([1])); // 1
console.log(uniqueXorTriplets([1, 2])); // 2
console.log(uniqueXorTriplets([1, 2, 3])); // 4
