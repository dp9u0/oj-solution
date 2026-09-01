/*
 * @lc app=leetcode id=854 lang=javascript
 *
 * [854] K-Similar Strings
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var kSimilarity = function(s1, s2) {
    if (s1 === s2) return 0;

    const queue = [[s1, 0]];
    const visited = new Set([s1]);

    while (queue.length > 0) {
        const [cur, steps] = queue.shift();
        let i = 0;
        while (i < cur.length && cur[i] === s2[i]) i++;

        for (let j = i + 1; j < cur.length; j++) {
            if (cur[j] !== s2[i] || cur[j] === s2[j]) continue;
            const arr = cur.split('');
            [arr[i], arr[j]] = [arr[j], arr[i]];
            const next = arr.join('');
            if (next === s2) return steps + 1;
            if (!visited.has(next)) {
                visited.add(next);
                queue.push([next, steps + 1]);
            }
        }
    }
    return -1;
};
// @lc code=end

// TEST:
console.log(kSimilarity("ab", "ba") === 1);
console.log(kSimilarity("abc", "bca") === 2);
console.log(kSimilarity("abac", "baca") === 2);
console.log(kSimilarity("aabc", "abca") === 2);
console.log(kSimilarity("abcdef", "fedcba") === 3);
console.log(kSimilarity("abc", "abc") === 0);
