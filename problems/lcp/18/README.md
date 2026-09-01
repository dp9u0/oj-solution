# [LCP 18] 早餐组合

## Description


```md
https://leetcode.cn/problems/2vYnGI/description/
* algorithms
* Easy (33.40%)
* Likes:    113
* Dislikes: -
* Testcase Example:  '[10,20,5]\n[5,5,2]\n15'
小扣在秋日市集选择了一家早餐摊位，一维整型数组 `staple` 中记录了每种主食的价格，一维整型数组 `drinks` 中记录了每种饮料的价格。小扣的计划选择一份主食和一款饮料，且花费不超过 `x` 元。请返回小扣共有多少种购买方案。
注意：答案需要以 `1e9 + 7 (1000000007)` 为底取模，如：计算初始结果为：`1000000008`，请返回 `1`
**示例 1：**
>输入：`staple = [10,20,5], drinks = [5,5,2], x = 15`
>
>输出：`6`
>
>解释：小扣有 6 种购买方案，所选主食与所选饮料在数组中对应的下标分别是：
>第 1 种方案：staple[0] + drinks[0] = 10 + 5 = 15；
>第 2 种方案：staple[0] + drinks[1] = 10 + 5 = 15；
>第 3 种方案：staple[0] + drinks[2] = 10 + 2 = 12；
>第 4 种方案：staple[2] + drinks[0] = 5 + 5 = 10；
>第 5 种方案：staple[2] + drinks[1] = 5 + 5 = 10；
>第 6 种方案：staple[2] + drinks[2] = 5 + 2 = 7。
**示例 2：**
>输入：`staple = [2,1,1], drinks = [8,9,5,1], x = 9`
>
>输出：`8`
>
>解释：小扣有 8 种购买方案，所选主食与所选饮料在数组中对应的下标分别是：
>第 1 种方案：staple[0] + drinks[2] = 2 + 5 = 7；
>第 2 种方案：staple[0] + drinks[3] = 2 + 1 = 3；
>第 3 种方案：staple[1] + drinks[0] = 1 + 8 = 9；
>第 4 种方案：staple[1] + drinks[2] = 1 + 5 = 6；
>第 5 种方案：staple[1] + drinks[3] = 1 + 1 = 2；
>第 6 种方案：staple[2] + drinks[0] = 1 + 8 = 9；
>第 7 种方案：staple[2] + drinks[2] = 1 + 5 = 6；
>第 8 种方案：staple[2] + drinks[3] = 1 + 1 = 2；
**提示：**
+ `1 <= staple.length <= 10^5`
+ `1 <= drinks.length <= 10^5`
+ `1 <= staple[i],drinks[i] <= 10^5`
+ `1 <= x <= 2*10^5`

```

## English Translation

Xiaokou chose a breakfast stall at an autumn market. The one-dimensional integer array `staple` records the price of each staple food, and the array `drinks` records the price of each drink. Xiaokou plans to buy one staple and one drink, and the total cost must not exceed `x` yuan. Return the total number of valid purchase combinations.

Note: The answer must be taken modulo `1e9 + 7 (1000000007)`. For example, if the initial result is `1000000008`, return `1`.

**Example 1:**
> Input: `staple = [10,20,5], drinks = [5,5,2], x = 15`
>
> Output: `6`

**Example 2:**
> Input: `staple = [2,1,1], drinks = [8,9,5,1], x = 9`
>
> Output: `8`

**Constraints:**
+ `1 <= staple.length <= 10^5`
+ `1 <= drinks.length <= 10^5`
+ `1 <= staple[i],drinks[i] <= 10^5`
+ `1 <= x <= 2*10^5`

## Solution

[SourceCode](./solution.js)

## Approach

Sort both arrays in ascending order, then use a two-pointer technique.

- Sort `staple` and `drinks` ascending.
- Iterate over `staple[i]` in ascending order with a pointer `j` initialized to the last index of `drinks`. Since the budget for drinks is `x - staple[i]`, and `staple[i]` only increases, the threshold `x - staple[i]` only decreases, so pointer `j` only moves left.
- For each `staple[i]` smaller than `x`, shrink `j` while `drinks[j] > x - staple[i]`. Then all drinks from index `0` to `j` are affordable, contributing `j + 1` combinations.
- Accumulate the sum modulo `1e9 + 7`.

Complexity: O(n log n + m log m) time, O(log n + log m) space (sorting).
