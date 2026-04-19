# [3165] Maximum Sum of Subsequence With Non-adjacent Elements

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-sum-of-subsequence-with-non-adjacent-elements/description/)

* algorithms
* Hard (15.84%)
* Likes:    158
* Dislikes: 32
* Testcase Example:  '[3,5,9]\n[[1,-2],[0,-3]]'

```md
You are given an array nums consisting of integers. You are also given a 2D array queries, where queries[i] = [posi, xi].
For query i, we first set nums[posi] equal to xi, then we calculate the answer to query i which is the maximum sum of a subsequence of nums where no two adjacent elements are selected.
Return the sum of the answers to all queries.
Since the final answer may be very large, return it modulo 109 + 7.
A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.

Example 1:

Input: nums = [3,5,9], queries = [[1,-2],[0,-3]]
Output: 21
Explanation:
After the 1st query, nums = [3,-2,9] and the maximum sum of a subsequence with non-adjacent elements is 3 + 9 = 12.
After the 2nd query, nums = [-3,-2,9] and the maximum sum of a subsequence with non-adjacent elements is 9.

Example 2:

Input: nums = [0,-1], queries = [[0,-5]]
Output: 0
Explanation:
After the 1st query, nums = [-5,-1] and the maximum sum of a subsequence with non-adjacent elements is 0 (choosing an empty subsequence).


Constraints:

1 <= nums.length <= 5 * 104
-105 <= nums[i] <= 105
1 <= queries.length <= 5 * 104
queries[i] == [posi, xi]
0 <= posi <= nums.length - 1
-105 <= xi <= 105


```

## 翻译

给定数组 nums 和 queries[i]=[pos, x]，每次将 nums[pos] 改为 x，然后求最大不相邻子序列和。返回所有查询答案之和模 10^9+7。

## 解题思路

线段树 + max-plus 矩阵乘法。经典 House Robber DP 可表示为 2×2 矩阵在 max-plus 半环上的乘法：M[i]=[[0,max(0,nums[i])],[0,-∞]]。线段树每个节点存储区间矩阵积，单点更新 O(log n)，查询 O(1)。总 O((n+q)log n)。

## Solution

[SourceCode](./solution.js)
