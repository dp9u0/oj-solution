# [3441] Minimum Cost Good Caption

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-cost-good-caption/description/)

* algorithms
* Hard (20.76%)
* Likes:    42
* Dislikes: 7
* Testcase Example:  '"cdcd"'

```md
You are given a string caption of length n. A good caption is a string where every character appears in groups of at least 3 consecutive occurrences.
For example:

'aaabbb' and 'aaaaccc' are good captions.
'aabbb' and 'ccccd' are not good captions.

You can perform the following operation any number of times:
Choose an index i (where 0 <= i < n) and change the character at that index to either:

The character immediately before it in the alphabet (if caption[i] != &#39;a&#39;).
The character immediately after it in the alphabet (if caption[i] != &#39;z&#39;).

Your task is to convert the given caption into a good caption using the minimum number of operations, and return it. If there are multiple possible good captions, return the lexicographically smallest one among them. If it is impossible to create a good caption, return an empty string ''.

Example 1:

Input: caption = 'cdcd'
Output: 'cccc'
Explanation:
It can be shown that the given caption cannot be transformed into a good caption with fewer than 2 operations. The possible good captions that can be created using exactly 2 operations are:

'dddd': Change caption[0] and caption[2] to their next character &#39;d&#39;.
'cccc': Change caption[1] and caption[3] to their previous character &#39;c&#39;.

Since 'cccc' is lexicographically smaller than 'dddd', return 'cccc'.

Example 2:

Input: caption = 'aca'
Output: 'aaa'
Explanation:
It can be proven that the given caption requires at least 2 operations to be transformed into a good caption. The only good caption that can be obtained with exactly 2 operations is as follows:

Operation 1: Change caption[1] to &#39;b&#39;. caption = 'aba'.
Operation 2: Change caption[1] to &#39;a&#39;. caption = 'aaa'.

Thus, return 'aaa'.

Example 3:

Input: caption = 'bc'
Output: ''
Explanation:
It can be shown that the given caption cannot be converted to a good caption by using any number of operations.


Constraints:

1 <= caption.length <= 5 * 104
caption consists only of lowercase English letters.


```

## 翻译

给定长度为 n 的字符串 caption。一个"好标题"是指字符串中每个字符都以至少 3 个连续出现的形式组成分组。例如 "aaabbb" 是好的，"aabbb" 不是。

你可以进行任意次操作：选择一个位置 i，将该字符改为字母表中的前一个或后一个字符。每次操作花费 1。

目标：用最少操作次数将 caption 变成好标题。如果有多个最优结果，返回字典序最小的。如果不可能，返回空字符串。

## 解题思路

**反向 DP + 贪心重建**

1. **状态定义**：`dp[i][c][r]` 表示位置 i 到末尾的最小代价，给定位置 i 之前的状态为（最后字符 c，当前连续长度 r，其中 r ∈ {1,2,3}，3 表示 ≥3）。
2. **转移**：
   - r < 3：必须继续用 c，代价 = |val[i]-c| + dp[i+1][c][r+1]
   - r = 3：可以继续用 c 或切换到任意 c'，取最小
3. **贪心重建**：从左到右，在所有达到最优代价的选项中，选择字典序最小的字符。
4. **优化**：切换代价用 min1/min2 技巧，避免 O(26²) 内层循环。

时间复杂度：O(78n)，空间复杂度：O(78n)。

## Solution

[SourceCode](./solution.js)
