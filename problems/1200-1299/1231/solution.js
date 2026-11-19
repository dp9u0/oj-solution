/*
 * @lc app=leetcode.cn id=1231 lang=javascript
 *
 * [1231] 分享巧克力
 */

// @lc code=start
/**
 * @param {number[]} sweetness
 * @param {number} k
 * @return {number}
 */
var maximizeSweetness = function(sweetness, k) {
    const total = sweetness.reduce((a, b) => a + b, 0);
    const can = (m) => { // cut into >= k+1 pieces, each sum >= m?
        let pieces = 0, sum = 0;
        for (const s of sweetness) {
            sum += s;
            if (sum >= m) {
                pieces++;
                sum = 0;
            }
        }
        return pieces >= k + 1;
    };
    let lo = 1, hi = Math.floor(total / (k + 1));
    let ans = 0;
    while (lo <= hi) {
        const mid = (lo + hi) >> 1;
        if (can(mid)) {
            ans = mid;
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(maximizeSweetness([1,2,3,4,5,6,7,8,9], 5)); // 6
console.log(maximizeSweetness([5,6,7,8,9,1,2,3,4], 8)); // 1
console.log(maximizeSweetness([1,2,2,1,2,2,1,2,2], 2)); // 5
console.log(maximizeSweetness([3,1,4], 0)); // 8 (no cut, eat everything)
console.log(maximizeSweetness([1], 0)); // 1
