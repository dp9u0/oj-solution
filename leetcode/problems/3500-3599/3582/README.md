# [3582] Generate Tag for Video Caption

## Description

[LeetCode Problem Description](https://leetcode.com/problems/generate-tag-for-video-caption/description/)

* algorithms
* Easy (32.39%)
* Likes:    72
* Dislikes: 30
* Testcase Example:  '"Leetcode daily streak achieved"'

```md
You are given a string caption representing the caption for a video.
The following actions must be performed in order to generate a valid tag for the video:


Combine all words in the string into a single camelCase string prefixed with &#39;#&#39;. A camelCase string is one where the first letter of all words except the first one is capitalized. All characters after the first character in each word must be lowercase.


Remove all characters that are not an English letter, except the first &#39;#&#39;.


Truncate the result to a maximum of 100 characters.


Return the tag after performing the actions on caption.

Example 1:

Input: caption = 'Leetcode daily streak achieved'
Output: '#leetcodeDailyStreakAchieved'
Explanation:
The first letter for all words except 'leetcode' should be capitalized.

Example 2:

Input: caption = 'can I Go There'
Output: '#canIGoThere'
Explanation:
The first letter for all words except 'can' should be capitalized.

Example 3:

Input: caption = 'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh'
Output: '#hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh'
Explanation:
Since the first word has length 101, we need to truncate the last two letters from the word.


Constraints:

1 <= caption.length <= 150
caption consists only of English letters and &#39; &#39;.


```

## 题目翻译

给定视频标题字符串 caption，生成标签：1) 分割为单词，合并为 camelCase（首词全小写，其余首字母大写）并加 '#' 前缀；2) 只保留英文字母和首字符 '#'；3) 截断至最多 100 字符。

## 解题思路

字符串模拟。按空格分割，第一个词全小写，后续词首字母大写其余小写，拼合后加 '#' 前缀，截断到 100 字符。

时间复杂度 O(n)

## Solution

[SourceCode](./solution.js)
