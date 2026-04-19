/*
 * @lc app=leetcode id=3639 lang=javascript
 *
 * [3639] Minimum Time to Activate String
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number[]} order
 * @param {number} k
 * @return {number}
 */
var minTime = function(s, order, k) {
    const n = s.length;
    const total = n * (n + 1) / 2;
    if (total < k) return -1;

    const time = new Array(n);
    for (let t = 0; t < n; t++) time[order[t]] = t;

    const countValid = (t) => {
        let invalid = 0, i = 0;
        while (i < n) {
            if (time[i] > t) {
                let len = 0;
                while (i < n && time[i] > t) { len++; i++; }
                invalid += len * (len + 1) / 2;
            } else {
                i++;
            }
        }
        return total - invalid;
    };

    let lo = 0, hi = n - 1;
    while (lo < hi) {
        const mid = (lo + hi) >> 1;
        if (countValid(mid) >= k) hi = mid;
        else lo = mid + 1;
    }
    return lo;
};
// @lc code=end

// TEST:
console.log(minTime("abc", [1,0,2], 2));  // 0
console.log(minTime("cat", [0,2,1], 6));  // 2
console.log(minTime("xy", [0,1], 4));     // -1
