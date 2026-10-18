# [面试题 08.09] 括号

## Description


```md
https://leetcode.cn/problems/bracket-lcci/description/
* lcci
* Medium (82.37%)
* Likes:    147
* Dislikes: -
* Testcase Example:  '3'
括号。设计一种算法，打印n对括号的所有合法的（例如，开闭一一对应）组合。
说明：解集不能包含重复的子集。
示例：
输入：n = 3
输出：
[
"((()))",
"(()())",
"(())()",
"()(())",
"()()()"
]
Hint 1: 尝试简单构建法。
Hint 2: 假设我们有编写两对括号的所有有效方法。怎么用这个来得到编写三对括号的所有有效方法？
Hint 3: 我们可以通过向两对括号的列表中添加第三对括号来生成三对括号的组合。我们要在其前面、周围、后面添加第三对括号。即()、()、()。这样有效吗？
Hint 4: 前面提示给出的解法存在的问题在于可能有重复的值。我们可以通过使用散列表来消除这种情况。
Hint 5: 或者，可以考虑通过移动字符串并在每个步骤添加左侧和右侧的括号来完成此操作。这会消除重复吗？如何知道能否添加左侧或右侧的括号？
Hint 6: 在每一步添加一个左或右括号将消除重复。每个子字符串在每一步都是各不相同的。因此，总字符串将是独一无二的。
Hint 7: 我们可以通过计算左、右括号数保证这个字符串是有效的。添加一个左括号，直到括号的总数成对，这样字符串总是有效的。只要count(left parens) <= count(right parens)，就可以添加一个右括号。

```

## Description (English)

Bracket. Design an algorithm to print all valid (properly matched) combinations of n pairs of parentheses. The solution must not contain duplicates.

Example: n = 3 → ["((()))","(()())","(())()","()(())","()()()"]

## 思路

逐字符回溯（区别于"往完整串里插括号"的会产生重复的做法）：每步只加一个字符——左括号未用完可加 `(`，已放右括号数 < 已放左括号数可加 `)`。每个中间串互不相同，天然无重复；先 `(` 后 `)` 的枚举序与样例输出一致。

## Solution

[SourceCode](./solution.js)
