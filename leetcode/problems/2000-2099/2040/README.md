# [2040] Kth Smallest Product of Two Sorted Arrays

## Description

[LeetCode Problem Description](https://leetcode.com/problems/kth-smallest-product-of-two-sorted-arrays/description/)

* algorithms
* Hard (48.81%)
* Likes:    1193
* Dislikes: 76
* Testcase Example:  '[2,5]\n[3,4]\n2'

```md
Given two sorted 0-indexed integer arrays nums1 and nums2 as well as an integer k, return the kth (1-based) smallest product of nums1[i] * nums2[j] where 0 <= i < nums1.length and 0 <= j < nums2.length.

Example 1:

Input: nums1 = [2,5], nums2 = [3,4], k = 2
Output: 8
Explanation: The 2 smallest products are:
- nums1[0] * nums2[0] = 2 * 3 = 6
- nums1[0] * nums2[1] = 2 * 4 = 8
The 2nd smallest product is 8.

Example 2:

Input: nums1 = [-4,-2,0,3], nums2 = [2,4], k = 6
Output: 0
Explanation: The 6 smallest products are:
- nums1[0] * nums2[1] = (-4) * 4 = -16
- nums1[0] * nums2[0] = (-4) * 2 = -8
- nums1[1] * nums2[1] = (-2) * 4 = -8
- nums1[1] * nums2[0] = (-2) * 2 = -4
- nums1[2] * nums2[0] = 0 * 2 = 0
- nums1[2] * nums2[1] = 0 * 4 = 0
The 6th smallest product is 0.

Example 3:

Input: nums1 = [-2,-1,0,1,2], nums2 = [-3,-1,2,4,5], k = 3
Output: -6
Explanation: The 3 smallest products are:
- nums1[0] * nums2[4] = (-2) * 5 = -10
- nums1[0] * nums2[3] = (-2) * 4 = -8
- nums1[4] * nums2[0] = 2 * (-3) = -6
The 3rd smallest product is -6.


Constraints:

1 <= nums1.length, nums2.length <= 5 * 104
-105 <= nums1[i], nums2[j] <= 105
1 <= k <= nums1.length * nums2.length
nums1 and nums2 are sorted.


```

## 翻译

给定两个已排序数组 nums1、nums2 和整数 k，返回所有 nums1[i]*nums2[j] 中第 k 小的乘积。

## 解题思路

二分答案 + 计数。对候选值 v，统计乘积 <= v 的对数。对每个 nums1[i]：若 x>0，在 nums2 中二分找 <= v/x 的个数；若 x<0，找 >= ceil(v/x) 的个数；若 x=0，v>=0 则全部计数。O(n1·log(n2)·log(range))，交换使 n1 <= n2 优化。

## Solution

[SourceCode](./solution.js)
