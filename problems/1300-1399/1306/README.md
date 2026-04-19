# [1306] Jump Game III

## Description

[LeetCode Problem Description](https://leetcode.com/problems/jump-game-iii/description/)

* algorithms
* Medium (66.79%)
* Likes:    4341
* Dislikes: 118
* Testcase Example:  '[4,2,3,0,3,1,2]\n5'

```md
Given an array of non-negative integers arr, you are initially positioned at startindex of the array. When you are at index i, you can jumpto i + arr[i] or i - arr[i], check if you can reachany index with value 0.
Notice that you can not jump outside of the array at any time.

Example 1:

Input: arr = [4,2,3,0,3,1,2], start = 5
Output: true
Explanation:
All possible ways to reach at index 3 with value 0 are:
index 5 -> index 4 -> index 1 -> index 3
index 5 -> index 6 -> index 4 -> index 1 -> index 3

Example 2:

Input: arr = [4,2,3,0,3,1,2], start = 0
Output: true
Explanation:
One possible way to reach at index 3 with value 0 is:
index 0 -> index 4 -> index 1 -> index 3

Example 3:

Input: arr = [3,0,2,1,2], start = 2
Output: false
Explanation: There is no way to reach at index 1 with value 0.


Constraints:

1 <= arr.length <= 5 * 104
0 <= arr[i] <arr.length
0 <= start < arr.length


```

## 翻译

给定非负整数数组 `arr` 和起始位置 `start`，从位置 i 可以跳到 `i + arr[i]` 或 `i - arr[i]`（不能跳出数组）。判断是否能到达任意一个值为 0 的位置。

## Approach

**BFS / DFS。** 从 start 出发，BFS 或 DFS 遍历所有可达位置，用 visited 数组防止重复访问。每到一个位置检查 arr[i] === 0。

时间复杂度：O(n)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
