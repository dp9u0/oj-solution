/*
 * @lc app=leetcode id=3954 lang=javascript
 *
 * [3954] Sum of Compatible Numbers in Range I
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumOfGoodIntegers = function(n, k) {
    let sum = 0;
    for (let x = Math.max(1, n - k); x <= n + k; x++) {
        if ((n & x) === 0) {
            sum += x;
        }
    }
    return sum;
};
// @lc code=end

// TEST:
console.log(sumOfGoodIntegers(2, 3)); // 10
console.log(sumOfGoodIntegers(5, 1)); // 0
console.log(sumOfGoodIntegers(1, 1)); // 2 (x=2: 1&2=0)
console.log(sumOfGoodIntegers(1, 100)); // 1&x==0 -> x even, x in [1,101] -> 2+4+...+100 = 2550
console.log(sumOfGoodIntegers(100, 100)); // x in [1,200], 100&x==0 -> x has none of bits {32,64}, i.e. x<32 or 32<=x<64 with bit5 off? 100=0b1100100, bits 6 and 5 and 2. x must avoid bits 6,5,2
console.log(sumOfGoodIntegers(4, 3)); // x in [1,7], 4&x==0 -> x in {1,2,3} -> 6
