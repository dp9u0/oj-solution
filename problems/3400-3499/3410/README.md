# [3410] Maximize Subarray Sum After Removing All Occurrences of One Element

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximize-subarray-sum-after-removing-all-occurrences-of-one-element/description/)

* algorithms
* Hard (23.11%)
* Likes:    67
* Dislikes: 6
* Testcase Example:  '[-3,2,-2,-1,3,-2,3]'

```md
You are given an integer array nums.
You can do the following operation on the array at most once:

Choose any integer x such that nums remains non-empty on removing all occurrences of x.
Removeall occurrences of x from the array.

Return the maximum subarray sum across all possible resulting arrays.

Example 1:

Input: nums = [-3,2,-2,-1,3,-2,3]
Output: 7
Explanation:
We can have the following arrays after at most one operation:

The original array is nums = [-3, 2, -2, -1, 3, -2, 3]. The maximum subarray sum is 3 + (-2) + 3 = 4.
Deleting all occurences of x = -3 results in nums = [2, -2, -1, 3, -2, 3]. The maximum subarray sum is 3 + (-2) + 3 = 4.
Deleting all occurences of x = -2 results in nums = [-3, 2, -1, 3, 3]. The maximum subarray sum is 2 + (-1) + 3 + 3 = 7.
Deleting all occurences of x = -1 results in nums = [-3, 2, -2, 3, -2, 3]. The maximum subarray sum is 3 + (-2) + 3 = 4.
Deleting all occurences of x = 3 results in nums = [-3, 2, -2, -1, -2]. The maximum subarray sum is 2.

The output is max(4, 4, 7, 4, 2) = 7.

Example 2:

Input: nums = [1,2,3,4]
Output: 10
Explanation:
It is optimal to not perform any operations.


Constraints:

1 <= nums.length <= 105
-106 <= nums[i] <= 106

Hint 1: Use a segment tree data structure to solve the problem.
Hint 2: Each node of the segment tree should store the subarray sum, the maximum subarray sum, the maximum prefix sum, and the maximum suffix sum within the subarray defined by that node.

```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定一个整数数组 `nums`。你可以对数组执行**至多一次**以下操作：

- 选择任意整数 `x`，要求删除 `x` 的所有出现后数组仍非空；
- 从数组中删除 `x` 的所有出现。

返回在所有可能得到的数组中，**最大子数组和**。

示例 1：
输入：`nums = [-3,2,-2,-1,3,-2,3]`，输出：`7`。
删除所有 `-2` 后数组为 `[-3,2,-1,3,3]`，最大子数组和为 `2+(-1)+3+3 = 7`。

示例 2：
输入：`nums = [1,2,3,4]`，输出：`10`。不执行任何操作最优。

约束：`1 <= nums.length <= 1e5`，`-1e6 <= nums[i] <= 1e6`。

## 解题思路

**核心：最大子段和线段树 + 按值分组批量置 0/还原。**

**关键观察**：删除 `x` 的所有出现后，新数组是剩余元素按原顺序拼接的。新数组的任意子数组 = 原数组的某个连续区间 `[i,j]` 去掉其中的 `x`，其和 = `sum(i,j) - x·cntₓ(i,j)`。等价地：把每个等于 `x` 的元素视为 **0**（可自由跨越、不贡献和），再求最大子段和。

1. **线段树节点维护四个信息**（区间 `[l,r]`）：
   - `sum`：区间总和；
   - `pref`：最大前缀和；`suf`：最大后缀和；
   - `best`：区间内最大子段和（非空）。
   合并（左 `L`、右 `R`）：
   - `sum = L.sum + R.sum`
   - `pref = max(L.pref, L.sum + R.pref)`
   - `suf = max(R.suf, R.sum + L.suf)`
   - `best = max(L.best, R.best, L.suf + R.pref)`

2. **枚举删除的值 x**：把 `x` 的所有出现位置的叶子置为 `0`，根节点 `best` 即零化数组的最大子段和；查询后还原。

3. **复杂度关键**：按下标按值分组后，每个元素整个过程只被置 0 一次、还原一次，总更新次数 `2n`，整体 **O(n log n)**。

4. **非空子数组的细节**：零化后全由 `x` 构成的区间和为 0，但它在删除 `x` 后对应**空子数组**，不合法。可证明：
   - 若 `treeBest > 0`，取得它的区间必含非 `x` 元素（`x` 只贡献 0），合法，`M(x) = treeBest`；
   - 若 `treeBest ≤ 0`，任何和 ≤ 0 的区间必不超过其内部最大单元素（否则全负导致和更小），故 `M(x)` 退化为**最大的非 `x` 单元素**。用排序后的前两大不同值 `top1/top2` O(1) 求出：`bound(x) = x === top1 ? top2 : top1`。

5. **其他细节**：
   - 初始 `ans = best[根]`（不执行操作的情况，操作至多一次）；
   - 若某值出现次数等于 `n`，删除后数组为空，不合法，跳过（此时与不操作等价）；
   - 末尾 padding 叶子设为 `sum=0, best=pref=suf=-Infinity`，作为合并中性元。
