# [1577] Number of Ways Where Square of Number Is Equal to Product of Two Numbers

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-ways-where-square-of-number-is-equal-to-product-of-two-numbers/description/)

* algorithms
* Medium (43.34%)
* Likes:    399
* Dislikes: 58
* Testcase Example:  '[7,4]\n[5,2,8,9]'

```md
Given two arrays of integers nums1 and nums2, return the number of triplets formed (type 1 and type 2) under the following rules:

Type 1: Triplet (i, j, k) if nums1[i]2 == nums2[j] * nums2[k] where 0 <= i < nums1.length and 0 <= j < k < nums2.length.
Type 2: Triplet (i, j, k) if nums2[i]2 == nums1[j] * nums1[k] where 0 <= i < nums2.length and 0 <= j < k < nums1.length.


Example 1:

Input: nums1 = [7,4], nums2 = [5,2,8,9]
Output: 1
Explanation: Type 1: (1, 1, 2), nums1[1]2 = nums2[1] * nums2[2]. (42 = 2 * 8).

Example 2:

Input: nums1 = [1,1], nums2 = [1,1,1]
Output: 9
Explanation: All Triplets are valid, because 12 = 1 * 1.
Type 1: (0,0,1), (0,0,2), (0,1,2), (1,0,1), (1,0,2), (1,1,2).  nums1[i]2 = nums2[j] * nums2[k].
Type 2: (0,0,1), (1,0,1), (2,0,1). nums2[i]2 = nums1[j] * nums1[k].

Example 3:

Input: nums1 = [7,7,8,3], nums2 = [1,2,9,7]
Output: 2
Explanation: There are 2 valid triplets.
Type 1: (3,0,2).  nums1[3]2 = nums2[0] * nums2[2].
Type 2: (3,0,1).  nums2[3]2 = nums1[0] * nums1[1].


Constraints:

1 <= nums1.length, nums2.length <= 1000
1 <= nums1[i], nums2[i] <= 105


```

## 题目翻译

给定两个数组 `nums1` 和 `nums2`，返回满足以下条件的三元组总数：
- Type 1：`nums1[i]^2 == nums2[j] * nums2[k]`，其中 j < k
- Type 2：`nums2[i]^2 == nums1[j] * nums1[k]`，其中 j < k

## 解题思路

提取公共逻辑：对于数组 A 中的每个元素平方，统计数组 B 中有多少对 (j, k) 的乘积等于该平方。

用 Map 统计数组 B 中每个值出现的频率，然后：
- 对于相同的值 v，对数为 `freq[v] * (freq[v] - 1) / 2`（当 `target == v * v` 时）
- 对于不同的值对 (v1, v2)（v1 < v2），当 `v1 * v2 == target` 时，对数为 `freq[v1] * freq[v2]`

时间复杂度 O(n^2)。

## Solution

[SourceCode](./solution.js)
