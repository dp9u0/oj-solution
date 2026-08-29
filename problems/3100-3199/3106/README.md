# [3106] Lexicographically Smallest String After Operations With Constraint

## Description

[LeetCode Problem Description](https://leetcode.com/problems/lexicographically-smallest-string-after-operations-with-constraint/description/)

* algorithms
* Medium (62.89%)
* Likes:    165
* Dislikes: 28
* Testcase Example:  '"zbbz"\n3'

```md
You are given a string s and an integer k.
Define a function distance(s1, s2) between two strings s1 and s2 of the same length n as:

The sum of the minimum distance between s1[i] and s2[i] when the characters from &#39;a&#39; to &#39;z&#39; are placed in a cyclic order, for all i in the range [0, n - 1].

For example, distance('ab', 'cd') == 4, and distance('a', 'z') == 1.
You can change any letter of s to any other lowercase English letter, any number of times.
Return a string denoting the lexicographically smallest string t you can get after some changes, such that distance(s, t) <= k.

Example 1:

Input: s = 'zbbz', k = 3
Output: 'aaaz'
Explanation:
Change s to 'aaaz'. The distance between 'zbbz' and 'aaaz' is equal to k = 3.

Example 2:

Input: s = 'xaxcd', k = 4
Output: 'aawcd'
Explanation:
The distance between 'xaxcd' and 'aawcd' is equal to k = 4.

Example 3:

Input: s = 'lol', k = 0
Output: 'lol'
Explanation:
It&#39;s impossible to change any character as k = 0.


Constraints:

1 <= s.length <= 100
0 <= k <= 2000
s consists only of lowercase English letters.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定字符串 `s` 和整数 `k`。定义等长字符串 `s1`、`s2` 的**距离**：把 `'a'` 到 `'z'` 看作**环形**排列，`distance = Σ 每个位置两字符的环上最短距离`（如 `distance('a','z') = 1`）。

可以把 `s` 中字母任意更换任意次。返回在 `distance(s, t) <= k` 约束下能得到的**字典序最小**的字符串 `t`。

示例 1：`s = "zbbz", k = 3` → `"aaaz"`（z→a 环距 1，三个字符共花 3）
示例 2：`s = "xaxcd", k = 4` → `"aawcd"`（x→a 花 3，剩 1 把第二个 x 退成 w）
示例 3：`s = "lol", k = 0` → `"lol"`

约束：`1 <= s.length <= 100`，`0 <= k <= 2000`

## 解题思路

贪心：字典序优先级在左侧，从左到右尽可能把当前字符变到最小：

设当前字符位置 `pos = c - 'a'`，它与 `'a'` 的环距 `d = min(pos, 26 - pos)`。

- 若 `d <= k`：直接改成 `'a'`，预算减 `d`；
- 否则（改不成 'a'）：**把剩余预算全部花在此处**，向后退 `k` 步得 `pos - k`（一定 ≥ 0：`k < d ≤ pos` 或 `k < 26-pos ≤ 13 ≤ pos`），之后预算归零，后续字符保持原样。

为什么此时不再考虑向前绕环：向前绕到比 c 小的字符需要 `f >= 26 - pos` 步，而 `k < d <= 26 - pos`（当 pos ≥ 13 时）或 `26 - pos > 13 >= pos > k`（当 pos < 13 时），均不可行。且字典序上把当前位置压到最小（`pos - k`）严格优于省着预算给后面。

时间复杂度 O(n)，空间 O(n)。

验证示例 2：x(花3→a, 剩1), a(0), x(d=3>1→退成w), c, d → "aawcd" ✓
