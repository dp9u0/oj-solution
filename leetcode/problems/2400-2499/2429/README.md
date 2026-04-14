# [2429] Minimize XOR

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimize-xor/description/)

* algorithms
* Medium (62.41%)
* Likes:    1093
* Dislikes: 78
* Testcase Example:  '3\n5'

```md
Given two positive integers num1 and num2, find the positive integer x such that:

x has the same number of set bits as num2, and
The value x XOR num1 is minimal.

Note that XOR is the bitwise XOR operation.
Return the integer x. The test cases are generated such that x is uniquely determined.
The number of set bits of an integer is the number of 1&#39;s in its binary representation.

Example 1:

Input: num1 = 3, num2 = 5
Output: 3
Explanation:
The binary representations of num1 and num2 are 0011 and 0101, respectively.
The integer 3 has the same number of set bits as num2, and the value 3 XOR 3 = 0 is minimal.

Example 2:

Input: num1 = 1, num2 = 12
Output: 3
Explanation:
The binary representations of num1 and num2 are 0001 and 1100, respectively.
The integer 3 has the same number of set bits as num2, and the value 3 XOR 1 = 2 is minimal.


Constraints:

1 <= num1, num2 <= 109


```

## 题目翻译

给定正整数 num1 和 num2，找到正整数 x 使得：
1. x 的二进制中 1 的个数与 num2 相同
2. x XOR num1 的值最小

## 解题思路

**贪心位操作**

1. 统计 num2 中 1 的个数 k
2. 以 num1 为起点（理想情况 XOR=0）
3. 若 num1 的 1 比 k 多：从最低位开始去掉多余的 1
4. 若 num1 的 1 比 k 少：从最低位开始补 1 到原来为 0 的位置
5. 这样保证高位尽可能与 num1 匹配，XOR 最小

## Solution

[SourceCode](./solution.js)
