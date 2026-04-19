# [1647] Minimum Deletions to Make Character Frequencies Unique

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/description/)

* algorithms
* Medium (61.47%)
* Likes:    5061
* Dislikes: 76
* Testcase Example:  '"aab"'

```md
A string s is called good if there are no two different characters in s that have the same frequency.
Given a string s, return the minimum number of characters you need to delete to make s good.
The frequency of a character in a string is the number of times it appears in the string. For example, in the string 'aab', the frequency of &#39;a&#39; is 2, while the frequency of &#39;b&#39; is 1.

Example 1:

Input: s = 'aab'
Output: 0
Explanation: s is already good.

Example 2:

Input: s = 'aaabbbcc'
Output: 2
Explanation: You can delete two &#39;b&#39;s resulting in the good string 'aaabcc'.
Another way it to delete one &#39;b&#39; and one &#39;c&#39; resulting in the good string 'aaabbc'.
Example 3:

Input: s = 'ceabaacb'
Output: 2
Explanation: You can delete both &#39;c&#39;s resulting in the good string 'eabaab'.
Note that we only care about characters that are still in the string at the end (i.e. frequency of 0 is ignored).


Constraints:

1 <= s.length <= 105
scontains only lowercase English letters.


```

## 题目翻译

给定字符串 s，使所有字符频率互不相同的最少删除次数。

## 解题思路

贪心。统计频率，降序排列。用 Set 记录已使用的频率，遇到重复时逐步减 1 直到不重复（或变为 0），累计减少量即为删除次数。

时间复杂度 O(n + 26^2) = O(n)

## Solution

[SourceCode](./solution.js)
