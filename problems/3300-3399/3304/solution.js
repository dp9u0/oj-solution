/*
 * @lc app=leetcode id=3304 lang=javascript
 *
 * [3304] Find the K-th Character in String Game I
 */

// @lc code=start
/**
 * @param {number} k
 * @return {character}
 */
var kthCharacter = function(k) {
    let count = 0, n = k - 1;
    while (n) {
        count += n & 1;
        n >>= 1;
    }
    return String.fromCharCode('a'.charCodeAt(0) + count);
};
// @lc code=end

// TEST:
console.log(kthCharacter(5)); // 'b'
console.log(kthCharacter(10)); // 'c'
console.log(kthCharacter(1)); // 'a'
console.log(kthCharacter(8)); // 'd'
