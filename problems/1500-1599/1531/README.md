# [1531] String Compression II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/string-compression-ii/description/)

* algorithms
* Hard (52.21%)
* Likes:    2511
* Dislikes: 221
* Testcase Example:  '"aaabcccd"\n2'

```md
Run-length encoding is a string compression method that works byreplacing consecutive identical characters (repeated 2 or more times) with the concatenation of the character and the number marking the count of the characters (length of the run). For example, to compress the string'aabccc'we replace 'aa'by'a2'and replace 'ccc'by'c3'. Thus the compressed string becomes 'a2bc3'.
Notice that in this problem, we are not adding&#39;1&#39;after single characters.
Given astring sand an integer k. You need to delete at mostk characters fromssuch that the run-length encoded version of shas minimum length.
Find the minimum length of the run-length encodedversion of s after deleting at most k characters.

Example 1:

Input: s = 'aaabcccd', k = 2
Output: 4
Explanation: Compressing s without deleting anything will give us 'a3bc3d' of length 6. Deleting any of the characters &#39;a&#39; or &#39;c&#39; would at most decrease the length of the compressed string to 5, for instance delete 2 &#39;a&#39; then we will have s = 'abcccd' which compressed is abc3d. Therefore, the optimal way is to delete &#39;b&#39; and &#39;d&#39;, then the compressed version of s will be 'a3c3' of length 4.
Example 2:

Input: s = 'aabbaa', k = 2
Output: 2
Explanation: If we delete both &#39;b&#39; characters, the resulting compressed string would be 'a4' of length 2.

Example 3:

Input: s = 'aaaaaaaaaaa', k = 0
Output: 3
Explanation: Since k is zero, we cannot delete anything. The compressed string is 'a11' of length 3.


Constraints:

1 <= s.length <= 100
0 <= k <= s.length
s contains only lowercase English letters.


```

## 翻译

给定字符串 s 和最多删除 k 个字符，求删除后游程编码（RLE）的最小长度。RLE 规则：连续相同字符替换为字符+计数（计数为1时省略数字）。

## 解题思路

区间DP。dp[i][j] 表示前 i 个字符删除 j 个后的最小 RLE 长度。转移：对于第 i 个字符，枚举最后一段保留的字符组（相同字符），将该段之前的某些字符删除。具体地，dp[i][j] = min over t, d: dp[t-1][j-d] + cost(保留 s[t..i] 中等于 s[t] 的字符)。cost 取决于保留个数 cnt：cnt=0 长度0，cnt=1 长度1，cnt=2-9 长度2，cnt=10-99 长度3。

O(n^2 * k)。

## Solution

[SourceCode](./solution.js)
