# [376] Wiggle Subsequence

## Description

[LeetCode Problem Description](https://leetcode.com/problems/wiggle-subsequence/description/)

* algorithms
* Medium (49.34%)
* Testcase Example:  '[1,7,4,9,2,5]'

```md
A wiggle sequence is a sequence where the differences between successive numbers strictly alternate between positive and negative. The first difference (if one exists) may be either positive or negative. A sequence with one element and a sequence with two non-equal elements are trivially wiggle sequences.
For example, [1, 7, 4, 9, 2, 5] is a wiggle sequence because the differences (6, -3, 5, -7, 3) alternate between positive and negative.
In contrast, [1, 4, 7, 2, 5] and [1, 7, 4, 5, 5] are not wiggle sequences. The first is not because its first two differences are positive, and the second is not because its last difference is zero.
A subsequence is obtained by deleting some elements (possibly zero) from the original sequence, leaving the remaining elements in their original order.
Given an integer array nums, return the length of the longest wiggle subsequence of nums.

Example 1:
Input: nums = [1,7,4,9,2,5]
Output: 6
Explanation: The entire sequence is a wiggle sequence with differences (6, -3, 5, -7, 3).
Example 2:
Input: nums = [1,17,5,10,13,15,10,5,16,8]
Output: 7
Explanation: There are several subsequences that achieve this length.
One is [1, 17, 10, 13, 10, 16, 8] with differences (16, -7, 3, -3, 6, -8).
Example 3:
Input: nums = [1,2,3,4,5,6,7,8,9]
Output: 2

Constraints:
1
0

Follow up: Could you solve this in O(n) time?

```

## Solution

[SourceCode](./solution.js)

### 题目描述 (翻译)
如果连续数字之间的差严格在正数和负数之间交替，则这样的序列称为摆动序列 (wiggle sequence)。第一个差（如果有）可以是正数或负数。少于两个元素的序列也是摆动序列（如果只有两个元素且不相等，也算）。
给定一个整数数组 `nums`，返回 `nums` 的最长摆动子序列的长度。
可以通过删除原序列中的一些元素（可能不删除）来获得子序列。

示例 1:
输入: nums = [1,7,4,9,2,5]
输出: 6
解释: 整个序列就是一个摆动序列。

示例 2:
输入: nums = [1,17,5,10,13,15,10,5,16,8]
输出: 7

示例 3:
输入: nums = [1,2,3,4,5,6,7,8,9]
输出: 2

约束:
1 <= nums.length <= 1000
0 <= nums[i] <= 1000
进阶：你能在 O(n) 时间内解决吗？

### 解题思路 (Approach)
这是一道贪心或动态规划题。
我们可以维护两个变量：
`up`: 到当前元素为止，最后一段是上升的摆动子序列的最大长度。
`down`: 到当前元素为止，最后一段是下降的摆动子序列的最大长度。
初始时 `up = 1`, `down = 1`。

遍历数组从 1 到 n-1：
- 如果 `nums[i] > nums[i-1]`：意味着在它之前如果有一个下降的序列，加上当前这个上升元素，就能组成一个更长的结尾为上升的摆动序列。因此 `up = down + 1`。
- 如果 `nums[i] < nums[i-1]`：意味着在它之前如果有一个上升的序列，加上当前这个下降元素，就能组成一个更长的结尾为下降的摆动序列。因此 `down = up + 1`。
- 如果 `nums[i] == nums[i-1]`：当前元素不会对摆动序列长度产生贡献，`up` 和 `down` 保持不变。

最后返回 `max(up, down)`。由于状态只依赖于前一个状态，空间复杂度是 O(1)，时间复杂度是 O(n)。
