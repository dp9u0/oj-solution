# [3498] Reverse Degree of a String

## Description

[LeetCode Problem Description](https://leetcode.com/problems/reverse-degree-of-a-string/description/)

* algorithms
* Easy (88.66%)
* Likes:    86
* Dislikes: 5
* Testcase Example:  '"abc"'

```md
Given a string s, calculate its reverse degree.
The reverse degree is calculated as follows:

For each character, multiply its position in the reversed alphabet (&#39;a&#39; = 26, &#39;b&#39; = 25, ..., &#39;z&#39; = 1) with its position in the string (1-indexed).
Sum these products for all characters in the string.

Return the reverse degree of s.

Example 1:

Input: s = 'abc'
Output: 148
Explanation:



Letter
Index in Reversed Alphabet
Index in String
Product


&#39;a&#39;
26
1
26


&#39;b&#39;
25
2
50


&#39;c&#39;
24
3
72



The reversed degree is 26 + 50 + 72 = 148.

Example 2:

Input: s = 'zaza'
Output: 160
Explanation:



Letter
Index in Reversed Alphabet
Index in String
Product


&#39;z&#39;
1
1
1


&#39;a&#39;
26
2
52


&#39;z&#39;
1
3
3


&#39;a&#39;
26
4
104



The reverse degree is 1 + 52 + 3 + 104 = 160.


Constraints:

1 <= s.length <= 1000
s contains only lowercase English letters.


```

## 题目翻译

给定字符串 s，计算其"反转度"：每个字符的反转字母位置（a=26, b=25, ..., z=1）乘以它在字符串中的位置（1-indexed），对所有字符求和。

## 解题思路

**遍历求和**

reverse value = 26 - (charCode - 'a')。直接遍历累加即可。O(n)。

## Solution

[SourceCode](./solution.js)
