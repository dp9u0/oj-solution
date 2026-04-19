# [2848] Points That Intersect With Cars

## Description

[LeetCode Problem Description](https://leetcode.com/problems/points-that-intersect-with-cars/description/)

* algorithms
* Easy (73.32%)
* Likes:    375
* Dislikes: 37
* Testcase Example:  '[[3,6],[1,5],[4,7]]'

```md
You are given a 0-indexed 2D integer array nums representing the coordinates of the cars parking on a number line. For any index i, nums[i] = [starti, endi] where starti is the starting point of the ith car and endi is the ending point of the ith car.
Return the number of integer points on the line that are covered with any part of a car.

Example 1:

Input: nums = [[3,6],[1,5],[4,7]]
Output: 7
Explanation: All the points from 1 to 7 intersect at least one car, therefore the answer would be 7.

Example 2:

Input: nums = [[1,3],[5,8]]
Output: 7
Explanation: Points intersecting at least one car are 1, 2, 3, 5, 6, 7, 8. There are a total of 7 points, therefore the answer would be 7.


Constraints:

1 <= nums.length <= 100
nums[i].length == 2
1 <= starti<= endi<= 100


```

## 题目翻译

给定二维整数数组 nums，nums[i] = [start_i, end_i] 表示数轴上第 i 辆车覆盖的区间。返回被至少一辆车覆盖的整数点数。

## 解题思路

使用集合记录所有被覆盖的点，遍历每个区间将 [start, end] 内的点加入集合，最终返回集合大小。由于值域小（1-100），直接用 Set 即可。

时间复杂度 O(n * range)，空间复杂度 O(range)

## Solution

[SourceCode](./solution.js)
