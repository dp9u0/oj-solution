# [3427] Sum of Variable Length Subarrays

## Description

[LeetCode Problem Description](https://leetcode.com/problems/sum-of-variable-length-subarrays/description/)

* algorithms
* Easy (85.54%)
* Likes:    113
* Dislikes: 32
* Testcase Example:  '[2,3,1]'

```md
You are given an integer array nums of size n. For each index i where 0 <= i < n, define a subarray nums[start ... i] where start = max(0, i - nums[i]).
Return the total sum of all elements from the subarray defined for each index in the array.

Example 1:

Input: nums = [2,3,1]
Output: 11
Explanation:



i
Subarray
Sum


0
nums[0] = [2]
2


1
nums[0 ... 1] = [2, 3]
5


2
nums[1 ... 2] = [3, 1]
4


Total Sum

11



The total sum is 11. Hence, 11 is the output.

Example 2:

Input: nums = [3,1,1,2]
Output: 13
Explanation:



i
Subarray
Sum


0
nums[0] = [3]
3


1
nums[0 ... 1] = [3, 1]
4


2
nums[1 ... 2] = [1, 1]
2


3
nums[1 ... 3] = [1, 1, 2]
4


Total Sum

13



The total sum is 13. Hence, 13 is the output.


Constraints:

1 <= n == nums.length <= 100
1 <= nums[i] <= 1000


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

对每个下标 i，定义子数组 nums[start...i]，其中 start = max(0, i - nums[i])。返回所有子数组元素之和。

## 解题思路

用前缀和优化。先求 prefixSum，对每个 i，子数组和 = prefixSum[i+1] - prefixSum[start]。O(n)。
