# [3920] Maximize Fixed Points After Deletions

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximize-fixed-points-after-deletions/description/)

* algorithms
* Hard (20.08%)
* Likes:    60
* Dislikes: 1
* Testcase Example:  '[0,2,1]'

```md
You are given an integer array nums.
A position i is called a fixed point if nums[i] == i.
You are allowed to delete any number of elements (including zero) from the array. After each deletion, the remaining elements shift left, and indices are reassigned starting from 0.
Return an integer denoting the maximum number of fixed points that can be achieved after performing any number of deletions.

Example 1:

Input: nums = [0,2,1]
Output: 2
Explanation:

Delete nums[1] = 2. The array becomes [0, 1].
Now, nums[0] = 0 and nums[1] = 1, so both indices are fixed points.
Thus, the answer is 2.


Example 2:

Input: nums = [3,1,2]
Output: 2
Explanation:

Do not delete any elements. The array remains [3, 1, 2].
Here, nums[1] = 1 and nums[2] = 2, so these indices are fixed points.
Thus, the answer is 2.


Example 3:

Input: nums = [1,0,1,2]
Output: 3
Explanation:

Delete nums[0] = 1. The array becomes [0, 1, 2].
Now, nums[0] = 0, nums[1] = 1, and nums[2] = 2, so all indices are fixed points.
Thus, the answer is 3.



Constraints:

1 <= nums.length <= 105
0 <= nums[i] <= 105


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

可删除任意多个元素（剩余元素左移、下标重排）。返回能得到的最大**固定点**数（`nums[i] == i`）。

示例 1：`[0,2,1]` → `2`（删 2 得 [0,1]）；示例 2：`[3,1,2]` → `2`（不删，1、2 是固定点）；示例 3：`[1,0,1,2]` → `3`

约束：`n ≤ 10^5`，`nums[i] ≤ 10^5`

## 解题思路

固定点元素在 kept 序列里的值恰为其 kept 下标：选一组固定元素（原位置 p₁<p₂<…，值 v₁<v₂<…），删除数须满足 `deleted(p_j) = p_j − v_j ≥ 0` 且随 j 不减 ⟺ **key = p − v 非负且按序非降**。kept 的非固定元素不施加任何约束（间隔可任意填充）——所以固定点的值**不必连续**（反例 [0,0,2,2]：kept [0,2,2] 得 2 个固定点）。

DP：f[i] = 1 + max{ f[j] : nums[j] < nums[i], key_j ≤ key_i }（j<i 由两条件自动推出）。按 key 排序后即**二维支配 LIS**：值域离散化 + 树状数组维护前缀最大，O(n log n)。注意 BIT 必须 1 起索引（update(0) 会死循环）、查询取严格小于 c−1。