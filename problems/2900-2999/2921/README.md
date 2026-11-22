# [2921] 价格递增的最大利润三元组 II

## Description


```md
https://leetcode.cn/problems/maximum-profitable-triplets-with-increasing-prices-ii/description/
* algorithms
* Hard (23.72%)
* Likes:    2
* Dislikes: -
* Testcase Example:  '[10,2,3,4]\n[100,2,7,10]'
给定长度为 n  的数组 prices 和 profits （下标从 0 开始）。一个商店有 n 个商品，第 i 个商品的价格为 prices[i]，利润为 profits[i]。
需要选择三个商品，满足以下条件：
prices[i] < prices[j] < prices[k]，其中 i < j < k。
如果选择的商品 i, j 和 k 满足以下条件，那么利润将等于 profits[i] + profits[j] + profits[k]。
返回能够获得的 最大利润，如果不可能满足给定条件，返回 -1。

示例 1：
输入：prices = [10,2,3,4], profits = [100,2,7,10]
输出：19
解释：不能选择下标 i=0 的商品，因为没有下标 j 和 k 的商品满足条件。
只能选择下标为 1、2、3 的三个商品，这是有效的选择，因为 prices[1] < prices[2] < prices[3]。
答案是它们的利润之和，即 2 + 7 + 10 = 19。
示例 2：
输入：prices = [1,2,3,4,5], profits = [1,5,3,4,6]
输出：15
解释：可以选择任意三个商品，因为对于每组满足下标为 i < j < k 的三个商品，条件都成立。
因此，能得到的最大利润就是利润和最大的三个商品，即下标为 1，3 和 4 的商品。
答案就是它们的利润之和，即 5 + 4 + 6 = 15。
示例 3：
输入：prices = [4,3,2,1], profits = [33,20,19,87]
输出：-1
解释：找不到任何可以满足条件的三个商品，所以返回 -1.

提示：
3 <= prices.length == profits.length <= 50000
1 <= prices[i] <= 5000
1 <= profits[i] <= 106
Hint 1: Let's fix the middle chosen item for instance index j.
Hint 2: Let’s define an array max_right, where max_right[j] represents the maximum profit[k] for every index k > j such that prices[k] > prices[j].
Hint 3: Consider using a Fenwick tree to fill the max_right.
Hint 4: Do the same for items with an index i < j such that prices[i] < prices[j] and find the maximum profit[i] among them. Let's call this array max_left.
Hint 5: Now the profit when an item with the index j is the middle one would be profit[j] + max_right[j] + max_left[j].
Hint 6: Finally, do the above procedure for all j's and find the maximum profit among them. That would be the final answer.

```

## Solution

[SourceCode](./solution.js)

## 思路 (Approach)

Problem (EN): Same as 2907 but n up to 50000 (prices <= 5000, profits <= 1e6): pick i<j<k with strictly increasing prices, maximize profit sum.

Approach: Fenwick (BIT) over price values for prefix maximum. leftMax[j] = max profits among indices < j with price < prices[j]: sweep left to right, prefix-max query at prices[j]-1, then insert. rightMax[j] symmetric: sweep right to left, query price > prices[j] (transform value v -> 5001-v to reuse prefix queries). Answer = max(profits[j] + leftMax[j] + rightMax[j]), -1 if no triple. O(n log maxPrice).
