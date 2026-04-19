# [2855] Minimum Right Shifts to Sort the Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-right-shifts-to-sort-the-array/description/)

* algorithms
* Easy (57.35%)
* Likes:    247
* Dislikes: 12
* Testcase Example:  '[3,4,5,1,2]'

```md
You are given a 0-indexed array nums of length n containing distinct positive integers. Return the minimum number of right shifts required to sort nums and -1 if this is not possible.
A right shift is defined as shifting the element at index i to index (i + 1) % n, for all indices.

Example 1:

Input: nums = [3,4,5,1,2]
Output: 2
Explanation:
After the first right shift, nums = [2,3,4,5,1].
After the second right shift, nums = [1,2,3,4,5].
Now nums is sorted; therefore the answer is 2.

Example 2:

Input: nums = [1,3,5]
Output: 0
Explanation: nums is already sorted therefore, the answer is 0.
Example 3:

Input: nums = [2,1,4]
Output: -1
Explanation: It&#39;s impossible to sort the array using right shifts.


Constraints:

1 <= nums.length <= 100
1 <= nums[i] <= 100
nums contains distinct integers.


```

## Solution

[SourceCode](./solution.js)

## 中文翻译

给定一个 0-indexed 长度为 n 的数组 `nums`，包含不同的正整数。返回使数组排序所需的最小右移次数，如果不可能则返回 -1。

右移定义为将索引 i 处的元素移动到索引 (i + 1) % n。

**示例 1：** nums = [3,4,5,1,2] → 2（右移2次后变为 [1,2,3,4,5]）
**示例 2：** nums = [1,3,5] → 0（已排序）
**示例 3：** nums = [2,1,4] → -1（无法通过右移排序）

**约束：** 1 <= nums.length <= 100, 元素互不相同

## Approach

找到数组中"断点"的位置，即 nums[i] > nums[i+1] 的位置。旋转排序的数组最多只有一个断点。

- 遍历数组统计 nums[i] > nums[(i+1) % n] 的次数
- 如果断点数 > 1，返回 -1（不可能通过右移排序）
- 如果断点数 == 0，返回 0（已排序）
- 如果断点数 == 1，设断点在位置 i，则需要右移 n - 1 - i 次

时间复杂度 O(n)，空间复杂度 O(1)。
