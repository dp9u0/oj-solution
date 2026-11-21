# [2263] 数组变为有序的最小操作次数

## Description


```md
https://leetcode.cn/problems/make-array-non-decreasing-or-non-increasing/description/
* algorithms
* Hard (60.06%)
* Likes:    8
* Dislikes: -
* Testcase Example:  '[3,2,4,5,0]'
给你一个下标从 0 开始的整数数组 nums 。在一步操作中，你可以：
在范围 0 <= i < nums.length 内选出一个下标 i
将 nums[i] 的值变为 nums[i] + 1 或 nums[i] - 1
返回将数组 nums 变为 非递减 或 非递增 所需的 最小 操作次数。

示例 1：
输入：nums = [3,2,4,5,0]
输出：4
解释：
一种可行的操作顺序，能够将 nums 变为非递增排列：
- nums[1] 加 1 一次，使其变为 3 。
- nums[2] 减 1 一次，使其变为 3 。
- nums[3] 减 1 两次，使其变为 3 。
经过 4 次操作后，nums 变为 [3,3,3,3,0] ，按非递增顺序排列。
注意，也可以用 4 步操作将 nums 变为 [4,4,4,4,0] ，同样满足题目要求。
可以证明最少需要 4 步操作才能将数组变为非递增或非递减排列。
示例 2：
输入：nums = [2,2,3,4]
输出：0
解释：数组已经是按非递减顺序排列了，无需执行任何操作，返回 0 。
示例 3：
输入：nums = [0]
输出：0
解释：数组已经是按非递减顺序排列了，无需执行任何操作，返回 0 。

提示：
1 <= nums.length <= 1000
0 <= nums[i] <= 1000

进阶：你可以设计并实现时间复杂度为 O(n*log(n)) 的解法吗?
Hint 1: To find the minimum cost to make nums non-decreasing, use a max heap that contains all of the elements that you have seen so far.
Hint 2: If the largest number in the heap is greater than the current number, calculate the cost to make the two numbers equal. Then, in the heap, replace the largest number with the current number.
Hint 3: Now that we have found the minimum cost to make nums non-decreasing, we can set every nums[i] to -nums[i] and do the same process to find the minimum cost to make nums non-increasing.

```

## Solution

[SourceCode](./solution.js)

## English Translation

In one operation you may increment or decrement a single element by 1. Return the minimum operations to make `nums` non-decreasing or non-increasing.

Example 1:
Input: nums = [3,2,4,5,0]
Output: 4

Example 2:
Input: nums = [2,2,3,4]
Output: 0

Example 3:
Input: nums = [0]
Output: 0

Constraints: 1 <= nums.length <= 1000, 0 <= nums[i] <= 1000.

## Approach

Slope-trick greedy for the non-decreasing case: sweep left to right keeping a max-heap of processed (adjusted) values; for each x push x, and while the heap top exceeds x, pay (top - x) and replace the top with x (lowering the earlier maximum to x is always optimal and preserves future constraints). Run the same sweep on the negated array for non-increasing; answer is the minimum of the two costs. O(n log n).

Verified on example 1: non-decreasing cost 6, non-increasing cost 4 -> 4.
