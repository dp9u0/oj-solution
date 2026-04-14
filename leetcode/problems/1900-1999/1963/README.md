# [1963] Minimum Number of Swaps to Make the String Balanced

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-string-balanced/description/)

* algorithms
* Medium (78.16%)
* Likes:    2567
* Dislikes: 151
* Testcase Example:  '"][]["'

```md
You are given a 0-indexed string s of even length n. The string consists of exactly n / 2 opening brackets &#39;[&#39; and n / 2 closing brackets &#39;]&#39;.
A string is called balanced if and only if:

It is the empty string, or
It can be written as AB, where both A and B are balanced strings, or
It can be written as [C], where C is a balanced string.

You may swap the brackets at any two indices any number of times.
Return the minimum number of swaps to make s balanced.

Example 1:

Input: s = '][]['
Output: 1
Explanation: You can make the string balanced by swapping index 0 with index 3.
The resulting string is '[[]]'.

Example 2:

Input: s = ']]][[['
Output: 2
Explanation: You can do the following to make the string balanced:
- Swap index 0 with index 4. s = '[]][]['.
- Swap index 1 with index 5. s = '[[][]]'.
The resulting string is '[[][]]'.

Example 3:

Input: s = '[]'
Output: 0
Explanation: The string is already balanced.


Constraints:

n == s.length
2 <= n <= 106
n is even.
s[i] is either &#39;[&#39; or &#39;]&#39;.
The number of opening brackets &#39;[&#39; equals n / 2, and the number of closing brackets &#39;]&#39; equals n / 2.


```

## 翻译

给定由 n/2 个 '[' 和 n/2 个 ']' 组成的字符串，可交换任意两个位置。求使括号平衡的最少交换次数。

## Approach

遍历维护平衡度（'[' +1, ']' -1），记录最小平衡度 minBalance（最深的负值）。每次交换可修正 2 个不匹配括号，答案 = (|minBalance| + 1) / 2。

## Solution

[SourceCode](./solution.js)
