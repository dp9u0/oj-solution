# [2466] Count Ways To Build Good Strings

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-ways-to-build-good-strings/description/)

* algorithms
* Medium (58.93%)
* Likes:    2224
* Dislikes: 210
* Testcase Example:  '3\n3\n1\n1'

```md
Given the integers zero, one, low, and high, we can construct a string by starting with an empty string, and then at each step perform either of the following:

Append the character &#39;0&#39; zero times.
Append the character &#39;1&#39; one times.

This can be performed any number of times.
A good string is a string constructed by the above process having a length between low and high (inclusive).
Return the number of different good strings that can be constructed satisfying these properties. Since the answer can be large, return it modulo 109 + 7.

Example 1:

Input: low = 3, high = 3, zero = 1, one = 1
Output: 8
Explanation:
One possible valid good string is '011'.
It can be constructed as follows: '' -> '0' -> '01' -> '011'.
All binary strings from '000' to '111' are good strings in this example.

Example 2:

Input: low = 2, high = 3, zero = 1, one = 2
Output: 5
Explanation: The good strings are '00', '11', '000', '110', and '011'.


Constraints:

1 <= low<= high<= 105
1 <= zero, one <= low


```

## 中文翻译

从空串开始，每步可以追加 zero 个 '0' 或 one 个 '1'。求长度在 [low, high] 范围内的不同字符串数量，对 10^9+7 取模。

## 解题思路

**简单 DP**

dp[i] = 构造长度为 i 的字符串的方式数
- dp[0] = 1（空串）
- dp[i] = dp[i - zero] + dp[i - one]（前提 i - zero/one >= 0）

答案 = sum(dp[low..high]) % MOD

时间复杂度：O(high)，空间复杂度：O(high)

## Solution

[SourceCode](./solution.js)
