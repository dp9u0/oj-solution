/*
 * @lc app=leetcode id=3666 lang=javascript
 *
 * [3666] Minimum Operations to Equalize Binary String
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var minOperations = function(s, k) {
    let zeros = 0;
    for (const c of s) if (c === '0') zeros++;
    const n = s.length;
    const ones = n - zeros;

    if (zeros === 0) return 0;

    // Enumerate m (number of operations), check feasibility
    // After m ops, each position flipped f_i times, sum(f_i) = m*k
    // f_i odd for original 0s, even for original 1s
    // Need: m*k >= zeros, m*k ≡ zeros (mod 2)
    // And: remaining = m*k - zeros must be distributable
    // Max additional from zeros part + ones part >= remaining
    for (let m = 1; m <= n + 2; m++) {
        const total = m * k;
        if (total < zeros) continue;
        if (total % 2 !== zeros % 2) continue;

        const remaining = total - zeros;
        // From zeros: each can add 0, 2, 4, ..., up to (m-1 if m even, m-2 if m odd)
        // Wait: f_i for zero positions must be odd, f_i <= m.
        // If m is odd: f_i can be 1, 3, ..., m. Additional over 1: 0, 2, ..., m-1. Max per position: m-1.
        // If m is even: f_i can be 1, 3, ..., m-1. Additional over 1: 0, 2, ..., m-2. Max per position: m-2.
        const maxAddZeros = m % 2 === 1 ? (m - 1) : (m - 2);

        // From ones: f_i must be even, f_i <= m.
        // If m is even: f_i can be 0, 2, 4, ..., m. Max: m.
        // If m is odd: f_i can be 0, 2, 4, ..., m-1. Max: m-1.
        const maxAddOnes = m % 2 === 0 ? m : (m - 1);

        const maxAdditional = zeros * maxAddZeros + ones * maxAddOnes;
        if (remaining <= maxAdditional) return m;
    }

    return -1;
};
// @lc code=end

// TEST:
console.log(minOperations('110', 1)); // 1
console.log(minOperations('0101', 3)); // 2
console.log(minOperations('101', 2)); // -1
console.log(minOperations('111', 1)); // 0
console.log(minOperations('000', 3)); // 1
console.log(minOperations('0000', 3)); // 4