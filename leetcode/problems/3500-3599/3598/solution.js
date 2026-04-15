/*
 * @lc app=leetcode id=3598 lang=javascript
 *
 * [3598] Longest Common Prefix Between Adjacent Strings After Removals
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number[]}
 */
var longestCommonPrefix = function(words) {
    const n = words.length;
    if (n === 1) return [0];

    const lcp = (a, b) => {
        let len = 0;
        const minLen = Math.min(a.length, b.length);
        while (len < minLen && a[len] === b[len]) len++;
        return len;
    };

    // lcp[i] = LCP(words[i], words[i+1]) for i in [0, n-2]
    const pairs = new Array(n - 1);
    for (let i = 0; i < n - 1; i++) {
        pairs[i] = lcp(words[i], words[i + 1]);
    }

    // prefix max and suffix max of pairs
    const pref = new Array(n - 1);
    const suff = new Array(n - 1);
    pref[0] = pairs[0];
    for (let i = 1; i < n - 1; i++) {
        pref[i] = Math.max(pref[i - 1], pairs[i]);
    }
    suff[n - 2] = pairs[n - 2];
    for (let i = n - 3; i >= 0; i--) {
        suff[i] = Math.max(suff[i + 1], pairs[i]);
    }

    const ans = new Array(n);
    for (let i = 0; i < n; i++) {
        // After removing words[i], the affected pairs are pairs[i-1] and pairs[i]
        // A new pair emerges: LCP(words[i-1], words[i+1]) if both exist
        let maxVal = 0;

        // Pairs before i-1 (i.e., pairs[0..i-2])
        if (i >= 2) maxVal = Math.max(maxVal, pref[i - 2]);

        // Pairs after i (i.e., pairs[i+1..n-2])
        if (i + 1 <= n - 2) maxVal = Math.max(maxVal, suff[i + 1]);

        // New merged pair: LCP(words[i-1], words[i+1])
        if (i > 0 && i < n - 1) {
            maxVal = Math.max(maxVal, lcp(words[i - 1], words[i + 1]));
        }

        ans[i] = maxVal;
    }

    return ans;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(longestCommonPrefix(["jump","run","run","jump","run"]))); // [3,0,0,3,3]
console.log(JSON.stringify(longestCommonPrefix(["dog","racer","car"])));             // [0,0,0]
console.log(JSON.stringify(longestCommonPrefix(["a"])));                             // [0]
