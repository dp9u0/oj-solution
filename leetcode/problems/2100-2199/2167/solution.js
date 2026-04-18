/*
 * @lc app=leetcode id=2167 lang=javascript
 *
 * [2167] Minimum Time to Remove All Cars Containing Illegal Goods
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minimumTime = function(s) {
    const n = s.length;

    // ones[i] = count of '1's in s[0..i-1]
    const ones = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        ones[i + 1] = ones[i] + (s[i] === '1' ? 1 : 0);
    }

    // costLeft[i]: min cost to remove all '1's from s[0..i-1]
    const costLeft = new Array(n + 1);
    let minVal = 0;
    costLeft[0] = 0;
    for (let i = 1; i <= n; i++) {
        const val = i - 2 * ones[i];
        if (val < minVal) minVal = val;
        costLeft[i] = 2 * ones[i] + minVal;
    }

    // costRight[i]: min cost to remove all '1's from s[i..n-1]
    // val2[j] = n - j + 2*ones[j], suffix min
    const costRight = new Array(n + 1);
    let suffixMin = n + 2 * ones[n];
    for (let i = n; i >= 0; i--) {
        const val2 = n - i + 2 * ones[i];
        if (val2 < suffixMin) suffixMin = val2;
        costRight[i] = -2 * ones[i] + suffixMin;
    }

    let ans = Infinity;
    for (let i = 0; i <= n; i++) {
        ans = Math.min(ans, costLeft[i] + costRight[i]);
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(minimumTime("1100101")); // 5
console.log(minimumTime("0010")); // 2
console.log(minimumTime("1")); // 1
console.log(minimumTime("0")); // 0
console.log(minimumTime("111")); // 2
