# [1545] Find Kth Bit in Nth Binary String

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-kth-bit-in-nth-binary-string/description/)

* algorithms
* Medium (73.69%)
* Likes:    1863
* Dislikes: 123
* Testcase Example:  '3\n1'

```md
Given two positive integers n and k, the binary string Sn is formed as follows:

S1 = '0'
Si = Si - 1 + '1' + reverse(invert(Si - 1)) for i > 1

Where + denotes the concatenation operation, reverse(x) returns the reversed string x, and invert(x) inverts all the bits in x (0 changes to 1 and 1 changes to 0).
For example, the first four strings in the above sequence are:

S1 = '0'
S2 = '011'
S3 = '0111001'
S4 = '011100110110001'

Return the kth bit in Sn. It is guaranteed that k is valid for the given n.

Example 1:

Input: n = 3, k = 1
Output: '0'
Explanation: S3 is '0111001'.
The 1st bit is '0'.

Example 2:

Input: n = 4, k = 11
Output: '1'
Explanation: S4 is '011100110110001'.
The 11th bit is '1'.


Constraints:

1 <= n <= 20
1 <= k <= 2n - 1


```

## 中文翻译

定义 S1="0"，Si = Si-1 + "1" + reverse(invert(Si-1))。求 Sn 的第 k 个字符。

## 解题思路

递归。Sn 的结构为 [Sn-1 | '1' | reverse(invert(Sn-1))]，中点 mid = 2^(n-1)。若 k=mid 返回 '1'；若 k<mid 递归查 Sn-1；若 k>mid 递归查 Sn-1 的对称位置并翻转。

## Solution

[SourceCode](./solution.js)
