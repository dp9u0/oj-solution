/*
 * @lc app=leetcode id=2426 lang=javascript
 *
 * [2426] Number of Pairs Satisfying Inequality
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} diff
 * @return {number}
 */
var numberOfPairs = function(nums1, nums2, diff) {
    const n = nums1.length;
    const d = nums1.map((v, i) => v - nums2[i]);
    let count = 0;

    const mergeSort = (arr, lo, hi) => {
        if (lo >= hi) return;
        const mid = (lo + hi) >> 1;
        mergeSort(arr, lo, mid);
        mergeSort(arr, mid + 1, hi);

        // Count pairs: d[i] <= d[j] + diff, i in left, j in right
        let ptr = lo;
        for (let j = mid + 1; j <= hi; j++) {
            while (ptr <= mid && arr[ptr] <= arr[j] + diff) ptr++;
            count += ptr - lo;
        }

        // Merge
        const temp = [];
        let i = lo, j = mid + 1;
        while (i <= mid && j <= hi) {
            if (arr[i] <= arr[j]) temp.push(arr[i++]);
            else temp.push(arr[j++]);
        }
        while (i <= mid) temp.push(arr[i++]);
        while (j <= hi) temp.push(arr[j++]);
        for (let k = 0; k < temp.length; k++) {
            arr[lo + k] = temp[k];
        }
    };

    mergeSort(d, 0, n - 1);
    return count;
};
// @lc code=end

// TEST:
console.log(numberOfPairs([3, 2, 5], [2, 2, 1], 1)); // 3
console.log(numberOfPairs([3, -1], [-2, 2], -1)); // 0
console.log(numberOfPairs([1, 1, 1], [1, 1, 1], 0)); // 3
console.log(numberOfPairs([1, 2, 3], [1, 2, 3], 0)); // 3
console.log(numberOfPairs([1, 2, 3], [3, 2, 1], 0)); // 1
