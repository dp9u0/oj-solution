# 10. Regular Expression Matching

## Description

Given an input string (s) and a pattern (p), implement regular expression matching with support for '.' and '*'.

* '.' Matches any single character.
* '*' Matches zero or more of the preceding element.

The matching should cover the entire input string (not partial).

Note:

* s could be empty and contains only lowercase letters a-z.
* p could be empty and contains only lowercase letters a-z, and characters like . or *.

## Example

```javascript
Input:
s = "aa"
p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".
```

```javascript
Input:
s = "aa"
p = "a*"
Output: true
Explanation: '*' means zero or more of the precedeng element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
```

```javascript
Input:
s = "ab"
p = ".*"
Output: true
Explanation: ".*" means "zero or more (*) of any character (.)".
```

```javascript
Input:
s = "aab"
p = "c*a*b"
Output: true
Explanation: c can be repeated 0 times, a can be repeated 1 time. Therefore it matches "aab".
```

```javascript
Input:
s = "mississippi"
p = "mis*is*p*."
Output: false
```

## Solution

使用 `dp[i][j]` 记录 `s[i]` 和 `p[j]` 是否匹配

[SourceCode](./solution.js)