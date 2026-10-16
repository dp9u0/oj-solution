/*
 * @lc app=leetcode.cn id=面试题 17.15 lang=javascript
 *
 * [面试题 17.15] 最长单词
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
    const count = new Map();
    for (const w of words) count.set(w, (count.get(w) || 0) + 1);

    // w 能否由词表中其他单词拼成（自身计数借出，重复词可用另一实例）
    const canForm = w => {
        const n = w.length;
        if (n === 0) return false;
        const dp = new Array(n + 1).fill(false);
        dp[0] = true;
        for (let i = 1; i <= n; i++) {
            for (let j = 0; j < i && !dp[i]; j++) {
                if (!dp[j]) continue;
                const part = w.slice(j, i);
                // 整词片段需存在另一实例；真前缀片段不受限
                if ((count.get(part) || 0) > (part === w ? 1 : 0)) dp[i] = true;
            }
        }
        return dp[n];
    };

    // 长度降序、字典序升序，取第一个可拼成的
    const sorted = [...words].sort((a, b) => b.length - a.length || (a < b ? -1 : 1));
    for (const w of sorted) {
        if (canForm(w)) return w;
    }
    return '';
};
// @lc code=end

// TEST:
console.log(longestWord(['cat', 'banana', 'dog', 'nana', 'walk', 'walker', 'dogwalker']) === 'dogwalker');
console.log(longestWord(['a', 'b', 'ab', 'ba']) === 'ab'); // 同长取字典序最小
console.log(longestWord(['cat', 'cat']) === 'cat'); // 重复词可用另一实例
console.log(longestWord(['cat']) === '');
console.log(longestWord(['']) === '');
console.log(longestWord(['cat', 'dog', 'catdog']) === 'catdog');
console.log(longestWord(['banana', 'na', 'nana']) === 'nana'); // banana 不可拼（"ba" 无覆盖），nana=na+na
