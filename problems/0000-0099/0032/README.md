# [32] 最长有效括号

## Description


```md
https://leetcode.cn/problems/longest-valid-parentheses/description/
* algorithms
* Hard (42.77%)
* Likes:    2936
* Dislikes: -
* Testcase Example:  '"(()"'
给你一个只包含 '(' 和 ')' 的字符串，找出最长有效（格式正确且连续）括号 子串 的长度。
左右括号匹配，即每个左括号都有对应的右括号将其闭合的字符串是格式正确的，比如 "(()())"。

示例 1：
输入：s = "(()"
输出：2
解释：最长有效括号子串是 "()"
示例 2：
输入：s = ")()())"
输出：4
解释：最长有效括号子串是 "()()"
示例 3：
输入：s = ""
输出：0

提示：
0 <= s.length <= 3 * 104
s[i] 为 '(' 或 ')'

```

## Description (English)

```md
Given a string containing just the characters '(' and ')', return the length of the longest valid (well-formed and continuous) parentheses substring.

A well-formed string is one where every left parenthesis has a matching right parenthesis closing it, e.g. "(()())".

Example 1:
Input: s = "(()"
Output: 2
Explanation: The longest valid parentheses substring is "()".

Example 2:
Input: s = ")()())"
Output: 4
Explanation: The longest valid parentheses substring is "()()".

Example 3:
Input: s = ""
Output: 0

Constraints:
0 <= s.length <= 3 * 10^4
s[i] is '(' or ')'
```

## Solution

[SourceCode](./solution.js)

## 思路

双向计数扫描（时间 O(n)，空间 O(1)）：

1. **从左到右**扫描，维护 `left`/`right` 两个计数器：
   - 遇到 `(` 则 `left++`，否则 `right++`。
   - 当 `left === right` 时，当前子串有效，长度为 `2 * right`，更新答案。
   - 当 `right > left` 时，多出的右括号不可能再被匹配，重置 `left = right = 0`。
2. **从右到左**再扫一遍，条件对称：
   - 当 `left === right` 时更新答案为 `2 * left`。
   - 当 `left > right` 时重置计数。

为什么需要两遍？像 `"(()"` 这种 `left` 始终大于 `right` 的串，左向扫描永远不会触发相等或重置，会漏掉有效子串 `"()"`；反方向扫描时该失效条件（`left > right`）恰好能捕捉这种情况。两遍取最大值即为答案。
