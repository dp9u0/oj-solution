# [439] 三元表达式解析器

## Description


```md
https://leetcode.cn/problems/ternary-expression-parser/description/
* algorithms
* Medium (63.56%)
* Likes:    97
* Dislikes: -
* Testcase Example:  '"T?2:3"'
给定一个表示任意嵌套三元表达式的字符串 expression ，求值并返回其结果。
你可以总是假设给定的表达式是有效的，并且只包含数字， '?' ，  ':' ，  'T' 和 'F' ，其中 'T' 为真， 'F' 为假。表达式中的所有数字都是 一位 数(即在 [0,9] 范围内)。
条件表达式从右到左分组(大多数语言中都是这样)，表达式的结果总是为数字，'T' 或 'F' 。

示例 1：
输入： expression = "T?2:3"
输出： "2"
解释： 如果条件为真，结果为 2；否则，结果为 3。
示例 2：
输入： expression = "F?1:T?4:5"
输出： "4"
解释： 条件表达式自右向左结合。使用括号的话，相当于：
"(F ? 1 : (T ? 4 : 5))" --> "(F ? 1 : 4)" --> "4"
or "(F ? 1 : (T ? 4 : 5))" --> "(T ? 4 : 5)" --> "4"
示例 3：
输入： expression = "T?T?F:5:3"
输出： "F"
解释： 条件表达式自右向左结合。使用括号的话，相当于：
"(T ? (T ? F : 5) : 3)" --> "(T ? F : 3)" --> "F"
"(T ? (T ? F : 5) : 3)" --> "(T ? F : 5)" --> "F"

提示:
5 <= expression.length <= 104
expression 由数字, 'T', 'F', '?' 和 ':' 组成
保证 了表达式是一个有效的三元表达式，并且每个数字都是 一位数

```

## Solution

[SourceCode](./solution.js)

## Translation

Given a string of nested ternary expressions (digits, '?', ':', 'T', 'F'; all numbers single-digit), evaluate it. The conditional groups **right-to-left** (right-associative); the final result is a digit, 'T' or 'F'.

- Example 1: "T?2:3" → "2"
- Example 2: "F?1:T?4:5" → "4" (= "(F ? 1 : (T ? 4 : 5))")
- Example 3: "T?T?F:5:3" → "F"

Constraints: 5 ≤ length ≤ 10^4; valid expression guaranteed.

## Approach

**从右向左扫描 + 栈**。遇 'T'/'F'/数字压栈,':' 跳过,遇 '?' 时其左侧字符是条件:

- 先弹出的是 '?' 与 ':' 之间的**真分支**(扫描方向靠右先压),再弹出的是假分支;
- 按条件选一个压回,并把条件字符一并消耗。

天然处理右结合与任意嵌套,一次扫描 O(n)。
