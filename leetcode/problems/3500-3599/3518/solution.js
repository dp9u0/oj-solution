/*
 * @lc app=leetcode id=3518 lang=javascript
 *
 * [3518] Smallest Palindromic Rearrangement II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var smallestPalindrome = function(s, k) {
    const n = s.length;
    const cnt = new Array(26).fill(0);
    for (const c of s) cnt[c.charCodeAt(0) - 97]++;
    let oddChar = '';
    for (let i = 0; i < 26; i++) {
        if (cnt[i] % 2 === 1) { oddChar = String.fromCharCode(i + 97); cnt[i]--; }
    }
    for (let i = 0; i < 26; i++) cnt[i] >>= 1;
    const halfLen = n >> 1;

    // Compute initial multinomial using BigInt (sequential binomials)
    let ways = 1n;
    let placed = 0;
    for (let i = 0; i < 26; i++) {
        for (let j = 1; j <= cnt[i]; j++) {
            ways = ways * BigInt(placed + j) / BigInt(j);
        }
        placed += cnt[i];
    }

    let remK = BigInt(k);
    if (ways < remK) return '';

    let res = '';
    let rem = halfLen;

    for (let pos = 0; pos < halfLen; pos++) {
        for (let c = 0; c < 26; c++) {
            if (cnt[c] === 0) continue;
            const trial = ways * BigInt(cnt[c]) / BigInt(rem);
            if (trial >= remK) {
                ways = trial;
                cnt[c]--;
                rem--;
                res += String.fromCharCode(c + 97);
                break;
            }
            remK -= trial;
        }
    }

    return res + oddChar + res.split('').reverse().join('');
};
// @lc code=end

// TEST:
console.log(smallestPalindrome('abba', 2));    // 'baab'
console.log(smallestPalindrome('aa', 2));       // ''
console.log(smallestPalindrome('bacab', 1));    // 'abcba'
