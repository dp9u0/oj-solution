# [3397] Maximum Number of Distinct Elements After Operations

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-number-of-distinct-elements-after-operations/description/)

* algorithms
* Medium (52.24%)
* Likes:    562
* Dislikes: 21
* Testcase Example:  '[1,2,2,3,3,4]\n2'

```md
You are given an integer array nums and an integer k.
You are allowed to perform the following operation on each element of the array at most once:

Add an integer in the range [-k, k] to the element.

Return the maximum possible number of distinct elements in nums after performing the operations.

Example 1:

Input: nums = [1,2,2,3,3,4], k = 2
Output: 6
Explanation:
nums changes to [-1, 0, 1, 2, 3, 4] after performing operations on the first four elements.

Example 2:

Input: nums = [4,4,4,4], k = 1
Output: 3
Explanation:
By adding -1 to nums[0] and 1 to nums[1], nums changes to [3, 5, 4, 4].


Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 109
0 <= k <= 109


```

## Solution

[SourceCode](./solution.js)

---

### 题目翻译

给定一个整数数组 `nums` 和一个整数 `k`。你可以对数组中的每个元素最多执行一次以下操作：给该元素加上 `[-k, k]` 范围内的一个整数。返回操作后数组中最多可能有多少个不同的元素。

### 解题思路

**排序 + 贪心**

1. 将数组升序排序
2. 用 `target` 记录下一个可用的最小目标值（初始为 `-Infinity`）
3. 遍历排序后的数组，对每个元素 `nums[i]`，其可变为的范围是 `[nums[i] - k, nums[i] + k]`
4. 贪心选择 `candidate = max(target, nums[i] - k)`，如果 `candidate <= nums[i] + k`，则选中该值，`target = candidate + 1`
5. 最终统计选中的不同元素个数
