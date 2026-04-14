# [3352] Count K-Reducible Numbers Less Than N

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-k-reducible-numbers-less-than-n/description/)

* algorithms
* Hard (27.82%)
* Likes:    64
* Dislikes: 3
* Testcase Example:  '"111"\n1'

```md
You are given a binary string s representing a number n in its binary form.
You are also given an integer k.
An integer x is called k-reducible if performing the following operation at most k times reduces it to 1:

Replace x with the count of set bits in its binary representation.

For example, the binary representation of 6 is '110'. Applying the operation once reduces it to 2 (since '110' has two set bits). Applying the operation again to 2 (binary '10') reduces it to 1 (since '10' has one set bit).
Return an integer denoting the number of positive integers less than n that are k-reducible.
Since the answer may be too large, return it modulo 109 + 7.

Example 1:

Input: s = '111', k = 1
Output: 3
Explanation:
n = 7. The 1-reducible integers less than 7 are 1, 2, and 4.

Example 2:

Input: s = '1000', k = 2
Output: 6
Explanation:
n = 8. The 2-reducible integers less than 8 are 1, 2, 3, 4, 5, and 6.

Example 3:

Input: s = '1', k = 3
Output: 0
Explanation:
There are no positive integers less than n = 1, so the answer is 0.


Constraints:

1 <= s.length <= 800
s has no leading zeros.
s consists only of the characters &#39;0&#39; and &#39;1&#39;.
1 <= k <= 5


```

## Solution

[SourceCode](./solution.js)

---

### 题目翻译

给定二进制字符串 s 表示数字 n，和整数 k（1 ≤ k ≤ 5）。一个数 x 是 k-reducible 的，如果最多 k 次操作（将 x 替换为其二进制中 1 的个数）能变为 1。求小于 n 的正整数中有多少个 k-reducible 数，结果 mod 10^9+7。

### 解题思路

1. **预计算 k-reducible 的 popcount 值**：对 1~800 中每个值，模拟操作链求出到 1 需要几步，标记 ≤ k 步的 popcount 值
2. **数位 DP**：统计 < n（二进制字符串 s）的数中有多少个的 popcount 在 k-reducible 集合中
3. DP 状态：`dp[i][tight][cnt]` 表示处理到第 i 位，是否仍与 s 前缀一致，当前已选 1 的个数为 cnt 的方案数
