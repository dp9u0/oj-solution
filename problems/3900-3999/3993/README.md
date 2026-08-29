# [3993] Maximum Value of an Alternating Sequence

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-value-of-an-alternating-sequence/description/)

* algorithms
* Medium (31.43%)
* Likes:    35
* Dislikes: 1
* Testcase Example:  '4\n3\n5'

```md
You are given three integers n, s, and m.
A sequence seq of integers of length n is considered valid if:

seq[0] = s.
The sequence is alternating, meaning that either:

seq[0] > seq[1] < seq[2] > ..., or
seq[0] < seq[1] > seq[2] < ....


For every adjacent pair,
seq[i] - seq[i - 1]
<= m.

A sequence of length 1 is considered alternating.
Return the maximum possible element that can appear in any valid sequence.

Example 1:

Input: n = 4, s = 3, m = 5
Output: 12
Explanation:

One valid sequence is [3, 8, 7, 12].
The maximum element in the sequence is 12.


Example 2:

Input: n = 2, s = 4, m = 3
Output: 7
Explanation:

One valid sequence is [4, 7].
The maximum element in the sequence is 7.



Constraints:

1 <= n, s <= 109
1 <= m <= 105


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定三个整数 `n`、`s`、`m`。长度为 `n` 的整数序列 `seq` **合法**当且仅当：

- `seq[0] = s`；
- 序列交替：`seq[0] > seq[1] < seq[2] > ...` 或 `seq[0] < seq[1] > seq[2] < ...`；
- 每对相邻元素满足 `|seq[i] - seq[i-1]| <= m`。

长度为 1 的序列视为交替。返回任意合法序列中可能出现的**最大元素值**。

示例 1：`n=4, s=3, m=5` → `12`（`[3,8,7,12]`）
示例 2：`n=2, s=4, m=3` → `7`（`[4,7]`）

约束：`1 <= n, s <= 10^9`，`1 <= m <= 10^5`

## 解题思路

n 达 10^9，必须 O(1) 公式。峰值出现在某个"上坡"位置 i：从 s 出发，最优爬升策略是**每个上坡 +m、每个下坡 −1**（严格交替下，下坡幅度最小为 1）。

设 i 为峰值下标（上坡进入），P(i) = s + ⌈i/2⌉·m − ⌊i/2⌋。比较奇偶下标：P(2k−1) = P(2k) + 1，奇数位（上坡顶）恒更优；且每前进两步 P 增加 (m−1) ≥ 0，故取**最大的奇数下标**。

- n 为偶数：最大奇数下标 = n−1，k = n/2；
- n 为奇数：最大奇数下标 = n−2，k = (n−1)/2——两者均为 k = ⌊n/2⌋。

答案（n ≥ 2）：`s + ⌊n/2⌋·(m−1) + 1`；n = 1 时为 `s`。

数值：⌊10^9/2⌋ × (10^5−1) ≈ 5×10^13 < 2^53，双精度安全。

验证：n=4,s=3,m=5 → 3+2×4+1 = 12 ✓；n=3,s=1,m=1 → 1+0+1 = 2（[1,2,1]）✓
