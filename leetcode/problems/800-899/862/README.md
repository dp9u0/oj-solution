# [862] Shortest Subarray with Sum at Least K

## Description

[LeetCode Problem Description](https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/description/)

* algorithms
* Hard (32.70%)
* Likes:    5196
* Dislikes: 145
* Testcase Example:  '[1]\n1'

```md
Given an integer array nums and an integer k, return the length of the shortest non-empty subarray of nums with a sum of at least k. If there is no such subarray, return -1.
A subarray is a contiguous part of an array.

Example 1:
Input: nums = [1], k = 1
Output: 1
Example 2:
Input: nums = [1,2], k = 4
Output: -1
Example 3:
Input: nums = [2,-1,2], k = 3
Output: 3


Constraints:

1 <= nums.length <= 105
-105 <= nums[i] <= 105
1 <= k <= 109


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定整数数组 nums（可能含负数）和整数 k，返回和至少为 k 的最短非空子数组长度。不存在则返回 -1。

## 解题思路

**前缀和 + 单调双端队列**

由于数组可能含负数，前缀和不一定单调，不能简单用滑动窗口。用单调双端队列维护前缀和的下标：

1. 计算前缀和数组 prefix
2. 遍历 prefix，对每个 i，检查队首 j 是否满足 prefix[i] - prefix[j] >= k，若满足则更新答案并弹出队首
3. 入队前，弹出队尾所有 prefix[deque[tail]] >= prefix[i] 的下标（保证单调递增）
4. 将 i 入队

时间复杂度 O(n)，空间复杂度 O(n)。
