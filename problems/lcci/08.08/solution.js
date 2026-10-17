/*
 * @lc app=leetcode.cn id=面试题 08.08 lang=javascript
 *
 * [面试题 08.08] 有重复字符串的排列组合
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string[]}
 */
var permutation = function(S) {
    // 计数回溯：仅枚举计数 > 0 的字符，按字典序输出，天然去重
    const count = new Map();
    for (const c of S) count.set(c, (count.get(c) || 0) + 1);
    const chars = [...count.keys()].sort();
    const res = [];
    const buf = [];
    const dfs = () => {
        if (buf.length === S.length) {
            res.push(buf.join(''));
            return;
        }
        for (const c of chars) {
            if (!count.get(c)) continue;
            count.set(c, count.get(c) - 1);
            buf.push(c);
            dfs();
            buf.pop();
            count.set(c, count.get(c) + 1);
        }
    };
    dfs();
    return res;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(permutation('qqe')) === JSON.stringify(['eqq', 'qeq', 'qqe']));
console.log(JSON.stringify(permutation('ab')) === JSON.stringify(['ab', 'ba']));
console.log(JSON.stringify(permutation('aa')) === JSON.stringify(['aa']));
console.log(JSON.stringify(permutation('aabb')) === JSON.stringify(['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']));
console.log(JSON.stringify(permutation('abc')) === JSON.stringify(['abc', 'acb', 'bac', 'bca', 'cab', 'cba']));
console.log(permutation('aaaaaaaaa').length === 1);
