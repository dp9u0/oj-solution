/*
 * @lc app=leetcode.cn id=面试题 01.02 lang=javascript
 *
 * [面试题 01.02] 判定是否互为字符重排
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var CheckPermutation = function(s1, s2) {
    // 长度不等直接否决；26 位计数差分一次扫描
    if (s1.length !== s2.length) return false;
    const cnt = new Array(26).fill(0);
    for (let i = 0; i < s1.length; i++) {
        cnt[s1.charCodeAt(i) - 97]++;
        cnt[s2.charCodeAt(i) - 97]--;
    }
    return cnt.every(v => v === 0);
};
// @lc code=end

// TEST:
console.log(CheckPermutation('abc', 'bca') === true);
console.log(CheckPermutation('abc', 'bad') === false);
console.log(CheckPermutation('', '') === true);
console.log(CheckPermutation('a', 'ab') === false);
console.log(CheckPermutation('aab', 'aba') === true);
console.log(CheckPermutation('aab', 'abb') === false);
