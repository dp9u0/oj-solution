/*
 * @lc app=leetcode id=2956 lang=javascript
 *
 * [2956] Find Common Elements Between Two Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    let ans1 = 0, ans2 = 0;
    for (const x of nums1) if (set2.has(x)) ans1++;
    for (const x of nums2) if (set1.has(x)) ans2++;
    return [ans1, ans2];
};
// @lc code=end

// TEST:
console.log(JSON.stringify(findIntersectionValues([2,3,2], [1,2])));               // [2,1]
console.log(JSON.stringify(findIntersectionValues([4,3,2,3,1], [2,2,5,2,3,6])));  // [3,4]
console.log(JSON.stringify(findIntersectionValues([3,4,2,3], [1,5])));             // [0,0]
