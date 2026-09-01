# [857] Minimum Cost to Hire K Workers

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-cost-to-hire-k-workers/description/)

* algorithms
* Hard (63.76%)
* Likes:    3104
* Dislikes: 407
* Testcase Example:  '[10,20,5]\n[70,50,30]\n2'

```md
There are n workers. You are given two integer arrays quality and wage where quality[i] is the quality of the ith worker and wage[i] is the minimum wage expectation for the ith worker.
We want to hire exactly k workers to form a paid group. To hire a group of k workers, we must pay them according to the following rules:
Every worker in the paid group must be paid at least their minimum wage expectation.
In the group, each worker's pay must be directly proportional to their quality. This means if a worker’s quality is double that of another worker in the group, then they must be paid twice as much as the other worker.
Given the integer k, return the least amount of money needed to form a paid group satisfying the above conditions. Answers within 10-5 of the actual answer will be accepted.

Example 1:
Input: quality = [10,20,5], wage = [70,50,30], k = 2
Output: 105.00000
Explanation: We pay 70 to 0th worker and 35 to 2nd worker.
Example 2:
Input: quality = [3,1,10,10,1], wage = [4,8,2,2,7], k = 3
Output: 30.66667
Explanation: We pay 4 to 0th worker, 13.33333 to 2nd and 3rd workers separately.

Constraints:
n == quality.length == wage.length
1 <= k <= n <= 104
1 <= quality[i], wage[i] <= 104

```

## Solution

[SourceCode](./solution.js)

## 题目翻译

有 n 名工人。给定两个整数数组 `quality` 和 `wage`，其中 `quality[i]` 是第 i 名工人的工作质量（能力值），`wage[i]` 是第 i 名工人的最低工资期望。

我们需要雇佣恰好 k 名工人组成一个付酬组。雇佣时必须遵守以下规则：

1. 组内每名工人获得的工资都必须不低于其最低工资期望。
2. 组内每名工人的工资必须与其工作质量成正比。即如果某工人的质量是另一工人的两倍，那么他的工资也必须是对方的两倍。

返回满足上述条件时，组成一个 k 人付酬组所需的最少金额。答案与实际答案误差在 10^-5 以内即可接受。

示例 1：
输入：quality = [10,20,5], wage = [70,50,30], k = 2
输出：105.00000
解释：付给第 0 名工人 70，付给第 2 名工人 35。

示例 2：
输入：quality = [3,1,10,10,1], wage = [4,8,2,2,7], k = 3
输出：30.66667
解释：付给第 0 名工人 4，分别付给第 2、3 名工人 13.33333。

提示：
- n == quality.length == wage.length
- 1 <= k <= n <= 10^4
- 1 <= quality[i], wage[i] <= 10^4

## 解题思路

关键观察：由于组内工资与质量成正比，设单位质量的工资率为 r，则第 i 名工人的工资为 r × quality[i]。要满足所有人的最低工资期望，必须 r ≥ wage[i]/quality[i]（对所有被雇佣的工人）。因此对某个固定的小组，最优的 r 就是组内所有工人比率 wage[i]/quality[i] 的最大值，总成本 = r × Σquality。

于是问题转化为：枚举「组内最大比率」由哪个工人决定。将工人按比率 wage[i]/quality[i] 升序排序，依次遍历；当遍历到第 i 个（排序后）工人时，它可作组的最大比率，此时需要从前 i 个工人中选出质量总和最小的 k 个人（他们的比率都不超过当前工人）。用一个大根堆维护当前 k 个最小的质量值并维护质量和 sumq，堆中超过 k 个时弹出堆顶（最大质量）。当堆大小恰好为 k 时，候选答案 = ratio[i] × sumq，取全局最小。

复杂度：排序 O(n log n)，每个工人进出堆 O(log n)，总计 O(n log n)；空间 O(n)。
