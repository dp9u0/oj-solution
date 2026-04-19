# [1887] Reduction Operations to Make the Array Elements Equal

## Description

[LeetCode Problem Description](https://leetcode.com/problems/reduction-operations-to-make-the-array-elements-equal/description/)

* algorithms
* Medium (72.54%)
* Likes:    1278
* Dislikes: 52
* Testcase Example:  '[5,1,3]'

```md
Given an integer array nums, your goal is to make all elements in nums equal. To complete one operation, follow these steps:

Find the largest value in nums. Let its index be i (0-indexed) and its value be largest. If there are multiple elements with the largest value, pick the smallest i.
Find the next largest value in nums strictly smaller than largest. Let its value be nextLargest.
Reduce nums[i] to nextLargest.

Return the number of operations to make all elements in nums equal.

Example 1:

Input: nums = [5,1,3]
Output: 3
Explanation:It takes 3 operations to make all elements in nums equal:
1. largest = 5 at index 0. nextLargest = 3. Reduce nums[0] to 3. nums = [3,1,3].
2. largest = 3 at index 0. nextLargest = 1. Reduce nums[0] to 1. nums = [1,1,3].
3. largest = 3 at index 2. nextLargest = 1. Reduce nums[2] to 1. nums = [1,1,1].

Example 2:

Input: nums = [1,1,1]
Output: 0
Explanation:All elements in nums are already equal.

Example 3:

Input: nums = [1,1,2,2,3]
Output: 4
Explanation:It takes 4 operations to make all elements in nums equal:
1. largest = 3 at index 4. nextLargest = 2. Reduce nums[4] to 2. nums = [1,1,2,2,2].
2. largest = 2 at index 2. nextLargest = 1. Reduce nums[2] to 1. nums = [1,1,1,2,2].
3. largest = 2 at index 3. nextLargest = 1. Reduce nums[3] to 1. nums = [1,1,1,1,2].
4. largest = 2 at index 4. nextLargest = 1. Reduce nums[4] to 1. nums = [1,1,1,1,1].


Constraints:

1 <= nums.length <= 5 * 104
1 <= nums[i] <= 5 * 104


```

## 题目翻译

给定一个整数数组 `nums`，目标是使所有元素相等。每次操作：
1. 找到最大值（如有多个取最小下标 i）
2. 找到严格小于最大值的次大值 nextLargest
3. 将 nums[i] 减为 nextLargest

返回使所有元素相等所需的操作次数。

**示例 1：** nums = [5,1,3] → 输出 3
**示例 2：** nums = [1,1,1] → 输出 0
**示例 3：** nums = [1,1,2,2,3] → 输出 4

**约束：**
- 1 <= nums.length <= 5 * 10^4
- 1 <= nums[i] <= 5 * 10^4

## 解题思路 (Approach)

排序后，从大到小遍历。对于每个不同的值层级，需要将其所有元素降到下一层级。将数组升序排序，统计每个值的频率。对于第 i 个不同值（从最小值开始为第 0 层），它需要被降低 i 次。答案 = sum(频率[i] * i)，其中 i 是从最小值开始的层级编号。

等价地：排序后，每遇到一个与后一个不同的元素，就意味着从该位置到末尾的所有元素都需要额外一次操作。

时间复杂度：O(n log n)，空间复杂度：O(1)。

## Solution

[SourceCode](./solution.js)
