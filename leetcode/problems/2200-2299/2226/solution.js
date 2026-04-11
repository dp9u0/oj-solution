/*
 * @lc app=leetcode id=2226 lang=javascript
 *
 * [2226] Maximum Candies Allocated to K Children
 */

// @lc code=start
/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
var maximumCandies = function(candies, k) {
    const canAllocate = (x) => {
        let count = 0;
        for (const c of candies) {
            count += Math.floor(c / x);
            if (count >= k) return true;
        }
        return false;
    };

    let lo = 1, hi = Math.max(...candies);
    let result = 0;
    while (lo <= hi) {
        const mid = Math.floor((lo + hi) / 2);
        if (canAllocate(mid)) {
            result = mid;
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }
    return result;
};
// @lc code=end

// TEST:
console.log(maximumCandies([5,8,6], 3)); // 5
console.log(maximumCandies([2,5], 11)); // 0
console.log(maximumCandies([1,2,3,4,5], 3)); // 3
