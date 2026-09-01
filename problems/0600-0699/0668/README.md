# [668] Kth Smallest Number in Multiplication Table

## Description

[LeetCode Problem Description](https://leetcode.com/problems/kth-smallest-number-in-multiplication-table/description/)

* algorithms
* Hard (54.85%)
* Likes:    2306
* Dislikes: 62
* Testcase Example:  '3\n3\n5'

```md
Nearly everyone has used the Multiplication Table. The multiplication table of size m x n is an integer matrix mat where mat[i][j] == i * j (1-indexed).
Given three integers m, n, and k, return the kth smallest element in the m x n multiplication table.

Example 1:


Input: m = 3, n = 3, k = 5
Output: 3
Explanation: The 5th smallest number is 3.

Example 2:


Input: m = 2, n = 3, k = 6
Output: 6
Explanation: The 6th smallest number is 6.


Constraints:

1 <= m, n <= 3 * 104
1 <= k <= m * n


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

m×n 乘法表 `mat[i][j] = i·j`（1 起下标）。返回表中第 `k` 小的元素。

示例 1：`m=3, n=3, k=5` → `3`（排序 1,2,2,3,3,4,6,6,9）
示例 2：`m=2, n=3, k=6` → `6`

约束：`1 <= m, n <= 3×10^4`，`1 <= k <= m·n`

## 解题思路

**值域二分**：`count(x)` = 表中 ≤ x 的元素个数 = `Σ_{i=1..m} min(n, ⌊x/i⌋)`（第 i 行 ≤ x 的个数）。

count 单调不减，二分找**最小** x 使 `count(x) >= k`，该 x 必是表中真实元素（若 x 不在表中，x−1 的 count 与 x 相同，最小性保证落在表元素上）。

复杂度 O(m log(mn)) ≈ 3×10^4 × 31。
