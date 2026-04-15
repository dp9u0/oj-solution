/*
 * @lc app=leetcode id=3337 lang=javascript
 *
 * [3337] Total Characters in String After Transformations II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} t
 * @param {number[]} nums
 * @return {number}
 */
var lengthAfterTransformations = function(s, t, nums) {
    let MOD = 1e9 + 7;
    let N = 26;
    // build transition matrix M[i][j]: char j produces char i
    let M = Array.from({ length: N }, () => new Array(N).fill(0));
    for (let j = 0; j < N; j++) {
      for (let k = 1; k <= nums[j]; k++) {
        M[(j + k) % N][j] = 1;
      }
    }
    // matrix multiply A * B (NxN) using BigInt to avoid overflow
    let BMOD = BigInt(MOD);
    let matMul = (A, B) => {
      let C = Array.from({ length: N }, () => new Array(N).fill(0));
      for (let i = 0; i < N; i++)
        for (let k = 0; k < N; k++)
          if (A[i][k])
            for (let j = 0; j < N; j++) {
              C[i][j] = Number((BigInt(C[i][j]) + BigInt(A[i][k]) * BigInt(B[k][j])) % BMOD);
            }
      return C;
    };
    // matrix power M^t
    let matPow = (mat, p) => {
      let result = Array.from({ length: N }, (_, i) =>
        Array.from({ length: N }, (_, j) => i === j ? 1 : 0)
      );
      while (p > 0) {
        if (p & 1) result = matMul(result, mat);
        mat = matMul(mat, mat);
        p >>= 1;
      }
      return result;
    };
    // initial count vector
    let count = new Array(N).fill(0);
    for (let c of s) count[c.charCodeAt(0) - 97]++;
    // apply M^t
    let Mt = matPow(M, t);
    let ans = 0;
    for (let i = 0; i < N; i++)
      for (let j = 0; j < N; j++)
        ans = Number((BigInt(ans) + BigInt(Mt[i][j]) * BigInt(count[j])) % BMOD);
    return ans;
};
// @lc code=end

// TEST:
console.log(lengthAfterTransformations("abcyy", 2, [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2]));
console.log(lengthAfterTransformations("azbk", 1, [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]));
