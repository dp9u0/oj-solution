/*
 * @lc app=leetcode id=793 lang=javascript
 *
 * [793] Preimage Size of Factorial Zeroes Function
 */

// @lc code=start
/**
 * @param {number} k
 * @return {number}
 */
var preimageSizeFZF = function(k) {
    const countZeros = (x) => {
        let cnt = 0;
        while (x > 0) {
            x = Math.floor(x / 5);
            cnt += x;
        }
        return cnt;
    };

    // Find smallest x such that f(x) >= target
    const binarySearch = (target) => {
        let lo = 0, hi = 5 * (target + 1);
        while (lo < hi) {
            const mid = Math.floor((lo + hi) / 2);
            if (countZeros(mid) < target) lo = mid + 1;
            else hi = mid;
        }
        return lo;
    };

    const left = binarySearch(k);
    const right = binarySearch(k + 1);
    return countZeros(left) === k ? right - left : 0;
};
// @lc code=end

// TEST:
console.log(preimageSizeFZF(0));  // 5
console.log(preimageSizeFZF(5));  // 0
console.log(preimageSizeFZF(3));  // 5
console.log(preimageSizeFZF(1000000000)); // 5
