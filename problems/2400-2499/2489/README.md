# [2489] 固定比率的子字符串数

## Description


```md
https://leetcode.cn/problems/number-of-substrings-with-fixed-ratio/description/
* algorithms
* Medium (61.06%)
* Likes:    4
* Dislikes: -
* Testcase Example:  '"0110011"\n1\n2'
给定一个二进制字符串 s 和两个整数 num1 和 num2。num1 和 num2 为互质。
比率子串 是 s 的子串，其中子串中 0 的数量与 1 的数量之比正好是 num1 : num2。
例如，如果 num1 = 2 和 num2 = 3，那么 "01011" 和 "1110000111" 是比率子串，而 "11000" 不是。
返回 s 的 非空 比率子串的个数。
注意:
子串 是字符串中连续的字符序列。
如果 gcd(x, y) == 1，则 x 和 y 为 互质，其中 gcd(x, y) 为 x 和 y 的最大公约数。

示例 1:
输入: s = "0110011", num1 = 1, num2 = 2
输出: 4
解释: 有 4 个非空的比率子串。
- 子字符串 s[0..2]: "0110011"。它包含一个 0 和两个 1。比例是 1:2。
- 子字符串 s[1..4]: "0110011"。它包含一个 0 和两个 1。比例是 1:2。
- 子字符串 s[4..6]: "0110011"。它包含一个 0 和两个 1。比例是 1:2。
- 子字符串 s[1..6]: "0110011"。它包含两个 0 和四个 1。比例是 2:4 == 1:2。
它可以显示没有更多的比率子串。
示例 2:
输入: s = "10101", num1 = 3, num2 = 1
输出: 0
解释: s 没有比率子串，返回 0。

提示:
1 <= s.length <= 105
1 <= num1, num2 <= s.length
num1 和 num2 互质。
Hint 1: Let Func(i) denote the number of 0’s in the prefix [0…i]. We want to find the number of pairs of indices L and R such that Func(R) - Func(L) : R - L - Func(R) + Func(L) = num1 : num2.
Hint 2: It is better to simplify the formula.
Hint 3: Func(R) * (num1 + num2) - R * num1 = Func(L) * (num1 + num2) - L * num1.
Hint 4: Iterate from left to right and use a hash map to count the number of indices having the same value for the above formula.

```

## Solution

[SourceCode](./solution.js)

## English Translation

Count non-empty substrings of binary string s where zeros : ones = num1 : num2 (num1, num2 coprime).

Example 1:
Input: s = "0110011", num1 = 1, num2 = 2
Output: 4

Example 2:
Input: s = "10101", num1 = 3, num2 = 1
Output: 0

Constraints: 1 <= s.length <= 10^5.

## Approach

Prefix key: key(i) = zeros(i) * (num1 + num2) - i * num1. A substring (L, R] has the right ratio iff key(R) == key(L) (from zeros_R * num2 = ones_R * num1). Sweep i = 0..n, adding the count of earlier equal keys from a hash map.

O(n).
