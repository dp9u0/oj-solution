# [4002] Count Valid Sequences

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-valid-sequences/description/)

* algorithms
* Medium (42.37%)
* Likes:    72
* Dislikes: 16
* Testcase Example:  '5\n3'

```md
You are given two positive integers n and k.
A valid sequence is a sequence of k positive integers such that:

The sum of all integers in the sequence is equal to n.
The product of all integers in the sequence is even.

Return the number of valid sequences. Since the answer may be very large, return it modulo 109​​​​​​​ + 7.
Two sequences are considered different if they differ at any index. For example, [1, 1, 2] and [1, 2, 1] are considered different sequences.

Example 1:

Input: n = 5, k = 3
Output: 3
Explanation:
The sequences of length k = 3 whose sum is 5 are:



Sequence
Product
Parity


[1, 1, 3]
1 * 1 * 3 = 3
Odd


[1, 2, 2]
1 * 2 * 2 = 4
Even


[2, 1, 2]
2 * 1 * 2 = 4
Even


[2, 2, 1]
2 * 2 * 1 = 4
Even


[1, 3, 1]
1 * 3 * 1 = 3
Odd


[3, 1, 1]
3 * 1 * 1 = 3
Odd



There are 3 sequences with an even product, thus the answer is 3.

Example 2:

Input: n = 3, k = 2
Output: 2
Explanation:
The sequences of length k = 2 whose sum is 3 are:



Sequence
Product
Parity


[1, 2]
1 * 2 = 2
Even


[2, 1]
2 * 1 = 2
Even



There are 2 sequences with an even product, thus the answer is 2.

Example 3:

Input: n = 5, k = 5
Output: 0
Explanation:
The only possible sequence of length k = 5 whose sum is 5 is [1, 1, 1, 1, 1], which has an odd product. Thus, the answer is 0.


Constraints:

1 <= n <= 5 * 105
1 <= k <= n


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定正整数 `n` 和 `k`。一个 **k 项正整数**序列合法当且仅当：

- 各项之和等于 `n`；
- 各项之积为**偶数**。

返回合法序列的数量，对 `10^9 + 7` 取模。序列按位置区分（`[1,1,2]` 与 `[1,2,1]` 不同）。

示例 1：`n=5, k=3` → `3`；示例 2：`n=3, k=2` → `2`；示例 3：`n=5, k=5` → `0`

约束：`1 <= n <= 5×10^5`，`1 <= k <= n`

## 解题思路

**积为偶数 = 至少一项为偶数**，容斥：答案 = 总方案数 − 全奇方案数。

1. **总数**：n 拆成 k 个正整数之和（有序）= 隔板法 `C(n-1, k-1)`；
2. **全奇**：每项奇，令每项 = 2xᵢ+1（xᵢ ≥ 0），则 Σxᵢ = (n−k)/2，方案数 `C((n-k)/2 + k - 1, k - 1)`；若 `n−k` 为奇数则为 0。

答案 = `C(n-1, k-1) − C((n-k)/2 + k - 1, k - 1) (mod 1e9+7)`。

阶乘/逆阶乘预计算到 n，**全 BigInt**（两个 ~1e9 模数相乘超 2^53 会丢精度）。

验证：n=5,k=3 → 6−3 = 3 ✓；n=3,k=2 → 2−0 = 2 ✓；n=5,k=5 → 1−1 = 0 ✓
