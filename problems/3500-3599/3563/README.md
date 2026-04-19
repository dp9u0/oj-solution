# [3563] Lexicographically Smallest String After Adjacent Removals

## Description

[LeetCode Problem Description](https://leetcode.com/problems/lexicographically-smallest-string-after-adjacent-removals/description/)

* algorithms
* Hard (17.40%)
* Likes:    52
* Dislikes: 4
* Testcase Example:  '"abc"'

```md
You are given a string s consisting of lowercase English letters.
You can perform the following operation any number of times (including zero):

Remove any pair of adjacent characters in the string that are consecutive in the alphabet, in either order (e.g., &#39;a&#39; and &#39;b&#39;, or &#39;b&#39; and &#39;a&#39;).
Shift the remaining characters to the left to fill the gap.

Return the lexicographically smallest string that can be obtained after performing the operations optimally.
Note: Consider the alphabet as circular, thus &#39;a&#39; and &#39;z&#39; are consecutive.

Example 1:

Input: s = 'abc'
Output: 'a'
Explanation:

Remove 'bc' from the string, leaving 'a' as the remaining string.
No further operations are possible. Thus, the lexicographically smallest string after all possible removals is 'a'.


Example 2:

Input: s = 'bcda'
Output: ''
Explanation:

​​​​​​​Remove 'cd' from the string, leaving 'ba' as the remaining string.
Remove 'ba' from the string, leaving '' as the remaining string.
No further operations are possible. Thus, the lexicographically smallest string after all possible removals is ''.


Example 3:

Input: s = 'zdce'
Output: 'zdce'
Explanation:

Remove 'dc' from the string, leaving 'ze' as the remaining string.
No further operations are possible on 'ze'.
However, since 'zdce' is lexicographically smaller than 'ze', the smallest string after all possible removals is 'zdce'.



Constraints:

1 <= s.length <= 250
s consists only of lowercase English letters.


```

## 题目翻译

给定小写字母字符串 s，可以反复删除相邻的字母表中连续的字符对（循环，'a' 和 'z' 也算连续）。返回操作后能得到的字典序最小字符串。可以不执行任何操作。

## 解题思路

**区间 DP + 记忆化搜索**

1. 预计算 `canEmpty[i][j]`：能否完全删除子串 s[i..j]。
   - 递推：canEmpty[i][j] = true，若存在 k（i < k ≤ j）使得 s[i] 与 s[k] 连续，且 canEmpty[i+1][k-1] 和 canEmpty[k+1][j] 均为 true。
   - 先删除 i+1..k-1，使 i 和 k 相邻，删除该对，再删除 k+1..j。
   - O(n³)

2. 记忆化 `best(i)`：s[i..n-1] 能得到的最小字典序字符串。
   - 选择1：保留 s[i]，删除 s[i+1..j]，然后 best(j+1)
   - 选择2：删除 s[i..j]，然后 best(j+1)
   - 取所有选择中的最小值

n ≤ 250，O(n³) 可接受。

## Solution

[SourceCode](./solution.js)
