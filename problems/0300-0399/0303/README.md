# [303] Range Sum Query - Immutable

## Description

* algorithms
* Easy (35.51%)
* Total Accepted:    119.3K
* Total Submissions: 335.9K
* Testcase Example:  '["NumArray","sumRange","sumRange","sumRange"]\n[[[-2,0,3,-5,2,-1]],[0,2],[2,5],[0,5]]'

```md
Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.
Example:
Given nums = [-2, 0, 3, -5, 2, -1]
sumRange(0, 2) -> 1
sumRange(2, 5) -> -1
sumRange(0, 5) -> -3
Note:
You may assume that the array does not change.
There are many calls to sumRange function.

```

## Solution

`this.nums[j] - this.nums[i - 1];`

[SourceCode](./solution.js)