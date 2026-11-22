/*
 * @lc app=leetcode.cn id=2599 lang=javascript
 *
 * [2599] 使前缀和数组非负
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var makePrefSumNonNegative = function(nums) {
    const heap = [];
    const push = (v) => {
        heap.push(v);
        let i = heap.length - 1;
        while (i > 0) {
            const p = (i - 1) >> 1;
            if (heap[p] <= heap[i]) break;
            [heap[p], heap[i]] = [heap[i], heap[p]];
            i = p;
        }
    };
    const pop = () => {
        const top = heap[0];
        const last = heap.pop();
        if (heap.length) {
            heap[0] = last;
            let i = 0;
            while (true) {
                const l = 2 * i + 1, r = l + 1;
                let s = i;
                if (l < heap.length && heap[l] < heap[s]) s = l;
                if (r < heap.length && heap[r] < heap[s]) s = r;
                if (s === i) break;
                [heap[i], heap[s]] = [heap[s], heap[i]];
                i = s;
            }
        }
        return top;
    };
    let sum = 0, ops = 0;
    for (const x of nums) {
        sum += x;
        push(x);
        if (sum < 0) {
            sum -= pop();
            ops++;
        }
    }
    return ops;
};
// @lc code=end

// TEST:
console.log(makePrefSumNonNegative([2,3,-5,4])); // 0
console.log(makePrefSumNonNegative([3,-5,-2,6])); // 1
console.log(makePrefSumNonNegative([1,-1,1,-1])); // 0 (running sum never negative)
console.log(makePrefSumNonNegative([5,-8,3,4,-2,6])); // 1 (move -8 to end)
