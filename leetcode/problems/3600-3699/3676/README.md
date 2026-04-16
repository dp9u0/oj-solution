# [3676] Count Bowl Subarrays

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-bowl-subarrays/description/)

* algorithms
* Medium (48.15%)
* Likes:    188
* Dislikes: 5
* Testcase Example:  '[2,5,3,1,4]'

```md
You are given an integer array nums with distinct elements.
A subarray nums[l...r] of nums is called a bowl if:

The subarray has length at least 3. That is, r - l + 1 >= 3.
The minimum of its two ends is strictly greater than the maximum of all elements in between. That is, min(nums[l], nums[r]) > max(nums[l + 1], ..., nums[r - 1]).

Return the number of bowl subarrays in nums.

Example 1:

Input: nums = [2,5,3,1,4]
Output: 2
Explanation:
The bowl subarrays are [3, 1, 4] and [5, 3, 1, 4].

[3, 1, 4] is a bowl because min(3, 4) = 3 > max(1) = 1.
[5, 3, 1, 4] is a bowl because min(5, 4) = 4 > max(3, 1) = 3.


Example 2:

Input: nums = [5,1,2,3,4]
Output: 3
Explanation:
The bowl subarrays are [5, 1, 2], [5, 1, 2, 3] and [5, 1, 2, 3, 4].

Example 3:

Input: nums = [1000000000,999999999,999999998]
Output: 0
Explanation:
No subarray is a bowl.


Constraints:

3 <= nums.length <= 105
1 <= nums[i] <= 109
nums consists of distinct elements.


```

## 中文翻译

给定元素互不相同的数组，求满足条件的子数组数量：长度>=3，且两端的最小值严格大于中间所有元素的最大值。

## 解题思路

使用单调递减栈。当处理新元素 nums[r] 时，弹出所有小于它的栈顶元素（每个弹出位置 p 若 r-p>=2 则计数）。弹出后栈顶元素与 r 也可能构成 bowl（若 r-栈顶>=2），因为中间元素全部小于 nums[r]。

## Solution

[SourceCode](./solution.js)
