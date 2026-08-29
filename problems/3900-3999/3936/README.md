# [3936] Minimum Swaps to Move Zeros to End

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-swaps-to-move-zeros-to-end/description/)

* algorithms
* Easy (60.46%)
* Likes:    37
* Dislikes: 1
* Testcase Example:  '[0,1,0,3,12]'

```md
You are given an integer array nums.
In one operation, you can choose any two distinct indices i and j and swap nums[i] and nums[j].
Return an integer denoting the minimum number of operations required to move all 0s to the end of the array.

Example 1:

Input: nums = [0,1,0,3,12]
Output: 2
Explanation:
We perform the following swap operations:

Swap nums[0] and nums[3], giving nums = [3, 1, 0, 0, 12].
Swap nums[2] and nums[4], giving nums = [3, 1, 12, 0, 0].

Thus, the answer is 2.

Example 2:

Input: nums = [0,1,0,2]
Output: 1
Explanation:
We perform the following swap operations:

Swap nums[0] and nums[3], giving nums = [2, 1, 0, 0].

Thus, the answer is 1.

Example 3:

Input: nums = [1,2,0]
Output: 0
Explanation:
The array already satisfies the condition. Therefore, no swap operations are needed.


Constraints:

1 <= nums.length <= 100
0 <= nums[i] <= 100


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

每次操作可交换任意两个不同下标的元素。返回把所有 0 移到数组末尾的最少操作数。

示例：`[0,1,0,3,12]` → `2`；`[0,1,0,2]` → `1`；`[1,2,0]` → `0`

## 解题思路

设 k = 0 的总数，最终 0 全部占据**末尾 k 位**。每个位于末尾 k 位中的非零元素都必须被换出，且一次交换恰好处理一个——答案 = 末尾 k 位中非零元素的个数。O(n)。
