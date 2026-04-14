# [1081] Smallest Subsequence of Distinct Characters

## Description

[LeetCode Problem Description](https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/description/)

* algorithms
* Medium (63.31%)
* Likes:    2760
* Dislikes: 200
* Testcase Example:  '"bcabc"'

```md
Given a string s, return the lexicographically smallest subsequence of s that contains all the distinct characters of s exactly once.

Example 1:

Input: s = 'bcabc'
Output: 'abc'

Example 2:

Input: s = 'cbacdcbc'
Output: 'acdb'


Constraints:

1 <= s.length <= 1000
s consists of lowercase English letters.


Note: This question is the same as 316: https://leetcode.com/problems/remove-duplicate-letters/

```

## 翻译

给定字符串 s，返回字典序最小的子序列，包含 s 中所有不同字符各一次。与 LeetCode 316 相同。

## Approach

单调栈贪心。维护一个栈存储结果字符：

1. 统计每个字符的最后出现位置 lastPos
2. 遍历字符串，对每个字符 c：
   - 若 c 已在栈中，跳过
   - 否则，当栈顶字符 > c 且栈顶字符后面还会出现时，弹出栈顶
   - 将 c 入栈，标记已使用

时间复杂度 O(n)，空间复杂度 O(1)。

## Solution

[SourceCode](./solution.js)
