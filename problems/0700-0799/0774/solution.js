/*
 * @lc app=leetcode.cn id=774 lang=javascript
 *
 * [774] 最小化去加油站的最大距离
 */

// @lc code=start
/**
 * @param {number[]} stations
 * @param {number} k
 * @return {number}
 */
var minmaxGasDist = function(stations, k) {
    const n = stations.length;
    const possible = (D) => {
        let need = 0;
        for (let i = 1; i < n; i++) {
            need += Math.ceil((stations[i] - stations[i - 1]) / D) - 1;
            if (need > k) return false;
        }
        return true;
    };
    let lo = 0, hi = stations[n - 1] - stations[0];
    while (hi - lo > 1e-6) {
        const mid = (lo + hi) / 2;
        if (possible(mid)) hi = mid;
        else lo = mid;
    }
    return hi;
};
// @lc code=end

// TEST:
console.log(minmaxGasDist([1,2,3,4,5,6,7,8,9,10], 9)); // 0.5
console.log(minmaxGasDist([23,24,36,39,46,56,57,65,84,98], 1)); // 14
console.log(minmaxGasDist([1,9], 3)); // 2 (8-gap split into 4)
console.log(minmaxGasDist([10,19,25], 2)); // 4.5 (tight: 9 needs a half-split)
console.log(minmaxGasDist([1,2], 1000)); // ~0.000999 (= 1/1001)
console.log(minmaxGasDist([0,100000000], 1)); // 50000000
