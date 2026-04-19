# [1415] The k-th Lexicographical String of All Happy Strings of Length n

## Description

[LeetCode Problem Description](https://leetcode.com/problems/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n/description/)

* algorithms
* Medium (87.11%)
* Likes:    1791
* Dislikes: 56
* Testcase Example:  '1\n3'

```md
A happy string is a string that:

consists only of letters of the set [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;].
s[i] != s[i + 1] for all values of i from 1 to s.length - 1 (string is 1-indexed).

For example, strings 'abc', 'ac', 'b' and 'abcbabcbcb' are all happy strings and strings 'aa', 'baa' and 'ababbc' are not happy strings.
Given two integers n and k, consider a list of all happy strings of length n sorted in lexicographical order.
Return the kth string of this list or return an empty string if there are less than k happy strings of length n.

Example 1:

Input: n = 1, k = 3
Output: 'c'
Explanation: The list ['a', 'b', 'c'] contains all happy strings of length 1. The third string is 'c'.

Example 2:

Input: n = 1, k = 4
Output: ''
Explanation: There are only 3 happy strings of length 1.

Example 3:

Input: n = 3, k = 9
Output: 'cab'
Explanation: There are 12 different happy string of length 3 ['aba', 'abc', 'aca', 'acb', 'bab', 'bac', 'bca', 'bcb', 'cab', 'cac', 'cba', 'cbc']. You will find the 9th string = 'cab'


Constraints:

1 <= n <= 10
1 <= k <= 100


```

## 中文翻译

用 'a'、'b'、'c' 组成长度为 n 的字符串，且相邻字符不能相同（称为 happy string）。所有 happy string 按字典序排列，返回第 k 个。

## 解题思路

总数为 3 * 2^(n-1)。若 k 超出范围返回空串。否则逐位确定：首位从 [a,b,c] 中选，后续从排除前一个字符的 2 个选项中选。利用分组大小（2^(剩余位数)）确定每一步选哪个分支。

## Solution

[SourceCode](./solution.js)
