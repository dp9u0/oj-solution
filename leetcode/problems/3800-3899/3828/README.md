# [3828] Final Element After Subarray Deletions

## Description

给定一个整数数组 nums。Alice 和 Bob 两人轮流玩游戏，Alice 先手。每回合，当前玩家选择一个子数组并将其删除，剩余元素拼接成新数组。游戏继续直到只剩一个元素。Alice 目标是最大化最终剩余元素，Bob 目标是最小化。双方都最优策略，返回最终剩余元素的值。

Example 1:
Input: nums = [3, 1, 2, 4]
Output: 4
Explanation: Alice 删除子数组 [1, 2]，剩下 [3, 4]。Bob 删除 [3]，剩下 [4]。

Example 2:
Input: nums = [1, 2]
Output: 2

## Approach

博弈论。Alice 先手，可以一步删除除了首尾之外的所有元素（删除中间子数组），使数组只剩 [nums[0], nums[n-1]]。之后 Bob 只能删一个，Alice 再删另一个... 实际上 Alice 可以保证最终结果是 max(nums[0], nums[n-1])。

答案 = max(nums[0], nums[n-1])。
时间复杂度 O(1)。

## Solution

[SourceCode](./solution.js)
