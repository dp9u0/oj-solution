# [3795] Minimum Subarray Length With Distinct Sum At Least K

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-subarray-length-with-distinct-sum-at-least-k/description/)

* algorithms
* Medium (31.79%)
* Likes:    84
* Dislikes: 9
* Testcase Example:  '[2,2,3,1]\n4'

```md
You are given an integer array nums and an integer k.
Return the minimum length of a subarray whose sum of the distinct values present in that subarray (each value counted once) is at least k. If no such subarray exists, return -1.

Example 1:

Input: nums = [2,2,3,1], k = 4
Output: 2
Explanation:
The subarray [2, 3] has distinct elements {2, 3} whose sum is 2 + 3 = 5, which is ​​​​​​​at least k = 4. Thus, the answer is 2.

Example 2:

Input: nums = [3,2,3,4], k = 5
Output: 2
Explanation:
The subarray [3, 2] has distinct elements {3, 2} whose sum is 3 + 2 = 5, which is ​​​​​​​at least k = 5. Thus, the answer is 2.

Example 3:

Input: nums = [5,5,4], k = 5
Output: 1
Explanation:
The subarray [5] has distinct elements {5} whose sum is 5, which is at least k = 5. Thus, the answer is 1.


Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 105
1 <= k <= 109


```

## 翻译

给定整数数组 nums 和整数 k，返回一个最短子数组的长度，使得该子数组中不同值的和至少为 k。不存在则返回 -1。

## 解题思路

滑动窗口 + Map 计数：
1. 用滑动窗口维护子数组，Map 记录每个值的出现次数，维护不同值的和 distinctSum
2. 右指针扩展窗口，当某个值首次出现时加入 distinctSum
3. 当 distinctSum >= k 时，尝试收缩左指针找最短
4. 收缩时如果某个值计数变为 0，从 distinctSum 中减去

## Solution

[SourceCode](./solution.js)
