# [634] 寻找数组的错位排列

## Description


```md
https://leetcode.cn/problems/find-the-derangement-of-an-array/description/
* algorithms
* Medium (46.38%)
* Likes:    50
* Dislikes: -
* Testcase Example:  '3'
在组合数学中，如果一个排列中所有元素都不在原先的位置上，那么这个排列就被称为 错位排列 。
给定一个从 1 到 n 升序排列的数组，返回 不同的错位排列 的数量 。由于答案可能非常大，你只需要将答案对 109+7 取余 输出即可。

示例 1:
输入: n = 3
输出: 2
解释: 原始的数组为 [1,2,3]。两个错位排列的数组为 [2,3,1] 和 [3,1,2]。
示例 2:
输入: n = 2
输出: 1

提示：
1 <= n <= 106

```

## Solution

[SourceCode](./solution.js)

## Translation

Count derangements of [1..n] (permutations with no element in its original position), mod 1e9+7.

- Example 1: n = 3 → `2` ([2,3,1] and [3,1,2])
- Example 2: n = 2 → `1`

Constraints: n ≤ 10^6.

## Approach

**错排递推**:D(1)=0, D(2)=1,`D(n) = (n-1)·(D(n-1) + D(n-2))`。新元素 n 的位置 i(共 n-1 种),要么 i 与 n 互换(剩 D(n-2)),要么不换(剩 D(n-1))。滚动两个变量 O(n) 时间 O(1) 空间,边算边取模。
