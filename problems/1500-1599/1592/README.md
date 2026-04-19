# [1592] Rearrange Spaces Between Words

## Description

[LeetCode Problem Description](https://leetcode.com/problems/rearrange-spaces-between-words/description/)

* algorithms
* Easy (44.16%)
* Likes:    495
* Dislikes: 354
* Testcase Example:  '"  this   is  a sentence "'

```md
You are given a string text of words that are placed among some number of spaces. Each word consists of one or more lowercase English letters and are separated by at least one space. It&#39;s guaranteed that text contains at least one word.
Rearrange the spaces so that there is an equal number of spaces between every pair of adjacent words and that number is maximized. If you cannot redistribute all the spaces equally, place the extra spaces at the end, meaning the returned string should be the same length as text.
Return the string after rearranging the spaces.

Example 1:

Input: text = '  this   is  a sentence '
Output: 'this   is   a   sentence'
Explanation: There are a total of 9 spaces and 4 words. We can evenly divide the 9 spaces between the words: 9 / (4-1) = 3 spaces.

Example 2:

Input: text = ' practice   makes   perfect'
Output: 'practice   makes   perfect '
Explanation: There are a total of 7 spaces and 3 words. 7 / (3-1) = 3 spaces plus 1 extra space. We place this extra space at the end of the string.


Constraints:

1 <= text.length <= 100
text consists of lowercase English letters and &#39; &#39;.
text contains at least one word.


```

## 中文翻译

给定含单词和空格的字符串，重新分配空格使相邻单词间空格数相等且最大，多余空格放末尾。

## 解题思路

统计空格总数和单词数，计算间隔空格数和末尾空格数，拼接即可。只有一个单词时所有空格放末尾。

时间复杂度：O(n)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
