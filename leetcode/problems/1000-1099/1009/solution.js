/*
 * @lc app=leetcode id=1009 lang=javascript
 *
 * [1009] Complement of Base 10 Integer
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function(n) {
    // Convert the number to its binary representation
    let binary = n.toString(2);
    
    // Flip the bits
    let complementBinary = '';
    for (let i = 0; i < binary.length; i++) {
        complementBinary += binary[i] === '0' ? '1' : '0';
    }
    
    // Convert the complement binary back to a number
    return parseInt(complementBinary, 2);
};
// @lc code=end
// TEST:
console.log(bitwiseComplement(5)); // Output: 2
console.log(bitwiseComplement(7)); // Output: 0
console.log(bitwiseComplement(10)); // Output: 5
console.log(bitwiseComplement(0)); // Output: 1
console.log(bitwiseComplement(1)); // Output: 0

