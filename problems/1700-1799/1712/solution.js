/*
 * @lc app=leetcode id=1712 lang=javascript
 *
 * [1712] Ways to Split Array Into Three Subarrays
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplit = function(nums) {
    const MOD = 1e9 + 7;
    let n = nums.length;
    let prefix = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) prefix[i + 1] = prefix[i] + nums[i];

    let res = 0;
    for (let i = 1; i <= n - 2; i++) {
        let leftSum = prefix[i];
        let lo = lowerBound(prefix, 2 * leftSum, i + 1, n - 1);
        let hi = upperBound(prefix, Math.floor((prefix[n] + leftSum) / 2), i + 1, n - 1);
        if (lo <= hi) res = (res + hi - lo + 1) % MOD;
    }
    return res;
};

function lowerBound(arr, target, lo, hi) {
    let result = hi + 1;
    while (lo <= hi) {
        let mid = (lo + hi) >> 1;
        if (arr[mid] >= target) { result = mid; hi = mid - 1; }
        else lo = mid + 1;
    }
    return result;
}

function upperBound(arr, target, lo, hi) {
    let result = lo - 1;
    while (lo <= hi) {
        let mid = (lo + hi) >> 1;
        if (arr[mid] <= target) { result = mid; lo = mid + 1; }
        else hi = mid - 1;
    }
    return result;
}
// @lc code=end

// TEST:
console.log(waysToSplit([1,1,1])); // 1
console.log(waysToSplit([1,2,2,2,5,0])); // 3
console.log(waysToSplit([3,2,1])); // 0
