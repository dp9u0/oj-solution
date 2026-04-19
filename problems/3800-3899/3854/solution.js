/*
 * @lc app=leetcode id=3854 lang=javascript
 *
 * [3854] Minimum Operations to Make Array Parity Alternating
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var makeParityAlternating = function(nums) {
    const n = nums.length;
    if (n === 1) return [0, 0];

    const getParity = (x) => ((x % 2) + 2) % 2;

    const solve = (startParity) => {
        let ops = 0;
        const pairs = [];

        for (let i = 0; i < n; i++) {
            const reqParity = (startParity + i) % 2;
            const curParity = getParity(nums[i]);
            if (curParity === reqParity) {
                pairs.push(nums[i], i);
            } else {
                ops++;
                pairs.push(nums[i] - 1, i);
                pairs.push(nums[i] + 1, i);
            }
        }

        // Sort by value using flat array [val0, idx0, val1, idx1, ...]
        const m = pairs.length / 2;
        const indices = new Array(m);
        for (let i = 0; i < m; i++) indices[i] = i;
        indices.sort((a, b) => pairs[a * 2] - pairs[b * 2]);

        // Sliding window using array for position counting
        const posCount = new Int32Array(n);
        let covered = 0;
        let minRange = Infinity;
        let left = 0;

        for (let right = 0; right < m; right++) {
            const rIdx = indices[right];
            const pos = pairs[rIdx * 2 + 1];
            if (posCount[pos] === 0) covered++;
            posCount[pos]++;

            while (covered === n) {
                const lIdx = indices[left];
                minRange = Math.min(minRange, pairs[rIdx * 2] - pairs[lIdx * 2]);

                const lPos = pairs[lIdx * 2 + 1];
                posCount[lPos]--;
                if (posCount[lPos] === 0) covered--;
                left++;
            }
        }

        return [ops, minRange];
    };

    const resultA = solve(0);
    const resultB = solve(1);

    if (resultA[0] < resultB[0]) return resultA;
    if (resultB[0] < resultA[0]) return resultB;
    return resultA[1] <= resultB[1] ? resultA : resultB;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(makeParityAlternating([-2,-3,1,4]))); // [2,6]
console.log(JSON.stringify(makeParityAlternating([0,2,-2]))); // [1,3]
console.log(JSON.stringify(makeParityAlternating([7]))); // [0,0]
console.log(JSON.stringify(makeParityAlternating([1,2]))); // [0,1]
console.log(JSON.stringify(makeParityAlternating([1,1]))); // [1,1]
