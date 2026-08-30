# [3950] Exactly One Consecutive Set Bits Pair

## Description

[LeetCode Problem Description](https://leetcode.com/problems/exactly-one-consecutive-set-bits-pair/description/)

* algorithms
* Easy (50.93%)
* Likes:    32
* Dislikes: 10
* Testcase Example:  '6'

```md
You are given an integer n.
Return true if its binary representation contains exactly one adjacentpair ofset bits, and false otherwise.

Example 1:

Input: n = 6
Output: true
Explanation:

Binary representation of 6 is 110.
There is exactlyone adjacent pair of set bits ('11'). Thus, the answer is true​​​​​​​.


Example 2:

Input: n = 5
Output: false
Explanation:

Binary representation of 5 is 101.
There is noadjacent pair of set bits. Thus, the answer is false​​​​​​​.



Constraints:

0 <= n <= 105


```

## Solution

[SourceCode](./solution.js)

## 中文翻译

给定一个整数 n。
如果它的二进制表示中恰好包含一组相邻的、均为 1 的位（即出现一次 "11"），返回 true；否则返回 false。

示例 1：

输入：n = 6
输出：true
解释：

6 的二进制表示为 110。
恰好有一组相邻的置位（'11'），因此答案为 true。

示例 2：

输入：n = 5
输出：false
解释：

5 的二进制表示为 101。
不存在相邻的置位，因此答案为 false。

约束：

0 <= n <= 10^5

## 解题思路

位运算技巧：`x = n & (n >> 1)` 得到的 x 中，每个为 1 的位对应 n 中一组相邻的同时为 1 的位对（bit i 和 bit i+1 都是 1）。

- 若 n = 6 (110)，则 x = 110 & 011 = 010，x 中有 1 个置位 → 恰好一组相邻位对 → true
- 若 n = 14 (1110)，则 x = 1110 & 0111 = 0110，x 中有 2 个置位 → 有两组（重叠的）相邻位对 → false

因此只需统计 x 的置位个数（Brian Kernighan 算法 `x &= x - 1`），判断是否等于 1。

时间复杂度 O(log n)（popcount 循环），空间复杂度 O(1)。
