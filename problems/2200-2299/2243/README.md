# [2243] 计算字符串的数字和

## Description


```md
https://leetcode.cn/problems/calculate-digit-sum-of-a-string/description/
* algorithms
* Easy (64.48%)
* Likes:    31
* Dislikes: -
* Testcase Example:  '"11111222223"\n3'
给你一个由若干数字（0 - 9）组成的字符串 s ，和一个整数。
如果 s 的长度大于 k ，则可以执行一轮操作。在一轮操作中，需要完成以下工作：
将 s 拆分 成长度为 k 的若干 连续数字组 ，使得前 k 个字符都分在第一组，接下来的 k 个字符都分在第二组，依此类推。注意，最后一个数字组的长度可以小于 k 。
用表示每个数字组中所有数字之和的字符串来 替换 对应的数字组。例如，"346" 会替换为 "13" ，因为 3 + 4 + 6 = 13 。
合并 所有组以形成一个新字符串。如果新字符串的长度大于 k 则重复第一步。
返回在完成所有轮操作后的 s 。

示例 1：
输入：s = "11111222223", k = 3
输出："135"
解释：
- 第一轮，将 s 分成："111"、"112"、"222" 和 "23" 。
接着，计算每一组的数字和：1 + 1 + 1 = 3、1 + 1 + 2 = 4、2 + 2 + 2 = 6 和 2 + 3 = 5 。
这样，s 在第一轮之后变成 "3" + "4" + "6" + "5" = "3465" 。
- 第二轮，将 s 分成："346" 和 "5" 。
接着，计算每一组的数字和：3 + 4 + 6 = 13 、5 = 5 。
这样，s 在第二轮之后变成 "13" + "5" = "135" 。
现在，s.length <= k ，所以返回 "135" 作为答案。
示例 2：
输入：s = "00000000", k = 3
输出："000"
解释：
将 "000", "000", and "00".
接着，计算每一组的数字和：0 + 0 + 0 = 0 、0 + 0 + 0 = 0 和 0 + 0 = 0 。
s 变为 "0" + "0" + "0" = "000" ，其长度等于 k ，所以返回 "000" 。

提示：
1 <= s.length <= 100
2 <= k <= 100
s 仅由数字（0 - 9）组成。
Hint 1: Try simulating the entire process to find the final answer.

```

## Description (English)

You are given a string `s` consisting of digits (0 - 9) and an integer `k`.

A round operation can be performed if the length of `s` is greater than `k`. In one round, do the following:

1. Split `s` into consecutive groups of size `k` such that the first `k` characters are split into the first group, the next `k` characters into the second group, and so on. Note that the size of the last group can be smaller than `k`.
2. Replace each group with a string representing the sum of all its digits. For example, `"346"` is replaced with `"13"` because `3 + 4 + 6 = 13`.
3. Merge all the groups into one string. If this string is longer than `k`, repeat the round.

Return `s` after all rounds have been completed.

Example 1:

Input: s = "11111222223", k = 3
Output: "135"
Explanation:
- Round 1: split s into "111", "112", "222" and "23". Digit sums: 3, 4, 6, 5, so s becomes "3465".
- Round 2: split s into "346" and "5". Digit sums: 13 and 5, so s becomes "135".
Now s.length <= k, so return "135".

Example 2:

Input: s = "00000000", k = 3
Output: "000"
Explanation: "000" -> 0, "000" -> 0, "00" -> 0, s becomes "000" whose length equals k, so return "000".

Constraints:

- 1 <= s.length <= 100
- 2 <= k <= 100
- s consists of digits only.

## Solution

[SourceCode](./solution.js)

## Approach

直接模拟整个过程：当 `s.length > k` 时，把 `s` 按每 `k` 个字符切成一组（最后一组可不足 `k`），对每组求数字和并转成字符串，再拼接为新 `s`；循环直到长度不超过 `k`，返回 `s`。

时间复杂度 O(n^2 / k)，空间复杂度 O(n)，n 为字符串长度（n <= 100，规模极小）。
