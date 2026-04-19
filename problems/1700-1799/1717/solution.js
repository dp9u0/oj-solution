/*
 * @lc app=leetcode id=1717 lang=javascript
 *
 * [1717] Maximum Score From Removing Substrings
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var maximumGain = function(s, x, y) {
    function removePattern(str, first, second) {
        const stack = [];
        let count = 0;
        for (const ch of str) {
            if (ch === second && stack.length > 0 && stack[stack.length - 1] === first) {
                stack.pop();
                count++;
            } else {
                stack.push(ch);
            }
        }
        return { result: stack.join(''), count };
    }

    let score = 0;
    if (x >= y) {
        const p1 = removePattern(s, 'a', 'b');
        score += p1.count * x;
        const p2 = removePattern(p1.result, 'b', 'a');
        score += p2.count * y;
    } else {
        const p1 = removePattern(s, 'b', 'a');
        score += p1.count * y;
        const p2 = removePattern(p1.result, 'a', 'b');
        score += p2.count * x;
    }

    return score;
};
// @lc code=end

// TEST:
console.log(maximumGain("cdbcbbaaabab", 4, 5)); // 19
console.log(maximumGain("aabbaaxybbaabb", 5, 4)); // 20
console.log(maximumGain("ab", 5, 4)); // 5
console.log(maximumGain("ba", 4, 5)); // 5
console.log(maximumGain("a", 5, 4)); // 0
console.log(maximumGain("abab", 5, 4)); // 10
