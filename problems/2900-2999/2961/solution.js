/*
 * @lc app=leetcode id=2961 lang=javascript
 *
 * [2961] Double Modular Exponentiation
 */

// @lc code=start
/**
 * @param {number[][]} variables
 * @param {number} target
 * @return {number[]}
 */
var getGoodIndices = function(variables, target) {
    const powMod = (base, exp, mod) => {
        let result = 1;
        base %= mod;
        while (exp > 0) {
            if (exp & 1) result = result * base % mod;
            base = base * base % mod;
            exp >>= 1;
        }
        return result;
    };

    const ans = [];
    for (let i = 0; i < variables.length; i++) {
        const [a, b, c, m] = variables[i];
        const mid = powMod(a, b, 10);
        const val = powMod(mid, c, m);
        if (val === target) ans.push(i);
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(getGoodIndices([[2,3,3,10],[3,3,3,1],[6,1,1,4]], 2)));  // [0,2]
console.log(JSON.stringify(getGoodIndices([[39,3,1000,1000]], 17)));                 // []
