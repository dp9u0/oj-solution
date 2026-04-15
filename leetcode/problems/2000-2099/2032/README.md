# [2032] Two Out of Three

## Description

[LeetCode Problem Description](https://leetcode.com/problems/two-out-of-three/description/)

* algorithms
* Easy (77.54%)
* Likes:    821
* Dislikes: 55
* Testcase Example:  '[1,1,3,2]\n[2,3]\n[3]'

```md
Given three integer arrays nums1, nums2, and nums3, return a distinct array containing all the values that are present in at least two out of the three arrays. You may return the values in any order.

Example 1:

Input: nums1 = [1,1,3,2], nums2 = [2,3], nums3 = [3]
Output: [3,2]
Explanation: The values that are present in at least two arrays are:
- 3, in all three arrays.
- 2, in nums1 and nums2.

Example 2:

Input: nums1 = [3,1], nums2 = [2,3], nums3 = [1,2]
Output: [2,3,1]
Explanation: The values that are present in at least two arrays are:
- 2, in nums2 and nums3.
- 3, in nums1 and nums2.
- 1, in nums1 and nums3.

Example 3:

Input: nums1 = [1,2,2], nums2 = [4,3,3], nums3 = [5]
Output: []
Explanation: No value is present in at least two arrays.


Constraints:

1 <= nums1.length, nums2.length, nums3.length <= 100
1 <= nums1[i], nums2[j], nums3[k] <= 100


```

## 题目翻译

给定三个数组，返回在至少两个数组中出现过的所有不重复值。

## 解题思路

对每个数组的唯一元素用位标记，第 1 个数组标记 bit 0，第 2 个标记 bit 1，第 3 个标记 bit 2。最终统计哪些值至少有两个 bit 被设置。

时间复杂度：O(n1+n2+n3)，空间复杂度：O(max_val)

## Solution

[SourceCode](./solution.js)
