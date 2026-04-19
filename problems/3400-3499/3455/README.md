# [3455] Shortest Matching Substring

## Description

[LeetCode Problem Description](https://leetcode.com/problems/shortest-matching-substring/description/)

* algorithms
* Hard (24.02%)
* Likes:    47
* Dislikes: 3
* Testcase Example:  '"abaacbaecebce"\n"ba*c*ce"'

```md
You are given a string s and a pattern string p, where p contains exactly two &#39;*&#39; characters.
The &#39;*&#39; in p matches any sequence of zero or more characters.
Return the length of the shortest substring in s that matches p. If there is no such substring, return -1.
Note: The empty substring is considered valid.

Example 1:

Input: s = 'abaacbaecebce', p = 'ba*c*ce'
Output: 8
Explanation:
The shortest matching substring of p in s is 'baecebce'.

Example 2:

Input: s = 'baccbaadbc', p = 'cc*baa*adb'
Output: -1
Explanation:
There is no matching substring in s.

Example 3:

Input: s = 'a', p = '**'
Output: 0
Explanation:
The empty substring is the shortest matching substring.

Example 4:

Input: s = 'madlogic', p = '*adlogi*'
Output: 6
Explanation:
The shortest matching substring of p in s is 'adlogi'.


Constraints:

1 <= s.length <= 105
2 <= p.length <= 105
s contains only lowercase English letters.
p contains only lowercase English letters and exactly two &#39;*&#39;.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定字符串 s 和恰好包含两个 `*` 的模式串 p。`*` 匹配任意长度（含零）的字符序列。求 s 中匹配 p 的最短子串长度，不存在则返回 -1。空子串也算有效。

## 解题思路

**KMP + 二分查找**

将 p 按 `*` 分割为三段：a、b、c。匹配的子串形如 a + X + b + Y + c。

核心思路：枚举中间段 b 的每次出现位置 bp，然后：
- 在 bp 之前找最靠右的 a 起始位置（使子串尽量短）
- 在 bp 之后找最靠左的 c 起始位置（使子串尽量短）

用 KMP 找出 a、b、c 在 s 中的所有起始位置，排序后对每组 b 位置用二分查找确定最优的 a 和 c 位置。

特殊情况：b 为空时遍历 a 位置找最近的 c；a 或 c 为空时无需搜索。

时间复杂度 O(n + |p| + m·log n)，m 为 b 的出现次数。
