/*
 * @lc app=leetcode id=2182 lang=javascript
 *
 * [2182] Construct String With Repeat Limit
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} repeatLimit
 * @return {string}
 */
var repeatLimitedString = function(s, repeatLimit) {
    const count = new Array(26).fill(0);
    for (const ch of s) count[ch.charCodeAt(0) - 97]++;

    const result = [];
    for (let i = 25; i >= 0; i--) {
        while (count[i] > 0) {
            const take = Math.min(count[i], repeatLimit);
            for (let j = 0; j < take; j++) result.push(String.fromCharCode(i + 97));
            count[i] -= take;
            if (count[i] > 0) {
                let next = i - 1;
                while (next >= 0 && count[next] === 0) next--;
                if (next < 0) return result.join('');
                result.push(String.fromCharCode(next + 97));
                count[next]--;
            }
        }
    }
    return result.join('');
};
// @lc code=end

// TEST:
console.log(repeatLimitedString('cczazcc', 3));  // 'zzcccac'
console.log(repeatLimitedString('aababab', 2));  // 'bbabaa'
console.log(repeatLimitedString('aaaa', 1));      // 'aa'
