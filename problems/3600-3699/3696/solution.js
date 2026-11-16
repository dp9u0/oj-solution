/*
 * @lc app=leetcode.cn id=3696 lang=javascript
 *
 * [3696] 不同单词间的最大距离 I
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
var maxDistance = function(words) {
    const n = words.length;
    if (words[0] !== words[n - 1]) return n;

    // words[0] === words[n-1]: best pair must end at an endpoint,
    // scan for words differing from words[0]
    let first = -1, last = -1;
    for (let i = 0; i < n; i++) {
        if (words[i] !== words[0]) {
            if (first < 0) first = i;
            last = i;
        }
    }
    if (first < 0) return 0;
    return Math.max(last + 1, n - first);
};
// @lc code=end

// TEST:
console.log(maxDistance(["leetcode", "leetcode", "codeforces"])); // 3
console.log(maxDistance(["a", "b", "c", "a", "a"])); // 4
console.log(maxDistance(["z", "z", "z"])); // 0
console.log(maxDistance(["hello"])); // 0
console.log(maxDistance(["ab", "cd"])); // 2
console.log(maxDistance(["x", "y", "x", "x", "y", "x"])); // 5
console.log(maxDistance(["aa", "aa", "bb", "aa", "aa", "cc", "aa", "aa", "aa", "aa"])); // max(6, 8) = 8
