/*
 * @lc app=leetcode.cn id=411 lang=javascript
 *
 * [411] 最短独占单词缩写
 */

// @lc code=start
/**
 * @param {string} target
 * @param {string[]} dictionary
 * @return {string}
 */
var minAbbreviation = function(target, dictionary) {
    const m = target.length;

    // only same-length words can share an abbreviation with target
    const diffs = [];
    for (const w of dictionary) {
        if (w.length !== m) continue;
        let d = 0;
        for (let i = 0; i < m; i++) {
            if (w[i] !== target[i]) d |= 1 << i;
        }
        diffs.push(d);
    }
    if (!diffs.length) return String(m);

    // exclusive <=> every word differs at some KEPT position: keep & diff != 0
    let bestMask = (1 << m) - 1, bestLen = Infinity;
    for (let keep = 0; keep < 1 << m; keep++) {
        let exclusive = true;
        for (const d of diffs) {
            if ((keep & d) === 0) { exclusive = false; break; }
        }
        if (!exclusive) continue;

        // length = kept letters + number of REPLACED (digit) runs
        let bits = 0, digitRuns = 0;
        for (let i = 0; i < m; i++) {
            const kept = (keep >>> i) & 1;
            if (kept) {
                bits++;
            } else if (i === 0 || ((keep >>> (i - 1)) & 1)) {
                digitRuns++; // a digit run starts here
            }
        }
        const len = bits + digitRuns;
        if (len < bestLen) { bestLen = len; bestMask = keep; }
    }

    // build the abbreviation string from the winning mask
    let res = '', i = 0;
    while (i < m) {
        const kept = bestMask & (1 << i);
        let j = i;
        while (j < m && !!(bestMask & (1 << j)) === !!kept) j++;
        res += kept ? target.slice(i, j) : String(j - i);
        i = j;
    }
    return res;
};
// @lc code=end

// TEST:
console.log(minAbbreviation('apple', ['blade'])); // "a4"
console.log(minAbbreviation('apple', ['blade', 'plain', 'amber'])); // "1p3"
console.log(minAbbreviation('hello', [])); // "5" (no conflicts)
console.log(minAbbreviation('a', [])); // "1"
console.log(minAbbreviation('abc', ['xyz'])); // "a2" (any single kept letter works: a2/1b1/2c)
console.log(minAbbreviation('abc', ['abd'])); // "2c" (only differing position 2 must be kept)
console.log(minAbbreviation('usd', ['uuu'])); // "2d" (keep pos2: 1 letter + 1 leading digit run = 2)
