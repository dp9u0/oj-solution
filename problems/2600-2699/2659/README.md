# [2659] Make Array Empty

## Description

[LeetCode Problem Description](https://leetcode.com/problems/make-array-empty/description/)

* algorithms
* Hard (26.90%)
* Likes:    571
* Dislikes: 35
* Testcase Example:  '[3,4,-1]'

```md
You are given an integer array nums containing distinct numbers, and you can perform the following operations until the array is empty:

If the first element has the smallest value, remove it
Otherwise, put the first element at the end of the array.

Return an integer denoting the number of operations it takes to make nums empty.

Example 1:

Input: nums = [3,4,-1]
Output: 5




Operation
Array




1
[4, -1, 3]


2
[-1, 3, 4]


3
[3, 4]


4
[4]


5
[]



Example 2:

Input: nums = [1,2,4,3]
Output: 5




Operation
Array




1
[2, 4, 3]


2
[4, 3]


3
[3, 4]


4
[4]


5
[]



Example 3:

Input: nums = [1,2,3]
Output: 3




Operation
Array




1
[2, 3]


2
[3]


3
[]




Constraints:

1 <= nums.length <= 105
-109<= nums[i] <= 109
All values in nums are distinct.


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

给定一个互不相同的整数数组 nums，反复执行以下操作直到数组为空：
- 如果第一个元素是最小值，移除它
- 否则，将第一个元素移到数组末尾
返回使数组为空所需的总操作次数。

## 解题思路

按值从小到大依次处理每个元素。用树状数组(BIT)跟踪哪些位置仍存在元素。

关键：每次移除元素后，"队首"移动到被移除位置的下一个（环形）。要从上一个移除位置 prev 到当前位置 pos，需要旋转的次数等于这段环形区间内仍存在的元素数量。

- 若 prev < pos：旋转数 = BIT.rangeQuery(prev+1, pos-1)
- 若 prev >= pos：旋转数 = BIT.rangeQuery(prev+1, n-1) + BIT.rangeQuery(0, pos-1)
- 总操作 += 旋转数 + 1（移除操作本身）

时间复杂度 O(n log n)
