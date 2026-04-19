# [1331] Rank Transform of an Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/rank-transform-of-an-array/description/)

* algorithms
* Easy (70.85%)
* Likes:    2386
* Dislikes: 114
* Testcase Example:  '[40,10,20,30]'

```md
Given an array of integersarr, replace each element with its rank.
The rank represents how large the element is. The rank has the following rules:

Rank is an integer starting from 1.
The larger the element, the larger the rank. If two elements are equal, their rank must be the same.
Rank should be as small as possible.


Example 1:

Input: arr = [40,10,20,30]
Output: [4,1,2,3]
Explanation: 40 is the largest element. 10 is the smallest. 20 is the second smallest. 30 is the third smallest.
Example 2:

Input: arr = [100,100,100]
Output: [1,1,1]
Explanation: Same elements share the same rank.

Example 3:

Input: arr = [37,12,28,9,100,56,80,5,12]
Output: [5,3,4,2,8,6,7,1,3]


Constraints:

0 <= arr.length <= 105
-109<= arr[i] <= 109


```

## 题目翻译

给定整数数组，将每个元素替换为其排名。排名从 1 开始，值越大排名越大，相同元素排名相同，排名尽可能小。

## 解题思路

排序去重后用 Map 记录每个值对应的排名（序号），再遍历原数组替换。

## Solution

[SourceCode](./solution.js)
