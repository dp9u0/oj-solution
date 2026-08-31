# [3962] Maximum Subarray Sum After at Most K Swaps

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-subarray-sum-after-at-most-k-swaps/description/)

* algorithms
* Hard (14.10%)
* Likes:    47
* Dislikes: 6
* Testcase Example:  '[1,-1,0,2]\n1'

```md
You are given an integer array nums and an integer k.
You are allowed to perform at most k swap operations on the array.
In one swap operation, you may choose any two indices i and j and swap nums[i] and nums[j].
Return an integer denoting the maximum possible subarray sum after performing the swaps.

Example 1:

Input: nums = [1,-1,0,2], k = 1
Output: 3
Explanation:

We can swap on indices 1 and 3, resulting in the array [1, 2, 0, -1].
The subarray [1, 2] has a sum of 3, which is the maximum possible subarray sum after at most k = 1​​​​​​​ swap.


Example 2:

Input: nums = [4,3,2,4], k = 2
Output: 13
Explanation:
The maximum possible subarray sum after at most k = 2 swaps is the sum of the entire array, which is 13.

Example 3:

Input: nums = [-1,-2], k = 0
Output: -1
Explanation:

k = 0 swaps are allowed.
The possible subarrays are [-1], [-2], and [-1, -2], with sums -1, -2, and -3 respectively.
Among these sums, the maximum is -1.



Constraints:

1 <= nums.length <= 1500
-105 <= nums[i] <= 105
0 <= k <= nums.length


```

## Solution

[SourceCode](./solution.js)

---

## 中文翻译

给定一个整数数组 `nums` 和一个整数 `k`。你最多可以执行 `k` 次交换操作。每次交换操作中，你可以任选两个下标 `i` 和 `j`，交换 `nums[i]` 与 `nums[j]`。

返回执行交换之后，数组可能的最大子数组和。

**示例 1：**
输入：`nums = [1,-1,0,2], k = 1`
输出：`3`
解释：交换下标 1 和 3，得到 `[1, 2, 0, -1]`，子数组 `[1, 2]` 的和为 3，这是最多 k=1 次交换后能得到的最大子数组和。

**示例 2：**
输入：`nums = [4,3,2,4], k = 2`
输出：`13`
解释：最多 k=2 次交换后，最大子数组和是整个数组的和 13。

**示例 3：**
输入：`nums = [-1,-2], k = 0`
输出：`-1`
解释：k=0 时不能交换，所有子数组为 `[-1]`、`[-2]`、`[-1,-2]`，和分别为 -1、-2、-3，最大为 -1。

**约束：**
- `1 <= nums.length <= 1500`
- `-10^5 <= nums[i] <= 10^5`
- `0 <= k <= nums.length`

---

## 解题思路

**核心观察：** 对任意区间 `[l, r]`（内部集合 A，外部集合 B），贪心交换是最优的：每次把 B 中最大的元素与 A 中最小且为负收益…更准确地说，交换收益是"凹"的，最优交换次数 `t*` 是满足"第 t 大的 B 元素 > 第 t 小的 A 元素"的最大 t。

**代数化简：** 设 `P[r]` = 全局值 ≤ comp[r] 的元素个数（与区间无关），`totalB = n - m`（m 为区间长度），则
`#B > comp[r] = totalB - (P[r] - #A ≤ comp[r])`。
最优 t 满足 `t* = max(min(#A ≤ comp[r], #B > comp[r]))`。
取 `r1 = 最大的满足 P[r] ≤ totalB 的秩`（只依赖 m，与 l 无关！），则
`t* = max(#A ≤ comp[r1], totalB - P[r1+1] + #A ≤ comp[r1+1])`。

**算法：** 枚举左端点 l，向右扩展右端点 r，用两个 Fenwick 树（内部、外部）维护计数与和，每次区间只需 2 次 Fenwick 前缀计数查询 + 2 次"找前 t 小/前 (totalB-t) 大"的树上二分。总复杂度 **O(n² log n)**，常数极小，可过 1500 数据规模。

- 代码用 Fenwick 支持：按值域更新、前缀计数查询、以及求"最小 t 个元素之和"的树上二分。
- 每次区间得到最大交换收益后，与基础子数组和相加，取全局最大值即为答案。
