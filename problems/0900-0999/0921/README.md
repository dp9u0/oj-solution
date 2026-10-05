# [921] 使括号有效的最少添加

## Description


```md
https://leetcode.cn/problems/minimum-add-to-make-parentheses-valid/description/
* algorithms
* Medium (73.37%)
* Likes:    289
* Dislikes: -
* Testcase Example:  '"())"'
只有满足下面几点之一，括号字符串才是有效的：
它是一个空字符串，或者
它可以被写成 AB （A 与 B 连接）, 其中 A 和 B 都是有效字符串，或者
它可以被写作 (A)，其中 A 是有效字符串。
给定一个括号字符串 s ，在每一次操作中，你都可以在字符串的任何位置插入一个括号
例如，如果 s = "()))" ，你可以插入一个开始括号为 "(()))" 或结束括号为 "())))" 。
返回 为使结果字符串 s 有效而必须添加的最少括号数。

示例 1：
输入：s = "())"
输出：1
示例 2：
输入：s = "((("
输出：3

提示：
1 <= s.length <= 1000
s 只包含 '(' 和 ')' 字符。

```

## Description (English)

A parentheses string is valid if and only if:

- It is an empty string, or
- It can be written as AB (A concatenated with B), where A and B are valid strings, or
- It can be written as (A), where A is a valid string.

You are given a parentheses string s. In one move, you may insert a parenthesis at any position of the string.

- For example, if s = "()))", you can insert an opening parenthesis to get "(()))", or a closing parenthesis to get "())))".

Return the minimum number of moves required to make s valid.

Example 1:
Input: s = "())"
Output: 1

Example 2:
Input: s = "((("
Output: 3

Constraints:
- 1 <= s.length <= 1000
- s consists of only '(' and ')' characters.

## Solution

贪心 + 计数器（O(n) 时间，O(1) 空间）：

一次从左到右扫描字符串，维护两个计数器：

- `open`：当前未匹配的 `(` 数量。
- `add`：必须额外插入的括号数。

遇到 `(` 时 `open++`；遇到 `)` 时若 `open > 0` 则 `open--`（与之前的某个 `(` 匹配），否则说明这个 `)` 前面没有任何可配对的 `(`，必须插入一个 `(`，`add++`。

扫描结束后，剩余的 `open` 个 `(` 全部没有右括号配对，每个都需要插入一个 `)`，答案为 `add + open`。

正确性：每个无法匹配的 `)` 贡献一次必须的插入，每个最终剩余的 `(` 也贡献一次必须的插入，且插入这些括号后字符串一定有效，因此该值即为最小值。

```js
var minAddToMakeValid = function(s) {
  let open = 0, add = 0;
  for (const ch of s) {
    if (ch === '(') {
      open++;
    } else if (open > 0) {
      open--;
    } else {
      add++;
    }
  }
  return add + open;
};
```

[SourceCode](./solution.js)
