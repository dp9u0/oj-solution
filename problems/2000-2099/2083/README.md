# [2083] 求以相同字母开头和结尾的子串总数

## Description


```md
https://leetcode.cn/problems/substrings-that-begin-and-end-with-the-same-letter/description/
* algorithms
* Medium (58.08%)
* Likes:    9
* Dislikes: -
* Testcase Example:  '"abcba"'
给你一个仅由小写英文字母组成的，  下标从 0 开始的字符串 s 。返回 s 中以相同字符开头和结尾的子字符串总数。
子字符串是字符串中连续的非空字符序列。

示例 1：
输入：s = "abcba"
输出：7
解释：
以相同字母开头和结尾的长度为 1 的子串是："a"、"b"、"c"、"b" 和 "a" 。
以相同字母开头和结尾的长度为 3 的子串是："bcb" 。
以相同字母开头和结尾的长度为 5 的子串是："abcba" 。
示例 2：
输入：s = "abacad"
输出：9
解释：
以相同字母开头和结尾的长度为 1 的子串是："a"、"b"、"a"、"c"、"a" 和 "d" 。
以相同字母开头和结尾的长度为 3 的子串是："aba" 和 "aca" 。
以相同字母开头和结尾的长度为 5 的子串是："abaca" 。
示例 3：
输入：s = "a"
输出：1
解释：
只有一个，以相同字母开头和结尾的长度为 1 的子串是："a"。

提示：
1 <= s.length <= 105
s 仅包含小写英文字母。
Hint 1: In the string "abacad", the letter "a" appears 3 times. How many substrings begin with the first "a" and end with any "a"?
Hint 2: There are 3 substrings ("a", "aba", and "abaca"). How many substrings begin with the second "a" and end with any "a"? How about the third?
Hint 3: 2 substrings begin with the second "a" ("a", and "aca") and 1 substring begins with the third "a" ("a").
Hint 4: There is a total of 3 + 2 + 1 = 6 substrings that begin and end with "a".
Hint 5: If a character appears i times in the string, there are i * (i + 1) / 2 substrings that begin and end with that character.

```

## Solution

[SourceCode](./solution.js)

## English Translation

Given a 0-indexed lowercase string `s`, return the total number of substrings that begin and end with the same letter.

Example 1:
Input: s = "abcba"
Output: 7

Example 2:
Input: s = "abacad"
Output: 9

Example 3:
Input: s = "a"
Output: 1

Constraints: 1 <= s.length <= 10^5.

## Approach

For each letter occurring `c` times, every ordered pair of occurrences (including the same position, giving length-1 substrings) defines one valid substring: `c * (c + 1) / 2`. Sum over all 26 letters.

Time O(n), space O(1).
