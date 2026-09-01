/*
 * @lc app=leetcode id=875 lang=javascript
 *
 * [875] Koko Eating Bananas
 */

// @lc code=start
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    const canFinish = (k) => {
        let hours = 0;
        for (const p of piles) {
            hours += Math.ceil(p / k);
            if (hours > h) return false;
        }
        return true;
    };

    let lo = 1, hi = Math.max(...piles);
    while (lo < hi) {
        const mid = Math.floor((lo + hi) / 2);
        if (canFinish(mid)) {
            hi = mid;
        } else {
            lo = mid + 1;
        }
    }

    return lo;
};
// @lc code=end

// TEST:
console.log(minEatingSpeed([3,6,7,11], 8));
console.log(minEatingSpeed([30,11,23,4,20], 5));
console.log(minEatingSpeed([30,11,23,4,20], 6));
