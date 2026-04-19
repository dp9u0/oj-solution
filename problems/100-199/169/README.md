# [169] Majority Element

## Description

* algorithms
* Easy (50.49%)
* Total Accepted:    323.6K
* Total Submissions: 640.8K
* Testcase Example:  '[3,2,3]'

```md
Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
You may assume that the array is non-empty and the majority element always exist in the array.
Example 1:
Input: [3,2,3]
Output: 3
Example 2:
Input: [2,2,1,1,1,2,2]
Output: 2

```

## Solution

这里的重点是 :众数超过一半,即通过数字两两消除,最终剩下的一定是众数.

[SourceCode](./solution.js)