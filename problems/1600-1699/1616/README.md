# [1616] Split Two Strings to Make Palindrome

## Description

[LeetCode Problem Description](https://leetcode.com/problems/split-two-strings-to-make-palindrome/description/)

* algorithms
* Medium (32.15%)
* Likes:    782
* Dislikes: 260
* Testcase Example:  '"x"\n"y"'

```md
You are given two strings a and b of the same length. Choose an index and split both strings at the same index, splitting a into two strings: aprefix and asuffix where a = aprefix + asuffix, and splitting b into two strings: bprefix and bsuffix where b = bprefix + bsuffix. Check if aprefix + bsuffix or bprefix + asuffix forms a palindrome.
When you split a string s into sprefix and ssuffix, either ssuffix or sprefix is allowed to be empty. For example, if s = 'abc', then '' + 'abc', 'a' + 'bc', 'ab' + 'c' , and 'abc' + '' are valid splits.
Return true if it is possible to form a palindrome string, otherwise return false.
Notice thatx + y denotes the concatenation of strings x and y.

Example 1:

Input: a = 'x', b = 'y'
Output: true
Explaination: If either a or b are palindromes the answer is true since you can split in the following way:
aprefix = '', asuffix = 'x'
bprefix = '', bsuffix = 'y'
Then, aprefix + bsuffix = '' + 'y' = 'y', which is a palindrome.

Example 2:

Input: a = 'xbdef', b = 'xecab'
Output: false

Example 3:

Input: a = 'ulacfd', b = 'jizalu'
Output: true
Explaination: Split them at index 3:
aprefix = 'ula', asuffix = 'cfd'
bprefix = 'jiz', bsuffix = 'alu'
Then, aprefix + bsuffix = 'ula' + 'alu' = 'ulaalu', which is a palindrome.


Constraints:

1 <= a.length, b.length <= 105
a.length == b.length
a and b consist of lowercase English letters


```

## 中文翻译

在相同位置切分字符串 a 和 b，检查 a_prefix + b_suffix 或 b_prefix + a_suffix 是否能构成回文。

## 解题思路

**贪心双指针**

对于 a_prefix + b_suffix：从两端往中间匹配 a[j] vs b[n-1-j]。当遇到不匹配时，剩余中间段必须来自同一字符串且自身回文。即检查 a[l..r] 或 b[l..r] 是否回文。

同理检查 b_prefix + a_suffix（交换 a、b 即可）。

时间复杂度：O(n)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
