/*
 * @lc app=leetcode.cn id=1772 lang=javascript
 *
 * [1772] 按受欢迎程度排列功能
 */

// @lc code=start
/**
 * @param {string[]} features
 * @param {string[]} responses
 * @return {string[]}
 */
var sortFeatures = function(features, responses) {
    const count = new Map();
    for (const resp of responses) {
        const words = new Set(resp.split(' ')); // count each response once per word
        for (const w of words) count.set(w, (count.get(w) || 0) + 1);
    }
    return features
        .map((f, i) => [f, count.get(f) || 0, i])
        .sort((a, b) => b[1] - a[1] || a[2] - b[2])
        .map(([f]) => f);
};
// @lc code=end

// TEST:
console.log(JSON.stringify(sortFeatures(
    ["cooler","lock","touch"],
    ["i like cooler cooler","lock touch cool","locker like touch"]))); // ["touch","cooler","lock"]
console.log(JSON.stringify(sortFeatures(
    ["a","aa","b","c"],
    ["a","a aa","a a a a a","b a"]))); // ["a","aa","b","c"]
