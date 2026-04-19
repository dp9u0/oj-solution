# [1864] Minimum Number of Swaps to Make the Binary String Alternating

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-binary-string-alternating/description/)

* algorithms
* Medium (43.86%)
* Likes:    625
* Dislikes: 38
* Testcase Example:  '"111000"'

```md
Given a binary string s, return the minimum number of character swaps to make it alternating, or -1 if it is impossible.
The string is called alternating if no two adjacent characters are equal. For example, the strings '010' and '1010' are alternating, while the string '0100' is not.
Any two characters may be swapped, even if they arenot adjacent.

Example 1:

Input: s = '111000'
Output: 1
Explanation: Swap positions 1 and 4: '111000' -> '101010'
The string is now alternating.

Example 2:

Input: s = '010'
Output: 0
Explanation: The string is already alternating, no swaps are needed.

Example 3:

Input: s = '1110'
Output: -1


Constraints:

1 <= s.length <= 1000
s[i] is either &#39;0&#39; or &#39;1&#39;.


```

## 中文翻译

将二进制字符串变为交替字符串（无相邻相同字符）的最少交换次数。可交换任意两个位置。不可行返回 -1。

## 解题思路

目标只有两种："0101..." 或 "1010..."。统计 0 和 1 的个数，检查可行性。对每种目标模式，计算需要交换的位置数（不匹配的位置中，需要将 0→1 和 1→0 的数量应相等，交换次数即为其数量）。

时间复杂度：O(n)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
