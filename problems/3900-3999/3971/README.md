# [3971] Maximum Total Value

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-total-value/description/)

* algorithms
* Hard (29.76%)
* Likes:    58
* Dislikes: 1
* Testcase Example:  '[6,5,4]\n[2,1,1]\n4'

```md
You are given two integer arrays value and decay, and an integer m.

value[i] represents the initial value at index i.
decay[i] represents how much the value decreases after each selection of index i.

You may select any index multiple times. The total number of selections across all indices must not exceed m.
If you select index i for the tth time, where t is 1-indexed, the value gained is value[i] - decay[i] * (t - 1).
Return the maximum total value you can obtain. Since the answer may be large, return it modulo 109 + 7.

Example 1:

Input: value = [6,5,4], decay = [2,1,1], m = 4
Output: 19
Explanation:
One optimal sequence of selections is as follows:

By selecting index 0, the value gained is 6.
By selecting index 1, the value gained is 5.
By selecting index 2, the value gained is 4.
By selecting index 0 again, the value gained is 6 - 2 = 4.

The total value is 6 + 5 + 4 + 4 = 19. No other sequence of at most 4 selections gives a higher total value.

Example 2:

Input: value = [7,2,2], decay = [3,2,1], m = 2
Output: 11
Explanation:
One optimal sequence of selections is as follows:

By selecting index 0, the value gained is 7.
By selecting index 0 again, the value gained is 7 - 3 = 4.

The total value is 7 + 4 = 11.

Example 3:

Input: value = [4,3], decay = [5,4], m = 5
Output: 7
Explanation:
One optimal sequence of selections is as follows:

By selecting index 0, the value gained is 4.
By selecting index 1, the value gained is 3.

The total value is 4 + 3 = 7.


Constraints:

1 <= value.length == decay.length <= 105
1 <= value[i], decay[i] <= 109​​​​​​​
1 <= m <= 109


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定数组 `value`、`decay` 和整数 `m`。第 `i` 个下标被选第 `t` 次（t 从 1 起）获得 `value[i] - decay[i]·(t-1)`。总选择次数 ≤ `m`（同一下标可重复选）。返回可得的最大总价值，模 `10^9+7`。

示例 1：`value=[6,5,4], decay=[2,1,1], m=4` → `19`（6+5+4+4）
示例 2：`[7,2,2],[3,2,1],2` → `11`（7+4）
示例 3：`[4,3],[5,4],5` → `7`（4+3，其余为负不选）

约束：`n ≤ 10^5`，`value[i], decay[i] ≤ 10^9`，`m ≤ 10^9`

## 解题思路

可选收益是固定多重集（每个下标贡献等差递减序列），与选择顺序无关 → **取前 m 大的正收益**。m 高达 1e9，不能逐个取，**二分阈值**：

1. `count(x)` = 收益 ≥ x 的个数 = `Σ max(0, ⌊(value[i]-x)/decay[i]⌋ + 1)`，对 x 单调不增；计数 ≤ 1e14 < 2^53 精确。
2. 二分最小 `T` 使 `count(T) ≤ m`：取全部收益 ≥ T 的项（等差数列求和，**BigInt**——总和可达 ~1e18 超 2^53），再用 `m - count(T)` 个恰好等于 `T-1` 的收益补足（由 T 最小性保证足够）。若 `count(1) ≤ m` 则直接取全部正收益。

复杂度 O(n log(1e9))。验证示例 1：全部正收益降序 6,5,4,4,4,3,3,2,2,2,1,1，前 4 和 = 19 ✓
