# [3739] Count Subarrays With Majority Element II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-subarrays-with-majority-element-ii/description/)

* algorithms
* Hard (45.14%)
* Likes:    64
* Dislikes: 3
* Testcase Example:  '[1,2,2,3]\n2'

```md
You are given an integer array nums and an integer target.
Return the number of subarrays of nums in which target is the majority element.
The majority element of a subarray is the element that appears strictly more than half of the times in that subarray.

Example 1:

Input: nums = [1,2,2,3], target = 2
Output: 5
Explanation:
Valid subarrays with target = 2 as the majority element:

nums[1..1] = [2]
nums[2..2] = [2]
nums[1..2] = [2,2]
nums[0..2] = [1,2,2]
nums[1..3] = [2,2,3]

So there are 5 such subarrays.

Example 2:

Input: nums = [1,1,1,1], target = 1
Output: 10
Explanation:
​​​​​​​All 10 subarrays have 1 as the majority element.

Example 3:

Input: nums = [1,2,3], target = 4
Output: 0
Explanation:
target = 4 does not appear in nums at all. Therefore, there cannot be any subarray where 4 is the majority element. Hence the answer is 0.


Constraints:

1 <= nums.length <= 10​​​​​​​5
1 <= nums[i] <= 10​​​​​​​9
1 <= target <= 109


```

## 题目翻译

给定数组 nums 和目标值 target，统计 target 作为多数元素（出现次数严格超过子数组长度一半）的子数组个数。

## 解题思路

**前缀和 + 树状数组/有序集合**

将 target 记为 +1，其他记为 -1，前缀和 prefix[i]。子数组 [l,r] 满足条件等价于 prefix[r+1] - prefix[l] > 0，即 prefix[r+1] > prefix[l]。遍历右端点 r+1，统计之前有多少个 prefix[l] < prefix[r+1]。用树状数组或有序集合维护。将所有前缀和离散化后用 BIT 统计。O(n log n) 时间。

## Solution

[SourceCode](./solution.js)
