# [1096] 花括号展开 II

## Description


```md
https://leetcode.cn/problems/brace-expansion-ii/description/
* algorithms
* Hard (72.37%)
* Likes:    198
* Dislikes: -
* Testcase Example:  '"{a,b}{c,{d,e}}"'
如果你熟悉 Shell 编程，那么一定了解过花括号展开，它可以用来生成任意字符串。
花括号展开的表达式可以看作一个由 花括号、逗号 和 小写英文字母 组成的字符串，定义下面几条语法规则：
如果只给出单一的元素 x，那么表达式表示的字符串就只有 "x"。R(x) = {x}

例如，表达式 "a" 表示字符串 "a"。
而表达式 "w" 就表示字符串 "w"。


当两个或多个表达式并列，以逗号分隔，我们取这些表达式中元素的并集。R({e_1,e_2,...}) = R(e_1) ∪ R(e_2) ∪ ...

例如，表达式 "{a,b,c}" 表示字符串 "a","b","c"。
而表达式 "{{a,b},{b,c}}" 也可以表示字符串 "a","b","c"。


要是两个或多个表达式相接，中间没有隔开时，我们从这些表达式中各取一个元素依次连接形成字符串。R(e_1 + e_2) = {a + b for (a, b) in R(e_1) × R(e_2)}

例如，表达式 "{a,b}{c,d}" 表示字符串 "ac","ad","bc","bd"。


表达式之间允许嵌套，单一元素与表达式的连接也是允许的。

例如，表达式 "a{b,c,d}" 表示字符串 "ab","ac","ad"​​​​​​。
例如，表达式 "a{b,c}{d,e}f{g,h}" 可以表示字符串 "abdfg", "abdfh", "abefg", "abefh", "acdfg", "acdfh", "acefg", "acefh"。


给出表示基于给定语法规则的表达式 expression，返回它所表示的所有字符串组成的有序列表。
假如你希望以「集合」的概念了解此题，也可以通过点击 “显示英文描述” 获取详情。

示例 1：
输入：expression = "{a,b}{c,{d,e}}"
输出：["ac","ad","ae","bc","bd","be"]
示例 2：
输入：expression = "{{a,z},a{b,c},{ab,z}}"
输出：["a","ab","ac","z"]
解释：输出中 不应 出现重复的组合结果。

提示：
1 <= expression.length <= 60
expression[i] 由 '{'，'}'，',' 或小写英文字母组成
给出的表达式 expression 用以表示一组基于题目描述中语法构造的字符串
Hint 1: You can write helper methods to parse the next "chunk" of the expression.  If you see eg. "a", the answer is just the set {a}.  If you see "{", you parse until you complete the "}" (the number of { and } seen are equal) and that becomes a chunk that you find where the appropriate commas are, and parse each individual expression between the commas.

```

### English Translation

If you are familiar with Shell programming, you must know about brace expansion, which can be used to generate arbitrary strings.

The expression for brace expansion can be viewed as a string consisting of braces, commas, and lowercase English letters, defined by the following grammar rules:

- If a single element `x` is given, then the expression represents only the string "x". R(x) = {x}
  - For example, the expression "a" represents the string "a", and the expression "w" represents the string "w".
- When two or more expressions are juxtaposed, separated by commas, we take the union of the elements of these expressions. R({e_1,e_2,...}) = R(e_1) ∪ R(e_2) ∪ ...
  - For example, the expression "{a,b,c}" represents the strings "a","b","c", and "{{a,b},{b,c}}" also represents "a","b","c".
- If two or more expressions are adjacent with nothing in between, we take one element from each expression and concatenate them in order to form a string. R(e_1 + e_2) = {a + b for (a, b) in R(e_1) × R(e_2)}
  - For example, the expression "{a,b}{c,d}" represents the strings "ac","ad","bc","bd".
- Nesting between expressions is allowed, and concatenation of a single element with an expression is also allowed.
  - For example, the expression "a{b,c,d}" represents the strings "ab","ac","ad".
  - For example, the expression "a{b,c}{d,e}f{g,h}" can represent "abdfg", "abdfh", "abefg", "abefh", "acdfg", "acdfh", "acefg", "acefh".

Given an expression following the given grammar rules, return the ordered list of all strings it represents.

Example 1:
Input: expression = "{a,b}{c,{d,e}}"
Output: ["ac","ad","ae","bc","bd","be"]

Example 2:
Input: expression = "{{a,z},a{b,c},{ab,z}}"
Output: ["a","ab","ac","z"]
Explanation: The output should not contain duplicate combinations.

Constraints:
- 1 <= expression.length <= 60
- expression[i] consists of '{', '}', ',' or lowercase English letters
- The given expression represents a set of strings constructed according to the grammar described in the problem

## Approach

Recursive descent parsing over three grammar levels:

- `seq` = a concatenation of one or more `factor`s → cross product of their sets
- `union` = `seq` (`,` `seq`)* → union of the sets
- `factor` = a single letter `{l}` → {l}, or `'{' union '}'` → recursive

`parseSeq` folds each factor's set into the accumulated result by string concatenation (cartesian product) and stops at `,`, `}` or end of input; `parseUnion` merges the comma-separated alternatives. The whole expression is parsed as a top-level `seq` (bare commas never occur outside braces), and the answer is the resulting set sorted lexicographically, which also removes duplicates.

Worst-case output size is exponential in the number of brace groups, but with length ≤ 60 this is small.

## Solution

[SourceCode](./solution.js)
