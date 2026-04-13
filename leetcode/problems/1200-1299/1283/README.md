# [1283] Find the Smallest Divisor Given a Threshold

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/description/)

* algorithms
* Medium (65.73%)
* Likes:    3598
* Dislikes: 229
* Testcase Example:  '[1,2,5,9]\n6'

```md
Given an array of integers nums and an integer threshold, we will choose a positive integer divisor, divide all the array by it, and sum the division&#39;s result. Find the smallest divisor such that the result mentioned above is less than or equal to threshold.
Each result of the division is rounded to the nearest integer greater than or equal to that element. (For example: 7/3 = 3 and 10/2 = 5).
The test cases are generated sothat there will be an answer.

Example 1:

Input: nums = [1,2,5,9], threshold = 6
Output: 5
Explanation: We can get a sum to 17 (1+2+5+9) if the divisor is 1.
If the divisor is 4 we can get a sum of 7 (1+1+2+3) and if the divisor is 5 the sum will be 5 (1+1+1+2).

Example 2:

Input: nums = [44,22,33,11,1], threshold = 5
Output: 44


Constraints:

1 <= nums.length <= 5 * 104
1 <= nums[i] <= 106
nums.length <= threshold <= 106


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定整数数组 nums 和阈值 threshold，选一个正整数 divisor，对每个元素向上取整除以 divisor 后求和。找到使和 <= threshold 的最小 divisor。

## 解题思路

**二分查找**

1. divisor 越大，和越小（单调递减）
2. 二分范围 [1, max(nums)]，找到使 sum <= threshold 的最小 divisor
3. 计算每个 mid 的和：Σ ceil(nums[i] / mid) = Σ floor((nums[i] + mid - 1) / mid)

时间复杂度 O(n log maxNum)，空间复杂度 O(1)。
