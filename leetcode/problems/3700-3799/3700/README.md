# [3700] Number of ZigZag Arrays II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-zigzag-arrays-ii/description/)

* algorithms
* Hard (57.55%)
* Likes:    28
* Dislikes: 4
* Testcase Example:  '3\n4\n5'

```md
You are given three integers n, l, and r.
A ZigZag array of length n is defined as follows:

Each element lies in the range [l, r].
No two adjacent elements are equal.
No three consecutive elements form a strictly increasing or strictly decreasing sequence.

Return the total number of valid ZigZag arrays.
Since the answer may be large, return it modulo 109 + 7.
A sequence is said to be strictly increasing if each element is strictly greater than its previous one (if exists).
A sequence is said to be strictly decreasing if each element is strictly smaller than its previous one (if exists).

Example 1:

Input: n = 3, l = 4, r = 5
Output: 2
Explanation:
There are only 2 valid ZigZag arrays of length n = 3 using values in the range [4, 5]:

[4, 5, 4]
[5, 4, 5]


Example 2:

Input: n = 3, l = 1, r = 3
Output: 10
Explanation:
​​​​​​​There are 10 valid ZigZag arrays of length n = 3 using values in the range [1, 3]:

[1, 2, 1], [1, 3, 1], [1, 3, 2]
[2, 1, 2], [2, 1, 3], [2, 3, 1], [2, 3, 2]
[3, 1, 2], [3, 1, 3], [3, 2, 3]

All arrays meet the ZigZag conditions.


Constraints:

3 <= n <= 109
1 <= l < r <= 75​​​​​​​


```

## Solution

[SourceCode](./solution.js)

---

### 题目翻译

给定整数 n, l, r，求满足以下条件的数组个数 (mod 10^9+7)：
1. 每个元素在 [l, r] 范围内
2. 相邻元素不等
3. 任意连续三个元素不严格递增也不严格递减

### 解题思路

**DP + 矩阵快速幂**

1. 状态：`(val, dir)` — val 是当前元素值，dir 是与前一元素的关系（0=上升，1=下降）
2. 转移：从 `(val, dir)` 到 `(next, newDir)`
   - 如果 next > val：newDir=0（上升），只有前一个 dir 不是上升时才合法
   - 如果 next < val：newDir=1（下降），只有前一个 dir 不是下降时才合法
3. 值域 m = r - l + 1 ≤ 75，状态数 = m × 2 ≤ 150
4. 用矩阵快速幂 O((2m)^3 log n) 求长度 n 的数组个数
