/*
 * @lc app=leetcode.cn id=1842 lang=javascript
 *
 * [1842] 下个由相同数字构成的回文串
 */

// @lc code=start
/**
 * @param {string} num
 * @return {string}
 */
var nextPalindrome = function(num) {
    const n = num.length;
    const h = num.slice(0, Math.floor(n / 2)).split('');
    const m = h.length;
    // next permutation on the first half (preserves its digit multiset)
    let i = m - 2;
    while (i >= 0 && h[i] >= h[i + 1]) i--;
    if (i < 0) return '';
    let j = m - 1;
    while (h[j] <= h[i]) j--;
    [h[i], h[j]] = [h[j], h[i]];
    for (let l = i + 1, r = m - 1; l < r; l++, r--) {
        [h[l], h[r]] = [h[r], h[l]];
    }
    const half = h.join('');
    return half + (n % 2 ? num[m] : '') + half.split('').reverse().join('');
};
// @lc code=end

// TEST:
console.log(nextPalindrome("1221")); // "2112"
console.log(nextPalindrome("32123")); // ""
console.log(nextPalindrome("45544554")); // "54455445"
console.log(nextPalindrome("11")); // ""
