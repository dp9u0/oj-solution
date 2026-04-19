# [3699] Number of ZigZag Arrays I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-zigzag-arrays-i/description/)

* algorithms
* Hard (33.03%)
* Likes:    85
* Dislikes: 7
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
[5, 4, 5]​​​​​​​


Example 2:

Input: n = 3, l = 1, r = 3
Output: 10
Explanation:
There are 10 valid ZigZag arrays of length n = 3 using values in the range [1, 3]:

[1, 2, 1], [1, 3, 1], [1, 3, 2]
[2, 1, 2], [2, 1, 3], [2, 3, 1], [2, 3, 2]
[3, 1, 2], [3, 1, 3], [3, 2, 3]

All arrays meet the ZigZag conditions.


Constraints:

3 <= n <= 2000
1 <= l < r <= 2000


```

## 翻译

给定 n, l, r，统计满足以下条件的数组个数（模 10^9+7）：
1. 长度为 n，每个元素在 [l, r] 范围内
2. 相邻元素不相等
3. 不存在连续三个元素严格递增或严格递减

## 解题思路

ZigZag 条件等价于：若 a[i-2] < a[i-1] 则 a[i] < a[i-1]，若 a[i-2] > a[i-1] 则 a[i] > a[i-1]。即方向交替。

定义 up[v] 和 down[v] 表示以值 v 结尾、最后一步为上升/下降的合法序列数。转移用前缀和优化：newUp[w] = prefixDown[w-1]，newDown[w] = totalUp - prefixUp[w]。O(nm)。

## Solution

[SourceCode](./solution.js)
