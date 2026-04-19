# [3747] Count Distinct Integers After Removing Zeros

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-distinct-integers-after-removing-zeros/description/)

* algorithms
* Medium (22.63%)
* Likes:    118
* Dislikes: 10
* Testcase Example:  '10'

```md
You are given a positive integer n.
For every integer x from 1 to n, we write down the integer obtained by removing all zeros from the decimal representation of x.
Return an integer denoting the number of distinct integers written down.

Example 1:

Input: n = 10
Output: 9
Explanation:
The integers we wrote down are 1, 2, 3, 4, 5, 6, 7, 8, 9, 1. There are 9 distinct integers (1, 2, 3, 4, 5, 6, 7, 8, 9).

Example 2:

Input: n = 3
Output: 3
Explanation:
The integers we wrote down are 1, 2, 3. There are 3 distinct integers (1, 2, 3).


Constraints:

1 <= n <= 1015


```

## 题目翻译

给定正整数 n（可达 10^15），对每个 1 到 n 的整数 x，去掉其十进制中的所有 0。返回不同结果的个数。

## 解题思路

去掉 0 后的结果是不含 0 的正整数。结果 v 可达当且仅当 v ≤ n（v 本身就是合法的 x）。所以答案就是 [1, n] 中不含 0 的正整数个数。

用数位 DP 计算：对 n 的每一位，选择比该位小的非零数字，剩余位自由选择（9^(剩余位数)）。加上位数更少的情况。

时间复杂度 O(log n)

## Solution

[SourceCode](./solution.js)
