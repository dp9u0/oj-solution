# [624] Maximum Distance in Arrays

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-distance-in-arrays/description/)

* algorithms
* Medium (45.62%)
* Likes:    1514
* Dislikes: 122
* Testcase Example:  '[[1,2,3],[4,5],[1,2,3]]'

```md
You are given m arrays, where each array is sorted in ascending order.
You can pick up two integers from two different arrays (each array picks one) and calculate the distance. We define the distance between two integers a and b to be their absolute difference
a - b
.
Return the maximum distance.

Example 1:

Input: arrays = [[1,2,3],[4,5],[1,2,3]]
Output: 4
Explanation: One way to reach the maximum distance 4 is to pick 1 in the first or third array and pick 5 in the second array.

Example 2:

Input: arrays = [[1],[1]]
Output: 0


Constraints:

m == arrays.length
2 <= m <= 105
1 <= arrays[i].length <= 500
-104 <= arrays[i][j] <= 104
arrays[i] is sorted in ascending order.
There will be at most 105 integers in all the arrays.


```

## 题目翻译

给定 m 个已排序数组，从两个不同数组各选一个整数，求最大绝对差。

## 解题思路

贪心：最大差值一定来自某个数组的最小值和另一个数组的最大值。

一遍遍历，维护全局最小值和最大值。对于每个数组，用其最小值与当前全局最大值求差，用其最大值与当前全局最小值求差，取最大值。先计算再更新，保证两个值来自不同数组。

## Solution

[SourceCode](./solution.js)
