# [3848] Check Digitorial Permutation

## Description

[LeetCode Problem Description](https://leetcode.com/problems/check-digitorial-permutation/description/)

* algorithms
* Medium (46.64%)
* Likes:    60
* Dislikes: 2
* Testcase Example:  '145'

```md
You are given an integer n.
A number is called digitorial if the sum of the factorials of its digits is equal to the number itself.
Determine whether any permutation of n (including the original order) forms a digitorial number.
Return true if such a permutation exists, otherwise return false.
Note:

The factorial of a non-negative integer x, denoted as x!, is the product of all positive integers less than or equal to x, and 0! = 1.
A permutation is a rearrangement of all the digits of a number that does not start with zero. Any arrangement starting with zero is invalid.


Example 1:

Input: n = 145
Output: true
Explanation:
The number 145 itself is digitorial since 1! + 4! + 5! = 1 + 24 + 120 = 145. Thus, the answer is true.

Example 2:

Input: n = 10
Output: false
Explanation:​​​​​​​
10 is not digitorial since 1! + 0! = 2 is not equal to 10, and the permutation '01' is invalid because it starts with zero.


Constraints:

1 <= n <= 109


```

## 题目翻译

给定整数 n。一个数称为 digitorial 数，如果其各位数字的阶乘之和等于该数本身。判断 n 的某个排列（不含前导零）是否为 digitorial 数。

## 解题思路

**预计算 + 全排列枚举**。

- n <= 10^9，最多 10 位数字。
- 预计算 0!-9! 的值。
- 取 n 的所有数字，枚举所有不以 0 开头的排列。
- 对每个排列，计算各位数字阶乘之和，判断是否等于该排列对应的数值。
- 但排列数最多 10! = 3628800，可能太多。
- 优化：不用枚举排列，只需计算数字阶乘之和（与排列无关！），然后判断是否存在一个排列使得该排列值等于阶乘之和。
- 即：设 S = 各位数字阶乘之和。只需检查 S 是否是 n 的某个排列（不含前导零）。
- 判断方法：S 的数字组成是否与 n 相同（不含前导零的排列）。

进一步：
1. 计算 digitFactorialSum = 各位数字阶乘之和。
2. 检查 digitFactorialSum 是否是 n 的有效排列：
   - digitFactorialSum 的位数必须与 n 相同（不能有前导零）。
   - digitFactorialSum 的数字频率必须与 n 相同。

## Solution

[SourceCode](./solution.js)
