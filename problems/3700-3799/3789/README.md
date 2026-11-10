# [3789] 采购的最小花费

## Description


```md
https://leetcode.cn/problems/minimum-cost-to-acquire-required-items/description/
* algorithms
* Medium (46.40%)
* Likes:    7
* Dislikes: -
* Testcase Example:  '3\n2\n1\n3\n2'
给你五个整数 cost1, cost2, costBoth, need1 和 need2。
有三种类型的物品可以购买：
类型 1 的物品花费 cost1，并仅满足类型 1 的需求 1 个单位。
类型 2 的物品花费 cost2，并仅满足类型 2 的需求 1 个单位。
类型 3 的物品花费 costBoth，同时满足类型 1 和类型 2 的需求各 1 个单位。
你需要购买足够的物品，使得：
满足类型 1 的总需求 至少 为 need1。
满足类型 2 的总需求 至少 为 need2。
返回满足这些需求的 最小 可能总花费。

示例 1：
输入： cost1 = 3, cost2 = 2, costBoth = 1, need1 = 3, need2 = 2
输出： 3
解释：
购买 3 个类型 3 的物品，总花费为 3 * 1 = 3，此时类型 1 的总需求满足 3（>= need1 = 3），类型 2 的总需求满足 3（>= need2 = 2）。
任何其他有效的购买方案都会花费更多，因此最小总花费为 3。
示例 2：
输入： cost1 = 5, cost2 = 4, costBoth = 15, need1 = 2, need2 = 3
输出： 22
解释：
购买 need1 = 2 个类型 1 的物品和 need2 = 3 个类型 2 的物品，总花费为 2 * 5 + 3 * 4 = 10 + 12 = 22。
任何其他有效的购买方案都会花费更多，因此最小总花费为 22。
示例 3：
输入： cost1 = 5, cost2 = 4, costBoth = 15, need1 = 0, need2 = 0
输出： 0
解释：
由于不需要任何物品（need1 = need2 = 0），因此无需购买，总花费为 0。

提示：
1 <= cost1, cost2, costBoth <= 106
0 <= need1, need2 <= 109
Hint 1: First, use min(costBoth, cost1 + cost2) for min(need1, need2).
Hint 2: For the remaining type 1 requirement rem1, use cost min(costBoth, cost1) for the rest.
Hint 3: Do the same for type 2, using cost min(costBoth, cost2).

```

## Description (English)

You are given five integers: cost1, cost2, costBoth, need1 and need2.

There are three types of items you can buy:

- A type 1 item costs cost1 and satisfies 1 unit of the type 1 requirement only.
- A type 2 item costs cost2 and satisfies 1 unit of the type 2 requirement only.
- A type 3 item costs costBoth and satisfies 1 unit of the type 1 requirement and 1 unit of the type 2 requirement simultaneously.

You must buy enough items so that:

- The total satisfaction of type 1 is at least need1.
- The total satisfaction of type 2 is at least need2.

Return the minimum possible total cost to satisfy these requirements.

Example 1:
Input: cost1 = 3, cost2 = 2, costBoth = 1, need1 = 3, need2 = 2
Output: 3
Explanation: Buy 3 type 3 items for a total of 3 * 1 = 3. Type 1 satisfaction is 3 (>= 3) and type 2 satisfaction is 3 (>= 2). Any other valid plan costs more.

Example 2:
Input: cost1 = 5, cost2 = 4, costBoth = 15, need1 = 2, need2 = 3
Output: 22
Explanation: Buy 2 type 1 items and 3 type 2 items: 2 * 5 + 3 * 4 = 22. Any other valid plan costs more.

Example 3:
Input: cost1 = 5, cost2 = 4, costBoth = 15, need1 = 0, need2 = 0
Output: 0
Explanation: No items are needed, so nothing is bought.

Constraints:
- 1 <= cost1, cost2, costBoth <= 10^6
- 0 <= need1, need2 <= 10^9

## Approach

贪心 / 数学。

设 m = min(need1, need2)，两部分需求重合的 m 个单位可以用「打包」方式满足，每个单位花费 min(costBoth, cost1 + cost2)（买一个类型 3，或分别买一个类型 1 和一个类型 2）。

剩余部分只需单一类型：

- rem1 = need1 - m：每个单位花费 min(costBoth, cost1)。买类型 3 同样能提供 1 个类型 1 的满足，多出的类型 2 满足是无害的（要求是「至少」）。
- rem2 = need2 - m：每个单位花费 min(costBoth, cost2)。

答案 = m * min(costBoth, cost1 + cost2) + rem1 * min(costBoth, cost1) + rem2 * min(costBoth, cost2)。

正确性说明：

- 若 costBoth > cost1 + cost2，任何类型 3 都可以用一对（类型 1 + 类型 2）替代且更便宜，因此最优解不买类型 3，公式中 min 项自动退化，结果等于 need1 * cost1 + need2 * cost2。
- 若 costBoth <= cost1 + cost2，设最优解买了 z 个类型 3 且 z < m，则剩余的类型 1 和类型 2 各自都还有未满足的独立物品，把「一个类型 1 + 一个类型 2」换成「一个类型 3」不会增加花费；反复交换后存在 z >= m 的最优解，剩余需求按上式逐单位取最小花费即可。

数据范围：总花费最多约 2 * 10^15 < 2^53，普通 Number 精度足够。

时间复杂度 O(1)，空间复杂度 O(1)。

## Solution

[SourceCode](./solution.js)
