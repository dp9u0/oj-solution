# [2208] Minimum Operations to Halve Array Sum

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-operations-to-halve-array-sum/description/)

* algorithms
* Medium (50.07%)
* Likes:    684
* Dislikes: 32
* Testcase Example:  '[5,19,8,1]'

```md
You are given an array nums of positive integers. In one operation, you can choose any number from nums and reduce it to exactly half the number. (Note that you may choose this reduced number in future operations.)
Return the minimum number of operations to reduce the sum of nums by at least half.

Example 1:

Input: nums = [5,19,8,1]
Output: 3
Explanation: The initial sum of nums is equal to 5 + 19 + 8 + 1 = 33.
The following is one of the ways to reduce the sum by at least half:
Pick the number 19 and reduce it to 9.5.
Pick the number 9.5 and reduce it to 4.75.
Pick the number 8 and reduce it to 4.
The final array is [5, 4.75, 4, 1] with a total sum of 5 + 4.75 + 4 + 1 = 14.75.
The sum of nums has been reduced by 33 - 14.75 = 18.25, which is at least half of the initial sum, 18.25 >= 33/2 = 16.5.
Overall, 3 operations were used so we return 3.
It can be shown that we cannot reduce the sum by at least half in less than 3 operations.

Example 2:

Input: nums = [3,8,20]
Output: 3
Explanation: The initial sum of nums is equal to 3 + 8 + 20 = 31.
The following is one of the ways to reduce the sum by at least half:
Pick the number 20 and reduce it to 10.
Pick the number 10 and reduce it to 5.
Pick the number 3 and reduce it to 1.5.
The final array is [1.5, 8, 5] with a total sum of 1.5 + 8 + 5 = 14.5.
The sum of nums has been reduced by 31 - 14.5 = 16.5, which is at least half of the initial sum, 16.5 >= 31/2 = 15.5.
Overall, 3 operations were used so we return 3.
It can be shown that we cannot reduce the sum by at least half in less than 3 operations.


Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 107


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定一个正整数数组 `nums`。每次操作可以选择 `nums` 中的任意一个数，将其**减半**（之后还可以继续对减半后的数操作）。

返回使 `nums` 的总和**至少减少一半**所需的最少操作次数。

示例 1：`[5,19,8,1]` → `3`（总和 33，需减少 ≥16.5：19→9.5→4.75，8→4，共减少 18.25）
示例 2：`[3,8,20]` → `3`（总和 31：20→10→5，3→1.5，共减少 16.5）

约束：`1 <= nums.length <= 10^5`，`1 <= nums[i] <= 10^7`

## 解题思路

贪心 + 大顶堆：每次操作使总和减少"所选数的一半"，想让操作次数最少，每一步都应选**当前最大**的数（单步削减量最大化）。交换论证：任意最优解中把某步换成"当时更大的数"不会更差。

实现：数组实现二叉大顶堆（避免依赖外部库）：

1. 求总和 `sum`，目标削减量 `target = sum / 2`；
2. 建堆后循环取堆顶 `top`，削减量累加 `top / 2`，堆顶替换为 `top / 2` 并下滤；
3. 累计削减量 ≥ target 时返回操作数。

**数值精度**：所有数都是 `整数 × 2^-k` 形式，除以 2 仅改变指数，双精度下**精确**（`nums[i] <= 10^7 < 2^24`，尾数 53 位远够），无需特殊处理。

时间复杂度 O(n log n)，空间 O(n)。

验证示例 1：19→9.5（减 9.5）→ 9.5→4.75（减 4.75）→ 8→4（减 4），累计 18.25 ≥ 16.5，共 3 次 ✓
