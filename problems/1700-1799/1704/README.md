# [1704] Determine if String Halves Are Alike

## Description

[LeetCode Problem Description](https://leetcode.com/problems/determine-if-string-halves-are-alike/description/)

* algorithms
* Easy (78.80%)
* Likes:    2336
* Dislikes: 127
* Testcase Example:  '"book"'

```md
You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.
Two strings are alike if they have the same number of vowels (&#39;a&#39;, &#39;e&#39;, &#39;i&#39;, &#39;o&#39;, &#39;u&#39;, &#39;A&#39;, &#39;E&#39;, &#39;I&#39;, &#39;O&#39;, &#39;U&#39;). Notice that s contains uppercase and lowercase letters.
Return true if a and b are alike. Otherwise, return false.

Example 1:

Input: s = 'book'
Output: true
Explanation: a = 'bo' and b = 'ok'. a has 1 vowel and b has 1 vowel. Therefore, they are alike.

Example 2:

Input: s = 'textbook'
Output: false
Explanation: a = 'text' and b = 'book'. a has 1 vowel whereas b has 2. Therefore, they are not alike.
Notice that the vowel o is counted twice.


Constraints:

2 <= s.length <= 1000
s.length is even.
s consists of uppercase and lowercase letters.


```

## 题目翻译

将偶数长度字符串分为两半，判断两半的元音字母数量是否相同。

## 解题思路

遍历前半计数元音，后半减去计数，最终判断是否为0。

## Solution

[SourceCode](./solution.js)
