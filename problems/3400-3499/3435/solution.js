/*
 * @lc app=leetcode id=3435 lang=javascript
 *
 * [3435] Frequencies of Shortest Supersequences
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number[][]}
 */
var supersequences = function(words) {
    const charSet = new Set();
    for (const w of words) { charSet.add(w[0]); charSet.add(w[1]); }
    const chars = [...charSet].sort();
    const m = chars.length;
    const idx = {};
    for (let i = 0; i < m; i++) idx[chars[i]] = i;

    let selfLoop = 0;
    const adj = new Uint16Array(m);
    for (const w of words) {
        const u = idx[w[0]], v = idx[w[1]];
        if (u === v) selfLoop |= 1 << u;
        else adj[u] |= 1 << v;
    }

    const all = (1 << m) - 1;

    // Precompute predecessor masks
    const pred = new Uint16Array(m);
    for (let u = 0; u < m; u++) {
        for (let v = 0; v < m; v++) {
            if (adj[v] & (1 << u)) pred[u] |= 1 << v;
        }
    }

    // Precompute isDag[mask]: is the subgraph on mask a DAG?
    const isDag = new Uint8Array(1 << m);
    isDag[0] = 1;
    for (let mask = 1; mask <= all; mask++) {
        let sub = mask;
        while (sub) {
            const u = 31 - Math.clz32(sub);
            sub ^= 1 << u;
            if ((pred[u] & mask) === 0 && isDag[mask ^ (1 << u)]) {
                isDag[mask] = 1;
                break;
            }
        }
    }

    // Find minimum extra doublings (beyond self-loop chars)
    const freeBits = [];
    for (let i = 0; i < m; i++) {
        if (!(selfLoop & (1 << i))) freeBits.push(i);
    }
    const fk = freeBits.length;

    for (let extra = 0; extra <= fk; extra++) {
        const results = [];
        const seen = new Set();

        const trySubset = (start, taken, extraMask) => {
            if (taken === extra) {
                const doubled = selfLoop | extraMask;
                const nonDoubled = all ^ doubled;
                if (isDag[nonDoubled]) {
                    const freq = new Array(26).fill(0);
                    for (let i = 0; i < m; i++) {
                        freq[chars[i].charCodeAt(0) - 97] = (doubled & (1 << i)) ? 2 : 1;
                    }
                    const key = freq.join(',');
                    if (!seen.has(key)) {
                        seen.add(key);
                        results.push(freq);
                    }
                }
                return;
            }
            for (let i = start; i < fk; i++) {
                trySubset(i + 1, taken + 1, extraMask | (1 << freeBits[i]));
            }
        };

        trySubset(0, 0, 0);
        if (results.length > 0) return results;
    }

    return [];
};
// @lc code=end

// TEST:
console.log(JSON.stringify(supersequences(["ab","ba"]))); // [[1,2,...],[2,1,...]]
console.log(JSON.stringify(supersequences(["aa","ac"]))); // [[2,0,1,...]]
console.log(JSON.stringify(supersequences(["aa","bb","cc"]))); // [[2,2,2,...]]
console.log(JSON.stringify(supersequences(["ab"]))); // [[1,1,...]]
console.log(JSON.stringify(supersequences(["aa"]))); // [[2,...]]
