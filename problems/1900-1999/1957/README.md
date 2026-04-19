# [1957] Delete Characters to Make Fancy String

## Description

[LeetCode Problem Description](https://leetcode.com/problems/delete-characters-to-make-fancy-string/description/)

* algorithms
* Easy (74.09%)
* Likes:    1177
* Dislikes: 54
* Testcase Example:  '"leeetcode"'

```md
A fancy string is a string where no three consecutive characters are equal.
Given a string s, delete the minimum possible number of characters from s to make it fancy.
Return the final string after the deletion. It can be shown that the answer will always be unique.

Example 1:

Input: s = 'leeetcode'
Output: 'leetcode'
Explanation:
Remove an &#39;e&#39; from the first group of &#39;e&#39;s to create 'leetcode'.
No three consecutive characters are equal, so return 'leetcode'.

Example 2:

Input: s = 'aaabaaaa'
Output: 'aabaa'
Explanation:
Remove an &#39;a&#39; from the first group of &#39;a&#39;s to create 'aabaaaa'.
Remove two &#39;a&#39;s from the second group of &#39;a&#39;s to create 'aabaa'.
No three consecutive characters are equal, so return 'aabaa'.

Example 3:

Input: s = 'aab'
Output: 'aab'
Explanation: No three consecutive characters are equal, so return 'aab'.


Constraints:

1 <= s.length <= 105
s consists only of lowercase English letters.


```

## 翻译

删除最少的字符使字符串中没有三个连续相同的字符。

## Approach

遍历字符串，维护结果数组。只有当当前字符与结果末尾两个字符不同时才追加。

时间复杂度 O(n)，空间复杂度 O(n)。

## Solution

[SourceCode](./solution.js)
