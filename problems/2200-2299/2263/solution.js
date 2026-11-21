/*
 * @lc app=leetcode.cn id=2263 lang=javascript
 *
 * [2263] 数组变为有序的最小操作次数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var convertArray = function(nums) {
    const costNonDec = (arr) => {
        const heap = [];
        const push = (v) => {
            heap.push(v);
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
            const last = heap.pop();
            if (heap.length) {
                heap[0] = last;
                let i = 0;
                while (true) {
                    const l = 2 * i + 1, r = l + 1;
                    let s = i;
                    if (l < heap.length && heap[l] > heap[s]) s = l;
                    if (r < heap.length && heap[r] > heap[s]) s = r;
                    if (s === i) break;
                    [heap[i], heap[s]] = [heap[s], heap[i]];
                    i = s;
                }
            }
            return top;
        };
        let cost = 0;
        for (const x of arr) {
            push(x);
            if (heap[0] > x) {
                cost += heap[0] - x;
                pop();
                push(x);
            }
        }
        return cost;
    };
    const negated = nums.map((v) => -v);
    return Math.min(costNonDec(nums), costNonDec(negated));
};
// @lc code=end

// TEST:
console.log(convertArray([3,2,4,5,0])); // 4
console.log(convertArray([2,2,3,4])); // 0
console.log(convertArray([0])); // 0
console.log(convertArray([5,4,3,2,1])); // 0 (already non-increasing)
console.log(convertArray([1,10,1])); // 9
