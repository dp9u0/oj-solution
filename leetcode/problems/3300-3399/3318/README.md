# [3318] Find X-Sum of All K-Long Subarrays I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-x-sum-of-all-k-long-subarrays-i/description/)

* algorithms
* Easy (76.06%)
* Likes:    563
* Dislikes: 329
* Testcase Example:  '[1,1,2,2,3,4,2,3]\n6\n2'

```md
You are given an array nums of n integers and two integers k and x.
The x-sum of an array is calculated by the following procedure:

Count the occurrences of all elements in the array.
Keep only the occurrences of the top x most frequent elements. If two elements have the same number of occurrences, the element with the bigger value is considered more frequent.
Calculate the sum of the resulting array.

Note that if an array has less than x distinct elements, its x-sum is the sum of the array.
Return an integer array answer of length n - k + 1 where answer[i] is the x-sum of the subarray nums[i..i + k - 1].

Example 1:

Input: nums = [1,1,2,2,3,4,2,3], k = 6, x = 2
Output: [6,10,12]
Explanation:

For subarray [1, 1, 2, 2, 3, 4], only elements 1 and 2 will be kept in the resulting array. Hence, answer[0] = 1 + 1 + 2 + 2.
For subarray [1, 2, 2, 3, 4, 2], only elements 2 and 4 will be kept in the resulting array. Hence, answer[1] = 2 + 2 + 2 + 4. Note that 4 is kept in the array since it is bigger than 3 and 1 which occur the same number of times.
For subarray [2, 2, 3, 4, 2, 3], only elements 2 and 3 are kept in the resulting array. Hence, answer[2] = 2 + 2 + 2 + 3 + 3.


Example 2:

Input: nums = [3,8,7,8,7,5], k = 2, x = 2
Output: [11,15,15,15,12]
Explanation:
Since k == x, answer[i] is equal to the sum of the subarray nums[i..i + k - 1].


Constraints:

1 <= n == nums.length <= 50
1 <= nums[i] <= 50
1 <= x <= k <= nums.length


```

## 题目翻译

给定数组 nums 和整数 k, x。对每个长度为 k 的子数组，统计元素频率，保留频率最高的 x 种元素（同频取大值），求剩余元素之和。

## 解题思路

**滑窗 + 频率排序**

n ≤ 50，直接对每个窗口统计频率，按频率降序再按值降序排序，取前 x 种元素的频率之和。时间 O(n * k * logk)。

## Solution

[SourceCode](./solution.js)
