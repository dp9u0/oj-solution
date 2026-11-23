/*
 * @lc app=leetcode.cn id=3109 lang=javascript
 *
 * [3109] 查找排列的下标
 */

// @lc code=start
/**
 * @param {number[]} perm
 * @return {number}
 */
var getPermutationIndex = function(perm) {
    const MOD = 1000000007n;
    const n = perm.length;
    // factorials mod
    const fact = new Array(n + 1);
    fact[0] = 1n;
    for (let i = 1; i <= n; i++) fact[i] = fact[i - 1] * BigInt(i) % MOD;
    // BIT for used values
    const tree = new Array(n + 1).fill(0);
    const update = (pos) => { for (; pos <= n; pos += pos & (-pos)) tree[pos]++; };
    const query = (pos) => { let r = 0; for (; pos > 0; pos -= pos & (-pos)) r += tree[pos]; return r; };
    let index = 0n;
    for (let i = 0; i < n; i++) {
        const v = perm[i];
        const smaller = v - 1 - query(v); // values < v not yet used
        index = (index + BigInt(smaller) * fact[n - 1 - i]) % MOD;
        update(v);
    }
    return Number(index);
};
// @lc code=end

// TEST:
console.log(getPermutationIndex([1,2])); // 0
console.log(getPermutationIndex([3,1,2])); // 4
console.log(getPermutationIndex([1,2,3])); // 0
console.log(getPermutationIndex([3,2,1])); // 5
console.log(getPermutationIndex([1])); // 0
