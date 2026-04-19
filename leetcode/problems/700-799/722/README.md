# [722] Remove Comments

## Description

[LeetCode Problem Description](https://leetcode.com/problems/remove-comments/description/)

* algorithms
* Medium (40.09%)
* Likes:    758
* Dislikes: 1848
* Testcase Example:  '["/*Test program */", "int main()", "{ ", "  // variable declaration ", "int a, b, c;", "/* This is a test", "   multiline  ", "   comment for ", "   testing */", "a = b + c;", "}"]'

```md
Given a C++ program, remove comments from it. The program source is an array of strings source where source[i] is the ith line of the source code. This represents the result of splitting the original source code string by the newline character &#39;\n&#39;.
In C++, there are two types of comments, line comments, and block comments.

The string '//' denotes a line comment, which represents that it and the rest of the characters to the right of it in the same line should be ignored.
The string '/*' denotes a block comment, which represents that all characters until the next (non-overlapping) occurrence of '*/' should be ignored. (Here, occurrences happen in reading order: line by line from left to right.) To be clear, the string '/*/' does not yet end the block comment, as the ending would be overlapping the beginning.

The first effective comment takes precedence over others.

For example, if the string '//' occurs in a block comment, it is ignored.
Similarly, if the string '/*' occurs in a line or block comment, it is also ignored.

If a certain line of code is empty after removing comments, you must not output that line: each string in the answer list will be non-empty.
There will be no control characters, single quote, or double quote characters.

For example, source = 'string s = '/* Not a comment. */';' will not be a test case.

Also, nothing else such as defines or macros will interfere with the comments.
It is guaranteed that every open block comment will eventually be closed, so '/*' outside of a line or block comment always starts a new comment.
Finally, implicit newline characters can be deleted by block comments. Please see the examples below for details.
After removing the comments from the source code, return the source code in the same format.

Example 1:

Input: source = ['/*Test program */', 'int main()', '{ ', '  // variable declaration ', 'int a, b, c;', '/* This is a test', '   multiline  ', '   comment for ', '   testing */', 'a = b + c;', '}']
Output: ['int main()','{ ','  ','int a, b, c;','a = b + c;','}']
Explanation: The line by line code is visualized as below:
/*Test program */
int main()
{
// variable declaration
int a, b, c;
/* This is a test
multiline
comment for
testing */
a = b + c;
}
The string /* denotes a block comment, including line 1 and lines 6-9. The string // denotes line 4 as comments.
The line by line output code is visualized as below:
int main()
{

int a, b, c;
a = b + c;
}

Example 2:

Input: source = ['a/*comment', 'line', 'more_comment*/b']
Output: ['ab']
Explanation: The original source string is 'a/*comment\nline\nmore_comment*/b', where we have bolded the newline characters.  After deletion, the implicit newline characters are deleted, leaving the string 'ab', which when delimited by newline characters becomes ['ab'].


Constraints:

1 <= source.length <= 100
0 <= source[i].length <= 80
source[i] consists of printable ASCII characters.
Every open block comment is eventually closed.
There are no single-quote ordouble-quote in the input.


```

## 翻译

给定 C++ 源代码（字符串数组），移除所有注释。两种注释：`//` 行注释（忽略本行后续内容）和 `/* */` 块注释（可跨行）。块注释优先级高于行注释。空行不输出。

## 解题思路

逐字符扫描，用 `inBlock` 标志跟踪是否在块注释中。非块注释状态下检测 `//` 和 `/*`；块注释状态下检测 `*/`。用 buf 累积非注释字符，行结束时若 buf 非空则加入结果。块注释可跨行，buf 跨行保留。

## Solution

[SourceCode](./solution.js)
