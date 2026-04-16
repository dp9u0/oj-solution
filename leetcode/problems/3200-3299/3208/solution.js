/*
 * @lc app=leetcode id=3208 lang=javascript
 *
 * [3208] Alternating Groups II
 */

// @lc code=start
/**
 * @param {number[]} colors
 * @param {number} k
 * @return {number}
 */
var numberOfAlternatingGroups = function(colors, k) {
    const n = colors.length;
    let cnt = 1;
    let ans = 0;
    for (let i = 1; i < n + k - 1; i++) {
        if (colors[i % n] !== colors[(i - 1) % n]) {
            cnt++;
        } else {
            cnt = 1;
        }
        if (cnt >= k) ans++;
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(numberOfAlternatingGroups([0,1,0,1,0], 3)); // 3
console.log(numberOfAlternatingGroups([0,1,0,0,1,0,1], 6)); // 2
console.log(numberOfAlternatingGroups([1,1,0,1], 4)); // 0
console.log(numberOfAlternatingGroups([0,1,0,1], 3)); // 4
