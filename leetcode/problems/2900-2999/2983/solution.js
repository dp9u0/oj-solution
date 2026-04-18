/*
 * @lc app=leetcode id=2983 lang=javascript
 *
 * [2983] Palindrome Rearrangement Queries
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var canMakePalindromeQueries = function(s, queries) {
    const n = s.length;
    const half = n >> 1;

    // selfP[c][i] = count of char c in s[0..i-1] for first-half positions
    // mirrorP[c][i] = count of char c at mirror positions s[n-1],s[n-2],..,s[n-i]
    const selfP = Array.from({ length: 26 }, () => new Int32Array(half + 1));
    const mirrorP = Array.from({ length: 26 }, () => new Int32Array(half + 1));
    const misP = new Int32Array(half + 1);

    for (let i = 0; i < half; i++) {
        for (let c = 0; c < 26; c++) {
            selfP[c][i + 1] = selfP[c][i];
            mirrorP[c][i + 1] = mirrorP[c][i];
        }
        selfP[s.charCodeAt(i) - 97][i + 1]++;
        mirrorP[s.charCodeAt(n - 1 - i) - 97][i + 1]++;
        misP[i + 1] = misP[i] + (s[i] !== s[n - 1 - i] ? 1 : 0);
    }

    // Full string prefix for Pool B (second-half character counts)
    const fullP = Array.from({ length: 26 }, () => new Int32Array(n + 1));
    for (let i = 0; i < n; i++) {
        for (let c = 0; c < 26; c++) fullP[c][i + 1] = fullP[c][i];
        fullP[s.charCodeAt(i) - 97][i + 1]++;
    }

    const totalMis = misP[half];
    const result = [];

    for (const [a, b, c, d] of queries) {
        const L2 = n - 1 - d;
        const R2e = n - 1 - c;

        // Case 4: mismatches outside R1 ∪ R2 must be 0
        let unionMis;
        if (L2 > b) {
            unionMis = misP[b + 1] - misP[a] + misP[R2e + 1] - misP[L2];
        } else if (a > R2e) {
            unionMis = misP[R2e + 1] - misP[L2] + misP[b + 1] - misP[a];
        } else {
            unionMis = misP[Math.max(b, R2e) + 1] - misP[Math.min(a, L2)];
        }

        if (totalMis - unionMis !== 0) {
            result.push(false);
            continue;
        }

        const intL = Math.max(a, L2);
        const intR = Math.min(b, R2e);
        const hasInt = intL <= intR;

        let ok = true;
        for (let ch = 0; ch < 26; ch++) {
            const countA = selfP[ch][b + 1] - selfP[ch][a];
            let needA = mirrorP[ch][b + 1] - mirrorP[ch][a];
            if (hasInt) needA -= mirrorP[ch][intR + 1] - mirrorP[ch][intL];

            if (countA < needA) { ok = false; break; }

            const countB = fullP[ch][d + 1] - fullP[ch][c];
            let needB = selfP[ch][R2e + 1] - selfP[ch][L2];
            if (hasInt) needB -= selfP[ch][intR + 1] - selfP[ch][intL];

            if (countB < needB) { ok = false; break; }
            if (countA - needA !== countB - needB) { ok = false; break; }
        }

        result.push(ok);
    }

    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(canMakePalindromeQueries('abcabc', [[1,1,3,5],[0,2,5,5]])));
// Expected: [true,true]
console.log(JSON.stringify(canMakePalindromeQueries('abbcdecbba', [[0,2,7,9]])));
// Expected: [false]
console.log(JSON.stringify(canMakePalindromeQueries('acbcab', [[1,2,4,5]])));
// Expected: [true]
console.log(JSON.stringify(canMakePalindromeQueries('abccba', [[0,2,3,5]])));
// Expected: [true]
console.log(JSON.stringify(canMakePalindromeQueries('abcdef', [[0,2,3,5]])));
// Expected: [false]
