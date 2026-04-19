# [3314] Construct the Minimum Bitwise Array I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/construct-the-minimum-bitwise-array-i/description/)

* algorithms
* Easy (85.25%)
* Likes:    416
* Dislikes: 52
* Testcase Example:  '[2,3,5,7]'

```md
You are given an array nums consisting of n prime integers.
You need to construct an array ans of length n, such that, for each index i, the bitwise OR of ans[i] and ans[i] + 1 is equal to nums[i], i.e. ans[i] OR (ans[i] + 1) == nums[i].
Additionally, you must minimize each value of ans[i] in the resulting array.
If it is not possible to find such a value for ans[i] that satisfies the condition, then set ans[i] = -1.

Example 1:

Input: nums = [2,3,5,7]
Output: [-1,1,4,3]
Explanation:

For i = 0, as there is no value for ans[0] that satisfies ans[0] OR (ans[0] + 1) = 2, so ans[0] = -1.
For i = 1, the smallest ans[1] that satisfies ans[1] OR (ans[1] + 1) = 3 is 1, because 1 OR (1 + 1) = 3.
For i = 2, the smallest ans[2] that satisfies ans[2] OR (ans[2] + 1) = 5 is 4, because 4 OR (4 + 1) = 5.
For i = 3, the smallest ans[3] that satisfies ans[3] OR (ans[3] + 1) = 7 is 3, because 3 OR (3 + 1) = 7.


Example 2:

Input: nums = [11,13,31]
Output: [9,12,15]
Explanation:

For i = 0, the smallest ans[0] that satisfies ans[0] OR (ans[0] + 1) = 11 is 9, because 9 OR (9 + 1) = 11.
For i = 1, the smallest ans[1] that satisfies ans[1] OR (ans[1] + 1) = 13 is 12, because 12 OR (12 + 1) = 13.
For i = 2, the smallest ans[2] that satisfies ans[2] OR (ans[2] + 1) = 31 is 15, because 15 OR (15 + 1) = 31.



Constraints:

1 <= nums.length <= 100
2 <= nums[i] <= 1000
nums[i] is a prime number.


```

## Solution

[SourceCode](./solution.js)

## 中文翻译

给定由 n 个质数组成的数组 `nums`，构造长度为 n 的数组 `ans`，使得对每个 i，`ans[i] | (ans[i] + 1) == nums[i]`。同时要求最小化每个 `ans[i]`。若不存在满足条件的值，则设为 -1。

**示例 1：** nums = [2,3,5,7] → [-1,1,4,3]
**示例 2：** nums = [11,13,31] → [9,12,15]

**约束：** 1 <= nums.length <= 100, 2 <= nums[i] <= 1000, nums[i] 为质数

## Approach

位运算推导。x | (x+1) 的含义：x+1 会将 x 最低位的连续 1 变为 0，并在更高位进 1。OR 后的结果是将 x 最低位的连续 1 区域全部变为 1。

反过来：给定结果 n，找最小的 x 使得 x | (x+1) = n。
- 找到 n 中最低位的连续 1 区域（从最低位开始）
- 将该区域最高位的 1 变为 0 即可得到 x
- 特殊情况：如果 n 的最低位是 0（如 n=2），则 x | (x+1) 的最低位必然是 1，不可能等于 n，返回 -1

具体实现：找到 n 中最低位的 0，将比它低的所有连续 1 中最高位清零。

时间复杂度 O(1) per element，空间复杂度 O(1)。
