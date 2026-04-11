# [1529] Minimum Suffix Flips

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-suffix-flips/description/)

* algorithms
* Medium (73.87%)
* Likes:    1071
* Dislikes: 50
* Testcase Example:  '"10111"'

```md
You are given a 0-indexed binary string target of length n. You have another binary string s of length n that is initially set to all zeros. You want to make s equal to target.
In one operation, you can pick an index i where 0 <= i < n and flip all bits in the inclusive range [i, n - 1]. Flip means changing &#39;0&#39; to &#39;1&#39; and &#39;1&#39; to &#39;0&#39;.
Return the minimum number of operations needed to make s equal to target.

Example 1:

Input: target = '10111'
Output: 3
Explanation: Initially, s = '00000'.
Choose index i = 2: '00000' -> '00111'
Choose index i = 0: '00111' -> '11000'
Choose index i = 1: '11000' -> '10111'
We need at least 3 flip operations to form target.

Example 2:

Input: target = '101'
Output: 3
Explanation: Initially, s = '000'.
Choose index i = 0: '000' -> '111'
Choose index i = 1: '111' -> '100'
Choose index i = 2: '100' -> '101'
We need at least 3 flip operations to form target.

Example 3:

Input: target = '00000'
Output: 0
Explanation: We do not need any operations since the initial s already equals target.


Constraints:

n == target.length
1 <= n <= 105
target[i] is either &#39;0&#39; or &#39;1&#39;.


```

## 翻译

给定二进制目标字符串 `target`，初始串全为 '0'。每次操作选一个位置 i，翻转从 i 到末尾的所有位。返回变成 target 的最少操作次数。

## Approach

**贪心。** 从左到右遍历，维护当前位的实际值（受之前翻转影响）。每次遇到实际值与目标不同时，必须翻转。用一个变量 `current` 追踪当前位应该是 '0' 还是 '1'，每次翻转就取反。

更简洁的思路：统计相邻不同字符的变化次数，再加首位是否为 1。

时间复杂度：O(n)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
