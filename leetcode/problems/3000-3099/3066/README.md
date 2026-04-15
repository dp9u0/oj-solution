# [3066] Minimum Operations to Exceed Threshold Value II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-ii/description/)

* algorithms
* Medium (45.83%)
* Likes:    634
* Dislikes: 70
* Testcase Example:  '[2,11,10,1,3]\n10'

```md
You are given a 0-indexed integer array nums, and an integer k.
You are allowed to perform some operations on nums, where in a single operation, you can:

Select the two smallest integers x and y from nums.
Remove x and y from nums.
Insert (min(x, y) * 2 + max(x, y)) at any position in the array.

Note that you can only apply the described operation if nums contains at least two elements.
Return the minimum number of operations needed so that all elements of the array are greater than or equal to k.

Example 1:

Input: nums = [2,11,10,1,3], k = 10
Output: 2
Explanation:

In the first operation, we remove elements 1 and 2, then add 1 * 2 + 2 to nums. nums becomes equal to [4, 11, 10, 3].
In the second operation, we remove elements 3 and 4, then add 3 * 2 + 4 to nums. nums becomes equal to [10, 11, 10].

At this stage, all the elements of nums are greater than or equal to 10 so we can stop.
It can be shown that 2 is the minimum number of operations needed so that all elements of the array are greater than or equal to 10.

Example 2:

Input: nums = [1,1,2,4,9], k = 20
Output: 4
Explanation:

After one operation, nums becomes equal to [2, 4, 9, 3].
After two operations, nums becomes equal to [7, 4, 9].
After three operations, nums becomes equal to [15, 9].
After four operations, nums becomes equal to [33].

At this stage, all the elements of nums are greater than 20 so we can stop.
It can be shown that 4 is the minimum number of operations needed so that all elements of the array are greater than or equal to 20.


Constraints:

2 <= nums.length <= 2 * 105
1 <= nums[i] <= 109
1 <= k <= 109
The input is generated such that an answer always exists. That is, after performing some number of operations, all elements of the array are greater than or equal to k.


```

## 中文翻译

给定数组 nums 和整数 k。每次操作取两个最小元素 x、y，移除后插入 min(x,y)*2+max(x,y)。返回使所有元素 ≥ k 的最少操作次数。

## 解题思路

最小堆（优先队列）。将所有元素放入最小堆，每次弹出两个最小值，合并后放回堆中，直到堆顶元素 ≥ k。

时间复杂度：O(n log n)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
