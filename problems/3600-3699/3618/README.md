# [3618] Split Array by Prime Indices

## Description

[LeetCode Problem Description](https://leetcode.com/problems/split-array-by-prime-indices/description/)

* algorithms
* Medium (49.39%)
* Likes:    56
* Dislikes: 3
* Testcase Example:  '[2,3,4]'

```md
You are given an integer array nums.
Split nums into two arrays A and B using the following rule:

Elements at prime indices in nums must go into array A.
All other elements must go into array B.

Return the absolute difference between the sums of the two arrays:
sum(A) - sum(B)
.
Note: An empty array has a sum of 0.

Example 1:

Input: nums = [2,3,4]
Output: 1
Explanation:

The only prime index in the array is 2, so nums[2] = 4 is placed in array A.
The remaining elements, nums[0] = 2 and nums[1] = 3 are placed in array B.
sum(A) = 4, sum(B) = 2 + 3 = 5.
The absolute difference is
4 - 5
= 1.


Example 2:

Input: nums = [-1,5,7,0]
Output: 3
Explanation:

The prime indices in the array are 2 and 3, so nums[2] = 7 and nums[3] = 0 are placed in array A.
The remaining elements, nums[0] = -1 and nums[1] = 5 are placed in array B.
sum(A) = 7 + 0 = 7, sum(B) = -1 + 5 = 4.
The absolute difference is
7 - 4
= 3.



Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109


```

## 题目翻译

给定数组 nums，将质数下标的元素放入 A，其余放入 B。返回 |sum(A) - sum(B)|。

## 解题思路

筛法求质数 + 求和。先用埃拉托斯特尼筛法标记 [2, n-1] 中的质数，然后分别求 sumA 和 sumB。

时间复杂度 O(n log log n)

## Solution

[SourceCode](./solution.js)
