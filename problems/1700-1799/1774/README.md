# [1774] Closest Dessert Cost

## Description

[LeetCode Problem Description](https://leetcode.com/problems/closest-dessert-cost/description/)

* algorithms
* Medium (48.55%)
* Likes:    739
* Dislikes: 95
* Testcase Example:  '[1,7]\n[3,4]\n10'

```md
You would like to make dessert and are preparing to buy the ingredients. You have n ice cream base flavors and m types of toppings to choose from. You must follow these rules when making your dessert:

There must be exactly one ice cream base.
You can add one or more types of topping or have no toppings at all.
There are at most two of each type of topping.

You are given three inputs:

baseCosts, an integer array of length n, where each baseCosts[i] represents the price of the ith ice cream base flavor.
toppingCosts, an integer array of length m, where each toppingCosts[i] is the price of one of the ith topping.
target, an integer representing your target price for dessert.

You want to make a dessert with a total cost as close to target as possible.
Return the closest possible cost of the dessert to target. If there are multiple, return the lower one.

Example 1:

Input: baseCosts = [1,7], toppingCosts = [3,4], target = 10
Output: 10
Explanation: Consider the following combination (all 0-indexed):
- Choose base 1: cost 7
- Take 1 of topping 0: cost 1 x 3 = 3
- Take 0 of topping 1: cost 0 x 4 = 0
Total: 7 + 3 + 0 = 10.

Example 2:

Input: baseCosts = [2,3], toppingCosts = [4,5,100], target = 18
Output: 17
Explanation: Consider the following combination (all 0-indexed):
- Choose base 1: cost 3
- Take 1 of topping 0: cost 1 x 4 = 4
- Take 2 of topping 1: cost 2 x 5 = 10
- Take 0 of topping 2: cost 0 x 100 = 0
Total: 3 + 4 + 10 + 0 = 17. You cannot make a dessert with a total cost of 18.

Example 3:

Input: baseCosts = [3,10], toppingCosts = [2,5], target = 9
Output: 8
Explanation: It is possible to make desserts with cost 8 and 10. Return 8 as it is the lower cost.


Constraints:

n == baseCosts.length
m == toppingCosts.length
1 <= n, m <= 10
1 <= baseCosts[i], toppingCosts[i] <= 104
1 <= target <= 104


```

## 翻译

制作甜点，需要选择配料：
- 必须选择恰好一种冰淇淋基底（baseCosts 中选一个）
- 可以添加零种或多种配料，每种配料最多加 2 份（toppingCosts 中每种可选 0/1/2 份）
- 目标是使总价格尽量接近 target，如果同样接近则返回较低的价格

## 解题思路

m <= 10 种配料，每种有 0/1/2 三种选择，共 3^10 = 59049 种配料组合。

用集合收集所有可能的配料费用总和：从 {0} 开始，对每种配料，将现有每个和分别加上 0、toppingCost[i]×1、toppingCost[i]×2。

然后枚举每个 base + 每个配料和，找最接近 target 的总价格。

## Solution

[SourceCode](./solution.js)
