# [926] Flip String to Monotone Increasing

## Description

[LeetCode Problem Description](https://leetcode.com/problems/flip-string-to-monotone-increasing/description/)

* algorithms
* Medium (61.87%)
* Likes:    4589
* Dislikes: 185
* Testcase Example:  '"00110"'

```md
A binary string is monotone increasing if it consists of some number of 0&#39;s (possibly none), followed by some number of 1&#39;s (also possibly none).
You are given a binary string s. You can flip s[i] changing it from 0 to 1 or from 1 to 0.
Return the minimum number of flips to make s monotone increasing.

Example 1:

Input: s = '00110'
Output: 1
Explanation: We flip the last digit to get 00111.

Example 2:

Input: s = '010110'
Output: 2
Explanation: We flip to get 011111, or alternatively 000111.

Example 3:

Input: s = '00011000'
Output: 2
Explanation: We flip to get 00000000.


Constraints:

1 <= s.length <= 105
s[i] is either &#39;0&#39; or &#39;1&#39;.


```

## 翻译

给定二进制字符串 `s`，可以翻转任意位（0↔1）。返回使字符串变为单调递增（前段全 0 后段全 1）的最少翻转次数。

## Approach

**贪心 / 前缀和。** 枚举分界点 i（0~n），左边全变 0，右边全变 1。用前缀和预处理 `ones[i]` 表示前 i 个中 1 的个数，`zeros[i]` 表示后 n-i 个中 0 的个数。

优化：一次遍历，维护 `ones`（左边 1 的个数）和 `result`。遇到 1 则 `ones++`，遇到 0 时可以选择翻这个 0 或翻之前所有的 1，取 `min(result+1, ones)`。

时间复杂度：O(n)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
