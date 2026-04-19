/*
 * @lc app=leetcode id=2429 lang=javascript
 *
 * [2429] Minimize XOR
 */

// @lc code=start
/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var minimizeXor = function(num1, num2) {
    const countBits = (n) => {
        let c = 0;
        while (n > 0) { c += n & 1; n >>= 1; }
        return c;
    };

    let k = countBits(num2);
    let bits1 = countBits(num1);
    let x = num1;

    if (bits1 > k) {
        let rem = bits1 - k;
        for (let i = 0; i < 32 && rem > 0; i++) {
            if (x & (1 << i)) { x ^= (1 << i); rem--; }
        }
    } else if (bits1 < k) {
        let add = k - bits1;
        for (let i = 0; i < 32 && add > 0; i++) {
            if (!(x & (1 << i))) { x |= (1 << i); add--; }
        }
    }
    return x;
};
// @lc code=end

// TEST:
console.log(minimizeXor(3, 5));
console.log(minimizeXor(1, 12));
console.log(minimizeXor(25, 72));
