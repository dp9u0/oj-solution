# [3479] Fruits Into Baskets III

## Description

[LeetCode Problem Description](https://leetcode.com/problems/fruits-into-baskets-iii/description/)

* algorithms
* Medium (39.20%)
* Likes:    602
* Dislikes: 83
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
1 <= n <= 105
1 <= fruits[i], baskets[i] <= 109


```

## 翻译

给定fruits和baskets数组。对每个fruit从左到右，放入最左边的容量>=fruit数量的可用篮子。每个篮子只能放一种水果。返回无法放置的水果数量。

## 解题思路

线段树维护baskets的最大值。对每个fruit，在线段树中查找最左边>=fruit的位置，找到则更新为0（已用），否则计数unplaced。

## Solution

[SourceCode](./solution.js)
