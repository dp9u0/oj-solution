# [3639] Minimum Time to Activate String

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-time-to-activate-string/description/)

* algorithms
* Medium (49.21%)
* Likes:    121
* Dislikes: 6
* Testcase Example:  '"abc"\n[1,0,2]\n2'

```md
You are given a string s of length n and an integer array order, where order is a permutation of the numbers in the range [0, n - 1].
Starting from time t = 0, replace the character at index order[t] in s with &#39;*&#39; at each time step.
A substring is valid if it contains at least one &#39;*&#39;.
A string is active if the total number of valid substrings is greater than or equal to k.
Return the minimum time t at which the string s becomes active. If it is impossible, return -1.

Example 1:

Input: s = 'abc', order = [1,0,2], k = 2
Output: 0
Explanation:



t
order[t]
Modified s
Valid Substrings
Count
Active
(Count >= k)




0
1
'a*c'
'*', 'a*', '*c', 'a*c'
4
Yes



The string s becomes active at t = 0. Thus, the answer is 0.

Example 2:

Input: s = 'cat', order = [0,2,1], k = 6
Output: 2
Explanation:



t
order[t]
Modified s
Valid Substrings
Count
Active
(Count >= k)




0
0
'*at'
'*', '*a', '*at'
3
No


1
2
'*a*'
'*', '*a', '*a*', 'a*', '*'
5
No


2
1
'***'
All substrings (contain &#39;*&#39;)
6
Yes



The string s becomes active at t = 2. Thus, the answer is 2.

Example 3:

Input: s = 'xy', order = [0,1], k = 4
Output: -1
Explanation:
Even after all replacements, it is impossible to obtain k = 4 valid substrings. Thus, the answer is -1.


Constraints:

1 <= n == s.length <= 105
order.length == n
0 <= order[i] <= n - 1
s consists of lowercase English letters.
order is a permutation of integers from 0 to n - 1.
1 <= k <= 109


```

## 中文翻译

给定字符串 s 和排列 order，从 t=0 开始每步将 s[order[t]] 替换为 '*'。含至少一个 '*' 的子串为有效子串。若有效子串总数 >= k 则字符串激活。求最早激活时间 t，不可能则返回 -1。

## 解题思路

二分答案。预处理 time[i] 表示位置 i 何时变为 '*'。对于候选 t，扫描数组找所有 time[i] > t 的连续段（即非 '*' 段），计算无效子串数 = Σ len*(len+1)/2。有效数 = 总子串数 - 无效数。判断是否 >= k。总子串数为 n*(n+1)/2，若其 < k 直接返回 -1。

## Solution

[SourceCode](./solution.js)
