# [2540] Minimum Common Value

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-common-value/description/)

* algorithms
* Easy (58.02%)
* Likes:    1238
* Dislikes: 43
* Testcase Example:  '[1,2,3]\n[2,4]'

```md
Given two integer arrays nums1 and nums2, sorted in non-decreasing order, return the minimum integer common to both arrays. If there is no common integer amongst nums1 and nums2, return -1.
Note that an integer is said to be common to nums1 and nums2 if both arrays have at least one occurrence of that integer.

Example 1:

Input: nums1 = [1,2,3], nums2 = [2,4]
Output: 2
Explanation: The smallest element common to both arrays is 2, so we return 2.

Example 2:

Input: nums1 = [1,2,3,6], nums2 = [2,3,4,5]
Output: 2
Explanation: There are two common elements in the array 2 and 3 out of which 2 is the smallest, so 2 is returned.


Constraints:

1 <= nums1.length, nums2.length <= 105
1 <= nums1[i], nums2[j] <= 109
Both nums1 and nums2 are sorted in non-decreasing order.


```

## 题目翻译

给定两个非递减排序的整数数组 nums1 和 nums2，返回两个数组中都出现的最小整数。如果没有公共整数，返回 -1。

## 解题思路

**双指针**

两个数组都已排序，用双指针从左到右扫描。比较当前元素，较小的那个前进。遇到相等的即为最小公共值。

## Solution

[SourceCode](./solution.js)
