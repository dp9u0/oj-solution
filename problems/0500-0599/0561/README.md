# [561] Array Partition I

## Description

* algorithms
* Easy (67.79%)
* Total Accepted:    122K
* Total Submissions: 180K
* Testcase Example:  '[1,4,3,2]'

```md
Given an array of 2n integers, your task is to group these integers into n pairs of integer, say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of min(ai, bi) for all i from 1 to n as large as possible.
Example 1:
Input: [1,4,3,2]
Output: 4
Explanation: n is 2, and the maximum sum of pairs is 4 = min(1, 2) + min(3, 4).
Note:
n is a positive integer, which is in the range of [1, 10000].
All the integers in the array will be in the range of [-10000, 10000].

```

## Solution

很简单,排序,然后取 `index%2 === 0` 位置的计算其和即可

[SourceCode](./solution.js)