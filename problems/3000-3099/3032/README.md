# [3032] 统计各位数字都不同的数字个数 II

## Description


```md
https://leetcode.cn/problems/count-numbers-with-unique-digits-ii/description/
* algorithms
* Easy (45.60%)
* Likes:    1
* Dislikes: -
* Testcase Example:  '1\n20'
给你两个 正整数 a 和 b ，返回 闭区间 [a, b] 内各位数字都不同的数字个数。

示例 1：
输入：a = 1, b = 20
输出：19
解释：除 11 以外，区间 [1, 20] 内的所有数字的各位数字都不同。因此，答案为 19 。
示例 2：
输入：a = 9, b = 19
输出：10
解释：除 11 以外，区间 [1, 20] 内的所有数字的各位数字都不同。因此，答案为 10 。
示例 3：
输入：a = 80, b = 120
输出：27
解释：区间 [80, 120] 内共有 41 个整数，其中 27 个数字的各位数字都不同。

提示：
1 <= a <= b <= 1000
Hint 1: You can traverse over all numbers and check if the current number has unique digits or not.

```

## Solution

[SourceCode](./solution.js)

## Description (English)

You are given two positive integers `a` and `b`. Return the count of numbers in the closed range `[a, b]` that have all unique digits.

**Constraints:**
- 1 <= a <= b <= 1000

## Approach

区间枚举(b ≤ 1000),对每个数转字符串后用 Set 判断数位是否全部唯一。

时间 O((b-a+1) × L),L ≤ 4,空间 O(L)。
