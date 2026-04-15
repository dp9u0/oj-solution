# [1855] Maximum Distance Between a Pair of Values

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-distance-between-a-pair-of-values/description/)

* algorithms
* Medium (54.28%)
* Likes:    1267
* Dislikes: 32
* Testcase Example:  '[55,30,5,4,2]\n[100,20,10,10,5]'

```md
You are given two non-increasing 0-indexed integer arrays nums1​​​​​​ and nums2​​​​​​.
A pair of indices (i, j), where 0 <= i < nums1.length and 0 <= j < nums2.length, is valid if both i <= j and nums1[i] <= nums2[j]. The distance of the pair is j - i​​​​.
Return the maximum distance of any valid pair (i, j). If there are no valid pairs, return 0.
An array arr is non-increasing if arr[i-1] >= arr[i] for every 1 <= i < arr.length.

Example 1:

Input: nums1 = [55,30,5,4,2], nums2 = [100,20,10,10,5]
Output: 2
Explanation: The valid pairs are (0,0), (2,2), (2,3), (2,4), (3,3), (3,4), and (4,4).
The maximum distance is 2 with pair (2,4).

Example 2:

Input: nums1 = [2,2,2], nums2 = [10,10,1]
Output: 1
Explanation: The valid pairs are (0,0), (0,1), and (1,1).
The maximum distance is 1 with pair (0,1).

Example 3:

Input: nums1 = [30,29,19,5], nums2 = [25,25,25,25,25]
Output: 2
Explanation: The valid pairs are (2,2), (2,3), (2,4), (3,3), and (3,4).
The maximum distance is 2 with pair (2,4).


Constraints:

1 <= nums1.length, nums2.length <= 105
1 <= nums1[i], nums2[j] <= 105
Both nums1 and nums2 are non-increasing.


```

## 中文翻译

给定两个非递增数组 nums1 和 nums2，找满足 i <= j 且 nums1[i] <= nums2[j] 的最大 j - i。

## 解题思路

双指针。i 遍历 nums1，j 从 i 开始向右扩展 nums2，找到最远的 j 使得 nums2[j] >= nums1[i]。由于两个数组都是非递增的，j 不需要回退，可以单调递增。

时间复杂度：O(m + n)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
