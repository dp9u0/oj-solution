# [2605] Form Smallest Number From Two Digit Arrays

## Description

[LeetCode Problem Description](https://leetcode.com/problems/form-smallest-number-from-two-digit-arrays/description/)

* algorithms
* Easy (55.11%)
* Likes:    328
* Dislikes: 29
* Testcase Example:  '[4,1,3]\n[5,7]'

```md
Given two arrays of unique digits nums1 and nums2, return the smallest number that contains at least one digit from each array.

Example 1:

Input: nums1 = [4,1,3], nums2 = [5,7]
Output: 15
Explanation: The number 15 contains the digit 1 from nums1 and the digit 5 from nums2. It can be proven that 15 is the smallest number we can have.

Example 2:

Input: nums1 = [3,5,2,6], nums2 = [3,1,7]
Output: 3
Explanation: The number 3 contains the digit 3 which exists in both arrays.


Constraints:

1 <= nums1.length, nums2.length <= 9
1 <= nums1[i], nums2[i] <= 9
All digits in each array are unique.


```

## 翻译

给定两个唯一数字数组 nums1 和 nums2（元素 1-9），返回包含至少一个来自每个数组的数字的最小数。

## Approach

先检查是否有公共数字，有则返回最小的公共数字。否则，取两个数组的最小值 a 和 b，返回 min(a,b)*10 + max(a,b)。

时间复杂度 O(n+m)，空间复杂度 O(1)。

## Solution

[SourceCode](./solution.js)
