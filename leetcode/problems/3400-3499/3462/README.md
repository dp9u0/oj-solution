# [3462] Maximum Sum With at Most K Elements

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-sum-with-at-most-k-elements/description/)

* algorithms
* Medium (60.66%)
* Likes:    110
* Dislikes: 4
* Testcase Example:  '[[1,2],[3,4]]\n[1,2]\n2'

```md
You are given a 2D integer matrix grid of size n x m, an integer array limits of length n, and an integer k. The task is to find the maximum sum of at most k elements from the matrix grid such that:


The number of elements taken from the ith row of grid does not exceed limits[i].


Return the maximum sum.

Example 1:

Input: grid = [[1,2],[3,4]], limits = [1,2], k = 2
Output: 7
Explanation:

From the second row, we can take at most 2 elements. The elements taken are 4 and 3.
The maximum possible sum of at most 2 selected elements is 4 + 3 = 7.


Example 2:

Input: grid = [[5,3,7],[8,2,6]], limits = [2,2], k = 3
Output: 21
Explanation:

From the first row, we can take at most 2 elements. The element taken is 7.
From the second row, we can take at most 2 elements. The elements taken are 8 and 6.
The maximum possible sum of at most 3 selected elements is 7 + 8 + 6 = 21.



Constraints:

n == grid.length == limits.length
m == grid[i].length
1 <= n, m <= 500
0 <= grid[i][j] <= 105
0 <= limits[i] <= m
0 <= k <= min(n * m, sum(limits))


```

## 中文翻译

给定 n x m 矩阵 grid、数组 limits 和整数 k。从每行最多取 limits[i] 个元素，总共最多取 k 个元素，求最大和。

## 解题思路

贪心。对每行排序取前 limits[i] 个最大值，将所有候选值放入一个数组，排序后取前 k 个最大值求和。

## Solution

[SourceCode](./solution.js)
