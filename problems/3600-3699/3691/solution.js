/*
 * @lc app=leetcode id=3691 lang=javascript
 *
 * [3691] Maximum Total Subarray Value II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxTotalValue = function(nums, k) {
    const n = nums.length;
    if (n === 1) return 0;

    // Sparse Table for O(1) range max/min queries
    const maxJ = Math.floor(Math.log2(n));
    const log2 = new Int32Array(n + 1);
    for (let i = 2; i <= n; i++) log2[i] = log2[i >> 1] + 1;

    const stMax = [nums.slice()];
    const stMin = [nums.slice()];

    for (let j = 1; j <= maxJ; j++) {
        const half = 1 << (j - 1);
        const cnt = n - (1 << j) + 1;
        const curMax = new Array(cnt);
        const curMin = new Array(cnt);
        for (let i = 0; i < cnt; i++) {
            curMax[i] = Math.max(stMax[j - 1][i], stMax[j - 1][i + half]);
            curMin[i] = Math.min(stMin[j - 1][i], stMin[j - 1][i + half]);
        }
        stMax.push(curMax);
        stMin.push(curMin);
    }

    const rangeVal = (l, r) => {
        const j = log2[r - l + 1];
        return Math.max(stMax[j][l], stMax[j][r - (1 << j) + 1])
             - Math.min(stMin[j][l], stMin[j][r - (1 << j) + 1]);
    };

    // Max-heap: [value, l, r]
    const heap = [];
    const swap = (a, b) => { const t = heap[a]; heap[a] = heap[b]; heap[b] = t; };

    const siftUp = (i) => {
        while (i > 0) {
            const p = (i - 1) >> 1;
            if (heap[p][0] < heap[i][0]) { swap(p, i); i = p; }
            else break;
        }
    };

    const siftDown = () => {
        let i = 0, size = heap.length;
        while (true) {
            let largest = i;
            const l = 2 * i + 1, r = 2 * i + 2;
            if (l < size && heap[l][0] > heap[largest][0]) largest = l;
            if (r < size && heap[r][0] > heap[largest][0]) largest = r;
            if (largest !== i) { swap(largest, i); i = largest; }
            else break;
        }
    };

    // Initialize: push range(0, r) for each r
    for (let r = 0; r < n; r++) {
        const v = rangeVal(0, r);
        if (v > 0) {
            heap.push([v, 0, r]);
            siftUp(heap.length - 1);
        }
    }

    let total = 0;
    for (let i = 0; i < k && heap.length > 0; i++) {
        const top = heap[0];
        heap[0] = heap[heap.length - 1];
        heap.length--;
        if (heap.length > 0) siftDown();

        total += top[0];
        if (top[1] + 1 <= top[2]) {
            const v = rangeVal(top[1] + 1, top[2]);
            if (v > 0) {
                heap.push([v, top[1] + 1, top[2]]);
                siftUp(heap.length - 1);
            }
        }
    }

    return total;
};
// @lc code=end

// TEST:
console.log(maxTotalValue([1, 3, 2], 2));           // 4
console.log(maxTotalValue([4, 2, 5, 1], 3));        // 12
console.log(maxTotalValue([1], 1));                  // 0
console.log(maxTotalValue([5, 1, 5, 1, 5], 5));     // 20
console.log(maxTotalValue([3, 1, 2], 3));            // 5
console.log(maxTotalValue([1, 5, 3, 4, 2], 4));     // 16
