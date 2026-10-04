# [856] 括号的分数

## Description


```md
https://leetcode.cn/problems/score-of-parentheses/description/
* algorithms
* Medium (69.09%)
* Likes:    566
* Dislikes: -
* Testcase Example:  '"()"'
给定一个平衡括号字符串 S，按下述规则计算该字符串的分数：
() 得 1 分。
AB 得 A + B 分，其中 A 和 B 是平衡括号字符串。
(A) 得 2 * A 分，其中 A 是平衡括号字符串。

示例 1：
输入： "()"
输出： 1
示例 2：
输入： "(())"
输出： 2
示例 3：
输入： "()()"
输出： 2
示例 4：
输入： "(()(()))"
输出： 6

提示：
S 是平衡括号字符串，且只含有 ( 和 ) 。
2 <= S.length <= 50

```

## Description (English)

Given a balanced parentheses string `s`, return its score based on the following rules:

- `()` has a score of 1.
- `AB` has a score of `A + B`, where A and B are balanced parentheses strings.
- `(A)` has a score of `2 * A`, where A is a balanced parentheses string.

Example 1:
Input: s = "()"
Output: 1

Example 2:
Input: s = "(())"
Output: 2

Example 3:
Input: s = "()()"
Output: 2

Example 4:
Input: s = "(()(()))"
Output: 6

Constraints:
- `2 <= s.length <= 50`
- `s` consists of only `'('` and `')'`. It is guaranteed to be a balanced parentheses string.

## Solution

思路：分数由"核心 `()`"（内部为空的括号对）贡献。每个核心 `()` 贡献 `2^depth` 分，其中 depth 是它被外层括号包裹的层数。例如 `(())` = `2^1`，`(()(()))` = `2^1 + 2^2 = 6`。

做法：一次遍历，维护当前深度 `depth`：
- 遇 `(`：`depth++`
- 遇 `)`：`depth--`；若前一个字符是 `(`，说明这是一个核心 `()`，累加 `1 << depth`。

时间 O(n)，空间 O(1)。

等价栈做法：栈中每层存该层的累计分，遇 `)` 弹出栈顶 `v`，若 `v == 0`（内层为空）则加 1，否则加 `2 * v`。

[SourceCode](./solution.js)
