# [3080] Mark Elements on Array by Performing Queries

## Description

[LeetCode Problem Description](https://leetcode.com/problems/mark-elements-on-array-by-performing-queries/description/)

* algorithms
* Medium (49.23%)
* Likes:    130
* Dislikes: 28
* Testcase Example:  '[1,2,2,1,2,3,1]\n[[1,2],[3,3],[4,2]]'

```md
You are given a 0-indexed array nums of size n consisting of positive integers.
You are also given a 2D array queries of size m where queries[i] = [indexi, ki].
Initially all elements of the array are unmarked.
You need to apply m queries on the array in order, where on the ith query you do the following:

Mark the element at index indexi if it is not already marked.
Then mark ki unmarked elements in the array with the smallest values. If multiple such elements exist, mark the ones with the smallest indices. And if less than ki unmarked elements exist, then mark all of them.

Return an array answer of size m where answer[i] is the sum of unmarked elements in the array after the ith query.

Example 1:

Input: nums = [1,2,2,1,2,3,1], queries = [[1,2],[3,3],[4,2]]
Output: [8,3,0]
Explanation:
We do the following queries on the array:

Mark the element at index 1, and 2 of the smallest unmarked elements with the smallest indices if they exist, the marked elements now are nums = [1,2,2,1,2,3,1]. The sum of unmarked elements is 2 + 2 + 3 + 1 = 8.
Mark the element at index 3, since it is already marked we skip it. Then we mark 3 of the smallest unmarked elements with the smallest indices, the marked elements now are nums = [1,2,2,1,2,3,1]. The sum of unmarked elements is 3.
Mark the element at index 4, since it is already marked we skip it. Then we mark 2 of the smallest unmarked elements with the smallest indices if they exist, the marked elements now are nums = [1,2,2,1,2,3,1]. The sum of unmarked elements is 0.


Example 2:

Input: nums = [1,4,2,3], queries = [[0,1]]
Output: [7]
Explanation:  We do one query which is mark the element at index 0 and mark the smallest element among unmarked elements. The marked elements will be nums = [1,4,2,3], and the sum of unmarked elements is 4 + 3 = 7.


Constraints:

n == nums.length
m == queries.length
1 <= m <= n <= 105
1 <= nums[i] <= 105
queries[i].length == 2
0 <= indexi, ki <= n - 1


```

## 翻译

给定正整数数组 nums 和查询 queries，每个查询 [index, k]：先标记 index 处元素（若未标记），再标记 k 个值最小的未标记元素（相同值取小索引）。返回每次查询后未标记元素之和。

## 解题思路

先将所有元素按 (值, 索引) 排序，用指针依次取出。维护总 sum 和 marked 数组。每次查询：标记 index（减去对应值），然后从排序数组中取出 k 个未标记的元素。用 sorted index 指针跳过已标记的。总时间复杂度 O(n log n + m * k)，但 k 总和不超过 n，所以总体 O(n log n)。

## Solution

[SourceCode](./solution.js)
