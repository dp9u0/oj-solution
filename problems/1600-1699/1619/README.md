# [1619] Mean of Array After Removing Some Elements

## Description

[LeetCode Problem Description](https://leetcode.com/problems/mean-of-array-after-removing-some-elements/description/)

* algorithms
* Easy (71.68%)
* Likes:    529
* Dislikes: 134
* Testcase Example:  '[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3]'

```md
Given an integer array arr, return the mean of the remaining integers after removing the smallest 5% and the largest 5% of the elements.
Answers within 10-5 of the actual answer will be considered accepted.

Example 1:

Input: arr = [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3]
Output: 2.00000
Explanation: After erasing the minimum and the maximum values of this array, all elements are equal to 2, so the mean is 2.

Example 2:

Input: arr = [6,2,7,5,1,2,0,3,10,2,5,0,5,5,0,8,7,6,8,0]
Output: 4.00000

Example 3:

Input: arr = [6,0,7,0,7,5,7,8,3,4,0,7,8,1,6,8,1,1,2,4,8,1,9,5,4,3,8,5,10,8,6,6,1,0,6,10,8,2,3,4]
Output: 4.77778


Constraints:

20 <= arr.length <= 1000
arr.length is a multiple of 20.
0 <= arr[i] <= 105


```

## 翻译

给定数组arr，去除最小的5%和最大的5%元素后，求剩余元素的平均值。

## 解题思路

排序后去掉前后5%，对中间90%求平均。

## Solution

[SourceCode](./solution.js)
