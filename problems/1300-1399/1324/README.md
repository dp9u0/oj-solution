# [1324] Print Words Vertically

## Description

[LeetCode Problem Description](https://leetcode.com/problems/print-words-vertically/description/)

* algorithms
* Medium (67.46%)
* Likes:    826
* Dislikes: 121
* Testcase Example:  '"HOW ARE YOU"'

```md
Given a string s.Returnall the words vertically in the same order in which they appear in s.
Words are returned as a list of strings, complete withspaces when is necessary. (Trailing spaces are not allowed).
Each word would be put on only one column and that in one column there will be only one word.

Example 1:

Input: s = 'HOW ARE YOU'
Output: ['HAY','ORO','WEU']
Explanation: Each word is printed vertically.
'HAY'
'ORO'
'WEU'

Example 2:

Input: s = 'TO BE OR NOT TO BE'
Output: ['TBONTB','OEROOE','   T']
Explanation: Trailing spaces is not allowed.
'TBONTB'
'OEROOE'
'   T'

Example 3:

Input: s = 'CONTEST IS COMING'
Output: ['CIC','OSO','N M','T I','E N','S G','T']


Constraints:

1 <= s.length <= 200
scontains only upper case English letters.
It&#39;s guaranteed that there is only onespace between 2 words.


```

## 题目翻译

给定字符串 s，将所有单词按列方向竖直输出。每列对应原句中每个单词的同一位置字符，不足的位置用空格填充，但要去掉尾随空格。

## 解题思路

拆分单词，找到最长单词长度作为列数。逐列拼接各单词对应位置字符（无则填空格），最后 trimEnd 去尾随空格。

## Solution

[SourceCode](./solution.js)
