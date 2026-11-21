# [2052] 将句子分隔成行的最低成本

## Description


```md
https://leetcode.cn/problems/minimum-cost-to-separate-sentence-into-rows/description/
* algorithms
* Medium (46.07%)
* Likes:    8
* Dislikes: -
* Testcase Example:  '"i love leetcode"\n12'
给定一个由空格分隔的单词组成的字符串 sentence 和一个整数 k。你的任务是将 sentence 分成多行，每行中的字符数最多为 k。你可以假设 sentence 不以空格开头或结尾，并且 sentence 中的单词由单个空格分隔。
你可以通过在 sentence 中的单词间插入换行来分隔 sentence 。一个单词不能被分成两行。每个单词只能使用一次，并且单词顺序不能重排。同一行中的相邻单词应该由单个空格分隔，并且每行都不应该以空格开头或结尾。
一行长度为 n 的字符串的分隔成本是 (k - n)2 ，总成本就是除开最后一行以外的其它所有行的分隔成本之和。
以 sentence = "i love leetcode" 和k = 12为例：

将sentence 分成 "i", "love", 和"leetcode" 的成本为 (12 - 1)2 + (12 - 4)2 = 185。
将sentence 分成 "i love", 和"leetcode" 的成本为 (12 - 6)2 = 36。
将sentence 分成 "i", 和"love leetcode" 是不可能的，因为 "love leetcode" 的长度大于 k。


返回将sentence分隔成行的最低的可能总成本。

示例 1:
输入: sentence = "i love leetcode", k = 12
输出: 36
解释:
将 sentence 分成"i", "love", 和"leetcode" 的成本为 (12 - 1)2 + (12 - 4)2 = 185.
将 sentence 分成"i love", 和"leetcode" 的成本为 (12 - 6)2 = 36.
将 sentence 分成"i", "love leetcode" 是不可能的，因为 "love leetcode" 的长度为 13.
36是最低的可能总成本，因此返回它
示例 2:
输入: sentence = "apples and bananas taste great", k = 7
输出: 21
解释:
将 sentence 分成"apples", "and", "bananas", "taste", 和"great" 的成本为 (7 - 6)2 + (7 - 3)2 + (7 - 7)2 + (7 - 5)2 = 21.
21是最低的可能总成本，因此返回它
示例 3:
输入: sentence = "a", k = 5
输出: 0
解释:
最后一行的成本不包括在总成本中，而sentence只有一行，所以返回0

提示:
1 <= sentence.length <= 5000
1 <= k <= 5000
sentence 中每个单词长度最大为 k.
sentence 只包含小写字母和空格.
sentence 不会以空格开头或结尾.
sentence 中的单词以单个空格分隔.
Hint 1: Create an array storing all of the words in sentence separated.
Hint 2: Try dynamic programming.
Hint 3: Build a dp array where dp[i] represents the minimum total cost for the first i + 1 words.

```

## Solution

[SourceCode](./solution.js)

## English Translation

Given a sentence of space-separated words and an integer `k`, split the sentence into rows by inserting line breaks between words. Each row holds at most `k` characters (words keep their order, single spaces between words on a row, no word is split).

A row of length `n` costs `(k - n)^2`, except the last row which costs nothing. Return the minimum total cost.

Example 1:
Input: sentence = "i love leetcode", k = 12
Output: 36

Example 2:
Input: sentence = "apples and bananas taste great", k = 7
Output: 21

Example 3:
Input: sentence = "a", k = 5
Output: 0

Constraints: 1 <= sentence.length <= 5000, 1 <= k <= 5000; each word length <= k.

## Approach

Linear DP. `dp[i]` = minimum cost to lay out the first `i` words, `dp[0] = 0`. For each `i`, extend backwards over `j < i` while the line `words[j+1..i]` fits (`len = prefLen[i] - prefLen[j] + (i - j - 1) <= k`, where `prefLen` are word-length prefix sums): `dp[i] = min(dp[j] + (i == n ? 0 : (k - len)^2))` — the final row is free.

Backward extension stops as soon as the line overflows, so transitions total O(sum of line lengths) <= O(n * k) worst case but effectively O(n^2) with n <= 5000.
