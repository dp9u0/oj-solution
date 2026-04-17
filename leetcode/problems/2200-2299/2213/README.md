# [2213] Longest Substring of One Repeating Character

## Description

[LeetCode Problem Description](https://leetcode.com/problems/longest-substring-of-one-repeating-character/description/)

* algorithms
* Hard (34.29%)
* Likes:    322
* Dislikes: 84
* Testcase Example:  '"babacc"\n"bcb"\n[1,3,3]'

```md
You are given a 0-indexed string s. You are also given a 0-indexed string queryCharacters of length k and a 0-indexed array of integer indices queryIndices of length k, both of which are used to describe k queries.
The ith query updates the character in s at index queryIndices[i] to the character queryCharacters[i].
Return an array lengths of length k where lengths[i] is the length of the longest substring of s consisting of only one repeating character after the ith query is performed.

Example 1:

Input: s = 'babacc', queryCharacters = 'bcb', queryIndices = [1,3,3]
Output: [3,3,4]
Explanation:
- 1st query updates s = 'bbbacc'. The longest substring consisting of one repeating character is 'bbb' with length 3.
- 2nd query updates s = 'bbbccc'.
The longest substring consisting of one repeating character can be 'bbb' or 'ccc' with length 3.
- 3rd query updates s = 'bbbbcc'. The longest substring consisting of one repeating character is 'bbbb' with length 4.
Thus, we return [3,3,4].

Example 2:

Input: s = 'abyzz', queryCharacters = 'aa', queryIndices = [2,1]
Output: [2,3]
Explanation:
- 1st query updates s = 'abazz'. The longest substring consisting of one repeating character is 'zz' with length 2.
- 2nd query updates s = 'aaazz'. The longest substring consisting of one repeating character is 'aaa' with length 3.
Thus, we return [2,3].


Constraints:

1 <= s.length <= 105
s consists of lowercase English letters.
k == queryCharacters.length == queryIndices.length
1 <= k <= 105
queryCharacters consists of lowercase English letters.
0 <= queryIndices[i] < s.length


```

## 题目翻译

给定字符串 s 和 k 次查询，每次将 s[pos] 改为某个字符。求每次修改后最长连续相同字符子串的长度。

## 解题思路

**线段树维护区间最长连续相同字符**

每个节点维护：len（区间长度）、pref（左端最长连续）、suff（右端最长连续）、best（区间最长连续）、lc/rc（左右端字符）。

合并规则：若左子区间右端字符 == 右子区间左端字符，则可能跨区间合并连续长度。

点更新 + O(log n) 上拉。总时间 O((n+k) log n)。

## Solution

[SourceCode](./solution.js)
