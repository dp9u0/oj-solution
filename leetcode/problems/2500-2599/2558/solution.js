/*
 * @lc app=leetcode id=2558 lang=javascript
 *
 * [2558] Take Gifts From the Richest Pile
 */

// @lc code=start
/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function(gifts, k) {
    const maxHeap = [...gifts];
    const heapifyDown = (i, size) => {
        while (true) {
            let largest = i;
            const left = 2 * i + 1, right = 2 * i + 2;
            if (left < size && maxHeap[left] > maxHeap[largest]) largest = left;
            if (right < size && maxHeap[right] > maxHeap[largest]) largest = right;
            if (largest === i) break;
            [maxHeap[i], maxHeap[largest]] = [maxHeap[largest], maxHeap[i]];
            i = largest;
        }
    };
    const n = maxHeap.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) heapifyDown(i, n);

    for (let i = 0; i < k; i++) {
        maxHeap[0] = Math.floor(Math.sqrt(maxHeap[0]));
        heapifyDown(0, n);
    }

    return maxHeap.reduce((sum, v) => sum + v, 0);
};
// @lc code=end

// TEST:
console.log(pickGifts([25,64,9,4,100], 4)); // 29
console.log(pickGifts([1,1,1,1], 4));       // 4
console.log(pickGifts([10], 1));             // 3
