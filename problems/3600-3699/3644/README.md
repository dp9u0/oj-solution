# [3644] 排序排列

## Description


```md
https://leetcode.cn/problems/maximum-k-to-sort-a-permutation/description/
* algorithms
* Medium (41.49%)
* Likes:    10
* Dislikes: -
* Testcase Example:  '[0,3,2,1]'
给你一个长度为 n 的整数数组 nums，其中 nums 是范围 [0..n - 1] 内所有数字的一个 排列 。
你可以在满足条件 nums[i] AND nums[j] == k 的情况下交换下标 i 和 j 的元素，其中 AND 表示按位与操作，k 是一个非负整数。
返回可以使数组按 非递减 顺序排序的最大值 k（允许进行任意次这样的交换）。如果 nums 已经是有序的，返回 0。
排列 是数组所有元素的一种重新排列。

示例 1：
输入：nums = [0,3,2,1]
输出：1
解释：
选择 k = 1。交换 nums[1] = 3 和 nums[3] = 1，因为 nums[1] AND nums[3] == 1，从而得到一个排序后的排列：[0, 1, 2, 3]。
示例 2：
输入：nums = [0,1,3,2]
输出：2
解释：
选择 k = 2。交换 nums[2] = 3 和 nums[3] = 2，因为 nums[2] AND nums[3] == 2，从而得到一个排序后的排列：[0, 1, 2, 3]。
示例 3：
输入：nums = [3,2,1,0]
输出：0
解释：
只有当 k = 0 时，才能进行排序，因为没有更大的 k 能够满足 nums[i] AND nums[j] == k 的交换条件。

提示：
1 <= n == nums.length <= 105
0 <= nums[i] <= n - 1
nums 是从 0 到 n - 1 的一个排列。
Hint 1: Take the bitwise AND of all elements that are not in their correct position.

```

## Description (English)

You are given an integer array `nums` of length `n`, where `nums` is a permutation of the numbers in the range `[0, n - 1]`.

You can swap the elements at indices `i` and `j` if `nums[i] AND nums[j] == k`, where `AND` denotes the bitwise AND operation and `k` is a non-negative integer.

Return the maximum value of `k` such that the array can be sorted in non-decreasing order (using any number of such swaps). If `nums` is already sorted, return `0`.

A permutation is a rearrangement of all the elements of an array.

### Examples

- Input: `nums = [0,3,2,1]`, Output: `1`
  - Choose `k = 1`. Swap `nums[1] = 3` and `nums[3] = 1` since `3 AND 1 == 1`, obtaining the sorted permutation `[0,1,2,3]`.
- Input: `nums = [0,1,3,2]`, Output: `2`
  - Choose `k = 2`. Swap `nums[2] = 3` and `nums[3] = 2` since `3 AND 2 == 2`.
- Input: `nums = [3,2,1,0]`, Output: `0`
  - Only `k = 0` allows enough swaps to sort the array.

### Constraints

- `1 <= n == nums.length <= 10^5`
- `0 <= nums[i] <= n - 1`
- `nums` is a permutation of the numbers from `0` to `n - 1`.

## 思路

**答案 = 所有「不在正确位置上的元素」的按位与**；已有序则返回 0。

**必要性（k 不能更大）**：每个错位元素至少要参与一次交换。一次交换中 `nums[i] AND nums[j] == k`，说明参与交换的两个值都包含 k 的所有位（值 ⊇ k）。因此每个错位元素都 ⊇ k，即 `k ⊆ AND(所有错位元素)`，k 不能超过这个 AND 值。

**充分性（该 AND 值可行）**：记 `K = AND(所有错位元素)`，则每个错位元素都包含 K 的全部位（称为"可动"元素）。值 `K` 本身必在数组中（`0 <= K <= n-1`），且 `K AND x == K` 对任意可动元素 x 成立，即 K 与任何可动元素可直接交换。

对任意两个错位元素 a、b（若 `a AND b == K` 可直接交换），否则借助值 K 做三轮换即可交换 a、b —— 设 a、b、K 分别位于 Pa、Pb、Pk：
1. 交换 (Pb, Pk)：`b AND K == K` ✓，此时 K 到了 Pb；
2. 交换 (Pa, Pb)：`a AND K == K` ✓，此时 a 到了 Pb（即原来 b 的位置）；
3. 交换 (Pa, Pk)：`b AND K == K` ✓。

净效果是 a、b 互换，K 回到原位。于是任意两个错位元素都可交换，用选择类的方式即可把数组完全排序。

复杂度：时间 O(n)，空间 O(1)。

## Solution

[SourceCode](./solution.js)
