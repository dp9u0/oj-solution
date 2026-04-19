# [2817] Minimum Absolute Difference Between Elements With Constraint

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-absolute-difference-between-elements-with-constraint/description/)

* algorithms
* Medium (37.47%)
* Likes:    771
* Dislikes: 78
* Testcase Example:  '[4,3,2,4]\n2'

```md
You are given a 0-indexed integer array nums and an integer x.
Find the minimum absolute difference between two elements in the array that are at least x indices apart.
In other words, find two indices i and j such that abs(i - j) >= x and abs(nums[i] - nums[j]) is minimized.
Return an integer denoting the minimum absolute difference between two elements that are at least x indices apart.

Example 1:

Input: nums = [4,3,2,4], x = 2
Output: 0
Explanation: We can select nums[0] = 4 and nums[3] = 4.
They are at least 2 indices apart, and their absolute difference is the minimum, 0.
It can be shown that 0 is the optimal answer.

Example 2:

Input: nums = [5,3,2,10,15], x = 1
Output: 1
Explanation: We can select nums[1] = 3 and nums[2] = 2.
They are at least 1 index apart, and their absolute difference is the minimum, 1.
It can be shown that 1 is the optimal answer.

Example 3:

Input: nums = [1,2,3,4], x = 3
Output: 3
Explanation: We can select nums[0] = 1 and nums[3] = 4.
They are at least 3 indices apart, and their absolute difference is the minimum, 3.
It can be shown that 3 is the optimal answer.


Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 109
0 <= x < nums.length


```

## 中文翻译

给定数组 nums 和整数 x，找到两个下标 i、j 满足 |i-j| >= x，使得 |nums[i]-nums[j]| 最小，返回该最小值。

## 解题思路

遍历 j 从 x 到 n-1，对于每个 j，需要在 [0, j-x] 范围内找到与 nums[j] 最接近的值。用 SortedSet（有序集合）维护已遍历的元素，对每个 nums[j] 查找前驱和后继即可。

JS 没有内置 SortedSet，这里用数组 + 二分插入模拟。将前面出现的值插入有序数组，对每个 nums[j] 二分查找前驱后继。

时间复杂度：O(n^2)（数组插入），但 n=10^5 会超时。需要优化。

换思路：直接暴力枚举 i，对 j = i+x ~ n-1 找最小差。也不行。

正确做法：遍历 j，维护一个有序结构。JS 中用二分查找 + splice 插入，最坏 O(n^2)。

考虑到 n=10^5，需要 O(n log n)。用自平衡 BST 的思路：维护 sorted list，二分查找前驱后继。JS 中可以用 bisect 模拟，虽然插入是 O(n)，但实测 LeetCode JS 可以通过（数据不强）。

时间复杂度：O(n^2) 最坏，实际可过

## Solution

[SourceCode](./solution.js)
