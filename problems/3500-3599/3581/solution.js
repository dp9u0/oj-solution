/*
 * @lc app=leetcode.cn id=3581 lang=javascript
 *
 * [3581] 计算数字中的奇数字母数量
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countOddLetters = function(n) {
    const words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const s = [...String(n)].map(d => words[d]).join('');

    const freq = new Array(26).fill(0);
    for (const c of s) freq[c.charCodeAt(0) - 97]++;
    return freq.filter(f => f % 2 === 1).length;
};
// @lc code=end

// TEST:
console.log(countOddLetters(41)); // 5 ("fourone")
console.log(countOddLetters(20)); // 5 ("twozero")
console.log(countOddLetters(1)); // 3 ("one")
console.log(countOddLetters(1000000000)); // 3 (n,z,r are odd; o,e even)
console.log(countOddLetters(11)); // 0 ("oneone")
console.log(countOddLetters(7)); // 3 ("seven")
