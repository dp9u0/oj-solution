# [779] K-th Symbol in Grammar

## Description

[LeetCode Problem Description](https://leetcode.com/problems/k-th-symbol-in-grammar/description/)

* algorithms
* Medium (48.19%)
* Likes:    4154
* Dislikes: 427
* Testcase Example:  '1\n1'

```md
We build a table of n rows (1-indexed). We start by writing 0 in the 1st row. Now in every subsequent row, we look at the previous row and replace each occurrence of 0 with 01, and each occurrence of 1 with 10.

For example, for n = 3, the 1st row is 0, the 2nd row is 01, and the 3rd row is 0110.

Given two integer n and k, return the kth (1-indexed) symbol in the nth row of a table of n rows.

Example 1:

Input: n = 1, k = 1
Output: 0
Explanation: row 1: 0

Example 2:

Input: n = 2, k = 1
Output: 0
Explanation:
row 1: 0
row 2: 01

Example 3:

Input: n = 2, k = 2
Output: 1
Explanation:
row 1: 0
row 2: 01


Constraints:

1 <= n <= 30
1 <= k <= 2n - 1


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

构建 n 行的表。第 1 行为 0。后续每行将上一行的 0 替换为 01，1 替换为 10。给定 n 和 k，返回第 n 行第 k 个符号。

## 解题思路

**递归 / 位运算**

观察规律：第 n 行的第 k 个符号，来自第 n-1 行的第 ceil(k/2) 个符号。
- 如果 k 是偶数，结果 = 父节点取反
- 如果 k 是奇数，结果 = 父节点本身

等价地，结果 = k-1 的二进制表示中 1 的个数 % 2（即 k-1 的 popcount 的奇偶性）。

时间复杂度 O(log k)，空间复杂度 O(1)。
