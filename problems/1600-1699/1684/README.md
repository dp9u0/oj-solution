# [1684] Count the Number of Consistent Strings

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-the-number-of-consistent-strings/description/)

* algorithms
* Easy (88.50%)
* Likes:    2277
* Dislikes: 91
* Testcase Example:  '"ab"\n["ad","bd","aaab","baa","badab"]'

```md
You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.
Return the number of consistent strings in the array words.

Example 1:

Input: allowed = 'ab', words = ['ad','bd','aaab','baa','badab']
Output: 2
Explanation: Strings 'aaab' and 'baa' are consistent since they only contain characters &#39;a&#39; and &#39;b&#39;.

Example 2:

Input: allowed = 'abc', words = ['a','b','c','ab','ac','bc','abc']
Output: 7
Explanation: All strings are consistent.

Example 3:

Input: allowed = 'cad', words = ['cc','acd','b','ba','bac','bad','ac','d']
Output: 4
Explanation: Strings 'cc', 'acd', 'ac', and 'd' are consistent.


Constraints:

1 <= words.length <= 104
1 <= allowed.length <= 26
1 <= words[i].length <= 10
The characters in allowed are distinct.
words[i] and allowed contain only lowercase English letters.


```

## 题目翻译

给定字符串allowed和字符串数组words。如果一个字符串中所有字符都出现在allowed中，则称该字符串一致。返回words中一致字符串的数量。

## 解题思路

用Set存allowed字符，遍历words检查每个word的所有字符是否在Set中。

## Solution

[SourceCode](./solution.js)
