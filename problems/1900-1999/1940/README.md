# [1940] 排序数组之间的最长公共子序列

## Description


```md
https://leetcode.cn/problems/longest-common-subsequence-between-sorted-arrays/description/
* algorithms
* Medium (72.41%)
* Likes:    11
* Dislikes: -
* Testcase Example:  '[[1,3,4],[1,4,7,9]]'
给定一个由整数数组组成的数组 arrays，其中 arrays[i] 是 严格递增 排序的，返回一个 所有 数组均包含的 最长公共子序列 的整数数组。
子序列 是从另一个序列派生出来的序列，删除一些元素或不删除任何元素，而不改变其余元素的顺序。
示例1:
输入: arrays = [[1,3,4],
[1,4,7,9]]
输出: [1,4]
解释: 这两个数组中的最长子序列是[1,4]。
示例 2:
输入: arrays = [[2,3,6,8],
[1,2,3,5,6,7,10],
[2,3,4,6,9]]
输出: [2,3,6]
解释: 这三个数组中的最长子序列是 [2,3,6]。
示例 3:
输入: arrays = [[1,2,3,4,5],
[6,7,8]]
输出: []
解释: 这两个数组之间没有公共子序列。

限制条件:
2 <= arrays.length <= 100
1 <= arrays[i].length <= 100
1 <= arrays[i][j] <= 100
arrays[i] 是严格递增排序.
Hint 1: Fix one array.
Hint 2: Choose the next array and get the common elements.
Hint 3: Use the common elements as the new fixed array and keep merging with the rest of the arrays.

```

## Solution

[SourceCode](./solution.js)

## English Translation

Given an array of integer arrays `arrays` where each `arrays[i]` is strictly increasing, return an integer array representing the longest common subsequence present in all arrays.

Example 1:
Input: arrays = [[1,3,4],[1,4,7,9]]
Output: [1,4]

Example 2:
Input: arrays = [[2,3,6,8],[1,2,3,5,6,7,10],[2,3,4,6,9]]
Output: [2,3,6]

Example 3:
Input: arrays = [[1,2,3,4,5],[6,7,8]]
Output: []

Constraints: 2 <= arrays.length <= 100, 1 <= arrays[i].length <= 100, 1 <= arrays[i][j] <= 100; each arrays[i] is strictly increasing.

## Approach

Within a strictly increasing array every value is unique, so a common subsequence is exactly the set of values present in every array (ascending order is automatic). Count, for each value, how many arrays contain it; the answer is the values whose count equals the number of arrays, in increasing order.

Time O(total elements + maxValue) with maxValue <= 100.
