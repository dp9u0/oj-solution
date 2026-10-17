/*
 * @lc app=leetcode.cn id=面试题 10.02 lang=javascript
 *
 * [面试题 10.02] 变位词组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // 26 位字母计数作键，免排序
    const groups = new Map();
    for (const s of strs) {
        const key = new Array(26).fill(0);
        for (let i = 0; i < s.length; i++) key[s.charCodeAt(i) - 97]++;
        const k = key.join(',');
        if (!groups.has(k)) groups.set(k, []);
        groups.get(k).push(s);
    }
    return [...groups.values()];
};
// @lc code=end

// TEST:
// 输出顺序无关：组内排序后整体排序比较
const norm = groups => JSON.stringify(groups.map(g => g.slice().sort()).sort());
const res1 = groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);
console.log(norm(res1) === norm([['ate', 'eat', 'tea'], ['nat', 'tan'], ['bat']]));
console.log(norm(groupAnagrams([''])) === norm([['']]));
console.log(norm(groupAnagrams(['a'])) === norm([['a']]));
console.log(norm(groupAnagrams(['abc', 'cba', 'bca', 'abcd'])) === norm([['abc', 'cba', 'bca'], ['abcd']]));
console.log(norm(groupAnagrams(['aa', 'aa'])) === norm([['aa', 'aa']]));
console.log(norm(groupAnagrams([])) === norm([]));
