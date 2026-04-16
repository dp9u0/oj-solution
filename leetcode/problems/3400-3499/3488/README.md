# [3488] Closest Equal Element Queries

## Description

[LeetCode Problem Description](https://leetcode.com/problems/closest-equal-element-queries/description/)

* algorithms
* Medium (32.97%)
* Likes:    462
* Dislikes: 33
* Testcase Example:  '[1,3,1,4,1,3,2]\n[0,3,5]'

```md
You are given a circular array nums and an array queries.
For each query i, you have to find the following:

The minimum distance between the element at index queries[i] and any other index j in the circular array, where nums[j] == nums[queries[i]]. If no such index exists, the answer for that query should be -1.

Return an array answer of the same size as queries, where answer[i] represents the result for query i.

Example 1:

Input: nums = [1,3,1,4,1,3,2], queries = [0,3,5]
Output: [2,-1,3]
Explanation:

Query 0: The element at queries[0] = 0 is nums[0] = 1. The nearest index with the same value is 2, and the distance between them is 2.
Query 1: The element at queries[1] = 3 is nums[3] = 4. No other index contains 4, so the result is -1.
Query 2: The element at queries[2] = 5 is nums[5] = 3. The nearest index with the same value is 1, and the distance between them is 3 (following the circular path: 5 -> 6 -> 0 -> 1).


Example 2:

Input: nums = [1,2,3,4], queries = [0,1,2,3]
Output: [-1,-1,-1,-1]
Explanation:
Each value in nums is unique, so no index shares the same value as the queried element. This results in -1 for all queries.


Constraints:

1 <= queries.length <= nums.length <= 105
1 <= nums[i] <= 106
0 <= queries[i] < nums.length


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定一个环形数组 `nums` 和一个查询数组 `queries`。对于每个查询 `queries[i]`，找到 `nums[queries[i]]` 在环形数组中与其它相同值元素的最小距离。如果不存在其他相同值的元素，返回 -1。

## 解题思路

**预处理 + 哈希分组**

1. 用 Map 按值分组，记录每个值出现的所有下标（已排序）
2. 对每个值的出现列表，每个下标只需检查其在列表中相邻的两个元素（前一个和后一个，环形）
3. 环形距离：`min(|a-b|, n - |a-b|)`
4. 预计算每个下标的答案，查询时 O(1) 直接取

时间复杂度 O(n + q)，空间复杂度 O(n)。
