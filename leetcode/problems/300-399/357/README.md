# [357] Count Numbers with Unique Digits

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-numbers-with-unique-digits/description/)

* algorithms
* Medium (55.52%)
* Testcase Example:  '2'

```md
Given an integer n, return the count of all numbers with unique digits, x, where 0

Example 1:
Input: n = 2
Output: 91
Explanation: The answer should be the total numbers in the range of 0 ≤ x
Example 2:
Input: n = 0
Output: 1

Constraints:
0

```

## Solution

[SourceCode](./solution.js)

### 题目描述 (翻译)
给定一个整数 n，返回所有具有唯一数字的数字 x 的总数，其中 0 <= x < 10^n。

示例 1：
输入: n = 2
输出: 91
解释: 答案应该在 0 <= x < 100 范围内的数字总数，不包括包含重复数字的数（如 11, 22, 33, 44, 55, 66, 77, 88, 99），所以是 100 - 9 = 91 个。

示例 2：
输入: n = 0
输出: 1
解释: 0 <= x < 1, 所以只有 0 满足条件。

约束条件：
0 <= n <= 8

### 解题思路 (Approach)
这是一道排列组合题。
我们需要计算位数从 1 到 n 的所有各位数字互不相同的数的个数，然后将它们相加。
注意：当 n = 0 时，x 范围是 [0, 1)，只有 0，所以返回 1。
对于位数为 k 的数 (1 <= k <= 8)：
- 第一位不能是 0，有 9 种选择 (1-9)。
- 第二位可以包含 0，但不能和第一位相同，有 9 种选择。
- 第三位不能和前两位相同，有 8 种选择。
- ...
- 第 k 位有 10 - k + 1 种选择。

所以：
k=1: 10 个 (0-9) （特殊情况，这里把 0 算上了，如果按上面的乘法规则，第一位是9种，加上0就是10个）
k=2: 9 * 9 = 81 个
k=3: 9 * 9 * 8 = 648 个
...
由于我们要计算的是小于 10^n 的所有数，所以总数就是 sum(f(k)) 对于 1 <= k <= n，如果 n=0，单独返回 1。
