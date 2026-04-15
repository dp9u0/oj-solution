# [2457] Minimum Addition to Make Integer Beautiful

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-addition-to-make-integer-beautiful/description/)

* algorithms
* Medium (38.63%)
* Likes:    549
* Dislikes: 26
* Testcase Example:  '16\n6'

```md
You are given two positive integers n and target.
An integer is considered beautiful if the sum of its digits is less than or equal to target.
Return the minimum non-negative integer x such that n + x is beautiful. The input will be generated such that it is always possible to make n beautiful.

Example 1:

Input: n = 16, target = 6
Output: 4
Explanation: Initially n is 16 and its digit sum is 1 + 6 = 7. After adding 4, n becomes 20 and digit sum becomes 2 + 0 = 2. It can be shown that we can not make n beautiful with adding non-negative integer less than 4.

Example 2:

Input: n = 467, target = 6
Output: 33
Explanation: Initially n is 467 and its digit sum is 4 + 6 + 7 = 17. After adding 33, n becomes 500 and digit sum becomes 5 + 0 + 0 = 5. It can be shown that we can not make n beautiful with adding non-negative integer less than 33.

Example 3:

Input: n = 1, target = 1
Output: 0
Explanation: Initially n is 1 and its digit sum is 1, which is already smaller than or equal to target.


Constraints:

1 <= n <= 1012
1 <= target <= 150
The input will be generated such that it is always possible to make n beautiful.


```

## 题目翻译

给定正整数 n 和 target，一个数"美丽"当且仅当各位数字之和 <= target。求最小非负整数 x 使得 n + x 美丽。

## 解题思路

贪心进位。从最低位开始，逐位进位使数字变小（各位和减小）。每次将当前位的尾数清零（加到下一个 10 的幂次），检查各位和是否 <= target。进位后高位可能继续产生需要进位的情况。

时间复杂度 O(log n)

## Solution

[SourceCode](./solution.js)
