# [2450] 应用操作后不同二进制字符串的数量

## Description


```md
https://leetcode.cn/problems/number-of-distinct-binary-strings-after-applying-operations/description/
* algorithms
* Medium (61.04%)
* Likes:    8
* Dislikes: -
* Testcase Example:  '"1001"\n3'
给定一个 二进制 字符串 s 和一个正整数 k。
你可以对字符串应用以下操作 任意 次数:
从 s 中选择任何大小为 k 的子字符串，将其所有字符 翻转，即将所有 1 都变成 0，所有 0 都变成 1。
返回您可以获得的 不同 字符串的数量。因为答案可能太大，所以对 109 + 7 取模 后返回。
注意:
二进制字符串是 仅由 字符 0 和 1 组成的字符串。

子字符串是字符串的连续部分。


示例 1:
输入: s = "1001", k = 3
输出: 4
解释: 我们可以获得以下字符串:
- 对字符串不应用任何操作将得到 s = "1001"。
- 对从下标 0 开始的子字符串应用一个操作，得到 s = "0111"。
- 对从下标 1 开始的子字符串应用一个操作，得到 s = "1110"。
- 对从下标 0 和 1 开始的两个子字符串都应用一个操作，得到 s = "0000"。
可以证明，我们不能获得任何其他字符串，所以答案是 4。
示例 2:
输入: s = "10110", k = 5
输出: 2
解释: 我们可以获得以下字符串:
- 对字符串不执行任何操作，将得到 s = "10110"。
- 对整个字符串应用一个操作将得到 s = "01001"。
可以证明，我们不能获得任何其他字符串，所以答案是 2。

提示:
1 <= k <= s.length <= 105
s[i] 是 0 或 1。
Hint 1: Notice that any string of the same length as s will always have the same answer, so only the length of the string matters.
Hint 2: For each substring of size k, you can decide whether to flip or not. Every string s resulting from this process will be unique.
Hint 3: How do you find the number of possible combinations?

```

## Solution

[SourceCode](./solution.js)

## English Translation

Flip any length-k substring any number of times; count distinct reachable strings modulo 1e9+7.

Example 1:
Input: s = "1001", k = 3
Output: 4

Example 2:
Input: s = "10110", k = 5
Output: 2

Constraints: 1 <= k <= s.length <= 10^5.

## Approach

Each of the n-k+1 window positions may be flipped independently (the reachable set equals exactly the 2^(n-k+1) XOR combinations, all distinct). Answer = 2^(n-k+1) mod 1e9+7 via fast exponentiation.
