# [3908] Valid Digit Number

## Description

[LeetCode Problem Description](https://leetcode.com/problems/valid-digit-number/description/)

* algorithms
* Easy (70.74%)
* Likes:    20
* Dislikes: -
* Testcase Example:  '101\n0'

```md
You are given an integer n and a digit x.
A number is considered valid if:

It contains at least one occurrence of digit x, and
It does not start with digit x.

Return true if n is valid, otherwise return false.

Example 1:

Input: n = 101, x = 0
Output: true
Explanation:
The number contains digit 0 at index 1. It does not start with 0, so it satisfies both conditions. Thus, the answer is true​​​​​​​.

Example 2:

Input: n = 232, x = 2
Output: false
Explanation:
The number starts with 2, which violates the condition. Thus, the answer is false.

Example 3:

Input: n = 5, x = 1
Output: false
Explanation:
The number does not contain digit 1. Thus, the answer is false.


Constraints:

0 <= n <= 105​​​​​​​
0 <= x <= 9


```

## 题目翻译（中文）

给定一个整数 `n` 和一个数字 `x`。

如果一个数满足以下条件，则称它是**有效的**：

- 它至少包含一次数字 `x`；
- 它不以数字 `x` 开头。

如果 `n` 是有效的，返回 `true`，否则返回 `false`。

**示例 1：**

输入：n = 101, x = 0
输出：true
解释：数字 101 在下标 1 处包含数字 0，且不以 0 开头，满足两个条件，因此返回 true。

**示例 2：**

输入：n = 232, x = 2
输出：false
解释：数字 232 以 2 开头，违反了条件，因此返回 false。

**示例 3：**

输入：n = 5, x = 1
输出：false
解释：数字 5 不包含数字 1，因此返回 false。

**约束：**

- `0 <= n <= 10^5`
- `0 <= x <= 9`

## 解题思路

直接模拟：

1. 将 `n` 转为字符串 `s`，将 `x` 转为字符 `d`。
2. 有效条件为：`s` 中包含字符 `d`（`s.includes(d)`），并且 `s` 的首字符不等于 `d`。
3. 两个条件同时满足返回 `true`，否则返回 `false`。

注意边界情况：`n = 0` 时字符串为 `"0"`，若 `x = 0` 则因为以 `0` 开头而不有效；若 `x != 0` 则因为不包含 `x` 而不有效。

时间复杂度：O(k)，k 为 `n` 的位数（最多 6 位，可视为 O(1)）。
空间复杂度：O(k)。

## Solution

[SourceCode](./solution.js)
