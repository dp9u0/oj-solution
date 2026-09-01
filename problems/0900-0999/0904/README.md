# [904] Fruit Into Baskets

## Description

[LeetCode Problem Description](https://leetcode.com/problems/fruit-into-baskets/description/)

* algorithms
* Medium (50.86%)
* Likes:    6212
* Dislikes: 593
* Testcase Example:  '[1,2,1]'

```md
You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array fruits where fruits[i] is the type of fruit the ith tree produces.
You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:

You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold.
Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right. The picked fruits must fit in one of your baskets.
Once you reach a tree with fruit that cannot fit in your baskets, you must stop.

Given the integer array fruits, return the maximum number of fruits you can pick.

Example 1:

Input: fruits = [1,2,1]
Output: 3
Explanation: We can pick from all 3 trees.

Example 2:

Input: fruits = [0,1,2,2]
Output: 3
Explanation: We can pick from trees [1,2,2].
If we had started at the first tree, we would only pick from trees [0,1].

Example 3:

Input: fruits = [1,2,3,2,2]
Output: 4
Explanation: We can pick from trees [2,3,2,2].
If we had started at the first tree, we would only pick from trees [1,2].


Constraints:

1 <= fruits.length <= 105
0 <= fruits[i] < fruits.length


```

## 翻译

你正在参观一个农场，果树排成一行。数组 `fruits` 表示每棵树的水果类型。你有两个篮子，每个篮子只能装一种类型的水果（数量不限）。从任意一棵树开始，必须从每棵树恰好摘一个水果并向右移动，直到遇到无法放入篮子的水果类型为止。

返回最多能摘多少个水果。

## Approach

经典滑动窗口：等价于求最长的最多包含两种不同元素的连续子数组。用双指针维护窗口，哈希表记录窗口内每种水果的数量。当种类数超过 2 时，左指针右移收缩窗口。

时间复杂度 O(n)，空间复杂度 O(1)（最多只有 2 个键）。

## Solution

[SourceCode](./solution.js)
