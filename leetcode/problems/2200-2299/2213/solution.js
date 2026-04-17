/*
 * @lc app=leetcode id=2213 lang=javascript
 *
 * [2213] Longest Substring of One Repeating Character
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} queryCharacters
 * @param {number[]} queryIndices
 * @return {number[]}
 */
var longestRepeating = function(s, queryCharacters, queryIndices) {
    const n = s.length;
    const arr = s.split('');

    // Find next power of 2 >= n
    let N = 1;
    while (N < n) N <<= 1;

    // Segment tree flat arrays
    const tLen = new Int32Array(2 * N);
    const tPref = new Int32Array(2 * N);
    const tSuff = new Int32Array(2 * N);
    const tBest = new Int32Array(2 * N);
    const tLC = new Uint8Array(2 * N);
    const tRC = new Uint8Array(2 * N);

    // Initialize leaves
    for (let i = 0; i < n; i++) {
        const c = arr[i].charCodeAt(0);
        const idx = N + i;
        tLen[idx] = 1; tPref[idx] = 1; tSuff[idx] = 1; tBest[idx] = 1;
        tLC[idx] = c; tRC[idx] = c;
    }

    const pull = (i) => {
        const l = 2 * i, r = 2 * i + 1;
        if (tLen[l] === 0 && tLen[r] === 0) {
            tLen[i] = 0; return;
        }
        if (tLen[l] === 0) {
            tLen[i] = tLen[r]; tPref[i] = tPref[r]; tSuff[i] = tSuff[r];
            tBest[i] = tBest[r]; tLC[i] = tLC[r]; tRC[i] = tRC[r];
            return;
        }
        if (tLen[r] === 0) {
            tLen[i] = tLen[l]; tPref[i] = tPref[l]; tSuff[i] = tSuff[l];
            tBest[i] = tBest[l]; tLC[i] = tLC[l]; tRC[i] = tRC[l];
            return;
        }
        tLen[i] = tLen[l] + tLen[r];
        tLC[i] = tLC[l]; tRC[i] = tRC[r];

        if (tRC[l] === tLC[r]) {
            tPref[i] = tPref[l] + (tPref[l] === tLen[l] ? tPref[r] : 0);
            tSuff[i] = tSuff[r] + (tSuff[r] === tLen[r] ? tSuff[l] : 0);
            tBest[i] = Math.max(tBest[l], tBest[r], tSuff[l] + tPref[r]);
        } else {
            tPref[i] = tPref[l]; tSuff[i] = tSuff[r];
            tBest[i] = Math.max(tBest[l], tBest[r]);
        }
    };

    // Build
    for (let i = N - 1; i >= 1; i--) pull(i);

    // Point update
    const update = (pos, charCode) => {
        let i = N + pos;
        tLC[i] = charCode; tRC[i] = charCode;
        i >>= 1;
        while (i >= 1) { pull(i); i >>= 1; }
    };

    const res = [];
    for (let q = 0; q < queryIndices.length; q++) {
        const pos = queryIndices[q];
        arr[pos] = queryCharacters[q];
        update(pos, queryCharacters.charCodeAt(q));
        res.push(tBest[1]);
    }
    return res;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(longestRepeating("babacc", "bcb", [1,3,3])));   // [3,3,4]
console.log(JSON.stringify(longestRepeating("abyzz", "aa", [2,1])));        // [2,3]
console.log(JSON.stringify(longestRepeating("a", "b", [0])));                // [1]
console.log(JSON.stringify(longestRepeating("aaaa", "bbbb", [0,1,2,3])));   // [3,2,3,4]
