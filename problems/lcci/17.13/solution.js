/*
 * @lc app=leetcode.cn id=面试题 17.13 lang=javascript
 *
 * [面试题 17.13] 恢复空格
 */

// @lc code=start
/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {number}
 */
var respace = function(dictionary, sentence) {
    // 词典单词倒序建 Trie，用于匹配"以 i 结尾"的词
    const root = {};
    for (const w of dictionary) {
        let node = root;
        for (let k = w.length - 1; k >= 0; k--) {
            const c = w[k];
            if (!node[c]) node[c] = {};
            node = node[c];
        }
        node.end = true;
    }
    // dp[i]: 前 i 个字符的最少未识别数
    const n = sentence.length;
    const dp = new Array(n + 1);
    for (let i = 0; i <= n; i++) dp[i] = i;
    for (let i = 1; i <= n; i++) {
        dp[i] = dp[i - 1] + 1; // 第 i 个字符不识别
        let node = root;
        for (let j = i - 1; j >= 0; j--) {
            const c = sentence[j];
            if (!node[c]) break; // Trie 路径断掉，剪枝
            node = node[c];
            if (node.end && dp[j] < dp[i]) dp[i] = dp[j];
        }
    }
    return dp[n];
};
// @lc code=end

// TEST:
console.log(respace(['looked', 'just', 'like', 'her', 'brother'], 'jesslookedjustliketimherbrother') === 7);
console.log(respace(['a'], 'abc') === 2);
console.log(respace([], 'abc') === 3);
console.log(respace(['abc'], 'abc') === 0);
console.log(respace(['ab', 'bc'], 'abc') === 1);
console.log(respace(['aa'], 'aaaa') === 0);
console.log(respace(['x'], '') === 0);
