# 5. Longest Palindromic Substring

## Description

Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

## Example

### Example 1

```shell
Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
```

### Example 2

```shell
Input: "cbbd"
Output: "bb"
```

## Solution

回文即 当前位置 index

index-k === index+k

or

index -k === index + 1 + k

[SourceCode](./solution.js)