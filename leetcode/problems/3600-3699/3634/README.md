# [3634] Minimum Removals to Balance Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-removals-to-balance-array/description/)

* algorithms
* Medium (47.86%)
* Likes:    608
* Dislikes: 28
* Testcase Example:  '[2,1,5]\n2'

```md
You are given an integer array nums and an integer k.
An array is considered balanced if the value of its maximum element is at most k times the minimum element.
You may remove any number of elements from nums​​​​​​​ without making it empty.
Return the minimum number of elements to remove so that the remaining array is balanced.
Note: An array of size 1 is considered balanced as its maximum and minimum are equal, and the condition always holds true.

Example 1:

Input: nums = [2,1,5], k = 2
Output: 1
Explanation:

Remove nums[2] = 5 to get nums = [2, 1].
Now max = 2, min = 1 and max <= min * k as 2 <= 1 * 2. Thus, the answer is 1.


Example 2:

Input: nums = [1,6,2,9], k = 3
Output: 2
Explanation:

Remove nums[0] = 1 and nums[3] = 9 to get nums = [6, 2].
Now max = 6, min = 2 and max <= min * k as 6 <= 2 * 3. Thus, the answer is 2.


Example 3:

Input: nums = [4,6], k = 2
Output: 0
Explanation:

Since nums is already balanced as 6 <= 4 * 2, no elements need to be removed.



Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 109
1 <= k <= 105


```

## 题目翻译

给定整数数组 nums 和整数 k，可以移除任意数量的元素（但不能清空）。求最少移除多少元素，使得剩余数组满足：最大值 <= 最小值 × k。

## 解题思路

**排序 + 二分查找**

排序后，以每个 nums[i] 作为最小值，二分找最大的 nums[j] 使得 nums[j] <= nums[i] * k。保留 [i, j] 区间的元素，移除 n - (j - i + 1) 个。对所有 i 取最小值。

时间复杂度 O(n log n)。

## Solution

[SourceCode](./solution.js)
