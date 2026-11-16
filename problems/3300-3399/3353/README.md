# [3353] 最小总操作数

## Description


```md
https://leetcode.cn/problems/minimum-total-operations/description/
* algorithms
* Easy (28.25%)
* Likes:    2
* Dislikes: -
* Testcase Example:  '[1,4,2]'
给定一个整数数组 nums，你可以在这个数组上进行 任意 次操作。
在每次 操作 中，你可以：
选择这个数组的一个 前缀。
选择一个整数 k（可以为负）并且对选中前缀的每一个元素加 k。
数组的 前缀 是一个子数组，从数组的开头开始并延伸到数组内的任何位置。
返回使 arr 中的所有元素都相等的 最小 操作数。

示例 1：
输入：nums = [1,4,2]
输出：2
解释：
操作 1：选择长度为 2 的前缀 [1, 4] 并且对其中的所有元素加 -2。数组变为 [-1, 2, 2]。
操作 2：选择长度为 1 的前缀 [-1] 并且对其中的所有元素加 3。数组变为 [2, 2, 2]。
因此，所需的最小操作数为 2。
示例 2：
输入：nums = [10,10,10]
输出：0
解释：
所有元素已经相等，所以不需要操作。

提示：
1 <= nums.length <= 105
-109 <= nums[i] <= 109
Hint 1: Would you ever change the last element of the array?

```

## Solution

[SourceCode](./solution.js)

## Description (English)

You are given an integer array `nums`. In one operation, you choose a prefix of the array and an integer `k` (possibly negative), and add `k` to every element of the chosen prefix. Return the minimum number of operations to make all elements equal.

**Example 1:**
Input: nums = [1,4,2]
Output: 2

**Example 2:**
Input: nums = [10,10,10]
Output: 0

**Constraints:**
- 1 <= nums.length <= 10^5
- -10^9 <= nums[i] <= 10^9

## Approach

最后一个元素永远不必修改,它是天然基准。位置 i 的终值由所有"前缀终点 ≥ i"的操作共同影响;要使所有元素相等,相邻差 `d_i = nums[i+1] - nums[i]` 必须恰由"终点为 i"的操作净增量 `k_i` 提供。因此每个 `nums[i] != nums[i+1]` 的位置至少需要一次操作,且一次即够(取 `k_i = d_i`)。

最小操作数 = 相邻不等的位置个数。

时间 O(n),空间 O(1)。
