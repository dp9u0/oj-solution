# [1520] Maximum Number of Non-Overlapping Substrings

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-number-of-non-overlapping-substrings/description/)

* algorithms
* Hard (41.92%)
* Likes:    893
* Dislikes: 88
* Testcase Example:  '"adefaddaccc"'

```md
Given a string s of lowercase letters, you need to find the maximum number of non-empty substrings of s that meet the following conditions:

The substrings do not overlap, that is for any two substrings s[i..j] and s[x..y], either j < x or i > y is true.
A substring that contains a certain character c must also contain all occurrences of c.

Find the maximum number of substrings that meet the above conditions. If there are multiple solutions with the same number of substrings, return the one with minimum total length. It can be shown that there exists a unique solution of minimum total length.
Notice that you can return the substrings in any order.

Example 1:

Input: s = 'adefaddaccc'
Output: ['e','f','ccc']
Explanation:The following are all the possible substrings that meet the conditions:
[
'adefaddaccc'
'adefadda',
'ef',
'e',
'f',
'ccc',
]
If we choose the first string, we cannot choose anything else and we&#39;d get only 1. If we choose 'adefadda', we are left with 'ccc' which is the only one that doesn&#39;t overlap, thus obtaining 2 substrings. Notice also, that it&#39;s not optimal to choose 'ef' since it can be split into two. Therefore, the optimal way is to choose ['e','f','ccc'] which gives us 3 substrings. No other solution of the same number of substrings exist.

Example 2:

Input: s = 'abbaccd'
Output: ['d','bb','cc']
Explanation: Notice that while the set of substrings ['d','abba','cc'] also has length 3, it&#39;s considered incorrect since it has larger total length.


Constraints:

1 <= s.length <= 105
s contains only lowercase English letters.


```

## 中文翻译

给定小写字母字符串 s，找到最多的不重叠子串，满足：如果子串包含字符 c，则必须包含 c 的所有出现。
如果有多个解具有相同的子串数量，返回总长度最小的那个。

## 解题思路

1. 计算每个字符的首次和末次出现位置 first[c]、last[c]
2. 对每个字符的首次出现位置，扩展区间直到稳定（包含区间内所有字符的完整范围）
3. 按区间右端点排序，贪心选择不重叠区间（选最早结束的，能选更多）

## Solution

[SourceCode](./solution.js)
