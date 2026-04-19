# [1707] Maximum XOR With an Element From Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-xor-with-an-element-from-array/description/)

* algorithms
* Hard (57.83%)
* Likes:    1414
* Dislikes: 40
* Testcase Example:  '[0,1,2,3,4]\n[[3,1],[1,3],[5,6]]'

```md
You are given an array nums consisting of non-negative integers. You are also given a queries array, where queries[i] = [xi, mi].
The answer to the ith query is the maximum bitwise XOR value of xi and any element of nums that does not exceed mi. In other words, the answer is max(nums[j] XOR xi) for all j such that nums[j] <= mi. If all elements in nums are larger than mi, then the answer is -1.
Return an integer array answer where answer.length == queries.length and answer[i] is the answer to the ith query.

Example 1:

Input: nums = [0,1,2,3,4], queries = [[3,1],[1,3],[5,6]]
Output: [3,3,7]
Explanation:
1) 0 and 1 are the only two integers not greater than 1. 0 XOR 3 = 3 and 1 XOR 3 = 2. The larger of the two is 3.
2) 1 XOR 2 = 3.
3) 5 XOR 2 = 7.

Example 2:

Input: nums = [5,2,4,6,6,3], queries = [[12,4],[8,1],[6,3]]
Output: [15,-1,5]


Constraints:

1 <= nums.length, queries.length <= 105
queries[i].length == 2
0 <= nums[j], xi, mi <= 109


```

## 中文翻译

给定数组 nums 和查询 queries[i] = [xi, mi]，对每个查询找 nums 中不超过 mi 的元素与 xi 的最大异或值。

## 解题思路

离线处理 + 01 Trie。将 nums 排序，查询按 mi 排序。逐个处理查询，将 nums 中 <= mi 的元素插入 01 Trie，然后在 Trie 中查询与 xi 的最大异或值。

时间复杂度：O((n+q) * log(maxVal))，空间复杂度：O(n * log(maxVal))

## Solution

[SourceCode](./solution.js)
