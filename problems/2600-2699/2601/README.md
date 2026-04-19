# [2601] Prime Subtraction Operation

## Description

[LeetCode Problem Description](https://leetcode.com/problems/prime-subtraction-operation/description/)

* algorithms
* Medium (55.56%)
* Likes:    941
* Dislikes: 97
* Testcase Example:  '[4,9,6,10]'

```md
You are given a 0-indexed integer array nums of length n.
You can perform the following operation as many times as you want:

Pick an index i that you haven&rsquo;t picked before, and pick a prime p strictly less than nums[i], then subtract p from nums[i].

Return true if you can make nums a strictly increasing array using the above operation and false otherwise.
A strictly increasing array is an array whose each element is strictly greater than its preceding element.

Example 1:

Input: nums = [4,9,6,10]
Output: true
Explanation: In the first operation: Pick i = 0 and p = 3, and then subtract 3 from nums[0], so that nums becomes [1,9,6,10].
In the second operation: i = 1, p = 7, subtract 7 from nums[1], so nums becomes equal to [1,2,6,10].
After the second operation, nums is sorted in strictly increasing order, so the answer is true.
Example 2:

Input: nums = [6,8,11,12]
Output: true
Explanation: Initially nums is sorted in strictly increasing order, so we don&#39;t need to make any operations.
Example 3:

Input: nums = [5,8,3]
Output: false
Explanation: It can be proven that there is no way to perform operations to make nums sorted in strictly increasing order, so the answer is false.

Constraints:

1 <= nums.length <= 1000
1 <= nums[i] <= 1000
nums.length == n


```

## 中文翻译

给定整数数组 nums，可以对每个位置选一个严格小于 nums[i] 的质数 p 并减去（每个位置最多操作一次）。判断能否使数组变成严格递增。

## 解题思路

贪心。从后往前处理，对每个 nums[i]，如果 nums[i] >= nums[i+1]，需要减去一个质数 p 使得 nums[i] - p < nums[i+1]，即 p > nums[i] - nums[i+1]，找满足条件的最小质数（让 nums[i] 尽量大以利于前面元素）。预筛质数表后二分查找。

## Solution

[SourceCode](./solution.js)
