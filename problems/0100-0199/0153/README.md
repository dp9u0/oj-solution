# [153] Find Minimum in Rotated Sorted Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/)

* algorithms
* Medium (44.43%)
* Testcase Example:  '[3,4,5,1,2]'

```md
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
(i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).
Find the minimum element.
You may assume no duplicate exists in the array.
Example 1:
Input: [3,4,5,1,2]
Output: 1
Example 2:
Input: [4,5,6,7,0,1,2]
Output: 0

```

## Solution

1. `some pivot` some 可能是 0 也可能是 n
2. 二分查找

[SourceCode](./solution.js)
