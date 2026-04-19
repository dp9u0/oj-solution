# [2274] Maximum Consecutive Floors Without Special Floors

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-consecutive-floors-without-special-floors/description/)

* algorithms
* Medium (52.54%)
* Likes:    431
* Dislikes: 41
* Testcase Example:  '2\n9\n[4,6]'

```md
Alice manages a company and has rented some floors of a building as office space. Alice has decided some of these floors should be special floors, used for relaxation only.
You are given two integers bottom and top, which denote that Alice has rented all the floors from bottom to top (inclusive). You are also given the integer array special, where special[i] denotes a special floor that Alice has designated for relaxation.
Return the maximum number of consecutive floors without a special floor.

Example 1:

Input: bottom = 2, top = 9, special = [4,6]
Output: 3
Explanation: The following are the ranges (inclusive) of consecutive floors without a special floor:
- (2, 3) with a total amount of 2 floors.
- (5, 5) with a total amount of 1 floor.
- (7, 9) with a total amount of 3 floors.
Therefore, we return the maximum number which is 3 floors.

Example 2:

Input: bottom = 6, top = 8, special = [7,6,8]
Output: 0
Explanation: Every floor rented is a special floor, so we return 0.


Constraints:

1 <= special.length <= 105
1 <= bottom <= special[i] <= top <= 109
All the values of special are unique.


```

## 翻译

给定楼层范围 [bottom, top] 和特殊楼层数组 special，返回最大连续非特殊楼层数。

## Approach

排序 special 数组，在首尾加上 bottom-1 和 top+1 作为虚拟边界。遍历相邻特殊楼层间的间隔，最大间隔即为答案。

## Solution

[SourceCode](./solution.js)
