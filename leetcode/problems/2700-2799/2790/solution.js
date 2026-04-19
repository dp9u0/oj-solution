/*
 * @lc app=leetcode id=2790 lang=javascript
 *
 * [2790] Maximum Number of Groups With Increasing Length
 */

// @lc code=start
/**
 * @param {number[]} usageLimits
 * @return {number}
 */
var maxIncreasingGroups = function(usageLimits) {
    const n = usageLimits.length;
    usageLimits.sort((a, b) => a - b);
    const prefix = [0];
    for (let i = 0; i < n; i++) prefix.push(prefix[i] + usageLimits[i]);
    const check = (k) => {
        let idx = 0;
        for (let p = 1; p <= k; p++) {
            while (idx < n && usageLimits[idx] < p) idx++;
            if (prefix[idx] + p * (n - idx) < p * (2 * k - p + 1) / 2) return false;
        }
        return true;
    };
    let lo = 1, hi = n;
    while (lo <= hi) {
        const mid = (lo + hi) >> 1;
        if (check(mid)) lo = mid + 1;
        else hi = mid - 1;
    }
    return hi;
};
// @lc code=end

// TEST:
console.log(maxIncreasingGroups([1,2,5])); // 3
console.log(maxIncreasingGroups([2,1,2])); // 2
console.log(maxIncreasingGroups([1,1])); // 1
console.log(maxIncreasingGroups([1])); // 1
console.log(maxIncreasingGroups([5,5,5,5])); // 4
console.log(maxIncreasingGroups([10,10,10])); // 3
console.log(maxIncreasingGroups([1,1,5])); // 2
console.log(maxIncreasingGroups([1,2,3,4])); // 3
