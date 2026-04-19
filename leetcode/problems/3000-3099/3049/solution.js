/*
 * @lc app=leetcode id=3049 lang=javascript
 *
 * [3049] Earliest Second to Mark Indices II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[]} changeIndices
 * @return {number}
 */
var earliestSecondToMarkIndices = function(nums, changeIndices) {
    const n = nums.length, m = changeIndices.length;
    const ci = changeIndices.map(x => x - 1);

    function canDo(s) {
        // first occurrence of each index in ci[0..s-1]
        const first = new Int32Array(n).fill(-1);
        for (let t = 0; t < s; t++) {
            if (first[ci[t]] < 0) first[ci[t]] = t;
        }

        let decCost = 0;
        for (let i = 0; i < n; i++) {
            if (nums[i] > 0) decCost += nums[i];
        }

        // firstMap: first[i] -> i, for indices with nums[i] > 0
        const firstMap = new Map();
        for (let i = 0; i < n; i++) {
            if (nums[i] > 0 && first[i] >= 0) {
                firstMap.set(first[i], i);
            }
        }

        // Min-heap of nums values for SET candidates
        const heap = [];
        const push = (val) => {
            heap.push(val);
            let idx = heap.length - 1;
            while (idx > 0) {
                const p = (idx - 1) >> 1;
                if (heap[p] <= heap[idx]) break;
                [heap[p], heap[idx]] = [heap[idx], heap[p]];
                idx = p;
            }
        };
        const pop = () => {
            const top = heap[0];
            heap[0] = heap.pop();
            let idx = 0;
            while (true) {
                let s = idx, l = 2*idx+1, r = 2*idx+2;
                if (l < heap.length && heap[l] < heap[s]) s = l;
                if (r < heap.length && heap[r] < heap[s]) s = r;
                if (s === idx) break;
                [heap[s], heap[idx]] = [heap[idx], heap[s]];
                idx = s;
            }
            return top;
        };

        // Process right to left
        let slots = 0, savings = 0;
        for (let t = s - 1; t >= 0; t--) {
            if (firstMap.has(t)) {
                const val = nums[firstMap.get(t)];
                push(val);
                savings += val - 1;
                slots--;
                if (slots < 0) {
                    savings -= (pop() - 1);
                    slots += 2;
                }
            } else {
                slots++;
            }
        }

        return n + decCost - savings <= s;
    }

    let lo = 1, hi = m, ans = -1;
    while (lo <= hi) {
        const mid = (lo + hi) >> 1;
        if (canDo(mid)) { ans = mid; hi = mid - 1; }
        else lo = mid + 1;
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(earliestSecondToMarkIndices([3,2,3], [1,3,2,2,2,2,3])); // 6
console.log(earliestSecondToMarkIndices([0,0,1,2], [1,2,1,2,1,2,1,2])); // 7
console.log(earliestSecondToMarkIndices([1,2,3], [1,2,3])); // -1
console.log(earliestSecondToMarkIndices([0,2], [1,1,2,2,1])); // 4
console.log(earliestSecondToMarkIndices([0], [1])); // 1
