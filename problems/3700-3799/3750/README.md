# [3750] Minimum Number of Flips to Reverse Binary String

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-number-of-flips-to-reverse-binary-string/description/)

* algorithms
* Easy (76.25%)
* Likes:    37
* Dislikes: -
* Testcase Example:  '7'

```md
You are given a positive integer n.
Let s be the binary representation of n without leading zeros.
The reverse of a binary string s is obtained by writing the characters of s in the opposite order.
You may flip any bit in s (change 0 &rarr; 1 or 1 &rarr; 0). Each flip affects exactly one bit.
Return the minimum number of flips required to make s equal to the reverse of its original form.

Example 1:

Input: n = 7
Output: 0
Explanation:
The binary representation of 7 is '111'. Its reverse is also '111', which is the same. Hence, no flips are needed.

Example 2:

Input: n = 10
Output: 4
Explanation:
The binary representation of 10 is '1010'. Its reverse is '0101'. All four bits must be flipped to make them equal. Thus, the minimum number of flips required is 4.


Constraints:

1 <= n <= 109


```

## 翻译

给定正整数 n，s 是 n 的二进制表示（无前导零）。可以对 s 中的任意位进行翻转（0→1 或 1→0）。返回使 s 等于其反转后字符串所需的最少翻转次数。

## 解题思路

获取二进制字符串 s，目标是使 s[i] = s[len-1-i]（即 s 等于自身反转）。逐位比较 s[i] 和 s[len-1-i]，统计不同的位数。注意需要遍历所有位置而非仅前半部分，因为每个位置的翻转是独立的。时间复杂度 O(log n)。

## Solution

[SourceCode](./solution.js)
