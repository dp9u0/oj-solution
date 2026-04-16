# [2420] Find All Good Indices

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-all-good-indices/description/)

* algorithms
* Medium (40.87%)
* Likes:    679
* Dislikes: 40
* Testcase Example:  '[2,1,1,1,3,4,1]\n2'

```md
You are given a 0-indexed integer array nums of size n and a positive integer k.
We call an index i in the range k <= i < n - k good if the following conditions are satisfied:

The k elements that are just before the index i are in non-increasing order.
The k elements that are just after the index i are in non-decreasing order.

Return an array of all good indices sorted in increasing order.

Example 1:

Input: nums = [2,1,1,1,3,4,1], k = 2
Output: [2,3]
Explanation: There are two good indices in the array:
- Index 2. The subarray [2,1] is in non-increasing order, and the subarray [1,3] is in non-decreasing order.
- Index 3. The subarray [1,1] is in non-increasing order, and the subarray [3,4] is in non-decreasing order.
Note that the index 4 is not good because [4,1] is not non-decreasing.
Example 2:

Input: nums = [2,1,1,2], k = 2
Output: []
Explanation: There are no good indices in this array.


Constraints:

n == nums.length
3 <= n <= 105
1 <= nums[i] <= 106
1 <= k <= n / 2


```

## 中文翻译

给定数组 nums 和正整数 k，索引 i 是 good 的条件：前 k 个元素非递增，后 k 个元素非递减。返回所有 good 索引。

## 解题思路

预处理。left[i] 表示以 i 结尾的非递增连续长度，right[i] 表示以 i 开头的非递减连续长度。若 left[i-1] >= k 且 right[i+1] >= k，则 i 是 good 索引。

## Solution

[SourceCode](./solution.js)
