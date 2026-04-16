/*
 * @lc app=leetcode id=2552 lang=javascript
 *
 * [2552] Count Increasing Quadruplets
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var countQuadruplets = function(nums) {
    const n = nums.length;
    let ans = 0;

    // valCount[v] = count of value v seen in nums[0..j-1]
    const valCount = new Array(n + 1).fill(0);
    const prefix = new Array(n + 2).fill(0);
    const suffixGt = new Array(n).fill(0);

    for (let j = 0; j < n - 2; j++) {
        if (j > 0) valCount[nums[j - 1]]++;

        // prefix[v] = number of i < j with nums[i] < v
        prefix[0] = 0;
        for (let v = 1; v <= n; v++) {
            prefix[v] = prefix[v - 1] + valCount[v - 1];
        }

        // suffixGt[k] = number of l > k with nums[l] > nums[j]
        suffixGt[n - 1] = 0;
        for (let k = n - 2; k > j; k--) {
            suffixGt[k] = suffixGt[k + 1] + (nums[k + 1] > nums[j] ? 1 : 0);
        }

        for (let k = j + 1; k < n - 1; k++) {
            if (nums[k] < nums[j]) {
                ans += prefix[nums[k]] * suffixGt[k];
            }
        }
    }

    return ans;
};
// @lc code=end

// TEST:
console.log(countQuadruplets([1, 3, 2, 4, 5])); // 2
console.log(countQuadruplets([1, 2, 3, 4])); // 0
console.log(countQuadruplets([4, 3, 2, 1])); // 0
console.log(countQuadruplets([1, 3, 2, 5, 4])); // 1: (0,1,2,3): 1<2<3<5
console.log(countQuadruplets([1, 4, 2, 3, 5])); // 2
