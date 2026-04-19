/*
 * @lc app=leetcode id=768 lang=javascript
 *
 * [768] Max Chunks To Make Sorted II
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(arr) {
    const n = arr.length;
    const prefixMax = new Int32Array(n);
    const suffixMin = new Int32Array(n);

    prefixMax[0] = arr[0];
    for (let i = 1; i < n; i++) {
        prefixMax[i] = Math.max(prefixMax[i - 1], arr[i]);
    }

    suffixMin[n - 1] = arr[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        suffixMin[i] = Math.min(suffixMin[i + 1], arr[i]);
    }

    let chunks = 1;
    for (let i = 0; i < n - 1; i++) {
        if (prefixMax[i] <= suffixMin[i + 1]) chunks++;
    }

    return chunks;
};
// @lc code=end

// TEST:
console.log(maxChunksToSorted([5,4,3,2,1])); // 1
console.log(maxChunksToSorted([2,1,3,4,4])); // 4
console.log(maxChunksToSorted([1,0,2,3,4])); // 4
console.log(maxChunksToSorted([0])); // 1
console.log(maxChunksToSorted([1,2,3,4,5])); // 5
