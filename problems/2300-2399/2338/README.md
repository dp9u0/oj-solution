# [2338] Count the Number of Ideal Arrays

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-the-number-of-ideal-arrays/description/)

* algorithms
* Hard (56.95%)
* Likes:    852
* Dislikes: 133
* Testcase Example:  '2\n5'

```md
You are given two integers n and maxValue, which are used to describe an ideal array.
A 0-indexed integer array arr of length n is considered ideal if the following conditions hold:

Every arr[i] is a value from 1 to maxValue, for 0 <= i < n.
Every arr[i] is divisible by arr[i - 1], for 0 < i < n.

Return the number of distinct ideal arrays of length n. Since the answer may be very large, return it modulo 109 + 7.

Example 1:

Input: n = 2, maxValue = 5
Output: 10
Explanation: The following are the possible ideal arrays:
- Arrays starting with the value 1 (5 arrays): [1,1], [1,2], [1,3], [1,4], [1,5]
- Arrays starting with the value 2 (2 arrays): [2,2], [2,4]
- Arrays starting with the value 3 (1 array): [3,3]
- Arrays starting with the value 4 (1 array): [4,4]
- Arrays starting with the value 5 (1 array): [5,5]
There are a total of 5 + 2 + 1 + 1 + 1 = 10 distinct ideal arrays.

Example 2:

Input: n = 5, maxValue = 3
Output: 11
Explanation: The following are the possible ideal arrays:
- Arrays starting with the value 1 (9 arrays):
- With no other distinct values (1 array): [1,1,1,1,1]
- With 2nd distinct value 2 (4 arrays): [1,1,1,1,2], [1,1,1,2,2], [1,1,2,2,2], [1,2,2,2,2]
- With 2nd distinct value 3 (4 arrays): [1,1,1,1,3], [1,1,1,3,3], [1,1,3,3,3], [1,3,3,3,3]
- Arrays starting with the value 2 (1 array): [2,2,2,2,2]
- Arrays starting with the value 3 (1 array): [3,3,3,3,3]
There are a total of 9 + 1 + 1 = 11 distinct ideal arrays.


Constraints:

2 <= n <= 104
1 <= maxValue <= 104


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定整数 n 和 maxValue，计算"理想数组"的数量。理想数组是长度为 n 的数组，满足：
1. 每个元素 arr[i] 在 [1, maxValue] 范围内
2. arr[i] 能被 arr[i-1] 整除（即 arr[i-1] | arr[i]）

结果对 10^9+7 取模。

## 解题思路

**质因数分解 + 组合计数（隔板法）**

核心观察：对于固定末尾值 v，数组中每个位置相对于前一个位置只能乘以某个因子。将 v 进行质因数分解 v = p1^a1 × p2^a2 × ... × pk^ak，不同质因数的分配相互独立。

对于质数 p 的指数为 a：需要将 a 次指数增量分配到 n 个位置中（每个位置的增量 ≥ 0，总和为 a）。由隔板法，方案数为 C(a + n - 1, a)。

最终答案 = Σ(v=1 to maxValue) Π(对 v 的每个质因数 p^a) C(a + n - 1, a)

实现：
1. 线性筛预处理 SPF（最小质因子）
2. 预计算阶乘和逆阶乘（模意义下），用 BigInt 防止乘法溢出
3. 对每个 v 分解质因数，累加贡献
