/*
 * @lc app=leetcode id=2542 lang=javascript
 *
 * [2542] Maximum Subsequence Score
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var maxScore = function(nums1, nums2, k) {
    let n = nums1.length;
    let pairs = [];
    for (let i = 0; i < n; i++) {
        pairs.push([nums2[i], nums1[i]]);
    }
    pairs.sort((a, b) => b[0] - a[0]);

    // Min-heap for nums1 values
    let heap = [];
    let heapPush = (val) => {
        heap.push(val);
        let i = heap.length - 1;
        while (i > 0) {
            let parent = (i - 1) >> 1;
            if (heap[parent] > heap[i]) {
                [heap[parent], heap[i]] = [heap[i], heap[parent]];
                i = parent;
            } else break;
        }
    };
    let heapPop = () => {
        let top = heap[0];
        heap[0] = heap[heap.length - 1];
        heap.pop();
        let i = 0;
        while (true) {
            let smallest = i;
            let left = 2 * i + 1, right = 2 * i + 2;
            if (left < heap.length && heap[left] < heap[smallest]) smallest = left;
            if (right < heap.length && heap[right] < heap[smallest]) smallest = right;
            if (smallest !== i) {
                [heap[smallest], heap[i]] = [heap[i], heap[smallest]];
                i = smallest;
            } else break;
        }
        return top;
    };

    let sum = 0;
    let ans = 0;
    for (let [n2, n1] of pairs) {
        heapPush(n1);
        sum += n1;
        if (heap.length > k) {
            sum -= heapPop();
        }
        if (heap.length === k) {
            ans = Math.max(ans, sum * n2);
        }
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(maxScore([1,3,3,2], [2,1,3,4], 3)); // 12
console.log(maxScore([4,2,3,1,1], [7,5,10,9,6], 1)); // 30
