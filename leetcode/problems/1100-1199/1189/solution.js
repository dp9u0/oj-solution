/*
 * @lc app=leetcode id=1189 lang=javascript
 *
 * [1189] Maximum Number of Balloons
 */

// @lc code=start
/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    const cnt = new Array(26).fill(0);
    for (const c of text) cnt[c.charCodeAt(0) - 97]++;
    const need = { b: 1, a: 1, l: 2, o: 2, n: 1 };
    let ans = Infinity;
    for (const [c, n] of Object.entries(need)) {
        ans = Math.min(ans, Math.floor(cnt[c.charCodeAt(0) - 97] / n));
    }
    return ans;
};
// @lc code=end

// TEST:
const test = (fn, args, expected) => {
    const result = fn(...args);
    console.log(JSON.stringify(args), '=>', result, result === expected ? 'OK' : 'FAIL expected ' + expected);
};
test(maxNumberOfBalloons, ['nlaebolko'], 1);
test(maxNumberOfBalloons, ['loonbalxballpoon'], 2);
test(maxNumberOfBalloons, ['leetcode'], 0);
test(maxNumberOfBalloons, ['balloon'], 1);
test(maxNumberOfBalloons, ['balloonballoon'], 2);
