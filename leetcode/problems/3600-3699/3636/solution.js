/*
 * @lc app=leetcode id=3636 lang=javascript
 *
 * [3636] Threshold Majority Queries
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var subarrayMajority = function(nums, queries) {
    const n = nums.length;
    const B = Math.max(1, Math.ceil(Math.sqrt(n)));
    const numBlocks = Math.ceil(n / B);

    // Position lists for each value
    const valToPosList = new Map();
    for (let i = 0; i < n; i++) {
        const v = nums[i];
        if (!valToPosList.has(v)) valToPosList.set(v, []);
        valToPosList.get(v).push(i);
    }

    const countInRange = (posList, l, r) => {
        let lo = 0, hi = posList.length;
        while (lo < hi) { const mid = (lo + hi) >> 1; if (posList[mid] < l) lo = mid + 1; else hi = mid; }
        const left = lo;
        lo = 0; hi = posList.length;
        while (lo < hi) { const mid = (lo + hi) >> 1; if (posList[mid] <= r) lo = mid + 1; else hi = mid; }
        return lo - left;
    };

    // Precompute mode for each pair of block boundaries
    const modeTable = Array.from({length: numBlocks}, () => new Array(numBlocks));

    for (let s = 0; s < numBlocks; s++) {
        const freq = new Map();
        let bestFreq = 0, bestVal = -1;
        for (let e = s; e < numBlocks; e++) {
            const start = e * B;
            const end = Math.min(start + B, n);
            for (let i = start; i < end; i++) {
                const v = nums[i];
                const f = (freq.get(v) || 0) + 1;
                freq.set(v, f);
                if (f > bestFreq || (f === bestFreq && v < bestVal)) {
                    bestFreq = f;
                    bestVal = v;
                }
            }
            modeTable[s][e] = bestVal;
        }
    }

    // Answer queries
    return queries.map(([l, r, threshold]) => {
        const bl = Math.floor(l / B);
        const br = Math.floor(r / B);

        // Same block or adjacent blocks: count directly
        if (bl >= br) {
            const freq = new Map();
            for (let i = l; i <= r; i++) {
                freq.set(nums[i], (freq.get(nums[i]) || 0) + 1);
            }
            let bestVal = -1, bestFreq = threshold - 1;
            for (const [val, count] of freq) {
                if (count > bestFreq || (count === bestFreq && count >= threshold && val < bestVal)) {
                    bestFreq = count;
                    bestVal = val;
                }
            }
            return bestVal;
        }

        // Collect candidates: mode of inner blocks + boundary elements
        const candidates = new Set();

        // Mode of inner blocks [bl+1, br-1]
        if (bl + 1 <= br - 1) {
            candidates.add(modeTable[bl + 1][br - 1]);
        }

        // Left boundary: [l, (bl+1)*B - 1]
        const leftEnd = Math.min((bl + 1) * B - 1, r);
        for (let i = l; i <= leftEnd; i++) candidates.add(nums[i]);

        // Right boundary: [br*B, r]
        const rightStart = Math.max(br * B, l);
        for (let i = rightStart; i <= r; i++) candidates.add(nums[i]);

        // Find best candidate
        let bestVal = -1, bestFreq = threshold - 1;
        for (const v of candidates) {
            const posList = valToPosList.get(v);
            const count = countInRange(posList, l, r);
            if (count > bestFreq || (count === bestFreq && count >= threshold && v < bestVal)) {
                bestFreq = count;
                bestVal = v;
            }
        }
        return bestVal;
    });
};
// @lc code=end

// TEST:
console.log(JSON.stringify(subarrayMajority([1,1,2,2,1,1], [[0,5,4],[0,3,3],[2,3,2]]))); // [1,-1,2]
console.log(JSON.stringify(subarrayMajority([3,2,3,2,3,2,3], [[0,6,4],[1,5,2],[2,4,1],[3,3,1]]))); // [3,2,3,2]
console.log(JSON.stringify(subarrayMajority([1], [[0,0,1]]))); // [1]
console.log(JSON.stringify(subarrayMajority([1,2,1,2], [[0,3,2],[1,2,1]]))); // [1,1]
console.log(JSON.stringify(subarrayMajority([5,5,5], [[0,2,3]]))); // [5]
