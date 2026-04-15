# [2516] Take K of Each Character From Left and Right

## Description

[LeetCode Problem Description](https://leetcode.com/problems/take-k-of-each-character-from-left-and-right/description/)

* algorithms
* Medium (51.44%)
* Likes:    1535
* Dislikes: 173
* Testcase Example:  '"aabaaaacaabc"\n2'

```md
You are given a string s consisting of the characters &#39;a&#39;, &#39;b&#39;, and &#39;c&#39; and a non-negative integer k. Each minute, you may take either the leftmost character of s, or the rightmost character of s.
Return the minimum number of minutes needed for you to take at least k of each character, or return -1 if it is not possible to take k of each character.

Example 1:

Input: s = 'aabaaaacaabc', k = 2
Output: 8
Explanation:
Take three characters from the left of s. You now have two &#39;a&#39; characters, and one &#39;b&#39; character.
Take five characters from the right of s. You now have four &#39;a&#39; characters, two &#39;b&#39; characters, and two &#39;c&#39; characters.
A total of 3 + 5 = 8 minutes is needed.
It can be proven that 8 is the minimum number of minutes needed.

Example 2:

Input: s = 'a', k = 1
Output: -1
Explanation: It is not possible to take one &#39;b&#39; or &#39;c&#39; so return -1.


Constraints:

1 <= s.length <= 105
s consists of only the letters &#39;a&#39;, &#39;b&#39;, and &#39;c&#39;.
0 <= k <= s.length


```

## 中文翻译

字符串 s 只含 a/b/c，每分钟取最左或最右字符。求最少分钟数使每种字符至少取 k 个，不可能返回 -1。

## 解题思路

**滑动窗口（正难则反）**

等价于找最长的中间子串（连续不取），使得剩余左右两边的每种字符 >= k。即窗口内每种字符数 <= totalCount - k。

1. 先统计各字符总数，若任一 < k 返回 -1
2. 滑动窗口，维护窗口内各字符数 <= limit（limit = totalCount - k）
3. 最长窗口长度为 maxLen，答案 = n - maxLen

时间复杂度：O(n)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
