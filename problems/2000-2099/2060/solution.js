/*
 * @lc app=leetcode id=2060 lang=javascript
 *
 * [2060] Check if an Original String Exists Given Two Encoded Strings
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var possiblyEquals = function(s1, s2) {
    const n1 = s1.length, n2 = s2.length;
    const memo = new Map();
    const isDigit = (c) => c >= '0' && c <= '9';

    const dp = (i, j, diff) => {
        if (i === n1 && j === n2) return diff === 0;
        const key = (i << 20) | (j << 12) | (diff + 2000);
        if (memo.has(key)) return memo.get(key);

        let result = false;

        // Parse digits from s1
        if (i < n1 && isDigit(s1[i])) {
            let num = 0;
            for (let k = i; k < n1 && k < i + 3 && isDigit(s1[k]); k++) {
                num = num * 10 + (s1.charCodeAt(k) - 48);
                if (dp(k + 1, j, diff + num)) { result = true; break; }
            }
        }

        // Parse digits from s2
        if (!result && j < n2 && isDigit(s2[j])) {
            let num = 0;
            for (let k = j; k < n2 && k < j + 3 && isDigit(s2[k]); k++) {
                num = num * 10 + (s2.charCodeAt(k) - 48);
                if (dp(i, k + 1, diff - num)) { result = true; break; }
            }
        }

        // Both are letters
        if (!result) {
            if (diff > 0 && j < n2 && !isDigit(s2[j])) {
                result = dp(i, j + 1, diff - 1);
            } else if (diff < 0 && i < n1 && !isDigit(s1[i])) {
                result = dp(i + 1, j, diff + 1);
            } else if (diff === 0 && i < n1 && j < n2 && !isDigit(s1[i]) && !isDigit(s2[j]) && s1[i] === s2[j]) {
                result = dp(i + 1, j + 1, 0);
            }
        }

        memo.set(key, result);
        return result;
    };

    return dp(0, 0, 0);
};
// @lc code=end

// TEST:
console.log(possiblyEquals("internationalization", "i18n"));
console.log(possiblyEquals("l123e", "44"));
console.log(possiblyEquals("a5b", "c5b"));
