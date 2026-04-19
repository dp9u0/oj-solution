/*
 * @lc app=leetcode id=336 lang=javascript
 *
 * [336] Palindrome Pairs
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function(words) {
    const res = [];
    const map = new Map();
    // 预处理：记录每个单词及其反转后的索引
    for (let i = 0; i < words.length; i++) {
        map.set(words[i].split('').reverse().join(''), i);
    }
    // 判断字符串 s 在 [l, r] 区间是否为回文
    const isPalindrome = (s, l, r) => {
        while (l < r) {
            if (s[l] !== s[r]) return false;
            l++;
            r--;
        }
        return true;
    };
    for (let i = 0; i < words.length; i++) {
        const w = words[i];
        const n = w.length;
        // 枚举所有分割点 j，将单词分为前缀 w[0..j-1] 和后缀 w[j..n-1]
        for (let j = 0; j <= n; j++) {
            // 情况1：前缀是回文，后缀反转后存在
            if (isPalindrome(w, 0, j - 1)) {
                const suffix = w.slice(j);
                if (map.has(suffix) && map.get(suffix) !== i) {
                    res.push([map.get(suffix), i]);
                }
            }
            // 情况2：后缀是回文，前缀反转后存在，且 j !== n 避免重复
            if (j !== n && isPalindrome(w, j, n - 1)) {
                const prefix = w.slice(0, j);
                if (map.has(prefix) && map.get(prefix) !== i) {
                    res.push([i, map.get(prefix)]);
                }
            }
        }
    }
    return res;
};
// @lc code=end
// TEST:
// 测试用例
const testCases = [
    ["abcd", "dcba", "lls", "s", "sssll"],
    ["bat", "tab", "cat"],
    ["a", ""],
    ["a", "b", "c", "ab", "ba", "abc", "cba"],
    ["", "abc", "cba"],
    ["aaa", "aa", "aaaa"],
    ["race", "car", "ecar", "rac"],
    ["no", "on", "noo", "oon"],
    ["", ""],
    ["a", "b", "c"],
    ["abcd","dcba","lls","s","sssll"]  
];

// 运行测试
testCases.forEach((words, idx) => {
    console.log(`测试用例 ${idx + 1}:`, words);
    console.log("结果:", palindromePairs(words));
    console.log("---");
});
