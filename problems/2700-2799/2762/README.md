# [2762] Continuous Subarrays

## Description

[LeetCode Problem Description](https://leetcode.com/problems/continuous-subarrays/description/)

* algorithms
* Medium (57.95%)
* Likes:    1503
* Dislikes: 97
* Testcase Example:  '[5,4,2,4]'

```md
You are given a 0-indexed integer array nums. A subarray of nums is called continuous if:

Let i, i + 1, ..., j be the indices in the subarray. Then, for each pair of indices i <= i1, i2 <= j, 0 <=
nums[i1] - nums[i2]
<= 2.

Return the total number of continuous subarrays.
A subarray is a contiguous non-empty sequence of elements within an array.

Example 1:

Input: nums = [5,4,2,4]
Output: 8
Explanation:
Continuous subarray of size 1: [5], [4], [2], [4].
Continuous subarray of size 2: [5,4], [4,2], [2,4].
Continuous subarray of size 3: [4,2,4].
There are no subarrys of size 4.
Total continuous subarrays = 4 + 3 + 1 = 8.
It can be shown that there are no more continuous subarrays.


Example 2:

Input: nums = [1,2,3]
Output: 6
Explanation:
Continuous subarray of size 1: [1], [2], [3].
Continuous subarray of size 2: [1,2], [2,3].
Continuous subarray of size 3: [1,2,3].
Total continuous subarrays = 3 + 2 + 1 = 6.


Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 109


```

## 题目翻译

给定数组 nums，统计满足 max - min <= 2 的子数组个数。

## 解题思路

滑动窗口 + 单调双端队列。维护递减队列（最大值）和递增队列（最小值），当 max - min > 2 时收缩左边界。对每个右端点，以它结尾的合法子数组数为 right - left + 1。

时间复杂度 O(n)

## Solution

[SourceCode](./solution.js)
