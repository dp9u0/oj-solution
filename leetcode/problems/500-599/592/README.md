# [592] Fraction Addition and Subtraction

## Description

[LeetCode Problem Description](https://leetcode.com/problems/fraction-addition-and-subtraction/description/)

* algorithms
* Medium (66.43%)
* Likes:    891
* Dislikes: 696
* Testcase Example:  '"-1/2+1/2"'

```md
Given a string expression representing an expression of fraction addition and subtraction, return the calculation result in string format.
The final result should be an irreducible fraction. If your final result is an integer, change it to the format of a fraction that has a denominator 1. So in this case, 2 should be converted to 2/1.

Example 1:

Input: expression = '-1/2+1/2'
Output: '0/1'

Example 2:

Input: expression = '-1/2+1/2+1/3'
Output: '1/3'

Example 3:

Input: expression = '1/3-1/2'
Output: '-1/6'


Constraints:

The input string only contains &#39;0&#39; to &#39;9&#39;, &#39;/&#39;, &#39;+&#39; and &#39;-&#39;. So does the output.
Each fraction (input and output) has the format &plusmn;numerator/denominator. If the first input fraction or the output is positive, then &#39;+&#39; will be omitted.
The input only contains valid irreducible fractions, where the numerator and denominator of each fraction will always be in the range [1, 10]. If the denominator is 1, it means this fraction is actually an integer in a fraction format defined above.
The number of given fractions will be in the range [1, 10].
The numerator and denominator of the final result are guaranteed to be valid and in the range of 32-bit int.


```

## 中文翻译

给定分数加减表达式字符串，返回最简分数结果（格式 numerator/denominator）。

## 解题思路

**解析+通分+GCD化简**

用正则提取所有分数（带符号），逐一通分累加，最后用 GCD 化简。

时间复杂度：O(n)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
