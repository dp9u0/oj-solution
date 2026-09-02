# [LCR 137] 模糊搜索验证

## Description


```md
https://leetcode.cn/problems/zheng-ze-biao-da-shi-pi-pei-lcof/description/
* algorithms
* Hard (38.09%)
* Likes:    575
* Dislikes: -
* Testcase Example:  '"aa"\n"a"'
请设计一个程序来支持用户在文本编辑器中的模糊搜索功能。用户输入内容中可能使用到如下两种通配符：
'.' 匹配任意单个字符。
'*' 匹配零个或多个前面的那一个元素。

请返回用户输入内容 input 所有字符是否可以匹配原文字符串 article。

示例 1：
输入：article = "aa", input = "a"
输出：false
解释："a" 无法匹配 "aa" 整个字符串。
示例 2：
输入：article = "aa", input = "a*"
输出：true
解释：因为 '*' 代表可以匹配零个或多个前面的那一个元素, 在这里前面的元素就是 'a'。因此，字符串 "aa" 可被视为 'a' 重复了一次。
示例 3：
输入：article = "ab", input = ".*"
输出：true
解释：".*" 表示可匹配零个或多个（'*'）任意字符（'.'）。

提示：
1 <= article.length <= 20
1 <= input.length <= 20
article 只包含从 a-z 的小写字母。
input 只包含从 a-z 的小写字母，以及字符 . 和 * 。
保证每次出现字符 * 时，前面都匹配到有效的字符

注意：本题与主站 10 题相同：https://leetcode.cn/problems/regular-expression-matching/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

Design fuzzy search: user pattern may contain `'.'` (match any single char) and `'*'` (match zero or more of the preceding element). Return whether pattern `input` matches the whole string `article`.

**Example 1:** `"aa"` vs `"a"` → false
**Example 2:** `"aa"` vs `"a*"` → true
**Example 3:** `"ab"` vs `".*"` → true

**Constraints:** lengths ≤ 20. Note: same as LeetCode 10.

---

## Approach

Standard regex-match **DP**. With `s`=article, `p`=input:
`dp[i][j]` = whether `s[0..i-1]` matches `p[0..j-1]`.

- If `p[j-1] == '*'`, we may match zero occurrences (`dp[i][j-2]`) or one+ occurrences if `s[i-1]` matches `p[j-2]` and `dp[i-1][j]`.
- Else `dp[i][j] = dp[i-1][j-1] && (s[i-1] == p[j-1] || p[j-1] == '.')`.

Answer `dp[s.length][p.length]`.

Complexity: `O(s.length · p.length)`.
