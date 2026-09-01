# [89] Gray Code

## Description

[LeetCode Problem Description](https://leetcode.com/problems/gray-code/description/)

* algorithms
* Medium (44.83%)
* Testcase Example:  '2'

```md
The gray code is a binary numeral system where two successive values differ in only one bit.
Given a non-negative integer n representing the total number of bits in the code, print the sequence of gray code. A gray code sequence must begin with 0.
Example 1:
Input: 2
Output: [0,1,3,2]
Explanation:
00 - 0
01 - 1
11 - 3
10 - 2
For a given n, a gray code sequence may not be uniquely defined.
For example, [0,2,3,1] is also a valid gray code sequence.
00 - 0
10 - 2
11 - 3
01 - 1
Example 2:
Input: 0
Output: [0]
Explanation: We define the gray code sequence to begin with 0.
A gray code sequence of n has size = 2n, which for n = 0 the size is 20 = 1.
Therefore, for n = 0 the gray code sequence is [0].

```

## Solution

1. 对n位二进制的码字，从右到左，以0到n-1编号
2. 如果二进制码字的第`j`位和`j+1`位相同,则对应的格雷码的第j位为0,否则为1

因此对于第i个格雷码,可以通过亦或计算得到 : `i ^ (i >> 1)`

[SourceCode](./solution.js)