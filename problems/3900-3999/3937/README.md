# [3937] Minimum Operations to Make Array Modulo Alternating I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-operations-to-make-array-modulo-alternating-i/description/)

* algorithms
* Medium (46.06%)
* Likes:    50
* Dislikes: 7
* Testcase Example:  '[1,4,2,8]\n3'

```md
You are given an integer array nums and an integer k.
In one operation, you can increase or decrease any element of nums by 1.
An array is called modulo alternating if there exist two distinct integers x and y (0 <= x, y < k) such that:

For every even index i, nums[i] % k == x
For every odd index i, nums[i] % k == y

Return the minimum number of operations required to make nums modulo alternating.

Example 1:

Input: nums = [1,4,2,8], k = 3
Output: 2
Explanation:

Let&#39;s choose x = 1 for even indices and y = 2 for odd indices.
Perform the following operations:

Increment nums[1] = 4 by 1, giving nums = [1, 5, 2, 8].
Decrement nums[2] = 2 by 1, giving nums = [1, 5, 1, 8].


Now, for even indices, nums[i] % k = 1, and for odd indices, nums[i] % k = 2.
Thus, the total number of operations required is 2.


Example 2:

Input: nums = [1,1,1], k = 3
Output: 1
Explanation:

Incrementing nums[1] by 1 gives nums = [1, 2, 1], which satisfies the condition with x = 1 and y = 2.
Thus, the total number of operations required is 1.



Constraints:

1 <= nums.length <= 100
1 <= nums[i] <= 109
2 <= k <= 100


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定整数数组 `nums` 和整数 `k`。每次操作可将任意元素 ±1。

数组称为**模交替**的：存在两个**不同**整数 `x`、`y`（`0 <= x, y < k`），使得：

- 所有偶数下标 `i` 满足 `nums[i] % k == x`；
- 所有奇数下标 `i` 满足 `nums[i] % k == y`。

返回使数组变为模交替所需的最少操作数。

示例 1：`nums = [1,4,2,8], k = 3` → `2`（x=1, y=2：4→5、2→1）
示例 2：`nums = [1,1,1], k = 3` → `1`（1→2）

约束：`1 <= n <= 100`，`1 <= nums[i] <= 10^9`，`2 <= k <= 100`

## 解题思路

值 `v` 调整到余数 `r` 的单步代价：设 `d = (v%k - r + k) % k`，则代价 `= min(d, k - d)`（向左绕或向右绕到最近的同余数）。

1. 枚举每个目标余数 `r ∈ [0, k)`，分别累计**偶下标总代价** `evenCost[r]` 与**奇下标总代价** `oddCost[r]`——O(n·k)；
2. 答案 = `min over x ≠ y` 的 `evenCost[x] + oddCost[y]`——O(k²)，n、k ≤ 100 完全够用。

k ≥ 2 保证任何 x 都存在不同的 y，无不可行情形。总复杂度 O(n·k + k²)。

手算验证示例 1：evenCost=[2,1,1], oddCost=[2,1,1] → min(x≠y) = 1+1 = 2 ✓
