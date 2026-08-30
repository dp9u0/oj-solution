# [3946] Maximum Number of Items From Sale I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-number-of-items-from-sale-i/description/)

* algorithms
* Medium (36.96%)
* Likes:    84
* Dislikes: 12
* Testcase Example:  '[[6,2],[2,6],[3,4]]\n9'

```md
You are given a 2D integer array items, where items[i] = [factori, pricei] represents the ith item. You are also given an integer budget.
There are unlimited copies of each item available for purchase.You may buy any number of copies of any items such that the total cost of the purchased copies is at most budget.
After buying items, you may receive free copies according to the following rules:

For each item i that you bought at least one copy of, you receive one free copy of every item j such that j != i and factori divides factorj.
Buying multiple copies of the same item i does not give additional free copies through item i.
The same item j can be received multiple times for free if it is received from purchases of different item types.

Return the maximum total number of item copies you can obtain, including both purchased copies and free copies, while spending at most budget on purchased items.

Example 1:

Input: items = [[6,2],[2,6],[3,4]], budget = 9
Output: 4
Explanation:

You can buy 2 copies of item 0 and 1 copy of item 2 for a total cost of 2 * 2 + 4 = 8, which is not greater than budget = 9.
Buying item 2 gives 1 free copy of item 0, because factor2 = 3 divides factor0 = 6.
You leave with 3 purchased copies and 1 free copy, for a total of 4 item copies.


Example 2:

Input: items = [[2,4],[3,2],[4,1],[6,4],[12,4]], budget = 8
Output: 10
Explanation:

You can buy 1 copy of item 0, 1 copy of item 1, and 2 copies of item 2 for a total cost of 4 + 2 + 2 * 1 = 8.
Buying item 0 gives 1 free copy of items 2, 3, and 4.
Buying item 1 gives 1 free copy of items 3 and 4.
Buying item 2 gives 1 free copy of item 4.
Thus, you receive 6 free copies. You leave with 4 purchased copies and 6 free copies, for a total of 10 item copies.



Constraints:

1 <= items.length <= 1000
items[i] = [factori, pricei]
1 <= factori, pricei <= 1500
1 <= budget <= 1500


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定一个二维整数数组 items，其中 items[i] = [factor_i, price_i] 表示第 i 种商品，另给定整数 budget（预算）。

每种商品都有无限份可供购买。你可以购买任意数量、任意种类的商品副本，只要购买的副本总花费不超过 budget。

购买之后，你可以按以下规则获得免费副本：

- 对于每种你至少购买了一份的商品 i，你可以免费获得每一件商品 j（j != i 且 factor_i 能整除 factor_j）的一份免费副本。
- 购买同一商品 i 的多份副本不会通过商品 i 额外获得免费副本。
- 如果免费副本来自不同商品种类的购买，同一件商品 j 可以被免费获得多次。

返回你能够获得的最大商品副本总数（包括购买的副本和免费副本），且购买副本的花费不超过 budget。

示例 1：items = [[6,2],[2,6],[3,4]], budget = 9，输出 4。
示例 2：items = [[2,4],[3,2],[4,1],[6,4],[12,4]], budget = 8，输出 10。

约束：1 <= items.length <= 1000；1 <= factor_i, price_i <= 1500；1 <= budget <= 1500。

## 解题思路

关键转化：设 S 为"至少买一份"的商品种类集合，m(f) = 全部 n 件商品中 factor 能被 f 整除的商品件数。

- 免费副本总数 = Σ_j #{i ∈ S : f_i | f_j} = Σ_{i∈S} m(f_i) − |S|（j ∈ S 时要排除自身 i = j）。
- 总数 = 购买份数 + 免费数 = (|S| + 额外份数 k) + Σ_{i∈S} m(f_i) − |S| = Σ_{i∈S} m(f_i) + k。

即：每种激活的商品贡献 m(f_i)（一次性奖励），每一份额外副本贡献 1。额外副本显然全部买 S 中最便宜的那种（价格 p = min price of S），k = floor((budget − Σ_{i∈S} price_i) / p)。

按"最低价 p"分类，保证每个方案恰好被统计一次：把商品按价格分组，从高到低枚举 p，强制 S 至少包含一个价格为 p 的商品（这样 min price 恰为 p），其余商品价格必须 > p。

- 维护精确花费背包 dp[c] = 从"价格 > p"的商品中选出子集的最大 Σ m(f_i)（花费恰为 c）。价格从高到低处理，dp 增量添加该组商品即可。
- 对当前价格组：同组商品单价相同，选 r 件的最优价值 = m 值前 r 大之和 P(r)。则 W(c) = max_r P(r) + dp[c − r·p]，答案候选 = W(c) + floor((budget − c) / p)。
- 处理完该组的统计后，把组内商品以 0/1 背包方式并入 dp。

复杂度：预处理倍数计数 O(F log F)；枚举 O(n·B)；总体 O(n·B + F log F)，n, B, F ≤ 1500。

