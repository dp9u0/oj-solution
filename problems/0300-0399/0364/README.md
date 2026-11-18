# [364] 嵌套列表加权和 II

## Description


```md
https://leetcode.cn/problems/nested-list-weight-sum-ii/description/
* algorithms
* Medium (65.86%)
* Likes:    122
* Dislikes: -
* Testcase Example:  '[[1,1],2,[1,1]]'
给你一个整数嵌套列表 nestedList ，每一个元素要么是一个整数，要么是一个列表（这个列表中的每个元素也同样是整数或列表）。
整数的 深度 取决于它位于多少个列表内部。例如，嵌套列表 [1,[2,2],[[3],2],1] 的每个整数的值都等于它的 深度 。令 maxDepth 是任意整数的 最大深度 。
整数的 权重 为 maxDepth - (整数的深度) + 1 。
将 nestedList 列表中每个整数先乘权重再求和，返回该加权和。

示例 1：
输入：nestedList = [[1,1],2,[1,1]]
输出：8
解释：4 个 1 在深度为 1 的位置， 一个 2 在深度为 2 的位置。
1*1 + 1*1 + 2*2 + 1*1 + 1*1 = 8
示例 2：
输入：nestedList = [1,[4,[6]]]
输出：17
解释：一个 1 在深度为 3 的位置， 一个 4 在深度为 2 的位置，一个 6 在深度为 1 的位置。
1*3 + 4*2 + 6*1 = 17

提示：
1 <= nestedList.length <= 50
嵌套列表中整数的值在范围 [-100, 100]
任意整数的最大 深度 小于等于 50
没有空列表

```

## Solution

[SourceCode](./solution.js)

## Translation

Given a nested list of integers `nestedList`, each element is either an integer or a list. The **depth** of an integer is how many lists enclose it. E.g. in `[1,[2,2],[[3],2],1]` each integer equals its depth. Let `maxDepth` be the maximum depth of any integer. An integer's **weight** is `maxDepth - depth + 1`. Return the sum of each integer multiplied by its weight.

- Example 1: `[[1,1],2,[1,1]]` → `8` (four 1s at depth 1, one 2 at depth 2: 1·1+1·1+2·2+1·1+1·1)
- Example 2: `[1,[4,[6]]]` → `17` (1·3 + 4·2 + 6·1)

Constraints: `1 <= nestedList.length <= 50`; integers in `[-100, 100]`; max depth ≤ 50; no empty lists.

## Approach

不必显式求 maxDepth。逐层 BFS,维护 `prev` = 已见各层整数和的累计值,每层把 `prev` 加进答案:

- 第 L 层结束时 `prev = Σ_{d≤L} levelSum(d)`,此后每层(共 maxDepth-L 层)都会把第 L 层的整数重复累加一次 → 第 d 层整数共被累加 `maxDepth - d + 1` 次,恰好等于其权重。
- 单趟遍历,空间 O(宽度),无需两次扫描。
