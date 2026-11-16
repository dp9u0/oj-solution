/*
 * @lc app=leetcode.cn id=3199 lang=javascript
 *
 * [3199] 用偶数异或设置位计数三元组 I
 */

// @lc code=start
/**
 * @param {number[]} a
 * @param {number[]} b
 * @param {number[]} c
 * @return {number}
 */
var tripletCount = function(a, b, c) {
    // parity of popcount: 0 = even, 1 = odd
    const countParity = arr => {
        let even = 0, odd = 0;
        for (let x of arr) {
            let p = 0;
            while (x) { p ^= 1; x &= x - 1; }
            p ? odd++ : even++;
        }
        return [even, odd];
    };

    const [ae, ao] = countParity(a);
    const [be, bo] = countParity(b);
    const [ce, co] = countParity(c);
    // even total parity: (e,e,e) or exactly two odds
    return ae * be * ce + ae * bo * co + ao * be * co + ao * bo * ce;
};
// @lc code=end

// TEST:
console.log(tripletCount([1], [2], [3])); // 1
console.log(tripletCount([1, 1], [2, 3], [1, 5])); // 4
console.log(tripletCount([0], [0], [0])); // 1
console.log(tripletCount([7], [7], [7])); // 0
console.log(tripletCount([1, 2, 4], [3], [5])); // 0
console.log(tripletCount([2, 3], [1], [0])); // 1
