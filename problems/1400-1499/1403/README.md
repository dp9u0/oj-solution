# [1403] Minimum Subsequence in Non-Increasing Order

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-subsequence-in-non-increasing-order/description/)

* algorithms
* Easy (73.67%)
* Likes:    638
* Dislikes: 512
* Testcase Example:  '[4,3,10,9,8]'

```md
Given the array nums, obtain a subsequence of the array whose sum of elements is strictly greater than the sum of the nonincluded elements in such subsequence.
If there are multiple solutions, return the subsequence with minimum size and if there still exist multiple solutions, return the subsequence with the maximum total sum of all its elements. A subsequence of an array can be obtained by erasing some (possibly zero) elements from the array.
Note that the solution with the given constraints is guaranteed to beunique. Also return the answer sorted in non-increasing order.

Example 1:

Input: nums = [4,3,10,9,8]
Output: [10,9]
Explanation: The subsequences [10,9] and [10,8] are minimal such that the sum of their elements is strictly greater than the sum of elements not included. However, the subsequence [10,9] has the maximum total sum of its elements.

Example 2:

Input: nums = [4,4,7,6,7]
Output: [7,7,6]
Explanation: The subsequence [7,7] has the sum of its elements equal to 14 which is not strictly greater than the sum of elements not included (14 = 4 + 4 + 6). Therefore, the subsequence [7,6,7] is the minimal satisfying the conditions. Note the subsequence has to be returned in non-increasing order.


Constraints:

1 <= nums.length <= 500
1 <= nums[i] <= 100


```

## 题目翻译

给定数组 `nums`，找到一个子序列，使其元素和严格大于未包含元素的和。如果有多个解，返回长度最小的；如果仍相同，返回总和最大的。结果按非递增顺序返回。

## 解题思路

降序排序后贪心，从大到小累加，直到子序列和 > 总和的一半。

## Solution

[SourceCode](./solution.js)
