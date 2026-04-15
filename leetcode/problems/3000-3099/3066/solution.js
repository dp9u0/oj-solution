/*
 * @lc app=leetcode id=3066 lang=javascript
 *
 * [3066] Minimum Operations to Exceed Threshold Value II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    const heap = [...nums];
    heap.sort((a, b) => a - b);

    const sink = (i, n) => {
        while (true) {
            let smallest = i;
            const l = 2 * i + 1, r = 2 * i + 2;
            if (l < n && heap[l] < heap[smallest]) smallest = l;
            if (r < n && heap[r] < heap[smallest]) smallest = r;
            if (smallest === i) break;
            [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
            i = smallest;
        }
    };

    const swim = (i) => {
        while (i > 0) {
            const parent = (i - 1) >> 1;
            if (heap[parent] <= heap[i]) break;
            [heap[i], heap[parent]] = [heap[parent], heap[i]];
            i = parent;
        }
    };

    const pop = () => {
        const val = heap[0];
        heap[0] = heap[heap.length - 1];
        heap.pop();
        if (heap.length > 0) sink(0, heap.length);
        return val;
    };

    const push = (val) => {
        heap.push(val);
        swim(heap.length - 1);
    };

    // Heapify
    for (let i = Math.floor(heap.length / 2) - 1; i >= 0; i--) {
        sink(i, heap.length);
    }

    let ops = 0;
    while (heap[0] < k) {
        const x = pop();
        const y = pop();
        push(Math.min(x, y) * 2 + Math.max(x, y));
        ops++;
    }
    return ops;
};
// @lc code=end

// TEST:
console.log(minOperations([2,11,10,1,3], 10));  // 2
console.log(minOperations([1,1,2,4,9], 20));    // 4
console.log(minOperations([999999999,999999999,999999999], 1000000000)); // 2
