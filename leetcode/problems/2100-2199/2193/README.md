# [2193] Minimum Number of Moves to Make Palindrome

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-number-of-moves-to-make-palindrome/description/)

* algorithms
* Hard (52.69%)
* Likes:    1057
* Dislikes: 79
* Testcase Example:  '"aabb"'

```md
You are given a string s consisting only of lowercase English letters.
In one move, you can select any two adjacent characters of s and swap them.
Return the minimum number of moves needed to make s a palindrome.
Note that the input will be generated such that s can always be converted to a palindrome.

Example 1:

Input: s = 'aabb'
Output: 2
Explanation:
We can obtain two palindromes from s, 'abba' and 'baab'.
- We can obtain 'abba' from s in 2 moves: 'aabb' -> 'abab' -> 'abba'.
- We can obtain 'baab' from s in 2 moves: 'aabb' -> 'abab' -> 'baab'.
Thus, the minimum number of moves needed to make s a palindrome is 2.

Example 2:

Input: s = 'letelt'
Output: 2
Explanation:
One of the palindromes we can obtain from s in 2 moves is 'lettel'.
One of the ways we can obtain it is 'letelt' -> 'letetl' -> 'lettel'.
Other palindromes such as 'tleelt' can also be obtained in 2 moves.
It can be shown that it is not possible to obtain a palindrome in less than 2 moves.


Constraints:

1 <= s.length <= 2000
s consists only of lowercase English letters.
s can be converted to a palindrome using a finite number of moves.


```

## 中文翻译

给定字符串 s，每次可交换相邻两个字符。求将 s 变成回文串的最少交换次数。保证 s 一定能变成回文。

约束：s.length <= 2000

## 解题思路

**贪心 + 双端构造**

1. 从两端向中间构造回文：每次处理左端的字符 c，找到它从右端起最近的匹配字符。
2. 如果找到匹配：将该匹配字符交换到右端（贡献距离步），然后左右指针各缩进一格。
3. 如果没有匹配（c 是奇数个的字符）：先不处理，记录中间位置，最后再处理。
4. 实现上可以用链表或数组模拟，每次将匹配字符移到目标位置。
5. 用 BIT（树状数组）优化：维护每个位置是否被移除，查询实际位置。

## Solution

[SourceCode](./solution.js)
