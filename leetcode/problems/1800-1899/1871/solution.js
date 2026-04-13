/*
 * @lc app=leetcode id=1871 lang=javascript
 *
 * [1871] Jump Game VII
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} minJump
 * @param {number} maxJump
 * @return {boolean}
 */
var canReach = function(s, minJump, maxJump) {
    const n = s.length;
    const reachable = new Array(n).fill(false);
    reachable[0] = true;

    // diff array for range updates
    const diff = new Array(n + 1).fill(0);
    diff[0] = 1;
    diff[1] = -1;

    let prefix = 0;
    for (let i = 0; i < n; i++) {
        prefix += diff[i];
        if (s[i] === '0' && prefix > 0) {
            reachable[i] = true;
            if (i + minJump < n) {
                diff[i + minJump]++;
            }
            if (i + maxJump + 1 <= n) {
                diff[i + maxJump + 1]--;
            }
        }
    }

    return reachable[n - 1];
};
// @lc code=end

// TEST:
console.log(canReach("011010", 2, 3)); // true
console.log(canReach("01101110", 2, 3)); // false
console.log(canReach("00", 1, 1)); // true
