/*
 * @lc app=leetcode id=3480 lang=javascript
 *
 * [3480] Maximize Subarrays After Removing One Conflicting Pair
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} conflictingPairs
 * @return {number}
 */
var maxSubarrays = function(n, conflictingPairs) {
    const m = conflictingPairs.length;
    const pairs = conflictingPairs.map(([a, b], i) => {
        if (a > b) [a, b] = [b, a];
        return { a, b, idx: i };
    });
    pairs.sort((x, y) => x.b - y.b);

    const bonus = new Array(m).fill(0);
    let baseTotal = 0;
    let topA = 0, secondA = 0, topCount = 0, topIdx = -1;
    let prevR = 1;

    for (const p of pairs) {
        if (p.b > prevR) {
            const cnt = p.b - prevR;
            baseTotal += (prevR + p.b - 1) * cnt / 2 - cnt * topA;
            if (topCount === 1) {
                bonus[topIdx] += cnt * (topA - secondA);
            }
        }
        if (p.a > topA) {
            secondA = topA;
            topA = p.a;
            topCount = 1;
            topIdx = p.idx;
        } else if (p.a === topA) {
            topCount++;
        } else if (p.a > secondA) {
            secondA = p.a;
        }
        prevR = p.b;
    }

    if (prevR <= n) {
        const cnt = n - prevR + 1;
        baseTotal += (prevR + n) * cnt / 2 - cnt * topA;
        if (topCount === 1) {
            bonus[topIdx] += cnt * (topA - secondA);
        }
    }

    return baseTotal + Math.max(0, ...bonus);
};
// @lc code=end

// TEST:
console.log(maxSubarrays(4, [[2,3],[1,4]])); // 9
console.log(maxSubarrays(5, [[1,2],[2,5],[3,5]])); // 12
console.log(maxSubarrays(2, [[1,2]])); // 3
console.log(maxSubarrays(3, [[1,3],[2,3]])); // 5
console.log(maxSubarrays(5, [[1,5]])); // 15
