# [591] Tag Validator

## Description

[LeetCode Problem Description](https://leetcode.com/problems/tag-validator/description/)

* algorithms
* Hard (41.47%)
* Likes:    185
* Dislikes: 655
* Testcase Example:  '"<DIV>This is the first line <![CDATA[<div>]]></DIV>"'

```md
Given a string representing a code snippet, implement a tag validator to parse the code and return whether it is valid.
A code snippet is valid if all the following rules hold:

The code must be wrapped in a valid closed tag. Otherwise, the code is invalid.
A closed tag (not necessarily valid) has exactly the following format : <TAG_NAME>TAG_CONTENT</TAG_NAME>. Among them, <TAG_NAME> is the start tag, and </TAG_NAME> is the end tag. The TAG_NAME in start and end tags should be the same. A closed tag is valid if and only if the TAG_NAME and TAG_CONTENT are valid.
A valid TAG_NAME only contain upper-case letters, and has length in range [1,9]. Otherwise, the TAG_NAME is invalid.
A valid TAG_CONTENT may contain other valid closed tags, cdata and any characters (see note1) EXCEPT unmatched <, unmatched start and end tag, and unmatched or closed tags with invalid TAG_NAME. Otherwise, the TAG_CONTENT is invalid.
A start tag is unmatched if no end tag exists with the same TAG_NAME, and vice versa. However, you also need to consider the issue of unbalanced when tags are nested.
A < is unmatched if you cannot find a subsequent >. And when you find a < or </, all the subsequent characters until the next > should be parsed as TAG_NAME (not necessarily valid).
The cdata has the following format : <![CDATA[CDATA_CONTENT]]>. The range of CDATA_CONTENT is defined as the characters between <![CDATA[ and the first subsequent ]]>.
CDATA_CONTENT may contain any characters. The function of cdata is to forbid the validator to parse CDATA_CONTENT, so even it has some characters that can be parsed as tag (no matter valid or invalid), you should treat it as regular characters.


Example 1:

Input: code = '<DIV>This is the first line <![CDATA[<div>]]></DIV>'
Output: true
Explanation:
The code is wrapped in a closed tag : <DIV> and </DIV>.
The TAG_NAME is valid, the TAG_CONTENT consists of some characters and cdata.
Although CDATA_CONTENT has an unmatched start tag with invalid TAG_NAME, it should be considered as plain text, not parsed as a tag.
So TAG_CONTENT is valid, and then the code is valid. Thus return true.

Example 2:

Input: code = '<DIV>>>  ![cdata[]] <![CDATA[<div>]>]]>]]>>]</DIV>'
Output: true
Explanation:
We first separate the code into : start_tag
tag_content
end_tag.
start_tag -> '<DIV>'
end_tag -> '</DIV>'
tag_content could also be separated into : text1
cdata
text2.
text1 -> '>>  ![cdata[]] '
cdata -> '<![CDATA[<div>]>]]>', where the CDATA_CONTENT is '<div>]>'
text2 -> ']]>>]'
The reason why start_tag is NOT '<DIV>>>' is because of the rule 6.
The reason why cdata is NOT '<![CDATA[<div>]>]]>]]>' is because of the rule 7.

Example 3:

Input: code = '<A>  <B> </A>   </B>'
Output: false
Explanation: Unbalanced. If '<A>' is closed, then '<B>' must be unmatched, and vice versa.


Constraints:

1 <= code.length <= 500
code consists of English letters, digits, &#39;<&#39;, &#39;>&#39;, &#39;/&#39;, &#39;!&#39;, &#39;[&#39;, &#39;]&#39;, &#39;.&#39;, and &#39; &#39;.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译（中文）

给定一个表示代码片段的字符串，实现一个标签校验器来解析该代码，并返回它是否合法。
代码片段合法，需要满足以下所有规则：

- 代码必须被一个合法的闭合标签包裹。否则，代码不合法。
- 闭合标签（不一定合法）必须严格按照如下格式：`<TAG_NAME>TAG_CONTENT</TAG_NAME>`。其中 `<TAG_NAME>` 是起始标签，`</TAG_NAME>` 是结束标签。起始和结束标签中的 TAG_NAME 必须相同。当且仅当 TAG_NAME 和 TAG_CONTENT 都合法时，闭合标签才合法。
- 合法的 TAG_NAME 仅含有大写字母，长度在范围 [1,9] 之间。否则，该 TAG_NAME 不合法。
- 合法的 TAG_CONTENT 可以包含其他合法的闭合标签、cdata 以及任意字符（见注 1），但是不能包含：未闭合的 `<`、不匹配的起始/结束标签、不匹配的或 TAG_NAME 非法的标签。否则，TAG_CONTENT 不合法。
- 如果起始标签没有对应的同名结束标签，则该起始标签是不匹配的，反之亦然。同时还需要考虑标签嵌套时是否平衡（正确嵌套）。
- 如果找不到后续的 `>`，则 `<` 是不匹配的。而且当遇到 `<` 或 `</` 时，直到下一个 `>` 之前的所有字符都应解析为 TAG_NAME（不一定合法）。
- cdata 的格式为：`<![CDATA[CDATA_CONTENT]]>`。CDATA_CONTENT 的范围定义为 `<![CDATA[` 与其之后第一个 `]]>` 之间的字符。
- CDATA_CONTENT 可以包含任意字符。cdata 的作用是阻止校验器解析 CDATA_CONTENT，因此即使其中含有可以被解析为标签的字符（无论合法与否），都应将其视为普通字符。

约束：
- 1 <= code.length <= 500
- code 由英文字母、数字、`<`、`>`、`/`、`!`、`[`、`]`、`.` 和空格组成

## 解题思路

这是一道典型的**栈 + 线性扫描解析**问题（类似简化的 HTML/XML 解析器）。

核心要点：

1. **预处理判断**：合法代码必须整体被 `<TAG>` ... `</TAG>` 包裹，因此第一个字符必须是 `<`，第二个字符必须是大写字母（排除 `<![CDATA[`、`</` 等开头的情况，否则顶层没有包裹标签直接判 false）。
2. **用栈保存已打开的 TAG_NAME**：
   - 遇到起始标签 `<NAME>`：校验 NAME 合法（1-9 个大写字母）后入栈。
   - 遇到结束标签 `</NAME>`：NAME 必须合法，且必须与栈顶相同，出栈。
   - 出栈后若栈为空且还没扫描完字符串，说明顶层闭合标签后面还有内容，直接 false。
3. **cdata 优先处理**：遇到 `<![CDATA[` 就跳到其后第一个 `]]>`，中间内容全部当作普通文本；若找不到 `]]>` 则 `<` 不匹配，返回 false。
4. **普通文本**：非 `<` 开头的字符直接跳过；遇到 `<`（非 cdata、非结束标签）按起始标签解析，`<` 到 `>` 之间的内容就是候选 TAG_NAME，不合法（含小写/空格/长度越界/空）即 false，找不到 `>` 也是 false。
5. **最终判定**：扫描结束后栈必须为空。

时间复杂度 O(n)，空间复杂度 O(n)（最坏为标签嵌套深度对应的栈）。
