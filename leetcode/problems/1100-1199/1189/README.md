# [1189] Maximum Number of Balloons

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-number-of-balloons/description/)

* algorithms
* Easy (60.12%)
* Likes:    1889
* Dislikes: 121
* Testcase Example:  '"nlaebolko"'

```md
Given a string text, you want to use the characters of text to form as many instances of the word 'balloon' as possible.
You can use each character in text at most once. Return the maximum number of instances that can be formed.

Example 1:


Input: text = 'nlaebolko'
Output: 1

Example 2:


Input: text = 'loonbalxballpoon'
Output: 2

Example 3:

Input: text = 'leetcode'
Output: 0


Constraints:

1 <= text.length <= 104
text consists of lower case English letters only.


Note: This question is the same as  2287: Rearrange Characters to Make Target String.

```

## 题目翻译

给定字符串text，用其中字符组成尽可能多的"balloon"。每个字符最多用一次，返回最大数量。

## 解题思路

统计text中各字符频率，对"balloon"所需字符(b:1,a:1,l:2,o:2,n:1)取min(count[c]/need[c])。

## Solution

[SourceCode](./solution.js)
