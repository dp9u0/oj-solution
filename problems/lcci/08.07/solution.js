/*
 * @lc app=leetcode.cn id=面试题 08.07 lang=javascript
 *
 * [面试题 08.07] 无重复字符串的排列组合
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string[]}
 */
var permutation = function(S) {
    const res = [];
    const chars = S.split('');
    const swap = (i, j) => {
        const t = chars[i];
        chars[i] = chars[j];
        chars[j] = t;
    };
    // 对位置 start 依次尝试与每个 j>=start 的字符交换
    const dfs = start => {
        if (start === chars.length) {
            res.push(chars.join(''));
            return;
        }
        for (let j = start; j < chars.length; j++) {
            swap(start, j);
            dfs(start + 1);
            swap(start, j); // 回溯还原
        }
    };
    dfs(0);
    return res;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(permutation('qwe')) === JSON.stringify(['qwe', 'qew', 'wqe', 'weq', 'ewq', 'eqw']));
console.log(JSON.stringify(permutation('ab')) === JSON.stringify(['ab', 'ba']));
console.log(JSON.stringify(permutation('a')) === JSON.stringify(['a']));
console.log(JSON.stringify(permutation('abc')) === JSON.stringify(['abc', 'acb', 'bac', 'bca', 'cba', 'cab']));
console.log(permutation('abcdefghi').length === 362880); // 9! 全量
