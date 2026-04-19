/*
 * @lc app=leetcode id=1307 lang=javascript
 *
 * [1307] Verbal Arithmetic Puzzle
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string} result
 * @return {boolean}
 */
var isSolvable = function(words, result) {
    const chars = new Set();
    const leading = new Set();
    for (const w of [...words, result]) {
        for (const c of w) chars.add(c);
        if (w.length > 1) leading.add(w[0]);
    }

    const charList = [...chars];
    const n = charList.length;
    const idx = {};
    charList.forEach((c, i) => idx[c] = i);

    // Coefficient: positive for word chars, negative for result chars
    const coeff = new Array(n).fill(0);
    for (const w of words) {
        for (let i = 0; i < w.length; i++) {
            coeff[idx[w[i]]] += 10 ** (w.length - 1 - i);
        }
    }
    for (let i = 0; i < result.length; i++) {
        coeff[idx[result[i]]] -= 10 ** (result.length - 1 - i);
    }

    // Sort by |coefficient| descending for better pruning
    const order = [...Array(n).keys()].sort((a, b) => Math.abs(coeff[b]) - Math.abs(coeff[a]));

    const used = new Uint8Array(10);
    const val = new Int8Array(n).fill(-1);

    const dfs = (pos) => {
        if (pos === n) {
            let sum = 0;
            for (let i = 0; i < n; i++) sum += coeff[i] * val[i];
            return sum === 0;
        }
        const ci = order[pos];
        const start = leading.has(charList[ci]) ? 1 : 0;
        for (let d = start; d <= 9; d++) {
            if (used[d]) continue;
            val[ci] = d;
            used[d] = 1;
            // Prune: check if sum can still reach 0
            let cur = 0, lo = 0, hi = 0;
            for (let i = 0; i < n; i++) {
                if (val[i] >= 0) cur += coeff[i] * val[i];
                else if (coeff[i] > 0) hi += coeff[i] * 9;
                else lo += coeff[i] * 9;
            }
            if (cur + lo <= 0 && cur + hi >= 0 && dfs(pos + 1)) return true;
            used[d] = 0;
            val[ci] = -1;
        }
        return false;
    };

    return dfs(0);
};
// @lc code=end

// TEST:
console.log(isSolvable(["SEND","MORE"], "MONEY")); // true
console.log(isSolvable(["SIX","SEVEN","SEVEN"], "TWENTY")); // true
console.log(isSolvable(["LEET","CODE"], "POINT")); // false
console.log(isSolvable(["AB","CD"], "EFGH")); // false (sum too small)
console.log(isSolvable(["A","B"], "C")); // true (many solutions)
console.log(isSolvable(["AA","BB"], "AA")); // false
