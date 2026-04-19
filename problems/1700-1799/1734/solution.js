/*
 * @lc app=leetcode id=1734 lang=javascript
 *
 * [1734] Decode XORed Permutation
 */

// @lc code=start
/**
 * @param {number[]} encoded
 * @return {number[]}
 */
var decode = function(encoded) {
    const n = encoded.length + 1;

    // totalXOR = 1 ^ 2 ^ ... ^ n
    let totalXOR = 0;
    for (let i = 1; i <= n; i++) totalXOR ^= i;

    // encodedXOR = encoded[1] ^ encoded[3] ^ ... = perm[1] ^ perm[2] ^ ... ^ perm[n-1]
    let encodedXOR = 0;
    for (let i = 1; i < encoded.length; i += 2) encodedXOR ^= encoded[i];

    const perm = [totalXOR ^ encodedXOR]; // perm[0]
    for (let i = 0; i < encoded.length; i++) {
        perm.push(perm[i] ^ encoded[i]);
    }
    return perm;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(decode([3, 1])));          // [1,2,3]
console.log(JSON.stringify(decode([6, 5, 4, 6])));    // [2,4,1,5,3]
console.log(JSON.stringify(decode([2, 1])));          // [1,3,2]
// perm=[3,1,2] -> encoded=[3^1,1^2]=[2,3]
console.log(JSON.stringify(decode([2, 3])));          // [3,1,2]
// perm=[3,4,1,5,2] -> encoded=[3^4,4^1,1^5,5^2]=[7,5,4,7]
console.log(JSON.stringify(decode([7, 5, 4, 7])));    // [3,4,1,5,2]
