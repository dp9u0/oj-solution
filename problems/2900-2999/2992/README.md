# [2992] 自整除排列的数量

## Description


```md
https://leetcode.cn/problems/number-of-self-divisible-permutations/description/
* algorithms
* Medium (74.06%)
* Likes:    4
* Dislikes: -
* Testcase Example:  '1'
给定一个整数 n，返回 下标从 1 开始 的数组 nums = [1, 2, ..., n]的 可能的排列数量，使其满足 自整除 条件。
如果对于每个 1 <= i <= n，满足 gcd(a[i], i) == 1，数组 nums 就是 自整除 的。
数组的 排列 是对数组元素的重新排序，例如，下面是数组 [1, 2, 3] 的所有排列：
[1, 2, 3]
[1, 3, 2]
[2, 1, 3]
[2, 3, 1]
[3, 1, 2]
[3, 2, 1]

示例 1：
输入：n = 1
输出：1
解释：数组 [1] 只有一个排列，它是自整除的。
示例 2：
输入：n = 2
输出：1
解释：数组 [1,2] 有 2 个排列，但只有其中一个是自整除的：
nums = [1,2]：这不是自整除的，因为 gcd(nums[2], 2) != 1。
nums = [2,1]：这是自整除的，因为 gcd(nums[1], 1) == 1 并且 gcd(nums[2], 2) == 1。
示例 3：
输入：n = 3
输出：3
解释：数组 [1,2,3] 有 3 个自整除的排列：[1,2,3]、[2,1,3]、[3,2,1]。
其他 3 个排列不能满足自整除条件。因此答案是 3。

提示：
1 <= n <= 12
Hint 1: Think of Backtracking.

```

## Solution

[SourceCode](./solution.js)

## 思路 (Approach)

Problem (EN): Count permutations a of [1..n] with gcd(a[i], i) == 1 for every position i. n <= 12.

Approach: backtracking over positions with a bitmask of used values; at position i try every unused value v with gcd(v, i) == 1. Pruning by the gcd condition keeps the search tiny at n <= 12.

Verified: n=1 -> 1; n=2 -> 1; n=3 -> 3.
