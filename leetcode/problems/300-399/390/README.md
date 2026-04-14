# [390] Elimination Game

## Description

[LeetCode Problem Description](https://leetcode.com/problems/elimination-game/description/)

* algorithms
* Medium (46.19%)
* Likes:    1746
* Dislikes: 763
* Testcase Example:  '9'

```md
You have a list arr of all integers in the range [1, n] sorted in a strictly increasing order. Apply the following algorithm on arr:

Starting from left to right, remove the first number and every other number afterward until you reach the end of the list.
Repeat the previous step again, but this time from right to left, remove the rightmost number and every other number from the remaining numbers.
Keep repeating the steps again, alternating left to right and right to left, until a single number remains.

Given the integer n, return the last number that remains in arr.

Example 1:

Input: n = 9
Output: 6
Explanation:
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
arr = [2, 4, 6, 8]
arr = [2, 6]
arr = [6]

Example 2:

Input: n = 1
Output: 1


Constraints:

1 <= n <= 109


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

你有一个包含 [1, n] 范围内所有整数的列表 arr，按严格递增排序。对其执行以下算法：

从左到右，移除第一个数以及之后每隔一个的数。然后从右到左，移除最右边的数以及之后每隔一个的数。交替重复，直到只剩一个数。返回最后剩下的数。

## 解题思路

模拟消除过程，跟踪四个变量：`head`（当前剩余序列的首元素）、`step`（相邻元素间距）、`remaining`（剩余元素个数）、`left`（当前是否从左到右）。

每轮消除后：
- `remaining` 减半
- `step` 翻倍
- `head` 只有在从左到右消除，或从右到左消除且剩余元素为奇数时才需要移动

时间复杂度 O(log n)。
