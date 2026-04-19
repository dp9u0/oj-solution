# [3868] Minimum Cost to Equalize Arrays Using Swaps

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-cost-to-equalize-arrays-using-swaps/description/)

* algorithms
* Medium (48.31%)
* Likes:    66
* Dislikes: 2
* Testcase Example:  '[10,20]\n[20,10]'

```md
You are given two integer arrays nums1 and nums2 of size n.
You can perform the following two operations any number of times on these two arrays:

Swap within the same array: Choose two indices i and j. Then, choose either to swap nums1[i] and nums1[j], or nums2[i] and nums2[j]. This operation is free of charge.
Swap between two arrays: Choose an index i. Then, swap nums1[i] and nums2[i]. This operation incurs a cost of 1.

Return an integer denoting the minimum cost to make nums1 and nums2 identical. If this is not possible, return -1.

Example 1:

Input: nums1 = [10,20], nums2 = [20,10]
Output: 0
Explanation:

Swap nums2[0] = 20 and nums2[1] = 10.

nums2 becomes [10, 20].
This operation is free of charge.


nums1 and nums2 are now identical. The cost is 0.


Example 2:

Input: nums1 = [10,10], nums2 = [20,20]
Output: 1
Explanation:

Swap nums1[0] = 10 and nums2[0] = 20.

nums1 becomes [20, 10].
nums2 becomes [10, 20].
This operation costs 1.


Swap nums2[0] = 10 and nums2[1] = 20.

nums2 becomes [20, 10].
This operation is free of charge.


nums1 and nums2 are now identical. The cost is 1.


Example 3:

Input: nums1 = [10,20], nums2 = [30,40]
Output: -1
Explanation:
It is impossible to make the two arrays identical. Therefore, the answer is -1.


Constraints:

2 <= n == nums1.length == nums2.length <= 8 * 104
1 <= nums1[i], nums2[i] <= 8 * 104


```

## 题目翻译

给定两个等长整数数组 nums1 和 nums2。可以进行以下操作：
1. 同一数组内交换任意两个位置：免费
2. 交换 nums1[i] 和 nums2[i]：花费 1

使两个数组完全相同的最小花费，不可能则返回 -1。

## 解题思路

关键观察：由于数组内交换免费，只关心每个数组的值的多重集，不关心顺序。

1. 可行性：每个值在两个数组中的总出现次数必须为偶数（才能平分到两个数组）
2. 最小花费：surplus[v] = (nums1中v的次数 - nums2中v的次数) / 2，表示 nums1 多出的 v 的数量
3. 答案 = 所有正值 surplus 之和（每次交换可以修正 1 个 surplus）

时间复杂度 O(n)，空间复杂度 O(n)

## Solution

[SourceCode](./solution.js)
