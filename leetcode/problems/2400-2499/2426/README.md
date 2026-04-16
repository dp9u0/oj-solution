# [2426] Number of Pairs Satisfying Inequality

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-pairs-satisfying-inequality/description/)

* algorithms
* Hard (47.03%)
* Likes:    580
* Dislikes: 11
* Testcase Example:  '[3,2,5]\n[2,2,1]\n1'

```md
You are given two 0-indexed integer arrays nums1 and nums2, each of size n, and an integer diff. Find the number of pairs (i, j) such that:

0 <= i < j <= n - 1 and
nums1[i] - nums1[j] <= nums2[i] - nums2[j] + diff.

Return the number of pairs that satisfy the conditions.

Example 1:

Input: nums1 = [3,2,5], nums2 = [2,2,1], diff = 1
Output: 3
Explanation:
There are 3 pairs that satisfy the conditions:
1. i = 0, j = 1: 3 - 2 <= 2 - 2 + 1. Since i < j and 1 <= 1, this pair satisfies the conditions.
2. i = 0, j = 2: 3 - 5 <= 2 - 1 + 1. Since i < j and -2 <= 2, this pair satisfies the conditions.
3. i = 1, j = 2: 2 - 5 <= 2 - 1 + 1. Since i < j and -3 <= 2, this pair satisfies the conditions.
Therefore, we return 3.

Example 2:

Input: nums1 = [3,-1], nums2 = [-2,2], diff = -1
Output: 0
Explanation:
Since there does not exist any pair that satisfies the conditions, we return 0.


Constraints:

n == nums1.length == nums2.length
2 <= n <= 105
-104 <= nums1[i], nums2[i] <= 104
-104 <= diff <= 104


```

## 翻译

给定两个等长数组 nums1, nums2 和整数 diff，统计满足 0 <= i < j < n 且 nums1[i]-nums1[j] <= nums2[i]-nums2[j]+diff 的数对 (i,j) 数量。

## 解题思路

令 d[i] = nums1[i] - nums2[i]，不等式变为 d[i] <= d[j] + diff，即 d[i] - diff <= d[j]。

归并排序计数：对数组 d 做归并排序，在合并两个已排序半区间时，用双指针统计左半中 d[i] <= d[j]+diff 的对数。右半元素递增，目标值递增，指针单调前进。

O(n log n) 时间。

## Solution

[SourceCode](./solution.js)
