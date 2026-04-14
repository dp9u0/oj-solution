# [2134] Minimum Swaps to Group All 1's Together II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together-ii/description/)

* algorithms
* Medium (65.64%)
* Likes:    2089
* Dislikes: 43
* Testcase Example:  '[0,1,0,1,1,0,0]'

```md
A swap is defined as taking two distinct positions in an array and swapping the values in them.
A circular array is defined as an array where we consider the first element and the last element to be adjacent.
Given a binary circular array nums, return the minimum number of swaps required to group all 1&#39;s present in the array together at any location.

Example 1:

Input: nums = [0,1,0,1,1,0,0]
Output: 1
Explanation: Here are a few of the ways to group all the 1&#39;s together:
[0,0,1,1,1,0,0] using 1 swap.
[0,1,1,1,0,0,0] using 1 swap.
[1,1,0,0,0,0,1] using 2 swaps (using the circular property of the array).
There is no way to group all 1&#39;s together with 0 swaps.
Thus, the minimum number of swaps required is 1.

Example 2:

Input: nums = [0,1,1,1,0,0,1,1,0]
Output: 2
Explanation: Here are a few of the ways to group all the 1&#39;s together:
[1,1,1,0,0,0,0,1,1] using 2 swaps (using the circular property of the array).
[1,1,1,1,1,0,0,0,0] using 2 swaps.
There is no way to group all 1&#39;s together with 0 or 1 swaps.
Thus, the minimum number of swaps required is 2.

Example 3:

Input: nums = [1,1,0,0,1]
Output: 0
Explanation: All the 1&#39;s are already grouped together due to the circular property of the array.
Thus, the minimum number of swaps required is 0.


Constraints:

1 <= nums.length <= 105
nums[i] is either 0 or 1.


```

## 翻译

给定 0-1 循环数组 nums，求最少的交换次数使得所有 1 聚在一起（利用循环性质，首尾相连）。

## Approach

滑动窗口。统计 1 的总数 totalOnes。在循环数组上找一个长度为 totalOnes 的窗口，使其包含最多 1（即最少 0）。交换次数 = 窗口内的 0 的个数 = totalOnes - 窗口内 1 的个数。

将数组扩展为 2*n，滑动窗口长度为 totalOnes。

时间复杂度 O(n)，空间复杂度 O(1)。

## Solution

[SourceCode](./solution.js)
