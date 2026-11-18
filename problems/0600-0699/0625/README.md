# [625] 最小因式分解

## Description


```md
https://leetcode.cn/problems/minimum-factorization/description/
* algorithms
* Medium (33.80%)
* Likes:    48
* Dislikes: -
* Testcase Example:  '48'
给定一个正整数 num，找出最小的正整数 x 使得 x 的所有数位相乘恰好等于 num。
如果不存在这样的结果或者结果不是 32 位有符号整数，返回 0。

示例 1：
输入：num = 48
输出：68
示例 2：
输入：num = 15
输出：35

提示：
1 <= num <= 231 - 1

```

## Solution

[SourceCode](./solution.js)

## Translation

Find the smallest positive integer x whose digits multiply exactly to num; return 0 if none exists or x exceeds 32-bit signed range.

- Example 1: num = 48 → `68` (6·8)
- Example 2: num = 15 → `35`

Constraints: 1 ≤ num ≤ 2^31 − 1.

## Approach

**贪心**。数字只能是 2–9(乘 1 只会变长,毫无意义):

- 从 9 到 2 依次试除,收集所有因子数字——这保证**数字个数最少**;
- num 未除尽到 1 → 存在 >7 的质因子 → 0;
- 数字升序排列即为最小值;位数 > 10 或构造后 > 2^31−1 → 0。num = 1 时答案是 1。
