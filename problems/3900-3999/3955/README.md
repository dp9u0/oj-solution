# [3955] Valid Binary Strings With Cost Limit

## Description

[LeetCode Problem Description](https://leetcode.com/problems/valid-binary-strings-with-cost-limit/description/)

* algorithms
* Medium (78.43%)
* Likes:    59
* Dislikes: 1
* Testcase Example:  '3\n1'

```md
You are given two integers n and k.
The cost of a binary string s is defined as the sum of all indices i (0-based) such that s[i] == '1'.
A binary string is considered valid if:
It does not contain two consecutive '1' characters.
Its cost is less than or equal to k.
Return a list of all valid binary strings of length n in any order.

Example 1:
Input: n = 3, k = 1
Output: ["000","010","100"]
Explanation:
The binary strings of length 3 without consecutive '1' characters are:
"000" : cost = 0
"100" : cost = 0
"010" : cost = 1
"001" : cost = 2
"101" : cost = 0 + 2 = 2
Among these, the strings with cost less than or equal to k = 1 are "000", "010" and "100".
Thus, the valid strings are ["000", "010", "100"].
Example 2:
Input: n = 1, k = 0
Output: ["0","1"]
Explanation:
The valid binary strings of length 1 are "0" and "1".
Thus the answer is ["0", "1"].

Constraints:
1
0
Hint 1: Build the string from left to right using backtracking.
Hint 2: At index i, you can place '1' only if the previous character is not '1' and the new cost does not exceed k.
Hint 3: Whenever the string reaches length n, add it to the answer.

```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给你两个整数 `n` 和 `k`。

二进制字符串 `s` 的代价（cost）定义为所有满足 `s[i] == '1'` 的下标 `i`（从 0 开始）之和。

一个二进制字符串被认为是合法的，当且仅当：
- 它不包含两个连续的 `'1'` 字符；
- 它的代价小于等于 `k`。

返回所有长度为 `n` 的合法二进制字符串，顺序任意。

示例 1：
输入：n = 3, k = 1
输出：["000","010","100"]
解释：长度为 3 且不含连续 '1' 的二进制字符串及其代价：
- "000" : cost = 0
- "100" : cost = 0
- "010" : cost = 1
- "001" : cost = 2
- "101" : cost = 0 + 2 = 2

其中代价 ≤ k = 1 的是 "000"、"010"、"100"。

示例 2：
输入：n = 1, k = 0
输出：["0","1"]
解释："1" 的代价是 0（下标 0），≤ 0，故合法。

## 解题思路

回溯（DFS）从左到右构造字符串：

1. 用一个字符数组 `path` 逐位构建，`cost` 记录当前已放置 '1' 的下标之和。
2. 在位置 `i`：
   - 总是可以放 `'0'`（不增加代价）；
   - 当且仅当前一位不是 `'1'`（避免连续 '1'）且 `cost + i <= k` 时，可以放 `'1'`（代价只增不减，天然剪枝）。
3. 当 `path` 长度达到 `n` 时，将字符串加入结果集。

注意：由于返回的是所有字符串，n 的规模很小，回溯完全够用。
