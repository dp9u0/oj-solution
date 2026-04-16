# [3403] Find the Lexicographically Largest String From the Box I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-the-lexicographically-largest-string-from-the-box-i/description/)

* algorithms
* Medium (40.94%)
* Likes:    489
* Dislikes: 129
* Testcase Example:  '"dbca"\n2'

```md
You are given a string word, and an integer numFriends.
Alice is organizing a game for her numFriends friends. There are multiple rounds in the game, where in each round:

word is split into numFriends non-empty strings, such that no previous round has had the exact same split.
All the split words are put into a box.

Find the lexicographically largest string from the box after all the rounds are finished.

Example 1:

Input: word = 'dbca', numFriends = 2
Output: 'dbc'
Explanation:
All possible splits are:

'd' and 'bca'.
'db' and 'ca'.
'dbc' and 'a'.


Example 2:

Input: word = 'gggg', numFriends = 4
Output: 'g'
Explanation:
The only possible split is: 'g', 'g', 'g', and 'g'.


Constraints:

1 <= word.length <= 5* 103
word consists only of lowercase English letters.
1 <= numFriends <= word.length


```

## 中文翻译

给定字符串 word 和整数 numFriends，将 word 分成 numFriends 个非空子串的所有可能方案中，找出所有子串中字典序最大的。

## 解题思路

要找字典序最大的子串，最优方案是将该子串尽可能长。每个位置 i 作为起点，最长可取 min(n - i, n - numFriends + 1) 个字符（因为其余 numFriends-1 个位置至少各占 1 个字符）。遍历所有起点，取每个起点能产生的最长子串中的字典序最大者。

## Solution

[SourceCode](./solution.js)
