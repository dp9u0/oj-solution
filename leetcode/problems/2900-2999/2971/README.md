# [2971] Find Polygon With the Largest Perimeter

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-polygon-with-the-largest-perimeter/description/)

* algorithms
* Medium (65.51%)
* Likes:    838
* Dislikes: 71
* Testcase Example:  '[5,5,5]'

```md
You are given an array of positive integers nums of length n.
A polygon is a closed plane figure that has at least 3 sides. The longest side of a polygon is smaller than the sum of its other sides.
Conversely, if you have k (k >= 3) positive real numbers a1, a2, a3, ..., ak where a1 <= a2 <= a3 <= ... <= ak and a1 + a2 + a3 + ... + ak-1 > ak, then there always exists a polygon with k sides whose lengths are a1, a2, a3, ..., ak.
The perimeter of a polygon is the sum of lengths of its sides.
Return the largest possible perimeter of a polygon whose sides can be formed from nums, or -1 if it is not possible to create a polygon.

Example 1:

Input: nums = [5,5,5]
Output: 15
Explanation: The only possible polygon that can be made from nums has 3 sides: 5, 5, and 5. The perimeter is 5 + 5 + 5 = 15.

Example 2:

Input: nums = [1,12,1,2,5,50,3]
Output: 12
Explanation: The polygon with the largest perimeter which can be made from nums has 5 sides: 1, 1, 2, 3, and 5. The perimeter is 1 + 1 + 2 + 3 + 5 = 12.
We cannot have a polygon with either 12 or 50 as the longest side because it is not possible to include 2 or more smaller sides that have a greater sum than either of them.
It can be shown that the largest possible perimeter is 12.

Example 3:

Input: nums = [5,5,50]
Output: -1
Explanation: There is no possible way to form a polygon from nums, as a polygon has at least 3 sides and 50 > 5 + 5.


Constraints:

3 <= n <= 105
1 <= nums[i] <= 109


```

## 翻译

给定正整数数组 `nums`，从中选若干条边组成多边形（至少3条边）。多边形的最长边必须严格小于其余边之和。返回能组成的最大周长，无法组成则返回 -1。

## Approach

排序 + 前缀和。将数组排序后，从小到大累加前缀和。对于位置 i（从 2 开始），检查 `prefixSum[i-1] > nums[i]`，即前 i 个较小边之和是否大于第 i 条边。若满足则更新最大周长 `prefixSum[i-1] + nums[i]`。

从后往前找最后一个满足条件的位置即可。

时间复杂度 O(n log n)，空间复杂度 O(1)。

## Solution

[SourceCode](./solution.js)
