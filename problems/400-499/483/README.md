# [483] Smallest Good Base

## Description

[LeetCode Problem Description](https://leetcode.com/problems/smallest-good-base/description/)

* algorithms
* Hard (47.24%)
* Likes:    431
* Dislikes: 542
* Testcase Example:  '"13"'

```md
Given an integer n represented as a string, return the smallest good base of n.
We call k >= 2 a good base of n, if all digits of n base k are 1&#39;s.

Example 1:

Input: n = '13'
Output: '3'
Explanation: 13 base 3 is 111.

Example 2:

Input: n = '4681'
Output: '8'
Explanation: 4681 base 8 is 11111.

Example 3:

Input: n = '1000000000000000000'
Output: '999999999999999999'
Explanation: 1000000000000000000 base 999999999999999999 is 11.


Constraints:

n is an integer in the range [3, 1018].
n does not contain any leading zeros.


```

## Solution

[SourceCode](./solution.js)

## 中文翻译

给定一个以字符串表示的整数 n，返回 n 的最小好进制。

如果 k >= 2，且 n 的 k 进制表示的所有数位全为 1，则称 k 是 n 的一个好进制。

示例 1：
输入：n = "13"
输出："3"
解释：13 的 3 进制是 111。

示例 2：
输入：n = "4681"
输出："8"
解释：4681 的 8 进制是 11111。

示例 3：
输入：n = "1000000000000000000"
输出："999999999999999999"
解释：1000000000000000000 的 999999999999999999 进制是 11。

约束：
n 的范围是 [3, 10^18]，不含前导零。

## 解题思路

**数学 + 枚举位数**

若 n 的 k 进制为 m 位全 1，则满足等比数列求和：
n = 1 + k + k² + ... + k^(m-1) = (k^m - 1) / (k - 1)

**关键结论**：进制 k 越小，位数 m 越大。因此"最小好进制"等价于"最大位数"，从大到小枚举 m，第一个找到的合法 k 即为答案。

- m 的上界：k >= 2 时 n >= 2^m - 1，而 n <= 10^18 < 2^63，故 m <= 63。
- 对固定 m，等比和对 k 严格单调递增，合法 k 至多一个。由 k^(m-1) < n 得 k = floor(n^(1/(m-1)))，用 Math.pow 估算后在校验 k0-2 ~ k0+2 的候选值（防止浮点误差导致 floor 偏移）。
- 校验时用 BigInt 逐项累加等比和（10^18 超出 Number 的 2^53 精确范围，中间项 k^(m-1) 更会溢出），超过 n 提前剪枝。
- 注意 k >= 2：如 n = 3 时 m = 3 对应 k = 1（1+1+1=3）但不合法。
- m = 2 时恒有 k = n - 1（即 "11"），保证答案一定存在，无需兜底分支。

复杂度：O(63 × 5 × 63) ≈ 常数级。
