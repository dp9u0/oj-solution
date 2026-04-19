# [691] Stickers to Spell Word

## Description

[LeetCode Problem Description](https://leetcode.com/problems/stickers-to-spell-word/description/)

* algorithms
* Hard (50.75%)
* Likes:    1336
* Dislikes: 130
* Testcase Example:  '["with","example","science"]\n"thehat"'

```md
We are given n different types of stickers. Each sticker has a lowercase English word on it.
You would like to spell out the given string target by cutting individual letters from your collection of stickers and rearranging them. You can use each sticker more than once if you want, and you have infinite quantities of each sticker.
Return the minimum number of stickers that you need to spell out target. If the task is impossible, return -1.
Note: In all test cases, all words were chosen randomly from the 1000 most common US English words, and target was chosen as a concatenation of two random words.

Example 1:

Input: stickers = ['with','example','science'], target = 'thehat'
Output: 3
Explanation:
We can use 2 'with' stickers, and 1 'example' sticker.
After cutting and rearrange the letters of those stickers, we can form the target 'thehat'.
Also, this is the minimum number of stickers necessary to form the target string.

Example 2:

Input: stickers = ['notice','possible'], target = 'basicbasic'
Output: -1
Explanation:
We cannot form the target 'basicbasic' from cutting letters from the given stickers.


Constraints:

n == stickers.length
1 <= n <= 50
1 <= stickers[i].length <= 10
1 <= target.length <= 15
stickers[i] and target consist of lowercase English letters.


```

## 中文翻译

给定一组贴纸（每个贴纸是一个小写单词），用贴纸中的字母拼出目标字符串 target。每张贴纸可无限使用。返回最少需要的贴纸数量，不可能则返回 -1。

## 解题思路

状态压缩 DP。target 长度 <= 15，用 bitmask 表示 target 中哪些位置已被覆盖。dp[mask] 表示达到该状态所需最少贴纸数。对每个状态，尝试每张贴纸，计算能新覆盖的位，转移状态。

## Solution

[SourceCode](./solution.js)
