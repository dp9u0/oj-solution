# [976] Largest Perimeter Triangle

## Description

[LeetCode Problem Description](https://leetcode.com/problems/largest-perimeter-triangle/description/)

* algorithms
* Easy (56.66%)
* Testcase Example:  '[2,1,2]'

```md
Given an array A of positive lengths, return the largest perimeter of a triangle with non-zero area, formed from 3 of these lengths.
If it is impossible to form any triangle of non-zero area, return 0.

Example 1:
Input: [2,1,2]
Output: 5
Example 2:
Input: [1,2,1]
Output: 0
Example 3:
Input: [3,2,3,4]
Output: 10
Example 4:
Input: [3,6,2,3]
Output: 8

Note:
3 <= A.length <= 10000
1 <= A[i] <= 10^6
```

## Solution

目标是周长最大,但是同时有个隐含条件是需要构成三角形(任意两条边之和大于第三条边 `a+b>c`)

可以考虑将A排序,只需要比较 `A[i] + A[i + 1] > A[i + 2]` 即可(最大边 `A[i + 2]`)

[SourceCode](./solution.js)