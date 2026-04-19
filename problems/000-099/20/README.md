# 20. Valid Parentheses

## Description

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

* Open brackets must be closed by the same type of brackets.
* Open brackets must be closed in the correct order.

Note that an empty string is also considered valid.

## Example

```javascript
Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
Example 3:

Input: "(]"
Output: false
Example 4:

Input: "([)]"
Output: false
Example 5:

Input: "{[]}"
Output: true
```

## Solution

利用stack 碰到左边的入栈,碰到右边的出栈并检查是否匹配,最终栈中应该没有任何符号.

[SourceCode](./solution.js)