# [456] 132 Pattern

## Description

[LeetCode Problem Description](https://leetcode.com/problems/132-pattern/description/)

* algorithms
* Medium (34.66%)
* Likes:    7631
* Dislikes: 472
* Testcase Example:  '[1,2,3,4]'

```md
Given an array of n integers nums, a 132 pattern is a subsequence of three integers nums[i], nums[j] and nums[k] such that i < j < k and nums[i] < nums[k] < nums[j].
Return true if there is a 132 pattern in nums, otherwise, return false.

Example 1:

Input: nums = [1,2,3,4]
Output: false
Explanation: There is no 132 pattern in the sequence.

Example 2:

Input: nums = [3,1,4,2]
Output: true
Explanation: There is a 132 pattern in the sequence: [1, 4, 2].

Example 3:

Input: nums = [-1,3,2,0]
Output: true
Explanation: There are three 132 patterns in the sequence: [-1, 3, 2], [-1, 3, 0] and [-1, 2, 0].


Constraints:

n == nums.length
1 <= n <= 2 * 105
-109 <= nums[i] <= 109


```

## 翻译

给定整数数组 `nums`，132 模式是三个整数的子序列 `nums[i], nums[j], nums[k]`，满足 `i < j < k` 且 `nums[i] < nums[k] < nums[j]`。判断数组中是否存在 132 模式。

## Approach

**单调栈（从右向左）。** 从右向左遍历，维护一个递减栈。用变量 `second` 记录候选的 `nums[k]`（即比某个大数小的最大值）。

遍历每个元素 `nums[i]`：
- 如果 `nums[i] < second`，找到了 132 模式（`nums[i]` 作为最小的 `nums[i]`），返回 true
- 否则，将栈中所有小于 `nums[i]` 的元素弹出，最后一个弹出的就是最大的 `second`
- 将 `nums[i]` 入栈

时间复杂度：O(n)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
