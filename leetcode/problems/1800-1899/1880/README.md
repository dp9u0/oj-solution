# [1880] Check if Word Equals Summation of Two Words

## Description

[LeetCode Problem Description](https://leetcode.com/problems/check-if-word-equals-summation-of-two-words/description/)

* algorithms
* Easy (75.21%)
* Likes:    612
* Dislikes: 42
* Testcase Example:  '"acb"\n"cba"\n"cdb"'

```md
The letter value of a letter is its position in the alphabet starting from 0 (i.e. &#39;a&#39; -> 0, &#39;b&#39; -> 1, &#39;c&#39; -> 2, etc.).
The numerical value of some string of lowercase English letters s is the concatenation of the letter values of each letter in s, which is then converted into an integer.

For example, if s = 'acb', we concatenate each letter&#39;s letter value, resulting in '021'. After converting it, we get 21.

You are given three strings firstWord, secondWord, and targetWord, each consisting of lowercase English letters &#39;a&#39; through &#39;j&#39; inclusive.
Return true if the summation of the numerical values of firstWord and secondWord equals the numerical value of targetWord, or false otherwise.

Example 1:

Input: firstWord = 'acb', secondWord = 'cba', targetWord = 'cdb'
Output: true
Explanation:
The numerical value of firstWord is 'acb' -> '021' -> 21.
The numerical value of secondWord is 'cba' -> '210' -> 210.
The numerical value of targetWord is 'cdb' -> '231' -> 231.
We return true because 21 + 210 == 231.

Example 2:

Input: firstWord = 'aaa', secondWord = 'a', targetWord = 'aab'
Output: false
Explanation:
The numerical value of firstWord is 'aaa' -> '000' -> 0.
The numerical value of secondWord is 'a' -> '0' -> 0.
The numerical value of targetWord is 'aab' -> '001' -> 1.
We return false because 0 + 0 != 1.

Example 3:

Input: firstWord = 'aaa', secondWord = 'a', targetWord = 'aaaa'
Output: true
Explanation:
The numerical value of firstWord is 'aaa' -> '000' -> 0.
The numerical value of secondWord is 'a' -> '0' -> 0.
The numerical value of targetWord is 'aaaa' -> '0000' -> 0.
We return true because 0 + 0 == 0.


Constraints:

1 <= firstWord.length, secondWord.length, targetWord.length <= 8
firstWord, secondWord, and targetWord consist of lowercase English letters from &#39;a&#39; to &#39;j&#39; inclusive.


```

## 中文翻译

每个字母 a~j 对应数字 0~9，字符串的数值为各字母值拼接后转整数。给定三个字符串 firstWord、secondWord、targetWord，判断 firstWord + secondWord 的数值是否等于 targetWord 的数值。

## 解题思路

将每个字符串转为数值：每个字符减去 'a' 得到数字，拼接后转整数。比较 firstWord + secondWord 是否等于 targetWord。

时间复杂度：O(n)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
