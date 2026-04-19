# [3458] Select K Disjoint Special Substrings

## Description

[LeetCode Problem Description](https://leetcode.com/problems/select-k-disjoint-special-substrings/description/)

* algorithms
* Medium (19.23%)
* Likes:    144
* Dislikes: 14
* Testcase Example:  '"abcdbaefab"\n2'

```md
Given a string s of length n and an integer k, determine whether it is possible to select k disjoint special substrings.
A special substring is a substring where:

Any character present inside the substring should not appear outside it in the string.
The substring is not the entire string s.

Note that all k substrings must be disjoint, meaning they cannot overlap.
Return true if it is possible to select k such disjoint special substrings; otherwise, return false.

Example 1:

Input: s = 'abcdbaefab', k = 2
Output: true
Explanation:

We can select two disjoint special substrings: 'cd' and 'ef'.
'cd' contains the characters &#39;c&#39; and &#39;d&#39;, which do not appear elsewhere in s.
'ef' contains the characters &#39;e&#39; and &#39;f&#39;, which do not appear elsewhere in s.


Example 2:

Input: s = 'cdefdc', k = 3
Output: false
Explanation:
There can be at most 2 disjoint special substrings: 'e' and 'f'. Since k = 3, the output is false.

Example 3:

Input: s = 'abeabe', k = 0
Output: true


Constraints:

2 <= n == s.length <= 5 * 104
0 <= k <= 26
s consists only of lowercase English letters.


```

## 翻译

给定字符串s和整数k，判断能否选出k个不相交的特殊子串。特殊子串：内部字符不出现在外部，且非整个字符串。

## 解题思路

对每个字符计算闭合区间[first,last]，扩展至最小闭合（区间内所有字符的出现范围都在区间内）。收集不同的闭合区间，排除整个字符串，按右端点排序贪心选最大不相交数。

## Solution

[SourceCode](./solution.js)
