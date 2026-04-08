# [2735] Collecting Chocolates

## Description

[LeetCode Problem Description](https://leetcode.com/problems/collecting-chocolates/description/)

* algorithms
* Medium (34.87%)
* Testcase Example:  '[20,1,15]\n5'

```md
You are given a 0-indexed integer array nums of size n representing the cost of collecting different chocolates. The cost of collecting the chocolate at the index i is nums[i]. Each chocolate is of a different type, and initially, the chocolate at the index i is of i^th type.
In one operation, you can do the following with an incurred cost of x:
Simultaneously change the chocolate of i^th type to ((i + 1) mod n)^th type for all chocolates.
Return the minimum cost to collect chocolates of all types, given that you can perform as many operations as you would like.

Example 1:
Input: nums = [20,1,15], x = 5
Output: 13
Explanation: Initially, the chocolate types are [0,1,2]. We will buy the 1^st type of chocolate at a cost of 1.
Now, we will perform the operation at a cost of 5, and the types of chocolates will become [1,2,0]. We will buy the 2^nd^ type of chocolate at a cost of 1.
Now, we will again perform the operation at a cost of 5, and the chocolate types will become [2,0,1]. We will buy the 0^th type of chocolate at a cost of 1.
Thus, the total cost will become (1 + 5 + 1 + 5 + 1) = 13. We can prove that this is optimal.
Example 2:
Input: nums = [1,2,3], x = 4
Output: 6
Explanation: We will collect all three types of chocolates at their own price without performing any operations. Therefore, the total cost is 1 + 2 + 3 = 6.

Constraints:
1
1
1

```

## Solution

[SourceCode](./solution.js)

---

## 题目翻译

给定一个长度为 n 的 0 索引整数数组 `nums`，表示收集不同巧克力的成本。收集索引 i 处巧克力的成本是 `nums[i]`。每种巧克力的类型都不同，初始时，索引 i 处的巧克力是第 i 种类型。

在一次操作中，你可以执行以下操作，成本为 x：
- 同时将所有第 i 种类型的巧克力变为第 ((i + 1) mod n) 种类型。

返回收集所有类型巧克力的最小成本，假设你可以执行任意次数的操作。

**示例 1：**
输入：nums = [20,1,15], x = 5
输出：13
解释：初始时，巧克力类型为 [0,1,2]。我们以成本 1 购买第 1 种类型的巧克力。
然后，我们执行操作，成本为 5，巧克力类型变为 [1,2,0]。我们以成本 1 购买第 2 种类型的巧克力。
再次执行操作，成本为 5，巧克力类型变为 [2,0,1]。我们以成本 1 购买第 0 种类型的巧克力。
总成本为 (1 + 5 + 1 + 5 + 1) = 13。

**示例 2：**
输入：nums = [1,2,3], x = 4
输出：6
解释：我们直接以原价收集所有三种类型的巧克力，不执行任何操作。总成本为 1 + 2 + 3 = 6。

## 解题思路

**问题分析：**
- 我们需要收集 n 种不同类型的巧克力（类型 0 到 n-1）
- 每次操作花费 x，会将所有巧克力的类型向右循环移动一位
- 对于每种类型 i，我们需要决定是否执行操作以及执行多少次

**关键观察：**
1. 由于循环性质，执行 n 次操作后会回到初始状态，因此最多只需要考虑 n-1 次操作
2. 对于目标类型 i，如果执行 k 次操作后购买，我们需要在索引 (i-k+n) mod n 处购买，成本为 k*x + nums[(i-k+n) mod n]
3. 对于每种类型，我们应该选择成本最低的获取方式

**算法：**
1. 遍历操作次数 k（从 0 到 n-1）
2. 对于每种类型 i，计算在执行 k 次操作后获取它的最小成本
3. 对于类型 i，在 k 次操作后，它会在索引 (i-k+n) mod n 处，成本为 k*x + nums[(i-k+n) mod n]
4. 维护每种类型的最小成本，累加得到总最小成本

**时间复杂度：** O(n²) - 遍历 n 次操作，每次更新 n 种类型
**空间复杂度：** O(n) - 存储每种类型的最小成本
