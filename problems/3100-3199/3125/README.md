# [3125] 使得按位与结果为 0 的最大数字

## Description


```md
https://leetcode.cn/problems/maximum-number-that-makes-result-of-bitwise-and-zero/description/
* algorithms
* Medium (28.75%)
* Likes:    3
* Dislikes: -
* Testcase Example:  '7'
给定一个整数 n，返回 最大的 整数 x 使得 x <= n，并且所有在范围 [x, n] 内的数字的按位 AND 为 0。

示例 1：
输入：n = 7
输出：3
解释：
[6, 7] 的按位 AND 为 6。
[5, 6, 7] 的按位 AND 为 4。
[4, 5, 6, 7] 的按位 AND 为 4。
[3, 4, 5, 6, 7] 的按位 AND 为 0。
示例 2：
输入：n = 9
输出：7
解释：
[7, 8, 9] 的按位 AND 为 0。
示例 3：
输入：n = 17
输出：15
解释：
[15, 16, 17] 的按位 AND 为 0。

提示：
1 <= n <= 1015
Hint 1: Examine the set bits of n.
Hint 2: When performing bitwise AND operations sequentially down from n, the last set bit to turn to 0 identifies the highest set bit.
Hint 3: If the index of the highest set bit is x, the answer is 2x - 1.

```

## Solution

[SourceCode](./solution.js)

## 思路 (Approach)

Problem (EN): Max x <= n such that AND of all integers in [x, n] is 0. n up to 1e15.

Approach: let h be the highest set bit of n. Any x >= 2^h keeps bit h set in every number of the range -> AND nonzero. x = 2^h - 1 works: the range contains 2^h - 1 (bits 0..h-1) and 2^h (bit h), whose AND is 0. Answer = 2^h - 1. O(log n).

Verified: 7 -> 3; 9 -> 7; 17 -> 15; 1 -> 0.
