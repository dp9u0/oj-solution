# [2865] Beautiful Towers I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/beautiful-towers-i/description/)

* algorithms
* Medium (44.46%)
* Likes:    368
* Dislikes: 60
* Testcase Example:  '[5,3,4,1,1]'

```md
You are given an array heights of n integers representing the number of bricks in n consecutive towers. Your task is to remove some bricks to form a mountain-shaped tower arrangement. In this arrangement, the tower heights are non-decreasing, reaching a maximum peak value with one or multiple consecutive towers and then non-increasing.
Return the maximum possible sum of heights of a mountain-shaped tower arrangement.

Example 1:

Input: heights = [5,3,4,1,1]
Output: 13
Explanation:
We remove some bricks to make heights =[5,3,3,1,1], the peak is at index 0.

Example 2:

Input: heights = [6,5,3,9,2,7]
Output: 22
Explanation:
We remove some bricks to make heights =[3,3,3,9,2,2], the peak is at index 3.

Example 3:

Input: heights = [3,2,5,5,2,3]
Output: 18
Explanation:
We remove some bricks to make heights = [2,2,5,5,2,2], the peak is at index 2 or 3.


Constraints:

1 <= n == heights.length <= 103
1 <= heights[i] <= 109


```

## 题目翻译

给定一个数组 `heights`，表示 n 个连续塔的砖块数。你可以移除一些砖块形成"山形"塔排列：塔高度先非递减，到达一个或多个连续峰顶后非递增。
返回山形排列的最大高度和。

## 解题思路

枚举每个位置作为峰顶，分别计算左侧非递减的最大和与右侧非递减（反向）的最大和。

- 对于位置 i 作为峰顶：
  - 左侧：从左到右，每个位置取 `min(原高度, 前一个高度)`，保证非递减。
  - 右侧：从右到左，同理保证非递减。
- 枚举所有峰顶位置，取最大总和。

时间复杂度 O(n^2)，空间复杂度 O(n)。由于 n <= 10^3，完全可行。

## Solution

[SourceCode](./solution.js)
