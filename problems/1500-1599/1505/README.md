# [1505] Minimum Possible Integer After at Most K Adjacent Swaps On Digits

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-possible-integer-after-at-most-k-adjacent-swaps-on-digits/description/)

* algorithms
* Hard (41.19%)
* Likes:    500
* Dislikes: 28
* Testcase Example:  '"4321"\n4'

```md
You are given a string num representing the digits of a very large integer and an integer k. You are allowed to swap any two adjacent digits of the integer at most k times.
Return the minimum integer you can obtain also as a string.

Example 1:


Input: num = '4321', k = 4
Output: '1342'
Explanation: The steps to obtain the minimum integer from 4321 with 4 adjacent swaps are shown.

Example 2:

Input: num = '100', k = 1
Output: '010'
Explanation: It&#39;s ok for the output to have leading zeros, but the input is guaranteed not to have any leading zeros.

Example 3:

Input: num = '36789', k = 1000
Output: '36789'
Explanation: We can keep the number without any swaps.


Constraints:

1 <= num.length <= 3 * 104
num consists of only digits and does not contain leading zeros.
1 <= k <= 109


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

给定数字字符串 num 和整数 k，最多进行 k 次相邻交换，求能得到的最小整数字符串。

## 解题思路

贪心+树状数组。维护 10 个队列存储每个数字的出现位置。逐位贪心：从小到大尝试数字 0-9，找到第一个能在剩余 k 次交换内移到当前位置的数字。用树状数组（BIT）追踪已使用位置，快速计算当前位置到目标位置的实际代价。代价 = 原始位置 - 已移除的前置位置数。
