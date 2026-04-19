# [3489] Zero Array Transformation IV

## Description

[LeetCode Problem Description](https://leetcode.com/problems/zero-array-transformation-iv/description/)

* algorithms
* Medium (31.10%)
* Likes:    144
* Dislikes: 22
* Testcase Example:  '[2,0,2]\n[[0,2,1],[0,2,1],[1,1,3]]'

```md
You are given an integer array nums of length n and a 2D array queries, where queries[i] = [li, ri, vali].
Each queries[i] represents the following action on nums:

Select a subset of indices in the range [li, ri] from nums.
Decrement the value at each selected index by exactly vali.

A Zero Array is an array with all its elements equal to 0.
Return the minimum possible non-negative value of k, such that after processing the first k queries in sequence, nums becomes a Zero Array. If no such k exists, return -1.

Example 1:

Input: nums = [2,0,2], queries = [[0,2,1],[0,2,1],[1,1,3]]
Output: 2
Explanation:

For query 0 (l = 0, r = 2, val = 1):

Decrement the values at indices [0, 2] by 1.
The array will become [1, 0, 1].


For query 1 (l = 0, r = 2, val = 1):

Decrement the values at indices [0, 2] by 1.
The array will become [0, 0, 0], which is a Zero Array. Therefore, the minimum value of k is 2.




Example 2:

Input: nums = [4,3,2,1], queries = [[1,3,2],[0,2,1]]
Output: -1
Explanation:
It is impossible to make nums a Zero Array even after all the queries.

Example 3:

Input: nums = [1,2,3,2,1], queries = [[0,1,1],[1,2,1],[2,3,2],[3,4,1],[4,4,1]]
Output: 4
Explanation:

For query 0 (l = 0, r = 1, val = 1):

Decrement the values at indices [0, 1] by 1.
The array will become [0, 1, 3, 2, 1].


For query 1 (l = 1, r = 2, val = 1):

Decrement the values at indices [1, 2] by 1.
The array will become [0, 0, 2, 2, 1].


For query 2 (l = 2, r = 3, val = 2):

Decrement the values at indices [2, 3] by 2.
The array will become [0, 0, 0, 0, 1].


For query 3 (l = 3, r = 4, val = 1):

Decrement the value at index 4 by 1.
The array will become [0, 0, 0, 0, 0]. Therefore, the minimum value of k is 4.




Example 4:

Input: nums = [1,2,3,2,6], queries = [[0,1,1],[0,2,1],[1,4,2],[4,4,4],[3,4,1],[4,4,5]]
Output: 4


Constraints:

1 <= nums.length <= 10
0 <= nums[i] <= 1000
1 <= queries.length <= 1000
queries[i] = [li, ri, vali]
0 <= li <= ri < nums.length
1 <= vali <= 10


```

## 题目翻译

给定数组 nums 和 queries，每个 query 为 [l, r, val]，可选择 [l,r] 范围内的下标子集，对每个选中的下标减去 val。求最小 k 使得前 k 个 query 能使 nums 变为全零数组，不可能则返回 -1。

## 解题思路

**逐位独立 + 子集和 DP（0/1 背包）**

关键观察：每个位置 i 独立，需要从覆盖 i 的 queries 中选一个子集，使得这些 query 的 val 之和恰好等于 nums[i]。

逐个处理 query，对每个位置维护 0/1 背包 dp（可达和集合）。每处理一个 query 后检查所有位置是否都可达目标值。

复杂度：O(q × n × max(nums[i]))，n ≤ 10, q ≤ 1000, max(nums[i]) ≤ 1000，总共约 10^7，可行。

## Solution

[SourceCode](./solution.js)
