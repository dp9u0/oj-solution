# [1318] Minimum Flips to Make a OR b Equal to c

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/description/)

* algorithms
* Medium (71.93%)
* Likes:    2146
* Dislikes: 112
* Testcase Example:  '2\n6\n5'

```md
Given 3 positives numbers a, b and c. Return the minimum flips required in some bits of a and b to make (a OR b == c). (bitwise OR operation).
Flip operationconsists of changeanysingle bit 1 to 0 or change the bit 0 to 1in their binary representation.

Example 1:


Input: a = 2, b = 6, c = 5
Output: 3
Explanation: After flips a = 1 , b = 4 , c = 5 such that (a OR b == c)
Example 2:

Input: a = 4, b = 2, c = 7
Output: 1

Example 3:

Input: a = 1, b = 2, c = 3
Output: 0


Constraints:

1 <= a <= 10^9
1 <= b<= 10^9
1 <= c<= 10^9


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定三个正整数 a、b、c，翻转 a 和 b 的某些位使得 a | b == c，返回最少翻转次数。

## 解题思路

**逐位分析**

对每一位 bit：
- 如果 c 的该位为 1：需要 a 或 b 至少有一个为 1，如果都是 0 则翻转 1 次
- 如果 c 的该位为 0：需要 a 和 b 都为 0，每个为 1 的位都需要翻转

时间复杂度 O(32)，空间复杂度 O(1)。
