# [2060] Check if an Original String Exists Given Two Encoded Strings

## Description

[LeetCode Problem Description](https://leetcode.com/problems/check-if-an-original-string-exists-given-two-encoded-strings/description/)

* algorithms
* Hard (43.43%)
* Likes:    327
* Dislikes: 164
* Testcase Example:  '"internationalization"\n"i18n"'

```md
An original string, consisting of lowercase English letters, can be encoded by the following steps:

Arbitrarily split it into a sequence of some number of non-empty substrings.
Arbitrarily choose some elements (possibly none) of the sequence, and replace each with its length (as a numeric string).
Concatenate the sequence as the encoded string.

For example, one way to encode an original string 'abcdefghijklmnop' might be:

Split it as a sequence: ['ab', 'cdefghijklmn', 'o', 'p'].
Choose the second and third elements to be replaced by their lengths, respectively. The sequence becomes ['ab', '12', '1', 'p'].
Concatenate the elements of the sequence to get the encoded string: 'ab121p'.

Given two encoded strings s1 and s2, consisting of lowercase English letters and digits 1-9 (inclusive), return true if there exists an original string that could be encoded as both s1 and s2. Otherwise, return false.
Note: The test cases are generated such that the number of consecutive digits in s1 and s2 does not exceed 3.

Example 1:

Input: s1 = 'internationalization', s2 = 'i18n'
Output: true
Explanation: It is possible that 'internationalization' was the original string.
- 'internationalization'
-> Split:       ['internationalization']
-> Do not replace any element
-> Concatenate:  'internationalization', which is s1.
- 'internationalization'
-> Split:       ['i', 'nternationalizatio', 'n']
-> Replace:     ['i', '18',                 'n']
-> Concatenate:  'i18n', which is s2

Example 2:

Input: s1 = 'l123e', s2 = '44'
Output: true
Explanation: It is possible that 'leetcode' was the original string.
- 'leetcode'
-> Split:      ['l', 'e', 'et', 'cod', 'e']
-> Replace:    ['l', '1', '2',  '3',   'e']
-> Concatenate: 'l123e', which is s1.
- 'leetcode'
-> Split:      ['leet', 'code']
-> Replace:    ['4',    '4']
-> Concatenate: '44', which is s2.

Example 3:

Input: s1 = 'a5b', s2 = 'c5b'
Output: false
Explanation: It is impossible.
- The original string encoded as s1 must start with the letter &#39;a&#39;.
- The original string encoded as s2 must start with the letter &#39;c&#39;.


Constraints:

1 <= s1.length, s2.length <= 40
s1 and s2 consist of digits 1-9 (inclusive), and lowercase English letters only.
The number of consecutive digits in s1 and s2 does not exceed 3.


```

## 题目翻译

原始字符串可编码为：分割成子串序列，部分替换为其长度数字，再拼接。给定两个编码串 s1 和 s2（含小写字母和数字1-9），判断是否存在同一原始字符串可编码为两者。连续数字不超过3位。

## 解题思路

**DFS + 记忆化搜索**

状态 (i, j, diff)：s1 处理到位置 i，s2 处理到位置 j，s1 比 s2 多消耗了 diff 个原始字符。

转移：
- 遇到数字：解析 1-3 位数字，更新 diff
- diff < 0 且 s1 当前是字母：s1 消耗一个字母，diff+1
- diff > 0 且 s2 当前是字母：s2 消耗一个字母，diff-1
- diff == 0 且双方都是字母：必须相同，双方前进
- 终止：i==n1 && j==n2 && diff==0

## Solution

[SourceCode](./solution.js)
