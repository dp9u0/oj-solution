# [3505] Minimum Operations to Make Elements Within K Subarrays Equal

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-operations-to-make-elements-within-k-subarrays-equal/description/)

* algorithms
* Hard (28.06%)
* Likes:    71
* Dislikes: 3
* Testcase Example:  '[5,-2,1,3,7,3,6,4,-1]\n3\n2'

```md
You are given an integer array nums and two integers, x and k. You can perform the following operation any number of times (including zero):

Increase or decrease any element of nums by 1.

Return the minimum number of operations needed to have at least k non-overlapping subarrays of size exactly x in nums, where all elements within each subarray are equal.

Example 1:

Input: nums = [5,-2,1,3,7,3,6,4,-1], x = 3, k = 2
Output: 8
Explanation:

Use 3 operations to add 3 to nums[1] and use 2 operations to subtract 2 from nums[3]. The resulting array is [5, 1, 1, 1, 7, 3, 6, 4, -1].
Use 1 operation to add 1 to nums[5] and use 2 operations to subtract 2 from nums[6]. The resulting array is [5, 1, 1, 1, 7, 4, 4, 4, -1].
Now, all elements within each subarray [1, 1, 1] (from indices 1 to 3) and [4, 4, 4] (from indices 5 to 7) are equal. Since 8 total operations were used, 8 is the output.


Example 2:

Input: nums = [9,-2,-2,-2,1,5], x = 2, k = 2
Output: 3
Explanation:

Use 3 operations to subtract 3 from nums[4]. The resulting array is [9, -2, -2, -2, -2, 5].
Now, all elements within each subarray [-2, -2] (from indices 1 to 2) and [-2, -2] (from indices 3 to 4) are equal. Since 3 operations were used, 3 is the output.



Constraints:

2 <= nums.length <= 105
-106 <= nums[i] <= 106
2 <= x <= nums.length
1 <= k <= 15
2 <= k * x <= nums.length


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定整数数组 `nums` 与整数 `x`、`k`。每次操作可将任意元素 ±1。

返回使 `nums` 中存在**至少 k 个互不重叠、长度恰为 x 的子数组**（每个子数组内部元素全部相等）所需的最少操作数。

示例 1：`nums = [5,-2,1,3,7,3,6,4,-1], x = 3, k = 2` → `8`（把 [1..3] 变成全 1、[5..7] 变成全 4）
示例 2：`nums = [9,-2,-2,-2,1,5], x = 2, k = 2` → `3`（把 `nums[4]` 从 1 改成 -2）

约束：`2 <= n <= 10^5`，`|nums[i]| <= 10^6`，`2 <= x <= n`，`1 <= k <= 15`，`2 <= k*x <= n`

## 解题思路

两阶段：**滑窗中位数**求每个窗口的代价 + **划分 DP** 选 k 个不重叠窗口。

**阶段 1**：长度为 x 的窗口内全变相等，最优目标值是**中位数**，代价 = `sumHigh - sumLow + median×(2h-x)`（h = ⌈x/2⌉ 为较小半部分个数；x 偶数时系数为 0）。对每个起点 s 求 `c[s]`，用**值域离散化 + 两个树状数组（计数、权和）**维护滑窗：加/删元素 O(log n)，找第 h 小用树状数组上二分（倍增下降），第 h 小的和 = "严格小于 median 的和 + 补足若干个 median"（正确处理重复值）。

**阶段 2**：`dp[j][i]` = 前 i 个位置内放 j 个窗口的最小代价：`dp[j][i] = min(dp[j][i-1], dp[j-1][i-x] + c[i-x])`，滚动一维数组，答案 `dp[k][n]`。

复杂度：中位数 O(n log n)，DP O(k·n) = 1.5×10^6。数值：窗口代价 ≤ 2×10^11，总和 ≤ 3×10^12 < 2^53，双精度安全（本题无大数模乘）。

手算验证示例 1：c = [7,5,6,4,4,3,7]；dp1 = [.,.,.,7,5,5,4,4,3,3]；dp2[9] = min(dp2[8], dp1[6]+c[3]) = min(10, 4+4) = 8 ✓
