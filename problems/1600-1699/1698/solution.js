/*
 * @lc app=leetcode.cn id=1698 lang=javascript
 *
 * [1698] 字符串的不同子字符串个数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countDistinct = function(s) {
    // suffix trie: every node (except root) corresponds to exactly one distinct substring
    const root = new Map();
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        let cur = root;
        for (let j = i; j < s.length; j++) {
            const c = s[j];
            let next = cur.get(c);
            if (next === undefined) {
                next = new Map();
                cur.set(c, next);
                count++;
            }
            cur = next;
        }
    }
    return count;
};
// @lc code=end

// TEST:
console.log(countDistinct("aabbaba")); // 21
console.log(countDistinct("abcdefg")); // 28
console.log(countDistinct("a")); // 1
console.log(countDistinct("aaaa")); // 4
