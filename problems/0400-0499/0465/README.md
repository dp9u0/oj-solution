# [465] 最优账单平衡

## Description


```md
https://leetcode.cn/problems/optimal-account-balancing/description/
* algorithms
* Hard (56.79%)
* Likes:    174
* Dislikes: -
* Testcase Example:  '[[0,1,10],[2,0,5]]'
给你一个表示交易的数组 transactions ，其中 transactions[i] = [fromi, toi, amounti] 表示 ID = fromi 的人给 ID = toi 的人共计 amounti $ 。
请你计算并返回还清所有债务的最小交易笔数。

示例 1：
输入：transactions = [[0,1,10],[2,0,5]]
输出：2
解释：
#0 给 #1 $10 。
#2 给 #0 $5 。
需要进行两笔交易。一种结清债务的方式是 #1 给 #0 和 #2 各 $5 。
示例 2：
输入：transactions = [[0,1,10],[1,0,1],[1,2,5],[2,0,5]]
输出：1
解释：
#0 给 #1 $10 。
#1 给 #0 $1 。
#1 给 #2 $5 。
#2 给 #0 $5 。
因此，#0 只需要给 #1 $4 ，所有的债务即可还清。

提示：
1 <= transactions.length <= 8
transactions[i].length == 3
0 <= fromi, toi < 12
fromi != toi
1 <= amounti <= 100

```

## Solution

[SourceCode](./solution.js)

## Translation

Given `transactions[i] = [from, to, amount]`, return the minimum number of transfers needed to settle all debts.

- Example 1: [[0,1,10],[2,0,5]] → `2`
- Example 2: [[0,1,10],[1,0,1],[1,2,5],[2,0,5]] → `1` (net: #0 owes 4 to #1)

Constraints: ≤ 8 transactions; IDs < 12; amounts ≤ 100.

## Approach

**净额压缩 + 回溯**。先按人合并净额(付出为负、收入为正),净额为 0 的人出局;剩余余额总和必为 0。

- 最优解可规范化为:每个未结清账户的净额一次性转给某一个对立符号账户(拆分不减少笔数)。
- DFS:对 `debts[i]` 枚举所有符号相反的 `j > i` 转移合并,取最小笔数;余额为 0 的位置跳过。

回溯复杂度指数级但 k ≤ 12 且有剪枝,实际很快。
