# [2147] Number of Ways to Divide a Long Corridor

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-ways-to-divide-a-long-corridor/description/)

* algorithms
* Hard (54.57%)
* Likes:    1340
* Dislikes: 127
* Testcase Example:  '"SSPPSPS"'

```md
Along a long library corridor, there is a line of seats and decorative plants. You are given a 0-indexed string corridor of length n consisting of letters &#39;S&#39; and &#39;P&#39; where each &#39;S&#39; represents a seat and each &#39;P&#39; represents a plant.
One room divider has already been installed to the left of index 0, and another to the right of index n - 1. Additional room dividers can be installed. For each position between indices i - 1 and i (1 <= i <= n - 1), at most one divider can be installed.
Divide the corridor into non-overlapping sections, where each section has exactly two seats with any number of plants. There may be multiple ways to perform the division. Two ways are different if there is a position with a room divider installed in the first way but not in the second way.
Return the number of ways to divide the corridor. Since the answer may be very large, return it modulo 109 + 7. If there is no way, return 0.

Example 1:


Input: corridor = 'SSPPSPS'
Output: 3
Explanation: There are 3 different ways to divide the corridor.
The black bars in the above image indicate the two room dividers already installed.
Note that in each of the ways, each section has exactly two seats.

Example 2:


Input: corridor = 'PPSPSP'
Output: 1
Explanation: There is only 1 way to divide the corridor, by not installing any additional dividers.
Installing any would create some section that does not have exactly two seats.

Example 3:


Input: corridor = 'S'
Output: 0
Explanation: There is no way to divide the corridor because there will always be a section that does not have exactly two seats.


Constraints:

n == corridor.length
1 <= n <= 105
corridor[i] is either &#39;S&#39; or &#39;P&#39;.


```

## 翻译

给定 'S'(座位)和 'P'(植物)组成的走廊字符串。在位置间放隔板将走廊分段，每段恰好 2 个座位。求分段方案数模 10^9+7。无法分段返回 0。

## 解题思路

记录所有座位位置 seats[]。若座位数为奇数或 0，返回 0。每两座位为一段，相邻段之间隔板可选位置数 = seats[2i] - seats[2i-1]。答案为所有间隔可选数的乘积。O(n)。

## Solution

[SourceCode](./solution.js)
