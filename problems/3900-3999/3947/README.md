# [3947] Maximum Number of Items From Sale II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-number-of-items-from-sale-ii/description/)

* algorithms
* Medium (30.62%)
* Likes:    48
* Dislikes: 9
* Testcase Example:  '[[1,6],[2,4],[3,5]]\n19'

```md
You are given a 2D integer array items, where items[i] = [factori, pricei] represents the ith item. You are also given an integer budget.
There are unlimited copies of each item available for purchase. You may buy any number of copies of any items such that the total cost of the purchased copies is at most budget.
After buying items, you may receive free copies according to the following rules:
Each purchased copy of item i can give you at most one free copy of another item j.
The free item must satisfy i != j and factori divides factorj.
For each ordered pair (i, j), you can receive a free copy of item j from purchases of item i at most once, regardless of how many copies of item i you buy.
The same item j can be received multiple times for free if it is received from purchases of different item types.
Return the maximum total number of item copies you can obtain, including both purchased copies and free copies, while spending at most budget on purchased items.

Example 1:
Input: items = [[1,6],[2,4],[3,5]], budget = 19
Output: 5
Explanation:
You can buy 2 copies of item 0 and 1 copy of item 1 for a total cost of 2 * 6 + 4 = 16, which is not greater than budget = 19.
One purchased copy of item 0 gives 1 free copy of item 1, because factor0 = 1 divides factor1 = 2.
The other purchased copy of item 0 gives 1 free copy of item 2, because factor0 = 1 divides factor2 = 3.
You leave with 3 purchased copies and 2 free copies, for a total of 5 item copies.
Example 2:
Input: items = [[2,8],[1,10],[6,6],[4,12],[5,20],[5,17]], budget = 35
Output: 7
Explanation:
You can buy 2 copies of item 0, 1 copy of item 1, and 1 copy of item 2 for a total cost of 2 * 8 + 10 + 6 = 32, which is not greater than budget = 35.
One purchased copy of item 0 gives 1 free copy of item 2, because factor0 = 2 divides factor2 = 6.
The other purchased copy of item 0 gives 1 free copy of item 3, because factor0 = 2 divides factor3 = 4.
The purchased copy of item 1 gives 1 free copy of item 2, because factor1 = 1 divides factor2 = 6.
Buying item 2 gives no free copy, because factor2 = 6 does not divide the factor of any other item.
You leave with 4 purchased copies and 3 free copies, for a total of 7 item copies.

Constraints:
1 <= items.length <= 105
items[i] = [factori, pricei]
1 <= factori <= items.length
1 <= pricei <= 109
1 <= budget <= 109
Hint 1: For each item i, compute gain[i] = number of other items j such that factor[i] divides factor[j]. This can be done by counting factors and iterating over multiples.
Hint 2: If you buy c copies of item i, it contributes
c + min(c, gain[i]) total copies, because only the first gain[i] purchased copies can be matched to distinct free items.
Hint 3: View purchases as marginal units: for item i, the first gain[i] copies have value 2 each, and all later copies have value 1 each.
Hint 4: Since extra value-1 copies should always be bought from the cheapest item, the main task is to choose the cheapest useful value-2 marginal units. Sort item types by price and process their gain[i] boosted copies in batches rather than expanding them one by one.

```

## Solution

[SourceCode](./solution.js)

## 中文翻译

给你一个二维整数数组 `items`，其中 `items[i] = [factor_i, price_i]` 表示第 `i` 件商品。再给你一个整数 `budget`。

每件商品都有**无限份**可供购买。你可以购买任意数量的任意商品副本，只要购买总花费不超过 `budget`。

购买之后，你可以按以下规则获得免费副本：

- 每一份**购买**的第 `i` 种商品，最多可以让你可以获得一份另一种商品 `j` 的免费副本。
- 免费商品需满足 `i != j` 且 `factor_i` 整除 `factor_j`。
- 对于每个有序对 `(i, j)`，无论你购买多少份第 `i` 种商品，最多只能从第 `i` 种商品的购买中获得一份第 `j` 种商品的免费副本。
- 同一种商品 `j` 可以从**不同**种类的商品购买中多次免费获得。

返回你能获得的商品副本总数（购买副本 + 免费副本）的最大值，要求购买花费不超过 `budget`。

**示例 1：**
输入：`items = [[1,6],[2,4],[3,5]], budget = 19`
输出：`5`
解释：买 2 份商品 0 和 1 份商品 1，花费 `2*6+4=16 ≤ 19`。一份商品 0 换一份商品 1（1 整除 2），另一份商品 0 换一份商品 2（1 整除 3）。共 3 份购买 + 2 份免费 = 5。

**示例 2：**
输入：`items = [[2,8],[1,10],[6,6],[4,12],[5,20],[5,17]], budget = 35`
输出：`7`

**约束：**
- `1 <= items.length <= 10^5`
- `1 <= factor_i <= items.length`
- `1 <= price_i <= 10^9`
- `1 <= budget <= 10^9`

## 解题思路

**边际单位分析（贪心）：**

1. **计算 gain[i]**：对第 `i` 种商品，定义 `gain[i] = |{ j ≠ i : factor_i 整除 factor_j }|`。用计数数组 `cnt[f]` 统计每个因子的商品数，再用调和级数枚举倍数求 `totalDiv[f]`（因子能被 `f` 整除的商品总数），则 `gain[i] = totalDiv[factor_i] - 1`。复杂度 `O(n log n)`。

2. **边际价值**：买 `c` 份商品 `i` 的总产出是 `c + min(c, gain[i])`。把它拆成边际单位：前 `gain[i]` 份每份价值 2（1 买 + 1 免费），之后每份价值 1。免费上限由不同 `j` 的数量决定，所以每个有序对只能兑换一次。

3. **价值 1 的单位**：无限供应且不参与兑换，最优一定从**最便宜**的商品买，单价 `m = min(price)`。

4. **价值 2 的单位**：商品 `i` 提供 `gain[i]` 个单价为 `price_i` 的价值 2 单位。按价格升序排序后按批次处理（`gain` 总和可达 `~10^10`，不能逐个展开）。设 `f(a) = 2a + ⌊(budget - S_a)/m⌋`（`a` 为已选价值 2 单位数，`S_a` 为前缀花费）。

5. **批内单调性**：同一批次内单价 `p` 相同，`f(t+1) - f(t) = 2 - d`，其中 `d ∈ {⌊p/m⌋, ⌈p/m⌉}`。
   - 若 `p ≤ 2m`：`d ≤ 2`，`f` 批内单调不减，取批内最多（受预算限制）即可；
   - 若 `p > 2m`：`d ≥ 2`，`f` 批内单调不增，左端点（即上一边界）最优。
   
   因此全局最大值只在**批次边界**（完整前缀或预算截断处）取得，只需在每个边界计算一次候选值，总共 `O(n)` 个候选。

**算法流程**：初始候选 `⌊budget/m⌋`；按价格升序遍历各商品批次，能买就整批买（`t = min(gain, ⌊剩余/p⌋)`），在每个边界更新答案 `2·count + ⌊剩余/m⌋`；一旦部分购买（`t < gain`）或买不起即终止（后续价格更高）。

**复杂度**：时间 `O(n log n)`（排序 + 调和枚举），空间 `O(n)`。
