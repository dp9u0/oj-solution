# [372] Super Pow

## Description

[LeetCode Problem Description](https://leetcode.com/problems/super-pow/description/)

* algorithms
* Medium (36.68%)
* Testcase Example:  '2\n[3]'

```md
Your task is to calculate a^b mod 1337 where a is a positive integer and b is an extremely large positive integer given in the form of an array.

Example 1:
Input: a = 2, b = [3]
Output: 8
Example 2:
Input: a = 2, b = [1,0]
Output: 1024
Example 3:
Input: a = 1, b = [4,3,3,8,5,2]
Output: 1

Constraints:
1
1
0
b does not contain leading zeros.

```

## Solution

[SourceCode](./solution.js)

### 题目描述 (翻译)
你的任务是计算 `a^b mod 1337`，其中 `a` 是一个正整数，`b` 是一个以数组形式给出的极大正整数。

示例 1:
输入: a = 2, b = [3]
输出: 8

示例 2:
输入: a = 2, b = [1,0]
输出: 1024

示例 3:
输入: a = 1, b = [4,3,3,8,5,2]
输出: 1

约束条件：
1 <= a <= 2^31 - 1
1 <= b.length <= 2000
0 <= b[i] <= 9
`b` 不包含前导零。

### 解题思路 (Approach)
这是一道关于大数快速幂以及模运算的题目。
我们知道指数法则：`a^(10x+y) = (a^10)^x * a^y` 或者 `a^[...x, y] = (a^[...x])^10 * a^y`
并且在每一步中，由于取模分配律：`(x * y) % m = [(x % m) * (y % m)] % m`。

所以，我们可以从高位到低位遍历数组 `b`：
假设初始结果 `res = 1`。
对于数组 `b` 中的每一个数 `d`，更新 `res` 为：
`res = pow(res, 10, 1337) * pow(a, d, 1337) % 1337`。

其中 `pow(base, exp, mod)` 是求 `(base ^ exp) % mod` 的普通快速幂算法。
常量为 `MOD = 1337`。

另外要注意，给定的 `a` 可能大于 `1337`，因此在进入循环前可以先对 `a` 取模：`a = a % 1337`。
