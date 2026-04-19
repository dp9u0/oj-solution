/*
 * @lc app=leetcode id=386 lang=javascript
 *
 * [386] Lexicographical Numbers
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
    const result = [];
    let curr = 1;

    for (let i = 0; i < n; i++) {
        result.push(curr);
        if (curr * 10 <= n) {
            curr *= 10;
        } else {
            while (curr % 10 === 9 || curr >= n) {
                curr = Math.floor(curr / 10);
            }
            curr++;
        }
    }

    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(lexicalOrder(13))); // [1,10,11,12,13,2,3,4,5,6,7,8,9]
console.log(JSON.stringify(lexicalOrder(2))); // [1,2]
console.log(JSON.stringify(lexicalOrder(20))); // [1,10,11,12,...,19,2,20,3,...,9]
