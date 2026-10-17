/*
 * @lc app=leetcode.cn id=面试题 16.20 lang=javascript
 *
 * [面试题 16.20] T9键盘
 */

// @lc code=start
/**
 * @param {string} num
 * @param {string[]} words
 * @return {string[]}
 */
var getValidT9Words = function(num, words) {
    // 字母 → T9 数字映射，单词编码后与 num 逐位比较，保留原序
    const map = new Array(26);
    ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'].forEach((g, gi) => {
        const digit = String(gi + 2);
        for (const c of g) map[c.charCodeAt(0) - 97] = digit;
    });
    return words.filter(w => {
        for (let i = 0; i < w.length; i++) {
            if (map[w.charCodeAt(i) - 97] !== num[i]) return false;
        }
        return true;
    });
};
// @lc code=end

// TEST:
console.log(JSON.stringify(getValidT9Words('8733', ['tree', 'used'])) === JSON.stringify(['tree', 'used']));
console.log(JSON.stringify(getValidT9Words('2', ['a', 'b', 'c', 'd'])) === JSON.stringify(['a', 'b', 'c']));
console.log(JSON.stringify(getValidT9Words('7777', ['sqrs', 'ssss', 'tuvw'])) === JSON.stringify(['sqrs', 'ssss']));
console.log(JSON.stringify(getValidT9Words('43556', ['hello', 'world'])) === JSON.stringify(['hello']));
console.log(JSON.stringify(getValidT9Words('9', ['w', 'x', 'y', 'z', 'a'])) === JSON.stringify(['w', 'x', 'y', 'z']));
