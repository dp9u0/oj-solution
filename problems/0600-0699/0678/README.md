# [678] 有效的括号字符串

## Description


```md
https://leetcode.cn/problems/valid-parenthesis-string/description/
* algorithms
* Medium (40.62%)
* Likes:    704
* Dislikes: -
* Testcase Example:  '"()"'
给你一个只包含三种字符的字符串，支持的字符类型分别是 '('、')' 和 '*'。请你检验这个字符串是否为有效字符串，如果是 有效 字符串返回 true 。
有效 字符串符合如下规则：
任何左括号 '(' 必须有相应的右括号 ')'。
任何右括号 ')' 必须有相应的左括号 '(' 。
左括号 '(' 必须在对应的右括号之前 ')'。
'*' 可以被视为单个右括号 ')' ，或单个左括号 '(' ，或一个空字符串 ""。

示例 1：
输入：s = "()"
输出：true
示例 2：
输入：s = "(*)"
输出：true
示例 3：
输入：s = "(*))"
输出：true

提示：
1 <= s.length <= 100
s[i] 为 '('、')' 或 '*'
Hint 1: Use backtracking to explore all possible combinations of treating '*' as either '(', ')', or an empty string. If any combination leads to a valid string, return true.
Hint 2: DP[i][j] represents whether the substring s[i:j] is valid.
Hint 3: Keep track of the count of open parentheses encountered so far. If you encounter a close parenthesis, it should balance with an open parenthesis. Utilize a stack to handle this effectively.
Hint 4: How about using 2 stacks instead of 1? Think about it.

```

## Description (English)

Given a string `s` containing only three types of characters: `'('`, `')'` and `'*'`, return `true` if `s` is valid, otherwise return `false`.

A valid string satisfies the following rules:

- Any left parenthesis `'('` must have a corresponding right parenthesis `')'`.
- Any right parenthesis `')'` must have a corresponding left parenthesis `'('`.
- Left parenthesis `'('` must go before the corresponding right parenthesis `')'`.
- `'*'` could be treated as a single right parenthesis `')'`, or a single left parenthesis `'('`, or an empty string `""`.

Example 1: Input: s = "()" → Output: true
Example 2: Input: s = "(*)" → Output: true
Example 3: Input: s = "(*))" → Output: true

Constraints:
- 1 <= s.length <= 100
- s[i] is `'('`, `')'` or `'*'`.

## Approach

贪心维护「未匹配左括号数量」的可能区间 `[lo, hi]`：

- `lo`：把每个 `*` 都当成 `)` 或空串时，未匹配左括号的最小可能数。
- `hi`：把每个 `*` 都当成 `(` 时，未匹配左括号的最大可能数。

逐字符扫描：
- 遇到 `(`：`lo++`、`hi++`。
- 遇到 `)`：`lo--`、`hi--`；若 `hi < 0`，说明即使把所有 `*` 都当左括号也不够匹配，直接返回 `false`；`lo` 下限截断为 `0`（括号数不能为负）。
- 遇到 `*`：三种取值使区间变为 `[lo-1, hi+1]`；同样将 `lo` 截断为 `0`。

扫描结束后，`lo == 0` 表示存在一种取法使所有括号恰好匹配，返回 `true`。

时间复杂度 O(n)，空间复杂度 O(1)。优于回溯 O(3^n) 和区间 DP O(n²)。

## Solution

[SourceCode](./solution.js)
