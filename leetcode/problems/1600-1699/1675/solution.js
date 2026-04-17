/*
 * @lc app=leetcode id=1675 lang=javascript
 *
 * [1675] Minimize Deviation in Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeviation = function(nums) {
    const heap = [];

    const push = (val) => {
        heap.push(val);
        let i = heap.length - 1;
        while (i > 0) {
            const p = (i - 1) >> 1;
            if (heap[p] >= heap[i]) break;
            [heap[p], heap[i]] = [heap[i], heap[p]];
            i = p;
        }
    };

    const pop = () => {
        const top = heap[0];
        heap[0] = heap[heap.length - 1];
        heap.pop();
        let i = 0;
        while (true) {
            let largest = i;
            const l = 2 * i + 1, r = 2 * i + 2;
            if (l < heap.length && heap[l] > heap[largest]) largest = l;
            if (r < heap.length && heap[r] > heap[largest]) largest = r;
            if (largest === i) break;
            [heap[i], heap[largest]] = [heap[largest], heap[i]];
            i = largest;
        }
        return top;
    };

    let minVal = Infinity;
    for (const x of nums) {
        const v = x % 2 === 1 ? x * 2 : x;
        minVal = Math.min(minVal, v);
        push(v);
    }

    let result = heap[0] - minVal;
    while (heap[0] % 2 === 0) {
        const max = pop();
        result = Math.min(result, max - minVal);
        const half = max >> 1;
        minVal = Math.min(minVal, half);
        push(half);
    }
    return Math.min(result, heap[0] - minVal);
};
// @lc code=end

// TEST:
console.log(minimumDeviation([1,2,3,4])); // 1
console.log(minimumDeviation([4,1,5,20,3])); // 3
console.log(minimumDeviation([2,10,8])); // 3
console.log(minimumDeviation([1,1])); // 0
console.log(minimumDeviation([2,2])); // 0
