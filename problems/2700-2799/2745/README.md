# [2745] Construct the Longest New String

## Description

[LeetCode Problem Description](https://leetcode.com/problems/construct-the-longest-new-string/description/)

* algorithms
* Medium (54.72%)
* Likes:    341
* Dislikes: 29
* Testcase Example:  '2\n5\n1'

```md
You are given three integers x, y, and z.
You have x strings equal to 'AA', y strings equal to 'BB', and z strings equal to 'AB'. You want to choose some (possibly all or none) of these strings and concatenate them in some order to form a new string. This new string must not contain 'AAA' or 'BBB' as a substring.
Return the maximum possible length of the new string.
A substring is a contiguous non-empty sequence of characters within a string.

Example 1:

Input: x = 2, y = 5, z = 1
Output: 12
Explanation: We can concatenate the strings 'BB', 'AA', 'BB', 'AA', 'BB', and 'AB' in that order. Then, our new string is 'BBAABBAABBAB'.
That string has length 12, and we can show that it is impossible to construct a string of longer length.

Example 2:

Input: x = 3, y = 2, z = 2
Output: 14
Explanation: We can concatenate the strings 'AB', 'AB', 'AA', 'BB', 'AA', 'BB', and 'AA' in that order. Then, our new string is 'ABABAABBAABBAA'.
That string has length 14, and we can show that it is impossible to construct a string of longer length.


Constraints:

1 <= x, y, z <= 50


```

## 中文翻译

有 x 个 "AA"、y 个 "BB"、z 个 "AB"，拼接后不能出现 "AAA" 或 "BBB"。求最长拼接字符串长度。

## 解题思路

关键观察：
- "AB" 可以连续拼接（ABABAB...）且不会违反约束。
- "AB" 以 B 结尾，可以接 "BB"；以 A 开头，可以接 "AA"。
- 所以最优策略：先用 z 个 "AB" 作为中间桥梁，然后用 min(x, y) 对 "AA"+"BB" 交替排列。
- 如果 x > y，多出的 "AA" 可以放在最后（以 A 结尾接 AA 不形成 AAA）；如果 y > x，多出的 "BB" 可以放在最前。

公式：ans = 2 * (2 * min(x, y) + z + (x != y ? 1 : 0))。当 x != y 时可以多放一个 "AA" 或 "BB"。

## Solution

[SourceCode](./solution.js)
