/*
 * @lc app=leetcode.cn id=面试题 10.05 lang=javascript
 *
 * [面试题 10.05] 稀疏数组搜索
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var findString = function(words, s) {
    // 空串目标：有序数组中空串必居首，存在则下标 0
    if (s === '') return words[0] === '' ? 0 : -1;
    // 变形二分：空串右移到最近非空；探不到则右半全空，只搜左半
    let lo = 0;
    let hi = words.length - 1;
    while (lo <= hi) {
        let mid = (lo + hi) >> 1;
        if (words[mid] === '') {
            let probe = mid;
            while (probe <= hi && words[probe] === '') probe++;
            if (probe > hi) {
                hi = mid - 1;
                continue;
            }
            mid = probe;
        }
        if (words[mid] === s) return mid;
        if (words[mid] < s) lo = mid + 1;
        else hi = mid - 1;
    }
    return -1;
};
// @lc code=end

// TEST:
const w = ['at', '', '', '', 'ball', '', '', 'car', '', '', 'dad', '', ''];
console.log(findString(w, 'ta') === -1);
console.log(findString(w, 'ball') === 4);
console.log(findString(w, 'at') === 0);
console.log(findString(w, 'dad') === 10);
console.log(findString([''], '') === 0);
console.log(findString([''], 'a') === -1);
console.log(findString(['a'], 'a') === 0);
console.log(findString(['', '', 'b', ''], 'b') === 2);
