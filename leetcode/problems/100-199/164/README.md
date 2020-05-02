# [164] Maximum Gap

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-gap/description/)

* algorithms
* Hard (34.71%)
* Testcase Example:  '[3,6,9,1]'

```md
Given an unsorted array, find the maximum difference between the successive elements in its sorted form.
Return 0 if the array contains less than 2 elements.
Example 1:
Input: [3,6,9,1]
Output: 3
Explanation: The sorted form of the array is [1,3,6,9], either
(3,6) or (6,9) has the maximum difference 3.
Example 2:
Input: [10]
Output: 0
Explanation: The array contains less than 2 elements, therefore return 0.
Note:
You may assume all elements in the array are non-negative integers and fit in the 32-bit signed integer range.
Try to solve it in linear time/space.
```

## Solution

1. 排序后的最大间距 也就是说 `[6,5,7]` 最大间距是 `1` 而不是 `2`
2. 由于都是整数 可以考虑基数排序

[SourceCode](./solution.js)
