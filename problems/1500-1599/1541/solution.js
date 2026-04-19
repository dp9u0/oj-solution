/*
 * @lc app=leetcode id=1541 lang=javascript
 *
 * [1541] Minimum Insertions to Balance a Parentheses String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
    let insert = 0, need = 0;
    for (const c of s) {
        if (c === '(') {
            need += 2;
            if (need % 2 === 1) {
                insert++;
                need--;
            }
        } else {
            need--;
            if (need === -1) {
                insert++;
                need = 1;
            }
        }
    }
    return insert + need;
};
// @lc code=end

// TEST:
console.log(minInsertions("(()))")); // 1
console.log(minInsertions("())")); // 0
console.log(minInsertions("))())(")); // 3
console.log(minInsertions(")))))))")); // 5
