# [1217] Minimum Cost to Move Chips to The Same Position

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/description/)

* algorithms
* Easy (72.83%)
* Likes:    2461
* Dislikes: 351
* Testcase Example:  '[1,2,3]'

```md
We have n chips, where the position of the ith chip is position[i].
We need to move all the chips to the same position. In one step, we can change the position of the ith chip from position[i] to:

position[i] + 2 or position[i] - 2 with cost = 0.
position[i] + 1 or position[i] - 1 with cost = 1.

Return the minimum cost needed to move all the chips to the same position.

Example 1:


Input: position = [1,2,3]
Output: 1
Explanation: First step: Move the chip at position 3 to position 1 with cost = 0.
Second step: Move the chip at position 2 to position 1 with cost = 1.
Total cost is 1.

Example 2:


Input: position = [2,2,2,3,3]
Output: 2
Explanation: We can move the two chips at position  3 to position 2. Each move has cost = 1. The total cost = 2.

Example 3:

Input: position = [1,1000000000]
Output: 1


Constraints:

1 <= position.length <= 100
1 <= position[i] <= 10^9


```

## 翻译

n 个筹码在不同位置，移动 ±2 花费 0，移动 ±1 花费 1。求把所有筹码移到同一位置的最小花费。

## Approach

移动 ±2 不花钱，所以奇数位置的筹码可以免费移到任意奇数位置，偶数同理。只需统计奇数位置和偶数位置的筹码数，选较少的那个作为需要移动 ±1 的次数。

时间复杂度 O(n)，空间复杂度 O(1)。

## Solution

[SourceCode](./solution.js)
