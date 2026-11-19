# [1087] 花括号展开

## Description


```md
https://leetcode.cn/problems/brace-expansion/description/
* algorithms
* Medium (58.85%)
* Likes:    73
* Dislikes: -
* Testcase Example:  '"{a,b}c{d,e}f"'
给定一个表示单词列表的字符串 s 。单词中的每个字母都有一个或多个选项。
如果有一个选项，则字母按原样表示。
如果有多个选项，则用大括号分隔选项。例如,  "{a,b,c}"  表示选项  ["a", "b", "c"]  。
例如，如果  s = "a{b,c}"  ，第一个字符总是 'a' ，但第二个字符可以是 'b' 或 'c' 。原来的列表是 ["ab", "ac"] 。
请你 按字典顺序 ，返回所有以这种方式形成的单词。

示例 1：
输入：s = "{a,b}c{d,e}f"
输出：["acdf","acef","bcdf","bcef"]
示例 2：
输入：s = "abcd"
输出：["abcd"]

提示：
1 <= S.length <= 50
s 由括号 '{}' , ',' 和小写英文字母组成。
s 保证是一个有效的输入。
没有嵌套的大括号。
在一对连续的左括号和右括号内的所有字符都是不同的。
Hint 1: All generated strings are of the same size. How can we generate all of these strings?
Hint 2: Do a backtracking on which each level of it has to choose one single (e.g. 'a') character or any character of the given parenthesized group (e.g. "{a,b,c}")

```

## Solution

[SourceCode](./solution.js)

## Translation

Expand a brace-pattern string: letters without braces are fixed; `{a,b}` offers choices. Return all formed words in lexicographic order (no nesting).

- Example: "{a,b}c{d,e}f" → `["acdf","acef","bcdf","bcef"]`

## Approach

**解析 + DFS 笛卡尔积**。先把 s 解析成组数组:遇 `{` 取到 `}` 按逗号切分并组内排序,单字母自成一组。DFS 逐组选字符,组内有序使生成序列天然字典序(前缀优先级递减),无需末尾排序。组合数 ≤ 26^(组数),规模极小。
