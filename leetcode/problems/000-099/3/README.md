# 3. Longest Substring Without Repeating Characters

## Description

Given a string, find the length of the longest substring without repeating characters.

## Example

```shell
Given "abcabcbb", the answer is "abc", which the length is 3.
Given "bbbbb", the answer is "b", with the length of 1.
Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
```

## Solution

以 pwwkew 为例 从头遍历 每次都记录最大长度 最大长度为 当前位置 - 当前字符上次出现的位置,当出现重复时候 上次出现的位置需要更新

```shell
p
pw
w
wk
wke
kew
```

[SourceCode](./solution.js)
