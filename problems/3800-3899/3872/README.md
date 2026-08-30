# [3872] Longest Arithmetic Sequence After Changing At Most One Element

## Description

[LeetCode Problem Description](https://leetcode.com/problems/longest-arithmetic-sequence-after-changing-at-most-one-element/description/)

* algorithms
* Medium (21.82%)
* Likes:    122
* Dislikes: 12
* Testcase Example:  '[9,7,5,10,1]'

```md
You are given an integer array nums.
A subarray is arithmetic if the difference between consecutive elements in the subarray is constant.
You can replace at most one element in nums with any integer. Then, you select an arithmetic subarray from nums.
Return an integer denoting the maximum length of the arithmetic subarray you can select.

Example 1:
Input: nums = [9,7,5,10,1]
Output: 5
Explanation:
Replace nums[3] = 10 with 3. The array becomes [9, 7, 5, 3, 1].
Select the subarray [9, 7, 5, 3, 1], which is arithmetic because consecutive elements have a common difference of -2.
Example 2:
Input: nums = [1,2,6,7]
Output: 3
Explanation:
Replace nums[0] = 1 with -2. The array becomes [-2, 2, 6, 7].
Select the subarray [-2, 2, 6, 7], which is arithmetic because consecutive elements have a common difference of 4.

Constraints:
4 <= nums.length <= 105
1 <= nums[i] <= 105
Hint 1: Precompute L[i] = length of longest arithmetic subarray ending at i using fixed differences.
Hint 2: Precompute R[i] = length of longest arithmetic subarray starting at i.
Hint 3: For each index i as the replaced element, check if neighbors allow a common difference d = (nums[i+1] - nums[i-1]) / 2 and combine L[i-1] and R[i+1].
Hint 4: Also consider extending only left or only right, and take the maximum over all positions.

```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给你一个整数数组 `nums`。

如果一个**子数组**中相邻元素的差为常数，则称该子数组为等差子数组。

你可以将 `nums` 中**至多一个**元素替换为任意整数，然后从 `nums` 中选取一个等差子数组。

返回你能选出的等差子数组的最大长度。

示例 1：
输入：`nums = [9,7,5,10,1]`
输出：`5`
解释：把 `nums[3] = 10` 替换为 3，数组变为 `[9, 7, 5, 3, 1]`，公差为 -2，整个数组都是等差子数组。

示例 2：
输入：`nums = [1,2,6,7]`
输出：`3`
解释：把 `nums[0] = 1` 替换为 -2，数组变为 `[-2, 2, 6, 7]`，公差为 4，取子数组 `[-2, 2, 6]` 等等，长度为 3。（注：取 `[-2,2,6,7]` 中前三/后三个均可，最优长度 3。）

约束：
- `4 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^5`

## 解题思路

预处理两个数组（O(n)）：

- `L[i]`：以 `i` 结尾的最长等差子数组长度（`L[i] = L[i-1]+1` 若差值延续，否则为 2；`L[0]=1`）。
- `R[i]`：以 `i` 开头的最长等差子数组长度（对称定义）。

枚举"被替换的位置 p"与所选子数组中 p 的位置，共四种情况取最大：

1. **不替换**：`max(L[i])`。
2. **p 是子数组左端点**：右侧保留原始等差段，答案 `1 + R[p+1]`（新值可任取，无约束）。
3. **p 是子数组右端点**：同理 `1 + L[p-1]`。
4. **p 在子数组内部**（`l < p < r`）：新值 x 需满足 `nums[p-1], x, nums[p+1]` 等差，故公差被迫为 `d = (nums[p+1] - nums[p-1]) / 2`，且差必须为偶数。左侧贡献：若 `p-1 >= 1` 且 `nums[p-1]-nums[p-2] === d` 则为 `L[p-1]`，否则只能取 `1`（左段只留 `p-1` 一个元素）；右侧对称：若 `p+1 <= n-2` 且 `nums[p+2]-nums[p+1] === d` 则为 `R[p+1]`，否则为 `1`。候选为 `left + 1 + right`。

整体 O(n) 时间、O(n) 空间。
