# [3691] Maximum Total Subarray Value II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-total-subarray-value-ii/description/)

* algorithms
* Hard (22.29%)
* Likes:    81
* Dislikes: 4
* Testcase Example:  '[1,3,2]\n2'

```md
You are given an integer array nums of length n and an integer k.
You must select exactly k distinct non-empty subarrays nums[l..r] of nums. Subarrays may overlap, but the exact same subarray (same l and r) cannot be chosen more than once.
The value of a subarray nums[l..r] is defined as: max(nums[l..r]) - min(nums[l..r]).
The total value is the sum of the values of all chosen subarrays.
Return the maximum possible total value you can achieve.

Example 1:

Input: nums = [1,3,2], k = 2
Output: 4
Explanation:
One optimal approach is:

Choose nums[0..1] = [1, 3]. The maximum is 3 and the minimum is 1, giving a value of 3 - 1 = 2.
Choose nums[0..2] = [1, 3, 2]. The maximum is still 3 and the minimum is still 1, so the value is also 3 - 1 = 2.

Adding these gives 2 + 2 = 4.

Example 2:

Input: nums = [4,2,5,1], k = 3
Output: 12
Explanation:
One optimal approach is:

Choose nums[0..3] = [4, 2, 5, 1]. The maximum is 5 and the minimum is 1, giving a value of 5 - 1 = 4.
Choose nums[1..3] = [2, 5, 1]. The maximum is 5 and the minimum is 1, so the value is also 4.
Choose nums[2..3] = [5, 1]. The maximum is 5 and the minimum is 1, so the value is again 4.

Adding these gives 4 + 4 + 4 = 12.


Constraints:

1 <= n == nums.length <= 5 * 10​​​​​​​4
0 <= nums[i] <= 109
1 <= k <= min(105, n * (n + 1) / 2)


```

## 题目翻译

给定数组 nums 和整数 k。选 k 个不同子数组，每个子数组值 = max - min，求最大总值。

## 解题思路

**RMQ + 最大堆合并有序序列**

核心观察：对固定 r，range(l, r) 随 l 增大而单调不增。因此 n 个序列（每个 r 对应一个）各自有序。

用最大堆合并这 n 个有序序列：
1. 初始：对每个 r，push range(0, r)
2. 每次弹出最大值，再 push range(l+1, r)（同一 r 的下一个）
3. 重复 k 次

用 Sparse Table 实现 O(1) 区间最大/最小查询。总时间 O((n+k) log n)。

## Solution

[SourceCode](./solution.js)
