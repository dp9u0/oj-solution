/*
 * @lc app=leetcode id=3395 lang=javascript
 *
 * [3395] Subsequences with a Unique Middle Mode I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var subsequencesWithMiddleMode = function(nums) {
    const MOD = 1e9 + 7;
    const n = nums.length;

    const vals = [...new Set(nums)].sort((a, b) => a - b);
    const valToIdx = new Map();
    for (let i = 0; i < vals.length; i++) valToIdx.set(vals[i], i);
    const V = vals.length;
    const arr = nums.map(x => valToIdx.get(x));

    const leftFreq = new Array(V).fill(0);
    const rightFreq = new Array(V).fill(0);
    for (const x of arr) rightFreq[x]++;

    const C2 = (x) => x < 2 ? 0 : x * (x - 1) / 2;

    let totalSameL = 0;
    let totalSameR = 0;
    for (let v = 0; v < V; v++) totalSameR += C2(rightFreq[v]);

    let ans = 0;

    for (let j = 0; j < n; j++) {
        const m = arr[j];

        // Remove from right (now the middle)
        totalSameR -= C2(rightFreq[m]);
        rightFreq[m]--;
        totalSameR += C2(rightFreq[m]);

        const leftM = leftFreq[m];
        const rightM = rightFreq[m];
        const leftNM = j - leftM;
        const rightNM = (n - 1 - j) - rightM;

        const sameL = totalSameL - C2(leftFreq[m]);
        const sameR = totalSameR - C2(rightFreq[m]);

        let contrib = 0;

        // freq(m) = 5
        contrib += C2(leftM) * C2(rightM);

        // freq(m) = 4
        contrib += C2(leftM) * rightM * rightNM;
        contrib += leftM * C2(rightM) * leftNM;

        // freq(m) = 3
        contrib += C2(leftM) * C2(rightNM);
        contrib += C2(leftNM) * C2(rightM);
        contrib += leftM * leftNM * rightM * rightNM;

        // freq(m) = 2: sub1 (1 m from left) + sub2 (1 m from right)
        let sum1 = 0;
        for (let v = 0; v < V; v++) {
            if (v === m || leftFreq[v] === 0) continue;
            sum1 += leftFreq[v] * (C2(rightNM - rightFreq[v]) - sameR + C2(rightFreq[v]));
        }
        contrib += leftM * sum1;

        let sum2 = 0;
        for (let v = 0; v < V; v++) {
            if (v === m || rightFreq[v] === 0) continue;
            sum2 += rightFreq[v] * (C2(leftNM - leftFreq[v]) - sameL + C2(leftFreq[v]));
        }
        contrib += rightM * sum2;

        ans = (ans + contrib % MOD) % MOD;

        // Add to left for next iteration
        totalSameL -= C2(leftFreq[m]);
        leftFreq[m]++;
        totalSameL += C2(leftFreq[m]);
    }

    return ans;
};
// @lc code=end

// TEST:
console.log(subsequencesWithMiddleMode([1,1,1,1,1,1])); // 6
console.log(subsequencesWithMiddleMode([1,2,2,3,3,4])); // 4
console.log(subsequencesWithMiddleMode([0,1,2,3,4,5,6,7,8])); // 0
console.log(subsequencesWithMiddleMode([1,1,1,1,1])); // 1
console.log(subsequencesWithMiddleMode([1,2,3,4,5])); // 0
