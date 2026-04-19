# [1410] HTML Entity Parser

## Description

[LeetCode Problem Description](https://leetcode.com/problems/html-entity-parser/description/)

* algorithms
* Medium (50.15%)
* Likes:    215
* Dislikes: 333
* Testcase Example:  '"&amp; is an HTML entity but &ambassador; is not."'

```md
HTML entity parser is the parser that takes HTML code as input and replace all the entities of the special characters by the characters itself.
The special characters and their entities for HTML are:

Quotation Mark: the entity is &amp;quot; and symbol character is '.
Single Quote Mark: the entity is &amp;apos; and symbol character is &#39;.
Ampersand: the entity is &amp;amp; and symbol character is &amp;.
Greater Than Sign: the entity is &amp;gt; and symbol character is >.
Less Than Sign: the entity is &amp;lt; and symbol character is <.
Slash: the entity is &amp;frasl; and symbol character is /.

Given the input text string to the HTML parser, you have to implement the entity parser.
Return the text after replacing the entities by the special characters.

Example 1:

Input: text = '&amp;amp; is an HTML entity but &amp;ambassador; is not.'
Output: '&amp; is an HTML entity but &amp;ambassador; is not.'
Explanation: The parser will replace the &amp;amp; entity by &amp;

Example 2:

Input: text = 'and I quote: &amp;quot;...&amp;quot;'
Output: 'and I quote: \'...\''


Constraints:

1 <= text.length <= 105
The string may contain any possible characters out of all the 256 ASCII characters.


```

## 题目翻译

HTML 实体解析器接收 HTML 代码作为输入，将所有特殊字符的实体替换为字符本身。
特殊字符及其 HTML 实体如下：

- 引号：实体 `&quot;`，字符 `"`
- 单引号：实体 `&apos;`，字符 `'`
- &符号：实体 `&amp;`，字符 `&`
- 大于号：实体 `&gt;`，字符 `>`
- 小于号：实体 `&lt;`，字符 `<`
- 斜杠：实体 `&frasl;`，字符 `/`

给定输入文本字符串，实现实体解析器，返回替换实体后的文本。

## 解题思路

字符串替换问题。直接用 `String.prototype.replace` 依次替换所有已知实体即可。需要注意替换顺序：先替换较长的实体（如 `&frasl;`），再替换较短的，避免误替换。或者更简洁地，逐个替换每个实体模式。

由于各实体之间不会互相干扰（除了 `&amp;` 会出现在其他实体中），所以应该先替换其他实体，最后替换 `&amp;`。

## Solution

[SourceCode](./solution.js)
