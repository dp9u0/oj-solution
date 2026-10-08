# [1541] 平衡括号字符串的最少插入次数

## Description


```md
https://leetcode.cn/problems/minimum-insertions-to-balance-a-parentheses-string/description/
* algorithms
* Medium (49.93%)
* Likes:    96
* Dislikes: -
* Testcase Example:  '"(()))"'
给你一个括号字符串 s ，它只包含字符 '(' 和 ')' 。一个括号字符串被称为平衡的当它满足：
任何左括号 '(' 必须对应两个连续的右括号 '))' 。
左括号 '(' 必须在对应的连续两个右括号 '))' 之前。
比方说 "())"， "())(())))" 和 "(())())))" 都是平衡的， ")()"， "()))" 和 "(()))" 都是不平衡的。
你可以在任意位置插入字符 '(' 和 ')' 使字符串平衡。
请你返回让 s 平衡的最少插入次数。

示例 1：
输入：s = "(()))"
输出：1
解释：第二个左括号有与之匹配的两个右括号，但是第一个左括号只有一个右括号。我们需要在字符串结尾额外增加一个 ')' 使字符串变成平衡字符串 "(())))" 。
示例 2：
输入：s = "())"
输出：0
解释：字符串已经平衡了。
示例 3：
输入：s = "))())("
输出：3
解释：添加 '(' 去匹配最开头的 '))' ，然后添加 '))' 去匹配最后一个 '(' 。
示例 4：
输入：s = "(((((("
输出：12
解释：添加 12 个 ')' 得到平衡字符串。
示例 5：
输入：s = ")))))))"
输出：5
解释：在字符串开头添加 4 个 '(' 并在结尾添加 1 个 ')' ，字符串变成平衡字符串 "(((())))))))" 。

提示：
1 <= s.length <= 10^5
s 只包含 '(' 和 ')' 。
Hint 1: Use a stack to keep opening brackets. If you face single closing ')' add 1 to the answer and consider it as '))'.
Hint 2: If you have '))' with empty stack, add 1 to the answer, If after finishing you have x opening remaining in the stack, add 2x to the answer.

```

## Description (English)

You are given a parentheses string `s` containing only the characters `'('` and `')'`.

A parentheses string is **balanced** if:

- Any left parenthesis `'('` must have a corresponding **two consecutive** right parentheses `'))'`.
- Left parenthesis `'('` must go **before** the corresponding two consecutive right parentheses `'))'`.

For example, `"())"`, `"())(())))"` and `"(())())))"` are balanced, `")()"`, `"()))"` and `"(()))"` are not balanced.

You can insert the characters `'('` and `')'` at any position.

Return the minimum number of insertions needed to make `s` balanced.

Example 1: s = "(()))" → 1 (append one ')' → "(())))")
Example 2: s = "())" → 0 (already balanced)
Example 3: s = "))())(" → 3
Example 4: s = "((((((" → 12
Example 5: s = ")))))))" → 5

Constraints:

- 1 <= s.length <= 10^5
- s consists of `'('` and `')'` only.

## Approach

Greedy one-pass scan, O(n) time, O(1) space.

Each `'('` owes exactly two consecutive `')'`. Keep a counter `need` = number of unmatched `'('` so far (each still owes a `'))'`), and `insertions` = insertions used so far.

Scan left to right, consuming `')'` in pairs:

- On `'('`: `need++`.
- On `')'`: try to consume it together with the following character as a `'))'` pair. If the next character is not `')'` (single `')'` or end of string), we must insert one `')'` right here (`insertions++`) to complete the pair. Then this pair closes one `'('`: `need--`. If `need` goes negative, there are more `'))'` pairs than available `'('`, so insert one `'('` (`insertions++`) and reset `need = 0`.

After the scan, every remaining unmatched `'('` still needs two `')'`: answer = `insertions + 2 * need`.

Why greedy is optimal: when `need < 0`, the cheapest fix for an excess `'))'` is exactly one inserted `'('` (any alternative also needs that `'('` plus more). When a lone `')'` appears, pairing it with one inserted `')'` costs 1, while inserting a `'('` instead would cost 1 now plus 2 more later.

## Solution

[SourceCode](./solution.js)
