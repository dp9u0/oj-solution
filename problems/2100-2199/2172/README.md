# [2172] Maximum AND Sum of Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-and-sum-of-array/description/)

* algorithms
* Hard (50.64%)
* Likes:    550
* Dislikes: 33
* Testcase Example:  '[1,2,3,4,5,6]\n3'

```md
You are given an integer array nums of length n and an integer numSlots such that 2 * numSlots >= n. There are numSlots slots numbered from 1 to numSlots.
You have to place all n integers into the slots such that each slot contains at most two numbers. The AND sum of a given placement is the sum of the bitwise AND of every number with its respective slot number.

For example, the AND sum of placing the numbers [1, 3] into slot 1 and [4, 6] into slot 2 is equal to (1 AND 1) + (3 AND 1) + (4 AND 2) + (6 AND 2) = 1 + 1 + 0 + 2 = 4.

Return the maximum possible AND sum of nums given numSlots slots.

Example 1:

Input: nums = [1,2,3,4,5,6], numSlots = 3
Output: 9
Explanation: One possible placement is [1, 4] into slot 1, [2, 6] into slot 2, and [3, 5] into slot 3.
This gives the maximum AND sum of (1 AND 1) + (4 AND 1) + (2 AND 2) + (6 AND 2) + (3 AND 3) + (5 AND 3) = 1 + 0 + 2 + 2 + 3 + 1 = 9.

Example 2:

Input: nums = [1,3,10,4,7,1], numSlots = 9
Output: 24
Explanation: One possible placement is [1, 1] into slot 1, [3] into slot 3, [4] into slot 4, [7] into slot 7, and [10] into slot 9.
This gives the maximum AND sum of (1 AND 1) + (1 AND 1) + (3 AND 3) + (4 AND 4) + (7 AND 7) + (10 AND 9) = 1 + 1 + 3 + 4 + 7 + 8 = 24.
Note that slots 2, 5, 6, and 8 are empty which is permitted.


Constraints:

n == nums.length
1 <= numSlots <= 9
1 <= n <= 2 * numSlots
1 <= nums[i] <= 15


```

## 翻译

将 n 个数放入 numSlots 个槽中（编号 1 到 numSlots），每个槽最多放 2 个数。AND 和 = 所有 (数 AND 槽号) 之和。求最大 AND 和。

## 解题思路

三进制状态压缩 DP：
- numSlots <= 9，每个槽容量为 2，用三进制表示每个槽的占用数（0/1/2）
- 状态总数 3^9 = 19683
- dp[mask] 表示槽状态为 mask 时的最大 AND 和
- 枚举每个数，尝试放入每个未满的槽

## Solution

[SourceCode](./solution.js)
