# [1871] Jump Game VII

## Description

[LeetCode Problem Description](https://leetcode.com/problems/jump-game-vii/description/)

* algorithms
* Medium (26.44%)
* Likes:    1814
* Dislikes: 121
* Testcase Example:  '"011010"\n2\n3'

```md
You are given a 0-indexed binary string s and two integers minJump and maxJump. In the beginning, you are standing at index 0, which is equal to &#39;0&#39;. You can move from index i to index j if the following conditions are fulfilled:

i + minJump <= j <= min(i + maxJump, s.length - 1), and
s[j] == &#39;0&#39;.

Return true if you can reach index s.length - 1 in s, or false otherwise.

Example 1:

Input: s = '011010', minJump = 2, maxJump = 3
Output: true
Explanation:
In the first step, move from index 0 to index 3.
In the second step, move from index 3 to index 5.

Example 2:

Input: s = '01101110', minJump = 2, maxJump = 3
Output: false


Constraints:

2 <= s.length <= 105
s[i] is either &#39;0&#39; or &#39;1&#39;.
s[0] == &#39;0&#39;
1 <= minJump <= maxJump < s.length


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定 01 字符串 s 和 minJump、maxJump，从下标 0 出发，每次可以从 i 跳到 j，满足 i+minJump <= j <= min(i+maxJump, n-1) 且 s[j]=='0'。判断是否能到达最后一个下标。

## 解题思路

**BFS + 差分数组/滑动窗口**

用 reachable[i] 标记位置 i 是否可达。维护一个滑动窗口，记录窗口内可达位置的数量 pre。对每个位置 i，如果 s[i]=='0' 且 pre > 0（窗口内有可达位置），则 i 可达。

窗口范围为 [i-maxJump, i-minJump]，用前缀和维护可达数量。

时间复杂度 O(n)，空间复杂度 O(n)。
