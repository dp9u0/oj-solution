# [3162] Find the Number of Good Pairs I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-the-number-of-good-pairs-i/description/)

* algorithms
* Easy (86.38%)
* Likes:    170
* Dislikes: 16
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

1 <= n, m <= 50
1 <= nums1[i], nums2[j] <= 50
1 <= k <= 50


```

## 中文翻译

给定数组 nums1、nums2 和整数 k，统计满足 nums1[i] % (nums2[j] * k) == 0 的数对 (i, j) 个数。

## 解题思路

n, m <= 50，直接双重循环枚举。

时间复杂度：O(n*m)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
