# [3405] Count the Number of Arrays with K Matching Adjacent Elements

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-the-number-of-arrays-with-k-matching-adjacent-elements/description/)

* algorithms
* Hard (57.85%)
* Likes:    432
* Dislikes: 68
* Testcase Example:  '3\n2\n1'

```md
You are given three integers n, m, k. A good array arr of size n is defined as follows:
Each element in arr is in the inclusive range [1, m].
Exactly k indices i (where 1 <= i < n) satisfy the condition arr[i - 1] == arr[i].
Return the number of good arrays that can be formed.
Since the answer may be very large, return it modulo 109 + 7.

Example 1:
Input: n = 3, m = 2, k = 1
Output: 4
Explanation:
There are 4 good arrays. They are [1, 1, 2], [1, 2, 2], [2, 1, 1] and [2, 2, 1].
Hence, the answer is 4.
Example 2:
Input: n = 4, m = 2, k = 2
Output: 6
Explanation:
The good arrays are [1, 1, 1, 2], [1, 1, 2, 2], [1, 2, 2, 2], [2, 1, 1, 1], [2, 2, 1, 1] and [2, 2, 2, 1].
Hence, the answer is 6.
Example 3:
Input: n = 5, m = 2, k = 0
Output: 2
Explanation:
The good arrays are [1, 2, 1, 2, 1] and [2, 1, 2, 1, 2]. Hence, the answer is 2.

Constraints:
1 <= n <= 105
1 <= m <= 105
0 <= k <= n - 1
Hint 1: The first position arr[0] has m choices.
Hint 2: For each of the remaining n - 1 indices, 0 < i < n, select k positions from left to right and set arr[i] = arr[i - 1].
Hint 3: For all other indices, set arr[i] != arr[i - 1] with (m - 1) choices for each of the n - 1 - k positions.

```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定三个整数 n、m、k。一个长度为 n 的「好数组」 arr 定义如下：

- arr 中每个元素都在闭区间 [1, m] 内。
- 恰好有 k 个下标 i（1 <= i < n）满足 arr[i - 1] == arr[i]。

返回能构成的好数组数目。由于答案可能很大，返回对 10^9 + 7 取模的结果。

示例 1：
输入：n = 3, m = 2, k = 1
输出：4
解释：4 个好数组为 [1, 1, 2], [1, 2, 2], [2, 1, 1], [2, 2, 1]。

示例 2：
输入：n = 4, m = 2, k = 2
输出：6

示例 3：
输入：n = 5, m = 2, k = 0
输出：2
解释：好数组为 [1, 2, 1, 2, 1] 和 [2, 1, 2, 1, 2]。

约束：
1 <= n <= 10^5
1 <= m <= 10^5
0 <= k <= n - 1

## 解题思路

组合数学问题。逐段独立计数：

1. **首元素**：arr[0] 有 m 种选择。
2. **选相等位置**：n - 1 个相邻对中，恰选 k 个位置满足 arr[i] == arr[i-1]（值直接继承前一个，无新选择），方案数为组合数 C(n-1, k)。
3. **不相等位置**：其余 n - 1 - k 个位置要求 arr[i] != arr[i-1]，每个位置有 m - 1 种选择，共 (m-1)^(n-1-k)。

答案 = m × C(n-1, k) × (m-1)^(n-1-k) mod (10^9 + 7)。

实现要点：

- 用 BigInt 做模乘法避免精度溢出（模数约 1e9，两个模数的乘积超过 Number 安全整数范围）。
- 组合数 C(n-1, k) = ∏(n-1-i) / k!，分母用费马小定理求模逆元（模数 1e9+7 为质数，逆元 = k!^(p-2)）。
- 快速幂处理 (m-1)^(n-1-k)；注意 0^0 = 1（m = 1 且 k = n-1 时答案为 1）。

时间复杂度 O(n + log n)，空间复杂度 O(1)。
