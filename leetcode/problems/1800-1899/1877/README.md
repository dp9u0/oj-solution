# [1877] Minimize Maximum Pair Sum in Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/description/)

* algorithms
* Medium (83.30%)
* Likes:    2377
* Dislikes: 547
* Testcase Example:  '[3,5,2,3]'

```md
The pair sum of a pair (a,b) is equal to a + b. The maximum pair sum is the largest pair sum in a list of pairs.

For example, if we have pairs (1,5), (2,3), and (4,4), the maximum pair sum would be max(1+5, 2+3, 4+4) = max(6, 5, 8) = 8.

Given an array nums of even length n, pair up the elements of nums into n / 2 pairs such that:

Each element of nums is in exactly one pair, and
The maximum pair sum is minimized.

Return the minimized maximum pair sum after optimally pairing up the elements.

Example 1:

Input: nums = [3,5,2,3]
Output: 7
Explanation: The elements can be paired up into pairs (3,3) and (5,2).
The maximum pair sum is max(3+3, 5+2) = max(6, 7) = 7.

Example 2:

Input: nums = [3,5,4,2,4,6]
Output: 8
Explanation: The elements can be paired up into pairs (3,5), (4,4), and (6,2).
The maximum pair sum is max(3+5, 4+4, 6+2) = max(8, 8, 8) = 8.


Constraints:

n == nums.length
2 <= n <= 105
n is even.
1 <= nums[i] <= 105


```

## 翻译

给定偶数长度数组 nums，将元素配对使得最大配对和最小化。返回最小化的最大配对和。

## Approach

排序 + 首尾配对。排序后将最小与最大配对，次小与次大配对，以此类推。这样能最小化最大和。

时间复杂度 O(n log n)，空间复杂度 O(1)。

## Solution

[SourceCode](./solution.js)
