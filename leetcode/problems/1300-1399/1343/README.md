# [1343] Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/description/)

* algorithms
* Medium (72.62%)
* Likes:    1849
* Dislikes: 112
* Testcase Example:  '[2,2,2,2,5,5,5,8]\n3\n4'

```md
Given an array of integers arr and two integers k and threshold, return the number of sub-arrays of size k and average greater than or equal to threshold.

Example 1:

Input: arr = [2,2,2,2,5,5,5,8], k = 3, threshold = 4
Output: 3
Explanation: Sub-arrays [2,5,5],[5,5,5] and [5,5,8] have averages 4, 5 and 6 respectively. All other sub-arrays of size 3 have averages less than 4 (the threshold).

Example 2:

Input: arr = [11,13,17,23,29,31,7,5,2,3], k = 3, threshold = 5
Output: 6
Explanation: The first 6 sub-arrays of size 3 have averages greater than 5. Note that averages are not integers.


Constraints:

1 <= arr.length <= 105
1 <= arr[i] <= 104
1 <= k <= arr.length
0 <= threshold <= 104


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定整数数组 arr 和两个整数 k、threshold，返回大小为 k 且平均值大于等于 threshold 的子数组个数。

## 解题思路

**滑动窗口**

1. 维护大小为 k 的滑动窗口，计算窗口内元素之和
2. 和 >= k * threshold 则满足条件（避免浮点除法）
3. 窗口滑动时 O(1) 更新和

时间复杂度 O(n)，空间复杂度 O(1)。
