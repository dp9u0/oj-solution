# [1385] Find the Distance Value Between Two Arrays

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-the-distance-value-between-two-arrays/description/)

* algorithms
* Easy (71.59%)
* Likes:    1035
* Dislikes: 3165
* Testcase Example:  '[4,5,8]\n[10,9,1,8]\n2'

```md
Given two integer arrays arr1 and arr2, and the integer d, return the distance value between the two arrays.
The distance value is defined as the number of elements arr1[i] such that there is not any element arr2[j] where
arr1[i]-arr2[j]
<= d.

Example 1:

Input: arr1 = [4,5,8], arr2 = [10,9,1,8], d = 2
Output: 2
Explanation:
For arr1[0]=4 we have:
4-10
=6 > d=2
4-9
=5 > d=2
4-1
=3 > d=2
4-8
=4 > d=2
For arr1[1]=5 we have:
5-10
=5 > d=2
5-9
=4 > d=2
5-1
=4 > d=2
5-8
=3 > d=2
For arr1[2]=8 we have:

8-10
=2 <= d=2

8-9
=1 <= d=2
8-1
=7 > d=2

8-8
=0 <= d=2

Example 2:

Input: arr1 = [1,4,2,3], arr2 = [-4,-3,6,10,20,30], d = 3
Output: 2

Example 3:

Input: arr1 = [2,1,100,3], arr2 = [-5,-2,10,-3,7], d = 6
Output: 1


Constraints:

1 <= arr1.length, arr2.length <= 500
-1000 <= arr1[i], arr2[j] <= 1000
0 <= d <= 100


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定两个整数数组 arr1、arr2 和整数 d。"距离值"定义为 arr1 中满足以下条件的元素个数：对于 arr1[i]，不存在任何 arr2[j] 使得 |arr1[i] - arr2[j]| <= d。

## 解题思路

**排序 + 二分查找**

将 arr2 排序后，对每个 arr1[i]，在 arr2 中二分查找 [arr1[i]-d, arr1[i]+d] 范围内是否有元素。若无则计数。

时间复杂度 O((n+m) log m)。
