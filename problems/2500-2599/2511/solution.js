/*
 * @lc app=leetcode id=2511 lang=javascript
 *
 * [2511] Maximum Enemy Forts That Can Be Captured
 */

// @lc code=start
/**
 * @param {number[]} forts
 * @return {number}
 */
var captureForts = function(forts) {
    let ans = 0, i = 0;
    const n = forts.length;
    while (i < n) {
        if (forts[i] !== 0) {
            let j = i + 1;
            while (j < n && forts[j] === 0) j++;
            if (j < n && forts[i] + forts[j] === 0) {
                ans = Math.max(ans, j - i - 1);
            }
            i = j;
        } else {
            i++;
        }
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(captureForts([1,0,0,-1,0,0,0,0,1])); // 4
console.log(captureForts([0,0,1,-1])); // 0
console.log(captureForts([1,0,0,0,-1])); // 3
