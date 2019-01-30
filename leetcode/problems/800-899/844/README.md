# [844] Backspace String Compare

## Description

[LeetCode Problem Description](https://leetcode.com/problems/backspace-string-compare/description/)

* algorithms
* Easy (44.72%)
* Testcase Example:  '"ab#c"\n"ad#c"'

```md
Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.
Example 1:
Input: S = "ab#c", T = "ad#c"
Output: true
Explanation: Both S and T become "ac".
Example 2:
Input: S = "ab##", T = "c#d#"
Output: true
Explanation: Both S and T become "".
Example 3:
Input: S = "a##c", T = "#a#c"
Output: true
Explanation: Both S and T become "c".
Example 4:
Input: S = "a#c", T = "b"
Output: false
Explanation: S becomes "c" while T becomes "b".
Note:
1 <= S.length <= 200
1 <= T.length <= 200
S and T only contain lowercase letters and '#' characters.
Follow up:
Can you solve it in O(N) time and O(1) space?
```

## Solution

1. 如果不要求 O(1) space 的话 可以考虑使用 stack
2. 因为要求 O(1) space,从后面开始对比.

[SourceCode](./solution.js)