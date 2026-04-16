# [2333] Minimum Sum of Squared Difference

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-sum-of-squared-difference/description/)

* algorithms
* Medium (26.78%)
* Likes:    670
* Dislikes: 52
* Testcase Example:  '[1,2,3,4]\n[2,10,20,19]\n0\n0'

```md
You are given two positive 0-indexed integer arrays nums1 and nums2, both of length n.
The sum of squared difference of arrays nums1 and nums2 is defined as the sum of (nums1[i] - nums2[i])2 for each 0 <= i < n.
You are also given two positive integers k1 and k2. You can modify any of the elements of nums1 by +1 or -1 at most k1 times. Similarly, you can modify any of the elements of nums2 by +1 or -1 at most k2 times.
Return the minimum sum of squared difference after modifying array nums1 at most k1 times and modifying array nums2 at most k2 times.
Note: You are allowed to modify the array elements to become negative integers.

Example 1:

Input: nums1 = [1,2,3,4], nums2 = [2,10,20,19], k1 = 0, k2 = 0
Output: 579
Explanation: The elements in nums1 and nums2 cannot be modified because k1 = 0 and k2 = 0.
The sum of square difference will be: (1 - 2)2 + (2 - 10)2 + (3 - 20)2 + (4 - 19)2= 579.

Example 2:

Input: nums1 = [1,4,10,12], nums2 = [5,8,6,9], k1 = 1, k2 = 1
Output: 43
Explanation: One way to obtain the minimum sum of square difference is:
- Increase nums1[0] once.
- Increase nums2[2] once.
The minimum of the sum of square difference will be:
(2 - 5)2 + (4 - 8)2 + (10 - 7)2 + (12 - 9)2= 43.
Note that, there are other ways to obtain the minimum of the sum of square difference, but there is no way to obtain a sum smaller than 43.

Constraints:

n == nums1.length == nums2.length
1 <= n <= 105
0 <= nums1[i], nums2[i] <= 105
0 <= k1, k2 <= 109


```

## 中文翻译

给定两个数组 nums1 和 nums2，可以分别对 nums1 的元素最多做 k1 次 ±1 操作，对 nums2 的元素最多做 k2 次 ±1 操作。求操作后平方差之和的最小值。

## 解题思路

每次操作本质上可以将某个 |diff[i]| 减 1，总预算 k = k1 + k2。为使平方和最小，应贪心地减少最大的差值。排序后用"削峰"策略：从最高峰开始逐层削平，直到预算用完。

## Solution

[SourceCode](./solution.js)
