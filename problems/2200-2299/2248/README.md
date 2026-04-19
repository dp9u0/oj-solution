# [2248] Intersection of Multiple Arrays

## Description

[LeetCode Problem Description](https://leetcode.com/problems/intersection-of-multiple-arrays/description/)

* algorithms
* Easy (68.65%)
* Likes:    807
* Dislikes: 44
* Testcase Example:  '[[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]'

```md
Given a 2D integer array nums where nums[i] is a non-empty array of distinct positive integers, return the list of integers that are present in each array of nums sorted in ascending order.

Example 1:

Input: nums = [[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]
Output: [3,4]
Explanation:
The only integers present in each of nums[0] = [3,1,2,4,5], nums[1] = [1,2,3,4], and nums[2] = [3,4,5,6] are 3 and 4, so we return [3,4].
Example 2:

Input: nums = [[1,2,3],[4,5,6]]
Output: []
Explanation:
There does not exist any integer present both in nums[0] and nums[1], so we return an empty list [].


Constraints:

1 <= nums.length <= 1000
1 <= sum(nums[i].length) <= 1000
1 <= nums[i][j] <= 1000
All the values of nums[i] are unique.


```

## 翻译

给定二维数组 nums，每个子数组包含不重复正整数。返回所有子数组中都出现的整数，按升序排列。

## Approach

用计数数组统计每个数字出现的次数，出现次数等于 nums.length 的即为答案。

时间复杂度 O(n)，空间复杂度 O(1001)。

## Solution

[SourceCode](./solution.js)
