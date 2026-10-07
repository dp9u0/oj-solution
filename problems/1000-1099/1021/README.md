# [1021] 删除最外层的括号

## Description


```md
https://leetcode.cn/problems/remove-outermost-parentheses/description/
* algorithms
* Easy (81.66%)
* Likes:    334
* Dislikes: -
* Testcase Example:  '"(()())(())"'
有效括号字符串为空 ""、"(" + A + ")" 或 A + B ，其中 A 和 B 都是有效的括号字符串，+ 代表字符串的连接。
例如，""，"()"，"(())()" 和 "(()(()))" 都是有效的括号字符串。
如果有效字符串 s 非空，且不存在将其拆分为 s = A + B 的方法，我们称其为原语（primitive），其中 A 和 B 都是非空有效括号字符串。
给出一个非空有效字符串 s，考虑将其进行原语化分解，使得：s = P_1 + P_2 + ... + P_k，其中 P_i 是有效括号字符串原语。
对 s 进行原语化分解，删除分解中每个原语字符串的最外层括号，返回 s 。

示例 1：
输入：s = "(()())(())"
输出："()()()"
解释：
输入字符串为 "(()())(())"，原语化分解得到 "(()())" + "(())"，
删除每个部分中的最外层括号后得到 "()()" + "()" = "()()()"。
示例 2：
输入：s = "(()())(())(()(()))"
输出："()()()()(())"
解释：
输入字符串为 "(()())(())(()(()))"，原语化分解得到 "(()())" + "(())" + "(()(()))"，
删除每个部分中的最外层括号后得到 "()()" + "()" + "()(())" = "()()()()(())"。
示例 3：
输入：s = "()()"
输出：""
解释：
输入字符串为 "()()"，原语化分解得到 "()" + "()"，
删除每个部分中的最外层括号后得到 "" + "" = ""。

提示：
1 <= s.length <= 105
s[i] 为 '(' 或 ')'
s 是一个有效括号字符串
Hint 1: Can you find the primitive decomposition?  The number of ( and ) characters must be equal.

```

## Description (English)

A valid parentheses string is either empty `""`, `"(" + A + ")"`, or `A + B`, where `A` and `B` are valid parentheses strings, and `+` represents string concatenation.

- For example, `""`, `"()"`, `"(())()"`, and `"(()(()))"` are all valid parentheses strings.

A valid string `s` is called **primitive** if it is non-empty, and there is no way to split it into `s = A + B` where `A` and `B` are both non-empty valid parentheses strings.

Given a non-empty valid string `s`, consider its primitive decomposition: `s = P_1 + P_2 + ... + P_k`, where each `P_i` is a valid parentheses string primitive.

For each primitive in the decomposition, remove the outermost parentheses of it, and return the resulting string.

**Example 1:**

Input: s = `"(()())(())"`
Output: `"()()()"`
Explanation: The input string is `"(()())(())"`, with primitive decomposition `"(()())" + "(())"`. After removing outer parentheses of each part, this gives `"()()" + "()" = "()()()"`.

**Example 2:**

Input: s = `"(()())(())(()(()))"`
Output: `"()()()()(())"`
Explanation: The primitive decomposition is `"(()())" + "(())" + "(()(()))"`. After removing outer parentheses, this gives `"()()" + "()" + "()(())" = "()()()()(())"`.

**Example 3:**

Input: s = `"()()"`
Output: `""`
Explanation: The primitive decomposition is `"()" + "()"`. After removing outer parentheses, this gives `"" + "" = ""`.

**Constraints:**

- `1 <= s.length <= 10^5`
- `s[i]` is `'('` or `')'`
- `s` is a valid parentheses string

## Solution

[SourceCode](./solution.js)

## Approach

**深度计数（一次遍历，O(n)）**

原语 = 一个完整平衡的最外层括号包裹的内容。删除最外层括号，等价于：保留所有"非第一层"的括号字符。

用计数器 `depth` 表示当前括号嵌套深度：

- 遇到 `'('`：若 `depth > 0`（自增前），说明它不是原语的最外层左括号，保留；然后 `depth++`。
- 遇到 `')'`：先 `depth--`；若 `depth > 0`（自减后），说明它不是原语的最外层右括号，保留。

原理：原语的最外层 `'('` 出现在 depth 为 0 时（自增前 depth = 0），最外层 `')'` 闭合后 depth 回到 0。深度归零即原语边界，天然完成分解，无需显式切分或栈。

- 时间复杂度：O(n)
- 空间复杂度：O(1)（不计输出）
