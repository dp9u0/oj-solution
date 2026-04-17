/*
 * @lc app=leetcode id=3296 lang=javascript
 *
 * [3296] Minimum Number of Seconds to Make Mountain Height Zero
 */

// @lc code=start
/**
 * @param {number} mountainHeight
 * @param {number[]} workerTimes
 * @return {number}
 */
var minNumberOfSeconds = function(mountainHeight, workerTimes) {
    // How much height can worker with time t reduce in at most T seconds?
    // t * x * (x+1) / 2 <= T => x^2 + x - 2T/t <= 0 => x <= (-1 + sqrt(1 + 8T/t)) / 2
    const canReduce = (T, t) => {
        return Math.floor((Math.sqrt(1 + 8 * T / t) - 1) / 2);
    };

    let lo = 1, hi = 1;
    // Upper bound: worst case, slowest worker does everything
    // t * h * (h+1) / 2 could be up to 10^6 * 10^5 * 10^5 = 10^16
    hi = workerTimes[0] * mountainHeight * (mountainHeight + 1) / 2;
    for (const t of workerTimes) {
        const worst = t * mountainHeight * (mountainHeight + 1) / 2;
        if (worst > hi) hi = worst;
    }

    let ans = hi;
    while (lo <= hi) {
        const mid = Math.floor((lo + hi) / 2);
        let total = 0;
        for (const t of workerTimes) {
            total += canReduce(mid, t);
            if (total >= mountainHeight) break;
        }
        if (total >= mountainHeight) {
            ans = mid;
            hi = mid - 1;
        } else {
            lo = mid + 1;
        }
    }

    return ans;
};
// @lc code=end

// TEST:
console.log(minNumberOfSeconds(4, [2,1,1])); // 3
console.log(minNumberOfSeconds(10, [3,2,2,4])); // 12
console.log(minNumberOfSeconds(5, [1])); // 15
console.log(minNumberOfSeconds(1, [1])); // 1
console.log(minNumberOfSeconds(3, [1,2,3])); // 3
