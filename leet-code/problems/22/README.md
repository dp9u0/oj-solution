# 22. Generate Parentheses

## Description

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

## Example

```javascript

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
```

## Solution

backtrace 即可 需要注意的是 当 left === 0 的时候 不应该继续 left - 1 这一个分支了

[SourceCode](./solution.js)