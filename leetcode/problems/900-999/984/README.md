# [984] String Without AAA or BBB

## Description

[LeetCode Problem Description](https://leetcode.com/problems/string-without-aaa-or-bbb/description/)

* algorithms
* Easy (31.64%)
* Testcase Example:  '1\n2'

```md
Given two integers A and B, return any string S such that:
S has length A + B and contains exactly A 'a' letters, and exactly B 'b' letters;
The substring 'aaa' does not occur in S;
The substring 'bbb' does not occur in S.

Example 1:
Input: A = 1, B = 2
Output: "abb"
Explanation: "abb", "bab" and "bba" are all correct answers.
Example 2:
Input: A = 4, B = 1
Output: "aabaa"

Note:
0 <= A <= 100
0 <= B <= 100
It is guaranteed such an S exists for the given A and B.

```

## Solution

首先输入`A B`肯定有解,目标是:比较大的那个值多输出,例如 `aabaabaab`,直到两个值接近了,变成轮流输出两个 `aabbaabb`

[SourceCode](./solution.js)