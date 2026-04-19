# [823] Binary Trees With Factors

## Description

[LeetCode Problem Description](https://leetcode.com/problems/binary-trees-with-factors/description/)

* algorithms
* Medium (53.07%)
* Likes:    3374
* Dislikes: 262
* Testcase Example:  '[2,4]'

```md
Given an array of unique integers, arr, where each integer arr[i] is strictly greater than 1.
We make a binary tree using these integers, and each number may be used for any number of times. Each non-leaf node&#39;s value should be equal to the product of the values of its children.
Return the number of binary trees we can make. The answer may be too large so return the answer modulo 109 + 7.

Example 1:

Input: arr = [2,4]
Output: 3
Explanation: We can make these trees: [2], [4], [4, 2, 2]
Example 2:

Input: arr = [2,4,5,10]
Output: 7
Explanation: We can make these trees: [2], [4], [5], [10], [4, 2, 2], [10, 2, 5], [10, 5, 2].

Constraints:

1 <= arr.length <= 1000
2 <= arr[i] <= 109
All the values of arr are unique.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定唯一整数数组 arr（每个 > 1），用这些整数构建二叉树（每个数可用多次）。每个非叶节点的值等于其两个子节点值的乘积。返回可以构建的不同二叉树数量，模 10^9 + 7。

## 解题思路

排序 arr，用 Map 存储 dp 值。按升序处理每个值 v：
- dp[v] = 1（仅叶节点）
- 枚举所有 a 使得 a | v 且 a 在 arr 中，令 b = v / a
- 若 b 也在 arr 中，则 dp[v] += dp[a] * dp[b]

最终答案为所有 dp 值之和。O(n^2)。
