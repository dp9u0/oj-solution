# [3557] Find Maximum Number of Non Intersecting Substrings

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-maximum-number-of-non-intersecting-substrings/description/)

* algorithms
* Medium (30.59%)
* Likes:    78
* Dislikes: 3
* Testcase Example:  '"abcdeafdef"'

```md
You are given a string word.
Return the maximum number of non-intersecting substrings of word that are at least four characters long and start and end with the same letter.

Example 1:

Input: word = 'abcdeafdef'
Output: 2
Explanation:
The two substrings are 'abcdea' and 'fdef'.

Example 2:

Input: word = 'bcdaaaab'
Output: 1
Explanation:
The only substring is 'aaaa'. Note that we cannot also choose 'bcdaaaab' since it intersects with the other substring.


Constraints:

1 <= word.length <= 2 * 105
word consists only of lowercase English letters.


```

## 翻译

给定字符串word，求最多能选出多少个不相交的子串，每个子串长度>=4且首尾字符相同。

## 解题思路

贪心。遍历字符串，对每个位置i，记录各字符最早出现位置。若当前字符c之前出现过（距离>=3），则找到一个有效子串，计数+1并重置所有字符记录（因为要不相交）。贪心选择尽量短的子串可以留下更多空间给后续子串。

## Solution

[SourceCode](./solution.js)
