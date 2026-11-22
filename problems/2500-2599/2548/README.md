# [2548] 填满背包的最大价格

## Description


```md
https://leetcode.cn/problems/maximum-price-to-fill-a-bag/description/
* algorithms
* Medium (51.45%)
* Likes:    4
* Dislikes: -
* Testcase Example:  '[[50,1],[10,8]]\n5'
给定一个二维整数数组 items ，其中 items[i] = [pricei, weighti] 表示第 i 个物品的价格和重量。
还给定一个 正 整数容量 capacity 。
每个物品可以分成两个部分，比率为 part1 和 part2 ，其中 part1 + part2 == 1 。
第一个物品的重量是 weighti * part1 ，价格是 pricei * part1 。
同样，第二个物品的重量是 weighti * part2 ，价格是 pricei * part2 。
使用给定的物品，返回填满容量为 capacity 的背包所需的 最大总价格 。如果无法填满背包，则返回 -1 。与实际答案的差距在 10-5 以内的 实际答案 将被视为接受。

示例 1 ：
输入：items = [[50,1],[10,8]], capacity = 5
输出：55.00000
解释：
我们将第二个物品分成两个部分，part1 = 0.5，part2 = 0.5。
第一个物品的价格和重量分别为 5 和 4 。同样地，第二个物品的价格和重量也是 5 和 4 。
经过操作后，数组 items 变为 [[50,1],[5,4],[5,4]] 。
为了填满容量为 5 的背包，我们取价格为 50 的第一个元素和价格为 5 的第二个元素。
可以证明，55.0 是我们可以达到的最大总价值。
示例 2 ：
输入：items = [[100,30]], capacity = 50
输出：-1.00000
解释：无法用给定的物品装满背包。

提示：
1 <= items.length <= 105
items[i].length == 2
1 <= pricei, weighti <= 104
1 <= capacity <= 109
Hint 1: If the total weight of the items is less than the capacity, then it is impossible to fill a bag.
Hint 2: The intended solution greedily chooses items to fill a bag.
Hint 3: Sort items in decreasing order of price/weight and greedily fill a bag. The main intuition behind the greedy strategy is that we try to take the highest possible price for 1 unit of weight.

```

## Solution

[SourceCode](./solution.js)

## English Translation

Items can be split into two parts (ratio part1 + part2 = 1, price/weight scale proportionally). Fill a knapsack of capacity exactly, maximizing total price; -1 if impossible. Tolerance 1e-5.

Example 1:
Input: items = [[50,1],[10,8]], capacity = 5
Output: 55.00000

Example 2:
Input: items = [[100,30]], capacity = 50
Output: -1.00000

Constraints: 1 <= items.length <= 10^5, 1 <= price, weight <= 10^4, 1 <= capacity <= 10^9.

## Approach

Fractional knapsack: sort by price/weight descending (compare with cross multiplication to avoid float error), take whole items while they fit, then a fraction of the next. If total weight < capacity, return -1. O(n log n).
