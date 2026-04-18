# [2399] Check Distances Between Same Letters

## Description

[LeetCode Problem Description](https://leetcode.com/problems/check-distances-between-same-letters/description/)

* algorithms
* Easy (71.51%)
* Likes:    528
* Dislikes: 73
* Testcase Example:  '"abaccb"\n[1,3,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]'

```md
You are given a 0-indexed string s consisting of only lowercase English letters, where each letter in s appears exactly twice. You are also given a 0-indexed integer array distance of length 26.
Each letter in the alphabet is numbered from 0 to 25 (i.e. &#39;a&#39; -> 0, &#39;b&#39; -> 1, &#39;c&#39; -> 2, ... , &#39;z&#39; -> 25).
In a well-spaced string, the number of letters between the two occurrences of the ith letter is distance[i]. If the ith letter does not appear in s, then distance[i] can be ignored.
Return true if s is a well-spaced string, otherwise return false.

Example 1:

Input: s = 'abaccb', distance = [1,3,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
Output: true
Explanation:
- &#39;a&#39; appears at indices 0 and 2 so it satisfies distance[0] = 1.
- &#39;b&#39; appears at indices 1 and 5 so it satisfies distance[1] = 3.
- &#39;c&#39; appears at indices 3 and 4 so it satisfies distance[2] = 0.
Note that distance[3] = 5, but since &#39;d&#39; does not appear in s, it can be ignored.
Return true because s is a well-spaced string.

Example 2:

Input: s = 'aa', distance = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
Output: false
Explanation:
- &#39;a&#39; appears at indices 0 and 1 so there are zero letters between them.
Because distance[0] = 1, s is not a well-spaced string.


Constraints:

2 <= s.length <= 52
s consists only of lowercase English letters.
Each letter appears in s exactly twice.
distance.length == 26
0 <= distance[i] <= 50


```

## 翻译

字符串中每个字母恰好出现两次。检查每对相同字母之间的距离是否等于 distance 数组中对应的值。

## 解题思路

记录每个字母第一次出现的位置，第二次出现时检查间距是否等于 distance。

## Solution

[SourceCode](./solution.js)
