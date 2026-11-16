# [1196] 最多可以买到的苹果数量

## Description


```md
https://leetcode.cn/problems/how-many-apples-can-you-put-into-the-basket/description/
* algorithms
* Easy (69.09%)
* Likes:    17
* Dislikes: -
* Testcase Example:  '[100,200,150,1000]'
你有一些苹果和一个可以承载 5000 单位重量的篮子。
给定一个整数数组 weight ，其中 weight[i] 是第 i 个苹果的重量，返回 你可以放入篮子的最大苹果数量 。

示例 1：
输入：weight = [100,200,150,1000]
输出：4
解释：所有 4 个苹果都可以装进去，因为它们的重量之和为 1450。
示例 2：
输入：weight = [900,950,800,1000,700,800]
输出：5
解释：6 个苹果的总重量超过了 5000，所以我们只能从中任选 5 个。

提示：
1 <= weight.length <= 103
1 <= weight[i] <= 103
Hint 1: What if you think in a greedy approach?
Hint 2: The best apple to take in one step is the one with the smallest weight.
Hint 3: Sort the array and take apples with smaller weight first.

```

## Solution

[SourceCode](./solution.js)

## Description (English)

You have some apples and a basket that can carry up to 5000 units of weight. Given `weight[i]` for each apple, return the maximum number of apples you can put into the basket.

**Example 1:**
weight = [100,200,150,1000] → 4 (total 1450)

**Constraints:**
- 1 <= weight.length <= 10^3
- 1 <= weight[i] <= 10^3

## Approach

贪心:排序后优先装最轻的苹果,直到超过 5000 为止——交换论证可证先取最小重量能使数量最多。

时间 O(n log n),空间 O(1)(原地排序)。
