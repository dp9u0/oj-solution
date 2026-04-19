# [2389] Longest Subsequence With Limited Sum

## Description

[LeetCode Problem Description](https://leetcode.com/problems/longest-subsequence-with-limited-sum/description/)

* algorithms
* Easy (73.50%)
* Likes:    2145
* Dislikes: 198
* Testcase Example:  '[4,5,2,1]\n[3,10,21]'

```md
You are given an integer array nums of length n, and an integer array queries of length m.
Return an array answer of length m where answer[i] is the maximum size of a subsequence that you can take from nums such that the sum of its elements is less than or equal to queries[i].
A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.

Example 1:

Input: nums = [4,5,2,1], queries = [3,10,21]
Output: [2,3,4]
Explanation: We answer the queries as follows:
- The subsequence [2,1] has a sum less than or equal to 3. It can be proven that 2 is the maximum size of such a subsequence, so answer[0] = 2.
- The subsequence [4,5,1] has a sum less than or equal to 10. It can be proven that 3 is the maximum size of such a subsequence, so answer[1] = 3.
- The subsequence [4,5,2,1] has a sum less than or equal to 21. It can be proven that 4 is the maximum size of such a subsequence, so answer[2] = 4.

Example 2:

Input: nums = [2,3,4,5], queries = [1]
Output: [0]
Explanation: The empty subsequence is the only subsequence that has a sum less than or equal to 1, so answer[0] = 0.

Constraints:

n == nums.length
m == queries.length
1 <= n, m <= 1000
1 <= nums[i], queries[i] <= 106


```

## 翻译

给定整数数组 `nums` 和查询数组 `queries`，对每个查询 `queries[i]`，返回 `nums` 中元素和不超过 `queries[i]` 的最长子序列的长度。子序列可通过删除某些元素得到。

## Approach

排序 + 前缀和 + 二分查找。将 nums 排序后计算前缀和，要使子序列最长，贪心地选最小的元素。对每个查询，在前缀和中二分查找最后一个 ≤ queries[i] 的位置即可。

时间复杂度 O(n log n + m log n)，空间复杂度 O(n)。

## Solution

[SourceCode](./solution.js)
