/*
 * @lc app=leetcode id=1209 lang=javascript
 *
 * [1209] Remove All Adjacent Duplicates in String II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
    const stack = [];
    for (const c of s) {
        if (stack.length > 0 && stack[stack.length - 1][0] === c) {
            stack[stack.length - 1][1]++;
            if (stack[stack.length - 1][1] === k) {
                stack.pop();
            }
        } else {
            stack.push([c, 1]);
        }
    }
    return stack.map(([ch, cnt]) => ch.repeat(cnt)).join('');
};
// @lc code=end

// TEST:
console.log(removeDuplicates("abcd", 2)); // "abcd"
console.log(removeDuplicates("deeedbbcccbdaa", 3)); // "aa"
console.log(removeDuplicates("pbbcggttciiippooaais", 2)); // "ps"
