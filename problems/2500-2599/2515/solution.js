/*
 * @lc app=leetcode id=2515 lang=javascript
 *
 * [2515] Shortest Distance to Target String in a Circular Array
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
var closestTarget = function(words, target, startIndex) {
    const n = words.length;
    let result = Infinity;

    for (let i = 0; i < n; i++) {
        if (words[i] === target) {
            const dist = Math.min(Math.abs(i - startIndex), n - Math.abs(i - startIndex));
            result = Math.min(result, dist);
        }
    }

    return result === Infinity ? -1 : result;
};
// @lc code=end

// TEST:
console.log(closestTarget(["hello","i","am","leetcode","hello"], "hello", 1)); // 1
console.log(closestTarget(["a","b","leetcode"], "leetcode", 0)); // 1
console.log(closestTarget(["i","eat","leetcode"], "ate", 0)); // -1
