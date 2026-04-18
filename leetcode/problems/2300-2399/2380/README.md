# [2380] Time Needed to Rearrange a Binary String

## Description

[LeetCode Problem Description](https://leetcode.com/problems/time-needed-to-rearrange-a-binary-string/description/)

* algorithms
* Medium (52.83%)
* Likes:    553
* Dislikes: 118
* Testcase Example:  '"0110101"'

```md
You are given a binary string s. In one second, all occurrences of '01' are simultaneously replaced with '10'. This process repeats until no occurrences of '01' exist.
Return the number of seconds needed to complete this process.

Example 1:

Input: s = '0110101'
Output: 4
Explanation:
After one second, s becomes '1011010'.
After another second, s becomes '1101100'.
After the third second, s becomes '1110100'.
After the fourth second, s becomes '1111000'.
No occurrence of '01' exists any longer, and the process needed 4 seconds to complete,
so we return 4.

Example 2:

Input: s = '11100'
Output: 0
Explanation:
No occurrence of '01' exists in s, and the processes needed 0 seconds to complete,
so we return 0.


Constraints:

1 <= s.length <= 1000
s[i] is either &#39;0&#39; or &#39;1&#39;.


Follow up:
Can you solve this problem in O(n) time complexity?

```

## 翻译

给定二进制字符串s，每秒同时将所有"01"替换为"10"，直到没有"01"。返回所需秒数。

## 解题思路

O(n)解法：遍历字符串，用zeros计数遇到的0的数量，用dp记录时间。遇到0时zeros++；遇到1时若zeros>0，则该1需要等待dp[i-1]+1秒才能越过一个0（但受前一个位置的限制，取max(dp[i-1]+1, 0)）。最终dp中的最大值即为答案。

## Solution

[SourceCode](./solution.js)
