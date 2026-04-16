/*
 * @lc app=leetcode id=1574 lang=javascript
 *
 * [1574] Shortest Subarray to be Removed to Make Array Sorted
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var findLengthOfShortestSubarray = function(arr) {
    const n = arr.length;

    // Longest non-decreasing prefix
    let l = 0;
    while (l < n - 1 && arr[l] <= arr[l + 1]) l++;
    if (l === n - 1) return 0;

    // Longest non-decreasing suffix
    let r = n - 1;
    while (r > 0 && arr[r - 1] <= arr[r]) r--;

    // Remove suffix or prefix
    let ans = Math.min(n - l - 1, r);

    // Two pointers: merge prefix[0..l] with suffix[r..n-1]
    let j = r;
    for (let i = 0; i <= l; i++) {
        while (j < n && arr[j] < arr[i]) j++;
        ans = Math.min(ans, j - i - 1);
    }

    return ans;
};
// @lc code=end

// TEST:
console.log(findLengthOfShortestSubarray([1, 2, 3, 10, 4, 2, 3, 5])); // 3
console.log(findLengthOfShortestSubarray([5, 4, 3, 2, 1]));            // 4
console.log(findLengthOfShortestSubarray([1, 2, 3]));                   // 0
