# [1276] Number of Burgers with No Waste of Ingredients

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-burgers-with-no-waste-of-ingredients/description/)

* algorithms
* Medium (50.92%)
* Likes:    346
* Dislikes: 239
* Testcase Example:  '16\n7'

```md
Given two integers tomatoSlices and cheeseSlices. The ingredients of different burgers are as follows:

Jumbo Burger: 4 tomato slices and 1 cheese slice.
Small Burger: 2 Tomato slices and 1 cheese slice.

Return [total_jumbo, total_small] so that the number of remaining tomatoSlices equal to 0 and the number of remaining cheeseSlices equal to 0. If it is not possible to make the remaining tomatoSlices and cheeseSlices equal to 0 return [].

Example 1:

Input: tomatoSlices = 16, cheeseSlices = 7
Output: [1,6]
Explantion: To make one jumbo burger and 6 small burgers we need 4*1 + 2*6 = 16 tomato and 1 + 6 = 7 cheese.
There will be no remaining ingredients.

Example 2:

Input: tomatoSlices = 17, cheeseSlices = 4
Output: []
Explantion: There will be no way to use all ingredients to make small and jumbo burgers.

Example 3:

Input: tomatoSlices = 4, cheeseSlices = 17
Output: []
Explantion: Making 1 jumbo burger there will be 16 cheese remaining and making 2 small burgers there will be 15 cheese remaining.


Constraints:

0 <= tomatoSlices, cheeseSlices <= 107


```

## 中文翻译

给定番茄片数和芝士片数。Jumbo 汉堡需要 4 番茄 + 1 芝士，Small 汉堡需要 2 番茄 + 1 芝士。

返回 [jumbo 数, small 数] 使得原料恰好用完。若不可能返回 []。

## 解题思路

**数学方程：**

设 jumbo = x, small = y：
- 4x + 2y = tomatoSlices
- x + y = cheeseSlices

解方程：x = (tomatoSlices - 2 * cheeseSlices) / 2, y = cheeseSlices - x

需满足 x >= 0, y >= 0 且为整数。

时间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
