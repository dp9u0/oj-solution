/*
 * @lc app=leetcode id=3478 lang=javascript
 *
 * [3478] Choose K Elements With Maximum Sum
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
var findMaxSum = function(nums1, nums2, k) {
    const n = nums1.length;
    const idx = Array.from({length: n}, (_, i) => i);
    idx.sort((a, b) => nums1[a] - nums1[b] || a - b);

    const ans = new Array(n).fill(0);
    const heap = [];
    let sum = 0;

    const heapPush = (val) => {
        heap.push(val);
        let i = heap.length - 1;
        while (i > 0) {
            const p = (i - 1) >> 1;
            if (heap[p] > heap[i]) { [heap[p], heap[i]] = [heap[i], heap[p]]; i = p; }
            else break;
        }
    };

    const heapReplace = (val) => {
        sum += val - heap[0];
        heap[0] = val;
        let i = 0;
        while (true) {
            let s = i, l = 2*i+1, r = 2*i+2;
            if (l < heap.length && heap[l] < heap[s]) s = l;
            if (r < heap.length && heap[r] < heap[s]) s = r;
            if (s !== i) { [heap[i], heap[s]] = [heap[s], heap[i]]; i = s; }
            else break;
        }
    };

    let i = 0;
    while (i < n) {
        let j = i;
        while (j < n && nums1[idx[j]] === nums1[idx[i]]) j++;
        for (let t = i; t < j; t++) ans[idx[t]] = sum;
        for (let t = i; t < j; t++) {
            const val = nums2[idx[t]];
            if (heap.length < k) { sum += val; heapPush(val); }
            else if (heap.length > 0 && val > heap[0]) { heapReplace(val); }
        }
        i = j;
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(findMaxSum([4,2,1,5,3], [10,20,30,40,50], 2)));
console.log(JSON.stringify(findMaxSum([2,2,2,2], [3,1,2,3], 1)));
