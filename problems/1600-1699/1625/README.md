# [1625] Lexicographically Smallest String After Applying Operations

## Description

[LeetCode Problem Description](https://leetcode.com/problems/lexicographically-smallest-string-after-applying-operations/description/)

* algorithms
* Medium (79.37%)
* Likes:    690
* Dislikes: 321
* Testcase Example:  '"5525"\n9\n2'

```md
You are given a string s of even length consisting of digits from 0 to 9, and two integers a and b.
You can apply either of the following two operations any number of times and in any order on s:

Add a to all odd indices of s (0-indexed). Digits post 9 are cycled back to 0. For example, if s = '3456' and a = 5, s becomes '3951'.
Rotate s to the right by b positions. For example, if s = '3456' and b = 1, s becomes '6345'.

Return the lexicographically smallest string you can obtain by applying the above operations any number of times on s.
A string a is lexicographically smaller than a string b (of the same length) if in the first position where a and b differ, string a has a letter that appears earlier in the alphabet than the corresponding letter in b. For example, '0158' is lexicographically smaller than '0190' because the first position they differ is at the third letter, and &#39;5&#39; comes before &#39;9&#39;.

Example 1:

Input: s = '5525', a = 9, b = 2
Output: '2050'
Explanation: We can apply the following operations:
Start:  '5525'
Rotate: '2555'
Add:    '2454'
Add:    '2353'
Rotate: '5323'
Add:    '5222'
Add:    '5121'
Rotate: '2151'
Add:    '2050'​​​​​
There is no way to obtain a string that is lexicographically smaller than '2050'.

Example 2:

Input: s = '74', a = 5, b = 1
Output: '24'
Explanation: We can apply the following operations:
Start:  '74'
Rotate: '47'
​​​​​​​Add:    '42'
​​​​​​​Rotate: '24'​​​​​​​​​​​​
There is no way to obtain a string that is lexicographically smaller than '24'.

Example 3:

Input: s = '0011', a = 4, b = 2
Output: '0011'
Explanation: There are no sequence of operations that will give us a lexicographically smaller string than '0011'.


Constraints:

2 <= s.length <= 100
s.length is even.
s consists of digits from 0 to 9 only.
1 <= a <= 9
1 <= b <= s.length - 1


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

给定偶数长度数字字符串 s 和整数 a, b。可以对 s 执行两种操作任意次数：① 将所有奇数下标的数字加 a（mod 10）；② 将 s 右旋 b 位。返回能得到的字典序最小字符串。

## 解题思路

BFS 搜索所有可达状态。旋转周期为 n/gcd(n,b)，加法周期为 10/gcd(10,a)，可达状态有限。对每个状态尝试两种操作，用 visited 集合去重，维护全局最小字符串。
