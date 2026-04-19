# [918] Maximum Sum Circular Subarray

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-sum-circular-subarray/description/)

* algorithms
* Medium (49.83%)
* Likes:    7330
* Dislikes: 346
* Testcase Example:  '[1,-2,3,-2]'

```md
Given a circular integer array nums of length n, return the maximum possible sum of a non-empty subarray of nums.
A circular array means the end of the array connects to the beginning of the array. Formally, the next element of nums[i] is nums[(i + 1) % n] and the previous element of nums[i] is nums[(i - 1 + n) % n].
A subarray may only include each element of the fixed buffer nums at most once. Formally, for a subarray nums[i], nums[i + 1], ..., nums[j], there does not exist i <= k1, k2 <= j with k1 % n == k2 % n.

Example 1:

Input: nums = [1,-2,3,-2]
Output: 3
Explanation: Subarray [3] has maximum sum 3.

Example 2:

Input: nums = [5,-3,5]
Output: 10
Explanation: Subarray [5,5] has maximum sum 5 + 5 = 10.

Example 3:

Input: nums = [-3,-2,-3]
Output: -2
Explanation: Subarray [-2] has maximum sum -2.


Constraints:

n == nums.length
1 <= n <= 3 * 104
-3 * 104 <= nums[i] <= 3 * 104


```

## 翻译

给定一个环形整数数组 `nums`，返回非空子数组的最大可能和。环形数组意味着数组末尾与开头相连，但子数组中每个元素最多出现一次。

## Approach

两种情况取最大值：
1. **非跨环**：普通 Kadane 算法求最大子数组和 `maxSum`
2. **跨环**：最大和 = 总和 - 最小子数组和 `minSum`（等价于去掉中间最小的部分，取两头的）

特殊情况：如果所有数都为负，`totalSum - minSum = 0`（空子数组），此时应返回 `maxSum`。

时间复杂度 O(n)，空间复杂度 O(1)。

## Solution

[SourceCode](./solution.js)
