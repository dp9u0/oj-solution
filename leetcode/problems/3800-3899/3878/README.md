# [3878] Count Good Subarrays

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-good-subarrays/description/)

* algorithms
* Hard (24.16%)
* Likes:    76
* Dislikes: 2
* Testcase Example:  '[4,2,3]'

```md
You are given an integer array nums.
A subarray is called good if the bitwise OR of all its elements is equal to at least one element present in that subarray.
Return the number of good subarrays in nums.
Here, the bitwise OR of two integers a and b is denoted by a
b.

Example 1:

Input: nums = [4,2,3]
Output: 4
Explanation:
The subarrays of nums are:



Subarray
Bitwise OR
Present in Subarray


[4]
4 = 4
Yes


[2]
2 = 2
Yes


[3]
3 = 3
Yes


[4, 2]
4
2 = 6
No


[2, 3]
2
3 = 3
Yes


[4, 2, 3]
4
2
3 = 7
No



Thus, the good subarrays of nums are [4], [2], [3] and [2, 3]. Thus, the answer is 4.

Example 2:

Input: nums = [1,3,1]
Output: 6
Explanation:
Any subarray of nums containing 3 has bitwise OR equal to 3, and subarrays containing only 1 have bitwise OR equal to 1.
In both cases, the result is present in the subarray, so all subarrays are good, and the answer is 6.


Constraints:

1 <= nums.length <= 105
0 <= nums[i] <= 109


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

给定整数数组 nums，如果一个子数组所有元素的按位 OR 等于该子数组中某个元素的值，则称为"好子数组"。返回好子数组的个数。

## 解题思路

从右往左处理，用标准 OR 分组技巧：对每个起始位置 i，维护至多 30 个 (OR值, 范围起点) 对。对每组检查该 OR 值是否出现在子数组中：用 val→positions 哈希表预处理，二分查找第一个 >=i 的位置 p，若 p <= 范围终点则贡献 hi-max(lo,p)+1 个好子数组。总复杂度 O(n * 30)。
