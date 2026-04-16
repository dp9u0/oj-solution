# [2259] Remove Digit From Number to Maximize Result

## Description

[LeetCode Problem Description](https://leetcode.com/problems/remove-digit-from-number-to-maximize-result/description/)

* algorithms
* Easy (48.38%)
* Likes:    956
* Dislikes: 66
* Testcase Example:  '"123"\n"3"'

```md
You are given a string number representing a positive integer and a character digit.
Return the resulting string after removing exactly one occurrence of digit from number such that the value of the resulting string in decimal form is maximized. The test cases are generated such that digit occurs at least once in number.

Example 1:

Input: number = '123', digit = '3'
Output: '12'
Explanation: There is only one &#39;3&#39; in '123'. After removing &#39;3&#39;, the result is '12'.

Example 2:

Input: number = '1231', digit = '1'
Output: '231'
Explanation: We can remove the first &#39;1&#39; to get '231' or remove the second &#39;1&#39; to get '123'.
Since 231 > 123, we return '231'.

Example 3:

Input: number = '551', digit = '5'
Output: '51'
Explanation: We can remove either the first or second &#39;5&#39; from '551'.
Both result in the string '51'.


Constraints:

2 <= number.length <= 100
number consists of digits from &#39;1&#39; to &#39;9&#39;.
digit is a digit from &#39;1&#39; to &#39;9&#39;.
digit occurs at least once in number.


```

## 中文翻译

给定数字字符串 number 和字符 digit，删除恰好一个 digit 出现，使结果数值最大。

## 解题思路

贪心。从左到右扫描，找到第一个 digit 出现的位置 i，若 number[i+1] > digit，则删除 i（让更大的数字前移）。若无这样的位置，删除最后一个 digit。O(n)。

## Solution

[SourceCode](./solution.js)
