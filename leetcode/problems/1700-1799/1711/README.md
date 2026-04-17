# [1711] Count Good Meals

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-good-meals/description/)

* algorithms
* Medium (32.71%)
* Likes:    1131
* Dislikes: 247
* Testcase Example:  '[1,3,5,7,9]'

```md
A good meal is a meal that contains exactly two different food items with a sum of deliciousness equal to a power of two.
You can pick any two different foods to make a good meal.
Given an array of integers deliciousness where deliciousness[i] is the deliciousness of the i​​​​​​th​​​​​​​​ item of food, return the number of different good meals you can make from this list modulo 109 + 7.
Note that items with different indices are considered different even if they have the same deliciousness value.

Example 1:

Input: deliciousness = [1,3,5,7,9]
Output: 4
Explanation: The good meals are (1,3), (1,7), (3,5) and, (7,9).
Their respective sums are 4, 8, 8, and 16, all of which are powers of 2.

Example 2:

Input: deliciousness = [1,1,1,3,3,3,7]
Output: 15
Explanation: The good meals are (1,1) with 3 ways, (1,3) with 9 ways, and (1,7) with 3 ways.

Constraints:

1 <= deliciousness.length <= 105
0 <= deliciousness[i] <= 220


```

## 翻译

一道好的餐点是指恰好包含两种不同食物，且美味值之和为 2 的幂。给定美味值数组，返回能组成的好餐点数量，结果对 10^9+7 取模。注意不同索引的食物即使美味值相同也被视为不同。

## 解题思路

用哈希表统计每个美味值的出现次数。由于 deliciousness[i] <= 2^20，两个元素之和最大为 2^21，所以只需枚举 2^0 到 2^21 作为目标和。对于每个元素 x，枚举所有可能的 2 的幂 target，查找哈希表中 target - x 的计数。需要注意避免重复计数（i < j 的约束）。时间复杂度 O(n * 22)。

## Solution

[SourceCode](./solution.js)
