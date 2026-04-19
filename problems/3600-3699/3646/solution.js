/*
 * @lc app=leetcode id=3646 lang=javascript
 *
 * [3646] Next Special Palindrome Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var specialPalindrome = function(n) {
    const results = [];
    const evens = [2, 4, 6, 8];
    const evenSubs = [[]];
    for (const d of evens) {
        for (let i = 0, len = evenSubs.length; i < len; i++) {
            evenSubs.push([...evenSubs[i], d]);
        }
    }

    // Even-length palindromes (0 odd digits)
    for (const sub of evenSubs) {
        const sum = sub.reduce((a, b) => a + b, 0);
        if (sum === 0 || sum > 16) continue;
        const half = [];
        for (const d of sub) for (let i = 0; i < d / 2; i++) half.push(d);
        genPal(half, null, results);
    }

    // Odd-length palindromes (exactly 1 odd digit)
    for (const od of [1, 3, 5, 7, 9]) {
        for (const sub of evenSubs) {
            if (od + sub.reduce((a, b) => a + b, 0) > 16) continue;
            const half = [];
            for (let i = 0; i < (od - 1) / 2; i++) half.push(od);
            for (const d of sub) for (let i = 0; i < d / 2; i++) half.push(d);
            genPal(half, od, results);
        }
    }

    results.sort((a, b) => a - b);
    for (const r of results) {
        if (r > n) return r;
    }
    return -1;
};

function genPal(half, mid, res) {
    if (half.length === 0) {
        if (mid !== null) res.push(mid);
        return;
    }
    const n = half.length;
    const go = (arr, i) => {
        if (i === n) {
            const h = arr.join('');
            const r = [...arr].reverse().join('');
            res.push(Number(mid !== null ? h + mid + r : h + r));
            return;
        }
        const seen = new Set();
        for (let j = i; j < n; j++) {
            if (seen.has(arr[j])) continue;
            seen.add(arr[j]);
            [arr[i], arr[j]] = [arr[j], arr[i]];
            go(arr, i + 1);
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    };
    go(half, 0);
}
// @lc code=end

// TEST:
console.log(specialPalindrome(2)); // 22
console.log(specialPalindrome(33)); // 212
console.log(specialPalindrome(0)); // 1
console.log(specialPalindrome(1)); // 22
console.log(specialPalindrome(4444)); // 23332
