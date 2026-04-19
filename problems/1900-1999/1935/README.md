# [1935] Maximum Number of Words You Can Type

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-number-of-words-you-can-type/description/)

* algorithms
* Easy (82.92%)
* Likes:    997
* Dislikes: 40
* Testcase Example:  '"hello world"\n"ad"'

```md
There is a malfunctioning keyboard where some letter keys do not work. All other keys on the keyboard work properly.
Given a string text of words separated by a single space (no leading or trailing spaces) and a string brokenLetters of all distinct letter keys that are broken, return the number of words in text you can fully type using this keyboard.

Example 1:

Input: text = 'hello world', brokenLetters = 'ad'
Output: 1
Explanation: We cannot type 'world' because the &#39;d&#39; key is broken.

Example 2:

Input: text = 'leet code', brokenLetters = 'lt'
Output: 1
Explanation: We cannot type 'leet' because the &#39;l&#39; and &#39;t&#39; keys are broken.

Example 3:

Input: text = 'leet code', brokenLetters = 'e'
Output: 0
Explanation: We cannot type either word because the &#39;e&#39; key is broken.


Constraints:

1 <= text.length <= 104
0 <= brokenLetters.length <= 26
text consists of words separated by a single space without any leading or trailing spaces.
Each word only consists of lowercase English letters.
brokenLetters consists of distinct lowercase English letters.


```

## 中文翻译

给定一段文本和坏掉的键盘字母，统计文本中有多少个单词可以完全打出（不含坏掉的字母）。

## 解题思路

将坏掉的字母存入 Set，拆分单词后逐个检查每个单词是否包含坏字母。

## Solution

[SourceCode](./solution.js)
