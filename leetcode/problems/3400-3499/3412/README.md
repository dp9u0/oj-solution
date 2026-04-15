# [3412] Find Mirror Score of a String

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-mirror-score-of-a-string/description/)

* algorithms
* Medium (35.53%)
* Likes:    126
* Dislikes: 8
* Testcase Example:  '"aczzx"'

```md
You are given a string s.
We define the mirror of a letter in the English alphabet as its corresponding letter when the alphabet is reversed. For example, the mirror of &#39;a&#39; is &#39;z&#39;, and the mirror of &#39;y&#39; is &#39;b&#39;.
Initially, all characters in the string s are unmarked.
You start with a score of 0, and you perform the following process on the string s:

Iterate through the string from left to right.
At each index i, find the closest unmarked index j such that j < i and s[j] is the mirror of s[i]. Then, mark both indices i and j, and add the value i - j to the total score.
If no such index j exists for the index i, move on to the next index without making any changes.

Return the total score at the end of the process.

Example 1:

Input: s = 'aczzx'
Output: 5
Explanation:

i = 0. There is no index j that satisfies the conditions, so we skip.
i = 1. There is no index j that satisfies the conditions, so we skip.
i = 2. The closest index j that satisfies the conditions is j = 0, so we mark both indices 0 and 2, and then add 2 - 0 = 2 to the score.
i = 3. There is no index j that satisfies the conditions, so we skip.
i = 4. The closest index j that satisfies the conditions is j = 1, so we mark both indices 1 and 4, and then add 4 - 1 = 3 to the score.


Example 2:

Input: s = 'abcdef'
Output: 0
Explanation:
For each index i, there is no index j that satisfies the conditions.


Constraints:

1 <= s.length <= 105
s consists only of lowercase English letters.


```

## 中文翻译

给定字符串 s，从左到右遍历，对每个位置 i 找最近的未标记位置 j（j < i）使 s[j] 是 s[i] 的镜像字母（'a'↔'z'，'b'↔'y'，...），标记 i 和 j，分数加 i-j。返回总分。

## 解题思路

用 26 个栈存储每个字母的未标记索引。遍历到 i 时，计算 s[i] 的镜像字母 mirror，从 mirror 的栈中弹出最近的索引 j，分数加 i-j。若栈空则跳过，否则将 i 的字母索引入栈。

时间复杂度：O(n)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
