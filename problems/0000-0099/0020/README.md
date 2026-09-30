# [20] 有效的括号 ★

## Description


```md
https://leetcode.cn/problems/valid-parentheses/description/
* algorithms
* Easy (45.87%)
* Likes:    5040
* Dislikes: -
* Testcase Example:  '"()"'
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
有效字符串需满足：
左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
每个右括号都有一个对应的相同类型的左括号。

示例 1：
输入：s = "()"
输出：true
示例 2：
输入：s = "()[]{}"
输出：true
示例 3：
输入：s = "(]"
输出：false
示例 4：
输入：s = "([])"
输出：true
示例 5：
输入：s = "([)]"
输出：false

提示：
1 <= s.length <= 104
s 仅由括号 '()[]{}' 组成
Hint 1: Use a stack of characters.
Hint 2: When you encounter an opening bracket, push it to the top of the stack.
Hint 3: When you encounter a closing bracket, check if the top of the stack was the opening for it. If yes, pop it from the stack. Otherwise, return false.

```

## Description (English)

Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

An input string is valid if:

1. Open brackets are closed by the same type of brackets.
2. Open brackets are closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.

Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false

Example 4:
Input: s = "([])"
Output: true

Example 5:
Input: s = "([)]"
Output: false

Constraints:
1 <= s.length <= 10^4
s consists of parentheses only `'()[]{}'`.

## 思路

经典栈问题：

1. 用一个哈希表记录右括号 → 对应左括号的映射：`{ ')': '(', ']': '[', '}': '{' }`。
2. 从左到右扫描字符串：
   - 遇到左括号，压入栈。
   - 遇到右括号，栈顶必须是对应的左括号：若栈为空或不匹配，直接返回 `false`；否则弹出栈顶。
3. 扫描结束后，栈为空才有效（否则存在未闭合的左括号），返回 `栈.length === 0`。

复杂度：时间 O(n)，每个字符入栈/出栈至多一次；空间 O(n)，最坏情况全是左括号。

## Solution

[SourceCode](./solution.js)
