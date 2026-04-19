/*
 * @lc app=leetcode id=3275 lang=javascript
 *
 * [3275] K-th Nearest Obstacle Queries
 */

// @lc code=start
/**
 * @param {number[][]} queries
 * @param {number} k
 * @return {number[]}
 */
var resultsArray = function(queries, k) {
    // Max-heap of size at most k, stores k smallest distances
    const heap = [];

    const siftUp = (i) => {
        while (i > 0) {
            const p = (i - 1) >> 1;
            if (heap[p] >= heap[i]) break;
            [heap[p], heap[i]] = [heap[i], heap[p]];
            i = p;
        }
    };

    const siftDown = (i) => {
        const n = heap.length;
        while (true) {
            let largest = i;
            const l = 2 * i + 1, r = 2 * i + 2;
            if (l < n && heap[l] > heap[largest]) largest = l;
            if (r < n && heap[r] > heap[largest]) largest = r;
            if (largest === i) break;
            [heap[i], heap[largest]] = [heap[largest], heap[i]];
            i = largest;
        }
    };

    const push = (val) => {
        heap.push(val);
        siftUp(heap.length - 1);
    };

    const pop = () => {
        const top = heap[0];
        heap[0] = heap[heap.length - 1];
        heap.pop();
        if (heap.length > 0) siftDown(0);
        return top;
    };

    const result = [];
    for (const [x, y] of queries) {
        const d = Math.abs(x) + Math.abs(y);
        if (heap.length < k) {
            push(d);
            result.push(heap.length < k ? -1 : heap[0]);
        } else if (d < heap[0]) {
            pop();
            push(d);
            result.push(heap[0]);
        } else {
            result.push(heap[0]);
        }
    }
    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(resultsArray([[1,2],[3,4],[2,3],[-3,0]], 2))); // [-1,7,5,3]
console.log(JSON.stringify(resultsArray([[5,5],[4,4],[3,3]], 1))); // [10,8,6]
console.log(JSON.stringify(resultsArray([[1,2]], 2))); // [-1]
console.log(JSON.stringify(resultsArray([[1,2],[2,1]], 2))); // [3,3]
console.log(JSON.stringify(resultsArray([[0,0],[0,0]], 1))); // not unique per constraint, skip
