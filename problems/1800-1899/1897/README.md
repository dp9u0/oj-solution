# [1897] Redistribute Characters to Make All Strings Equal

## Description

[LeetCode Problem Description](https://leetcode.com/problems/redistribute-characters-to-make-all-strings-equal/description/)

* algorithms
* Easy (66.85%)
* Likes:    1167
* Dislikes: 85
* Testcase Example:  '["abc","aabc","bc"]'

```md
You are given an array of strings words (0-indexed).
In one operation, pick two distinct indices i and j, where words[i] is a non-empty string, and move any character from words[i] to any position in words[j].
Return true if you can make every string in words equal using any number of operations, and false otherwise.

Example 1:

Input: words = ['abc','aabc','bc']
Output: true
Explanation: Move the first &#39;a&#39; in words[1] to the front of words[2],
to make words[1] = 'abc' and words[2] = 'abc'.
All the strings are now equal to 'abc', so return true.

Example 2:

Input: words = ['ab','a']
Output: false
Explanation: It is impossible to make all the strings equal using the operation.


Constraints:

1 <= words.length <= 100
1 <= words[i].length <= 100
words[i] consists of lowercase English letters.


```

## 题目翻译

给定一个字符串数组 `words`（下标从 0 开始）。
每次操作中，选择两个不同的下标 i 和 j，其中 `words[i]` 是非空字符串，将 `words[i]` 中的任意一个字符移动到 `words[j]` 的任意位置。
如果可以通过任意次数的操作使 `words` 中的所有字符串相等，返回 true，否则返回 false。

**示例 1：**
输入：words = ["abc","aabc","bc"]
输出：true
解释：将 words[1] 中的第一个 'a' 移到 words[2] 的前面，使 words[1] = "abc"，words[2] = "abc"。所有字符串都等于 "abc"。

**示例 2：**
输入：words = ["ab","a"]
输出：false
解释：无法通过操作使所有字符串相等。

**约束：**
- 1 <= words.length <= 100
- 1 <= words[i].length <= 100
- words[i] 由小写英文字母组成

## 解题思路 (Approach)

统计所有字符串中每个字符的总出现次数。如果每个字符的总次数都能被 `words.length` 整除，则可以平均分配到每个字符串中，返回 true；否则返回 false。

时间复杂度：O(n * m)，其中 n 是 words 的长度，m 是每个字符串的平均长度。空间复杂度：O(1)（只有 26 个字母的计数）。

## Solution

[SourceCode](./solution.js)
