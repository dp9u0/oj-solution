/*
 * @lc app=leetcode id=1642 lang=javascript
 *
 * [1642] Furthest Building You Can Reach
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function(heights, bricks, ladders) {
    const minHeap = [];

    const push = (val) => {
        minHeap.push(val);
        let i = minHeap.length - 1;
        while (i > 0) {
            const p = (i - 1) >> 1;
            if (minHeap[p] <= minHeap[i]) break;
            [minHeap[p], minHeap[i]] = [minHeap[i], minHeap[p]];
            i = p;
        }
    };

    const pop = () => {
        const top = minHeap[0];
        const last = minHeap.pop();
        if (minHeap.length > 0) {
            minHeap[0] = last;
            let i = 0;
            while (true) {
                let s = i;
                const l = 2 * i + 1, r = 2 * i + 2;
                if (l < minHeap.length && minHeap[l] < minHeap[s]) s = l;
                if (r < minHeap.length && minHeap[r] < minHeap[s]) s = r;
                if (s === i) break;
                [minHeap[s], minHeap[i]] = [minHeap[i], minHeap[s]];
                i = s;
            }
        }
        return top;
    };

    for (let i = 0; i < heights.length - 1; i++) {
        const diff = heights[i + 1] - heights[i];
        if (diff <= 0) continue;

        push(diff);

        // If more gaps than ladders, use bricks for the smallest gap
        if (minHeap.length > ladders) {
            bricks -= pop();
            if (bricks < 0) return i;
        }
    }

    return heights.length - 1;
};
// @lc code=end

// TEST:
console.log(furthestBuilding([4,2,7,6,9,14,12], 5, 1)); // 4
console.log(furthestBuilding([4,12,2,7,3,18,20,3,19], 10, 2)); // 7
console.log(furthestBuilding([14,3,19,3], 17, 0)); // 3
