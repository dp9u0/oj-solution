# [738] Monotone Increasing Digits

## Description

[LeetCode Problem Description](https://leetcode.com/problems/monotone-increasing-digits/description/)

* algorithms
* Medium (49.50%)
* Likes:    1407
* Dislikes: 115
* Testcase Example:  '10'

```md
An integer has monotone increasing digits if and only if each pair of adjacent digits x and y satisfy x <= y.
Given an integer n, return the largest number that is less than or equal to n with monotone increasing digits.

Example 1:

Input: n = 10
Output: 9

Example 2:

Input: n = 1234
Output: 1234

Example 3:

Input: n = 332
Output: 299


Constraints:

0 <= n <= 109


```

## Solution

[SourceCode](./solution.js)

## 中文翻译

一个整数的各位数字从左到右单调递增（每个相邻位 x <= y），称为"单调递增数字"。给定整数 n，返回 <= n 的最大单调递增数字。

**示例 1：** n = 10 → 9
**示例 2：** n = 1234 → 1234（本身就是）
**示例 3：** n = 332 → 299

**约束：** 0 <= n <= 10^9

## Approach

贪心：从右往左扫描，如果当前位 > 下一位（右侧），则当前位减1，并标记需要变为9的位置。

- 将数字转为数组
- 从右往左遍历，如果 digits[i] > digits[i+1]，则 digits[i]--，并记录 mark = i+1
- 从 mark 到末尾的所有位设为 9
- 转回数字

例如 332：从右到左，3>2 → digits[1]=2, mark=2；3>2 → digits[0]=2, mark=1。最终 digits[1..2]=9 → 299。

时间复杂度 O(log n)，空间复杂度 O(log n)。
