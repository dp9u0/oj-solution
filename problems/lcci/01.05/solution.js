/*
 * @lc app=leetcode.cn id=面试题 01.05 lang=javascript
 *
 * [面试题 01.05] 一次编辑
 */

// @lc code=start
/**
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
var oneEditAway = function(first, second) {
    // 双指针逐位比对，长度差超 1 直接 false；首次失配分流较长串的指针
    const m = first.length;
    const n = second.length;
    if (Math.abs(m - n) > 1) return false;
    let i = 0;
    let j = 0;
    let edited = false;
    while (i < m && j < n) {
        if (first[i] === second[j]) {
            i++;
            j++;
        } else {
            if (edited) return false;
            edited = true;
            if (m === n) {
                i++; // 替换：两边都前进
                j++;
            } else if (m > n) {
                i++; // 插入/删除：只前进较长串
            } else {
                j++;
            }
        }
    }
    return true;
};
// @lc code=end

// TEST:
console.log(oneEditAway('pale', 'ple') === true); // 删除
console.log(oneEditAway('pales', 'pal') === false);
console.log(oneEditAway('horse', 'ros') === false); // 需两次编辑
console.log(oneEditAway('', 'a') === true);
console.log(oneEditAway('', '') === true);
console.log(oneEditAway('abc', 'abc') === true); // 零次编辑
console.log(oneEditAway('abcd', 'abed') === true); // 替换
