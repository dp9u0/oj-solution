# [3685] Subsequence Sum After Capping Elements

## Description

[LeetCode Problem Description](https://leetcode.com/problems/subsequence-sum-after-capping-elements/description/)

* algorithms
* Medium (25.31%)
* Likes:    163
* Dislikes: 15
* Testcase Example:  '[4,3,2,4]\n5'

```md
You are given an integer array nums of size n and a positive integer k.
An array capped by value x is obtained by replacing every element nums[i] with min(nums[i], x).
For each integer x from 1 to n, determine whether it is possible to choose a subsequence from the array capped by x such that the sum of the chosen elements is exactly k.
Return a 0-indexed boolean array answer of size n, where answer[i] is true if it is possible when using x = i + 1, and false otherwise.

Example 1:

Input: nums = [4,3,2,4], k = 5
Output: [false,false,true,true]
Explanation:

For x = 1, the capped array is [1, 1, 1, 1]. Possible sums are 1, 2, 3, 4, so it is impossible to form a sum of 5.
For x = 2, the capped array is [2, 2, 2, 2]. Possible sums are 2, 4, 6, 8, so it is impossible to form a sum of 5.
For x = 3, the capped array is [3, 3, 2, 3]. A subsequence [2, 3] sums to 5, so it is possible.
For x = 4, the capped array is [4, 3, 2, 4]. A subsequence [3, 2] sums to 5, so it is possible.


Example 2:

Input: nums = [1,2,3,4,5], k = 3
Output: [true,true,true,true,true]
Explanation:
For every value of x, it is always possible to select a subsequence from the capped array that sums exactly to 3.


Constraints:

1 <= n == nums.length <= 4000
1 <= nums[i] <= n
1 <= k <= 4000


```

## 题目翻译

给定数组 nums（长度 n）和正整数 k，对每个 x∈[1,n]，将数组中每个元素 cap 到 min(nums[i], x)，判断能否选子序列使和恰好为 k。

## 解题思路

**按 x 递增，逐步增加元素值**

当 x 从 v 变为 v+1 时，所有原本 > v 的元素从 v 变为 v+1（增加1）。维护一个 bitset 表示可达和集合，对每个新增的 "增量1"，用 bitset 移位来更新可达和。O(n * k / 64) 时间。

## Solution

[SourceCode](./solution.js)
