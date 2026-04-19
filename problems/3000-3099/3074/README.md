# [3074] Apple Redistribution into Boxes

## Description

[LeetCode Problem Description](https://leetcode.com/problems/apple-redistribution-into-boxes/description/)

* algorithms
* Easy (78.46%)
* Likes:    408
* Dislikes: 24
* Testcase Example:  '[1,3,2]\n[4,3,1,5,2]'

```md
You are given an array apple of size n and an array capacity of size m.
There are n packs where the ith pack contains apple[i] apples. There are m boxes as well, and the ith box has a capacity of capacity[i] apples.
Return the minimum number of boxes you need to select to redistribute these n packs of apples into boxes.
Note that, apples from the same pack can be distributed into different boxes.

Example 1:

Input: apple = [1,3,2], capacity = [4,3,1,5,2]
Output: 2
Explanation: We will use boxes with capacities 4 and 5.
It is possible to distribute the apples as the total capacity is greater than or equal to the total number of apples.

Example 2:

Input: apple = [5,5,5], capacity = [2,4,2,7]
Output: 4
Explanation: We will need to use all the boxes.


Constraints:

1 <= n == apple.length <= 50
1 <= m == capacity.length <= 50
1 <= apple[i], capacity[i] <= 50
The input is generated such that it&#39;s possible to redistribute packs of apples into boxes.


```

## 中文翻译

给定苹果数量数组 apple 和箱子容量数组 capacity，返回最少需要多少个箱子来装下所有苹果。同一包的苹果可以分到不同箱子。

## 解题思路

贪心。将 capacity 降序排列，从大到小取箱子直到总容量 >= 苹果总数。

## Solution

[SourceCode](./solution.js)
