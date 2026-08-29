# [3942] Minimum Operations to Sort a Permutation

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-operations-to-sort-a-permutation/description/)

* algorithms
* Medium (28.17%)
* Likes:    92
* Dislikes: 8
* Testcase Example:  '[0,2,1]'

```md
You are given an integer array nums of length n, where nums is a permutation of the integers from 0 to n - 1.
You may perform only the following operations:

Reverse the entire array.
Rotate Left by One: Move the first element to the end of the array, and rest elements to left by one position.

Return an integer denoting the minimum number of operations required to sort the array in increasing order. If it is not possible to sort the array using only the given operations, return -1.

Example 1:

Input: nums = [0,2,1]
Output: 2
Explanation:

Rotate Left by one: [2, 1, 0]
Reverse the array: [0, 1, 2]

The array becomes sorted in 2 operations, which is minimal

Example 2:

Input: nums = [1,0,2]
Output: 2
Explanation:

Reverse the array: [2, 0, 1]
Rotate Left by one: [0, 1, 2]

The array becomes sorted in 2 operations, which is minimal.

Example 3:

Input: nums = [2,0,1,3]
Output: -1
Explanation:
It is impossible to reach [2, 0, 1, 3]. Thus, the answer is -1.


Constraints:

1 <= n == nums.length <= 105
0 <= nums[i] <= n - 1
nums is a permutation of integers from 0 to n - 1.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

`nums` 是 0..n−1 的排列。可用操作：整体反转；左旋一位。求变有序的最少操作数，不可行返回 −1。

示例 1：`[0,2,1]` → `2`（左旋后反转）；示例 2：`[1,0,2]` → `2`；示例 3：`[2,0,1,3]` → `-1`

## 解题思路

操作群是**二面体群 D_n**（旋转 R 与反转 T，且 `T·R·T = R⁻¹`）：

- **差条件**：`(a[i] − i) mod n` 恒为 k1 ⟺ a 是恒等排列的左旋 k1 → 排序需左旋 r = (n−k1) mod n 步；而 R^r 可用 `[T, R^(n−r), T]` 三步包抄实现：代价 `costR(r) = r==0 ? 0 : min(r, 2 + n − r)`；
- **和条件**：`(a[i] + i) mod n` 恒为 c ⟺ a 是"降序排列"的旋转 → 反射型元素：代价 `1 + min(k, (n−k) mod n)`，k = (c−(n−1)) mod n。

两者都不满足 → −1。BFS 对拍验证（对拍还抓出了漏掉 T·R·T=T⁻¹ 包抄路径的 bug）。O(n)。