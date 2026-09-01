/*
 * @lc app=leetcode id=481 lang=javascript
 *
 * [481] Magical String
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var magicalString = function(n) {
    if (n <= 0) return 0;
    if (n <= 3) return 1;

    const s = [1, 2, 2];
    let read = 2, count = 0;
    let ones = 1;

    while (s.length < n) {
        const num = s[s.length - 1] === 1 ? 2 : 1;
        for (let i = 0; i < s[read]; i++) {
            s.push(num);
            if (num === 1 && s.length <= n) ones++;
        }
        read++;
    }

    return ones;
};
// @lc code=end

// TEST:
console.log(magicalString(6) === 3);
console.log(magicalString(1) === 1);
console.log(magicalString(3) === 1);
console.log(magicalString(4) === 2);
console.log(magicalString(7) === 4);
console.log(magicalString(10) === 5);
