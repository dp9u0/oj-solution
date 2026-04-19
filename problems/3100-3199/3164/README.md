# [3164] Find the Number of Good Pairs II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-the-number-of-good-pairs-ii/description/)

* algorithms
* Medium (26.64%)
* Likes:    257
* Dislikes: 40
* Testcase Example:  '[1,3,4]\n[1,3,4]\n1'

```md
You are given 2 integer arrays nums1 and nums2 of lengths n and m respectively. You are also given a positive integer k.
A pair (i, j) is called good if nums1[i] is divisible by nums2[j] * k (0 <= i <= n - 1, 0 <= j <= m - 1).
Return the total number of good pairs.

Example 1:

Input: nums1 = [1,3,4], nums2 = [1,3,4], k = 1
Output: 5
Explanation:
The 5 good pairs are (0, 0), (1, 0), (1, 1), (2, 0), and (2, 2).
Example 2:

Input: nums1 = [1,2,4,12], nums2 = [2,4], k = 3
Output: 2
Explanation:
The 2 good pairs are (3, 0) and (3, 1).


Constraints:

1 <= n, m <= 105
1 <= nums1[i], nums2[j] <= 106
1 <= k <= 103


```

## 题目翻译

给定两个长度分别为 n 和 m 的整数数组 `nums1` 和 `nums2`，以及一个正整数 k。如果 `nums1[i]` 能被 `nums2[j] * k` 整除，则称 `(i, j)` 是一个好对。返回好对的总数。

## 解题思路

**枚举因子计数法**。

- 条件：`nums1[i] % (nums2[j] * k) == 0`，即 `nums2[j] * k` 是 `nums1[i]` 的因子。
- n, m <= 10^5，暴力 O(nm) 会超时。
- 优化：用哈希表统计 `nums1` 中每个值的频次，再统计 `nums2[j] * k` 的频次。
- 对于 `nums1` 中每个值 x，枚举 x 的所有因子 d，如果 d 存在于 `nums2*k` 的频次表中，则累加频次。
- 枚举因子 O(sqrt(x))，nums1[i] <= 10^6，总复杂度可控。

## Solution

[SourceCode](./solution.js)
