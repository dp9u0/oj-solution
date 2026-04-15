/*
 * @lc app=leetcode id=420 lang=javascript
 *
 * [420] Strong Password Checker
 */

// @lc code=start
/**
 * @param {string} password
 * @return {number}
 */
var strongPasswordChecker = function(password) {
    const n = password.length;
    let hasLower = 0, hasUpper = 0, hasDigit = 0;
    for (const ch of password) {
        if (ch >= 'a' && ch <= 'z') hasLower = 1;
        else if (ch >= 'A' && ch <= 'Z') hasUpper = 1;
        else if (ch >= '0' && ch <= '9') hasDigit = 1;
    }
    const missing = 3 - hasLower - hasUpper - hasDigit;

    // find repeating runs
    const repeats = [];
    let i = 0;
    while (i < n) {
        let j = i + 1;
        while (j < n && password[j] === password[i]) j++;
        if (j - i >= 3) repeats.push(j - i);
        i = j;
    }

    const totalReplace = repeats.reduce((s, r) => s + Math.floor(r / 3), 0);

    if (n < 6) {
        return Math.max(6 - n, missing);
    } else if (n <= 20) {
        return Math.max(missing, totalReplace);
    } else {
        const over = n - 20;
        // greedy deletion: sort by len % 3 ascending (mod0 first)
        repeats.sort((a, b) => (a % 3) - (b % 3));
        let remaining = over;
        let r = totalReplace;
        for (let k = 0; k < repeats.length && remaining > 0; k++) {
            const mod = repeats[k] % 3;
            const del = Math.min(mod + 1, remaining);
            // each (mod+1) deletions save 1 replacement
            const saved = Math.min(Math.floor(del / (mod + 1)), Math.floor(repeats[k] / 3));
            r -= saved;
            remaining -= del;
        }
        // remaining deletions: every 3 saves 1 replacement
        r -= Math.floor(remaining / 3);
        r = Math.max(0, r);
        return over + Math.max(missing, r);
    }
};
// @lc code=end

// TEST:
console.log(strongPasswordChecker("a"));          // 5
console.log(strongPasswordChecker("aA1"));        // 3
console.log(strongPasswordChecker("1337C0d3"));   // 0
console.log(strongPasswordChecker("aaa111"));     // 2
console.log(strongPasswordChecker("aaaaaaaaaaaaaaaaaaaa")); // 6
console.log(strongPasswordChecker("ABABABABABABABABABAB1")); // 2
