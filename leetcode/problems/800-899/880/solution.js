/*
 * @lc app=leetcode id=880 lang=javascript
 *
 * [880] Decoded String at Index
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var decodeAtIndex = function(s, k) {
    let size = 0n;
    let K = BigInt(k);
    for (const c of s) {
        if (c >= '0' && c <= '9') {
            size *= BigInt(c);
        } else {
            size += 1n;
        }
    }
    for (let i = s.length - 1; i >= 0; i--) {
        const c = s[i];
        K = K % size || size;
        if (c >= '0' && c <= '9') {
            size /= BigInt(c);
        } else {
            if (K === size) return c;
            size -= 1n;
        }
    }
    return '';
};
// @lc code=end

// TEST:
console.log(decodeAtIndex("leet2code3", 10)); // 'o'
console.log(decodeAtIndex("ha22", 5)); // 'h'
console.log(decodeAtIndex("a2345678999999999999999", 1)); // 'a'
