# [1461] Check If a String Contains All Binary Codes of Size K

## Description

[LeetCode Problem Description](https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k/description/)

* algorithms
* Medium (61.55%)
* Likes:    2719
* Dislikes: 116
* Testcase Example:  '"00110110"\n2'

```md
Given a binary string s and an integer k, return true if every binary code of length k is a substring of s. Otherwise, return false.

Example 1:

Input: s = '00110110', k = 2
Output: true
Explanation: The binary codes of length 2 are '00', '01', '10' and '11'. They can be all found as substrings at indices 0, 1, 3 and 2 respectively.

Example 2:

Input: s = '0110', k = 1
Output: true
Explanation: The binary codes of length 1 are '0' and '1', it is clear that both exist as a substring.

Example 3:

Input: s = '0110', k = 2
Output: false
Explanation: The binary code '00' is of length 2 and does not exist in the array.


Constraints:

1 <= s.length <= 5 * 105
s[i] is either &#39;0&#39; or &#39;1&#39;.
1 <= k <= 20


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定二进制字符串 s 和整数 k，判断 s 是否包含所有长度为 k 的二进制子串。共有 2^k 种不同的长度为 k 的二进制串。

## 解题思路

**滑动窗口 + HashSet**

遍历 s 中所有长度为 k 的子串，用 Set 去重收集。最终检查 Set 的大小是否等于 2^k。

优化：用 Set 存储子串字符串即可，因为 k <= 20，子串最多 2^20 = 1M 种，实际 s 长度限制使得不会太大。

时间复杂度 O(n * k)，空间复杂度 O(min(n, 2^k) * k)。
