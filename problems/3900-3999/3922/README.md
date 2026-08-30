# [3922] Minimum Flips to Make Binary String Coherent

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-flips-to-make-binary-string-coherent/description/)

* algorithms
* Medium (20.17%)
* Likes:    56
* Dislikes: 7
* Testcase Example:  '"1010"'

```md
You are given a binary string s.
A string is considered coherent if it does not contain '011' or '110' as subsequences.
In one operation, you can flip any character in s (&#39;0&#39; to &#39;1&#39; or &#39;1&#39; to &#39;0&#39;).
Return an integer denoting the minimum number of operations required to make s coherent.

Example 1:

Input: s = '1010'
Output: 1
Explanation:
Flip s[0] to get '0010', which contains no '011' or '110' subsequences.

Example 2:

Input: s = '0110'
Output: 1
Explanation:
Flip s[1] to get '0010', removing all forbidden subsequences '011' and '110'.

Example 3:

Input: s = '1000'
Output: 0
Explanation:
The string already has no '011' or '110' subsequences, so no flips are needed.


Constraints:

1 <= s.length <= 105
s[i] is either &#39;0&#39; or &#39;1&#39;.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

二进制串"coherent" = 不含 '011' 或 '110' 作为**子序列**。每次操作翻转一个字符。返回最少操作数。

示例：`'1010'` → `1`；`'0110'` → `1`；`'1000'` → `0`

## 解题思路

**子序列自动机 DP**：状态 (i, j) = '011' 与 '110' 各自已匹配的子序列前缀长度（0..2，3 为死）。逐位选放 '0' 或 '1'（不同则计翻转费），推进两模式指针，死状态剪枝。状态 ≤ 9，O(n·9·2)。与全翻转子集暴力对拍验证。