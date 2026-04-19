/*
 * @lc app=leetcode id=1711 lang=javascript
 *
 * [1711] Count Good Meals
 */

// @lc code=start
/**
 * @param {number[]} deliciousness
 * @return {number}
 */
var countPairs = function(deliciousness) {
    const MOD = 1e9 + 7;
    const count = new Map();
    let result = 0;

    for (const x of deliciousness) {
        for (let p = 1; p <= (1 << 21); p <<= 1) {
            const need = p - x;
            if (count.has(need)) {
                result = (result + count.get(need)) % MOD;
            }
        }
        count.set(x, (count.get(x) || 0) + 1);
    }

    return result;
};
// @lc code=end

// TEST:
console.log(countPairs([1,3,5,7,9])); // 4
console.log(countPairs([1,1,1,3,3,3,7])); // 15
console.log(countPairs([1,1])); // 1
console.log(countPairs([0,0])); // 1 (0+0=0... wait 0 is not 2^k for k>=0? 2^0=1, so 0+0=0 not power of 2)
console.log(countPairs([0,1])); // 1 (0+1=1=2^0)
console.log(countPairs([64,64,64,64])); // 6
