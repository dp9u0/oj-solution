/*
 * @lc app=leetcode id=2156 lang=javascript
 *
 * [2156] Find Substring With Given Hash Value
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} power
 * @param {number} modulo
 * @param {number} k
 * @param {number} hashValue
 * @return {string}
 */
var subStrHash = function(s, power, modulo, k, hashValue) {
    const n = s.length;
    const M = BigInt(modulo);
    const P = BigInt(power);
    let h = 0n;
    let pk = 1n; // power^(k-1) % modulo
    let res = -1;

    for (let i = 0; i < k - 1; i++) {
        pk = pk * P % M;
    }

    for (let i = n - 1; i >= 0; i--) {
        const val = BigInt(s.charCodeAt(i) - 96);
        if (i + k < n) {
            const outVal = BigInt(s.charCodeAt(i + k) - 96);
            h = (h - outVal * pk % M + M) % M;
        }
        h = (h * P + val) % M;
        if (Number(h) === hashValue) {
            res = i;
        }
    }

    return s.substring(res, res + k);
};
// @lc code=end

// TEST:
console.log(subStrHash("leetcode", 7, 20, 2, 0)); // "ee"
console.log(subStrHash("fbxzaad", 31, 100, 3, 32)); // "fbx"
