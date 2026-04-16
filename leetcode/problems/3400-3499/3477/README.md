# [3477] Fruits Into Baskets II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/fruits-into-baskets-ii/description/)

* algorithms
* Easy (70.24%)
* Likes:    513
* Dislikes: 65
* Testcase Example:  '[4,2,5]\n[3,5,4]'

```md
You are given two arrays of integers, fruits and baskets, each of length n, where fruits[i] represents the quantity of the ith type of fruit, and baskets[j] represents the capacity of the jth basket.
From left to right, place the fruits according to these rules:

Each fruit type must be placed in the leftmost available basket with a capacity greater than or equal to the quantity of that fruit type.
Each basket can hold only one type of fruit.
If a fruit type cannot be placed in any basket, it remains unplaced.

Return the number of fruit types that remain unplaced after all possible allocations are made.

Example 1:

Input: fruits = [4,2,5], baskets = [3,5,4]
Output: 1
Explanation:

fruits[0] = 4 is placed in baskets[1] = 5.
fruits[1] = 2 is placed in baskets[0] = 3.
fruits[2] = 5 cannot be placed in baskets[2] = 4.

Since one fruit type remains unplaced, we return 1.

Example 2:

Input: fruits = [3,6,1], baskets = [6,4,7]
Output: 0
Explanation:

fruits[0] = 3 is placed in baskets[0] = 6.
fruits[1] = 6 cannot be placed in baskets[1] = 4 (insufficient capacity) but can be placed in the next available basket, baskets[2] = 7.
fruits[2] = 1 is placed in baskets[1] = 4.

Since all fruits are successfully placed, we return 0.


Constraints:

n == fruits.length == baskets.length
1 <= n <= 100
1 <= fruits[i], baskets[i] <= 1000


```

## 中文翻译

给定 fruits 和 baskets 数组，每个水果必须放入最左边容量足够且未被占用的篮子。返回无法放置的水果种类数。

## 解题思路

n≤100，直接模拟。用 used 数组标记已占用的篮子，对每个水果从左到右找第一个容量≥水果量且未占用的篮子。

## Solution

[SourceCode](./solution.js)
