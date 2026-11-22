# [2898] 最大线性股票得分

## Description


```md
https://leetcode.cn/problems/maximum-linear-stock-score/description/
* algorithms
* Medium (27.81%)
* Likes:    1
* Dislikes: -
* Testcase Example:  '[1,5,3,7,8]'
给定一个 1-indexed 整数数组 prices，其中 prices[i] 是第 i 天某只股票的价格。你的任务是 线性 地选择 prices 中的一些元素。
一个选择 indexes，其中 indexes 是一个 1-indexed 整数数组，长度为 k，是数组 [1, 2, ..., n] 的子序列，如果以下条件成立，那么它是 线性 的：
对于每个 1 < j <= k，prices[indexes[j]] - prices[indexes[j - 1]] == indexes[j] - indexes[j - 1]。
数组的 子序列 是经由原数组删除一些元素（可能不删除）而产生的新数组，且删除不改变其余元素相对顺序。
选择 indexes 的 得分 等于以下数组的总和：[prices[indexes[1]], prices[indexes[2]], ..., prices[indexes[k]]。
返回 线性选择的 最大得分。

示例 1：
输入： prices = [1,5,3,7,8]
输出： 20
解释： 我们可以选择索引[2,4,5]。我们可以证明我们的选择是线性的：
对于j = 2，我们有：
indexes[2] - indexes[1] = 4 - 2 = 2。
prices[4] - prices[2] = 7 - 5 = 2。
对于j = 3，我们有：
indexes[3] - indexes[2] = 5 - 4 = 1。
prices[5] - prices[4] = 8 - 7 = 1。
元素的总和是：prices[2] + prices[4] + prices[5] = 20。
可以证明线性选择的最大和是20。
示例 2：
输入： prices = [5,6,7,8,9]
输出： 35
解释： 我们可以选择所有索引[1,2,3,4,5]。因为每个元素与前一个元素的差异恰好为1，所以我们的选择是线性的。
所有元素的总和是35，这是每个选择的最大可能总和。

提示：
1 <= prices.length <= 105
1 <= prices[i] <= 109
Hint 1: Let's look at the condition as: prices[indexes[i]] - indexes[i] == prices[indexes[j]] - indexes[j].
Hint 2: So now we define a new array named group and is constructed as group[i] = prices[i] - i.
Hint 3: A subarray of prices is linear if they belong to the same group.
Hint 4: Since all elements are positive, if we choose some index i, the optimum way is to choose all elements from group[i].
Hint 5: So for each group, we calculate the sum of its prices and the answer would be the maximum sum over all groups.

```

## Solution

[SourceCode](./solution.js)

## 思路 (Approach)

Problem (EN): Choose a subsequence of indices such that consecutive chosen elements satisfy prices[i] - prices[prev] == i - prev (telescopes to: all chosen share the same value of prices[i] - i). Maximize the sum of chosen prices.

Approach: group indices by g = prices[i] - i (1-indexed); any subset within one group is linear. Sum prices per group (<= 1e14 < 2^53, exact); answer = max group sum.

Complexity: O(n).
