/*
 * @lc app=leetcode id=3307 lang=javascript
 *
 * [3307] Find the K-th Character in String Game II
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} operations
 * @return {character}
 */
var kthCharacter = function(k, operations) {
    let pos = BigInt(k);
    let shifts = 0;

    // Work backwards: after all n ops, length = 2^n
    // Before op i, length = 2^i
    for (let i = operations.length - 1; i >= 0; i--) {
        const half = 1n << BigInt(i); // length before op i
        if (pos > half) {
            pos -= half;
            if (operations[i] === 1) shifts++;
        }
    }

    return String.fromCharCode(97 + (shifts % 26));
};
// @lc code=end

// TEST:
console.log(kthCharacter(5, [0,0,0]));          // 'a'
console.log(kthCharacter(10, [0,1,0,1]));        // 'b'
console.log(kthCharacter(1, [0]));                // 'a'
console.log(kthCharacter(2, [1]));                // 'b'
console.log(kthCharacter(2, [0]));                // 'a'
