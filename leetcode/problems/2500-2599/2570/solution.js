/*
 * @lc app=leetcode id=2570 lang=javascript
 *
 * [2570] Merge Two 2D Arrays by Summing Values
 */

// @lc code=start
/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function(nums1, nums2) {
    let i = 0, j = 0;
    let result = [];
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i][0] < nums2[j][0]) {
            result.push(nums1[i++]);
        } else if (nums1[i][0] > nums2[j][0]) {
            result.push(nums2[j++]);
        } else {
            result.push([nums1[i][0], nums1[i][1] + nums2[j][1]]);
            i++;
            j++;
        }
    }
    while (i < nums1.length) result.push(nums1[i++]);
    while (j < nums2.length) result.push(nums2[j++]);
    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(mergeArrays([[1,2],[2,3],[4,5]], [[1,4],[3,2],[4,1]]))); // [[1,6],[2,3],[3,2],[4,6]]
console.log(JSON.stringify(mergeArrays([[2,4],[3,6],[5,5]], [[1,3],[4,3]]))); // [[1,3],[2,4],[3,6],[4,3],[5,5]]
console.log(JSON.stringify(mergeArrays([[1,1]], [[1,1]]))); // [[1,2]]
