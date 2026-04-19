# [848] Shifting Letters

## Description

[LeetCode Problem Description](https://leetcode.com/problems/shifting-letters/description/)

* algorithms
* Medium (46.17%)
* Likes:    1555
* Dislikes: 142
* Testcase Example:  '"abc"\n[3,5,9]'

```md
You are given a string s of lowercase English letters and an integer array shifts of the same length.
Call the shift() of a letter, the next letter in the alphabet, (wrapping around so that &#39;z&#39; becomes &#39;a&#39;).

For example, shift(&#39;a&#39;) = &#39;b&#39;, shift(&#39;t&#39;) = &#39;u&#39;, and shift(&#39;z&#39;) = &#39;a&#39;.

Now for each shifts[i] = x, we want to shift the first i + 1 letters of s, x times.
Return the final string after all such shifts to s are applied.

Example 1:

Input: s = 'abc', shifts = [3,5,9]
Output: 'rpl'
Explanation: We start with 'abc'.
After shifting the first 1 letters of s by 3, we have 'dbc'.
After shifting the first 2 letters of s by 5, we have 'igc'.
After shifting the first 3 letters of s by 9, we have 'rpl', the answer.

Example 2:

Input: s = 'aaa', shifts = [1,2,3]
Output: 'gfd'


Constraints:

1 <= s.length <= 105
s consists of lowercase English letters.
shifts.length == s.length
0 <= shifts[i] <= 109


```

## 翻译

给定小写字母字符串 s 和数组 shifts。shifts[i] 表示将 s 的前 i+1 个字母各自向后移动 shifts[i] 次（z 环绕到 a）。返回最终字符串。

## Approach

后缀和。每个位置 i 的实际位移 = shifts[i] + shifts[i+1] + ... + shifts[n-1]。从右到左累加后缀和，对 26 取模后计算移位。

时间复杂度 O(n)，空间复杂度 O(n)。

## Solution

[SourceCode](./solution.js)
