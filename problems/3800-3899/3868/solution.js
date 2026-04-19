/*
 * @lc app=leetcode id=3868 lang=javascript
 *
 * [3868] Minimum Cost to Equalize Arrays Using Swaps
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minCost = function(nums1, nums2) {
    let count = {};
    let c1 = {}, c2 = {};
    for (let v of nums1) {
      c1[v] = (c1[v] || 0) + 1;
      count[v] = (count[v] || 0) + 1;
    }
    for (let v of nums2) {
      c2[v] = (c2[v] || 0) + 1;
      count[v] = (count[v] || 0) + 1;
    }
    for (let v in count) {
      if (count[v] % 2 !== 0) return -1;
    }
    let surplus = {};
    for (let v in count) {
      surplus[v] = ((c1[v] || 0) - (c2[v] || 0)) / 2;
    }
    let ans = 0;
    for (let v in surplus) {
      if (surplus[v] > 0) ans += surplus[v];
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(minCost([10,20], [20,10]));
console.log(minCost([10,10], [20,20]));
console.log(minCost([10,20], [30,40]));
